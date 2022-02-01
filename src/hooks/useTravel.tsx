import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {dbApi} from '../services/api'

interface PlacesProp {
  id: number
  flag: string;
  country: string;
  translation: string;
  destiny: string;
  goal: string;
}

type TravelInput = Omit<PlacesProp, 'id'>


interface TravelsProviderProps {
  children: ReactNode
}

interface TravelsContextData{
  travelWish: PlacesProp[];
  createTravelWish: (placesList: TravelInput) => Promise<void>;
  removeTravelWish: (removeId: number) => void;
  editTravelWish: ( { id, country, flag, destiny, goal}: PlacesProp)   => void;
}

export const TravelsContext = createContext<TravelsContextData>(
  {} as TravelsContextData
  );

export function TravelsProvider({children}: TravelsProviderProps) {
  const [travelWish, setTravelWish] = useState<PlacesProp[]>([]);



  useEffect(() => {
    dbApi.get("/travels").then((Response) => {
      const data = Response.data;
  
      setTravelWish(data);
    });
  }, []);

  async function createTravelWish(placeList: TravelInput) {
   
      const response = await dbApi.post("travels", placeList);
      
      const {data} = response

      setTravelWish([
        ...travelWish,
        data
      ])

  }

  async function editTravelWish( { id, country, translation, flag, destiny, goal}: PlacesProp) {
   
      const response = await dbApi.get(`travels/${id}`);


      const updateInfo = [...travelWish]


      const travelId = updateInfo.find(
        (travel) => travel.id === id,  
        )
        if(travelId){
        travelId.destiny = destiny
        travelId.country = country
        travelId.flag = flag
        travelId.translation = translation
        travelId.goal = goal

        setTravelWish(
          updateInfo
        )

        await dbApi.put(`travels/${id}`, travelId)
      }
     

  }

  async function removeTravelWish(removeId: number){

    const updateId = [...travelWish]

    const travelId = updateId.findIndex(
      (travel) => travel.id === removeId, 

      )
    if (travelId >= 0) {
      updateId.splice(travelId, 1)
      setTravelWish(updateId)

    }

    await dbApi.delete(`travels/${removeId}`)

  }

  return (
    <TravelsContext.Provider value={{ travelWish, createTravelWish,removeTravelWish, editTravelWish}}>
      {children}
    </TravelsContext.Provider>
  )
}

export function useTravel() {
  const context = useContext(TravelsContext)

  return context
}
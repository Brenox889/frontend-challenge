import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
  Container,
  Content,
  EditContainer,
  ButtonContainer,
  HeaderContainer,
  TitleContainer,
  InfoContainer,
} from "./styles";

import InputMask from "react-input-mask";

import pen from "../../assets/pen.svg";
import close from "../../assets/close.svg";

import { dbApi } from "../../services/api";
import { useTravel } from "../../hooks/useTravel";

interface CardProps {
  idCard: number;
  flag: string;
  country: string;
  place: string;
  date: string;
}
export function Card({ idCard, flag, country, place, date }: CardProps) {
  const { editTravelWish, removeTravelWish } = useTravel();


  const [idEdit, setIdEdit] = useState(0);
  const [windowEditStatus, setWindowEditStatus] = useState(false)
  const [allData, setAllData] = useState({
    country: '',
    flag: '',
    translation: ''
  });
  const [formData, setFormData] = useState({
    destiny: "",
    goal: "",
  });

  useEffect(() => {
    dbApi.get(`travels/${idEdit}`).then((Response) => {
      const {translation, country, flag} = Response.data
      setAllData({translation, country, flag})
    });
  }, [idEdit]);
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  useEffect(()=>{
    if(idEdit === 0) {
      setWindowEditStatus(false)
    } else {
      setWindowEditStatus(true)
    }
  }, [idEdit])

  async function handleEdit(e: FormEvent) {

    const { destiny, goal } = formData;
    const {translation,country, flag} = allData;
  

    editTravelWish({id: idEdit, translation, flag, country, destiny, goal})

    setIdEdit(0)
  }

  async function removeCard(id: any) {
    removeTravelWish(id)
  }
  return (
    <Container>
      <Content>
        <HeaderContainer>
          <TitleContainer>
            <img src={flag} alt="icon" />
            <h3>{country}</h3>
          </TitleContainer>
          <ButtonContainer>
            <img src={pen} alt="edit" onClick={() => setIdEdit(idCard)} />
            <img src={close} alt="delete" onClick={() => removeCard(idCard)} />
          </ButtonContainer>
        </HeaderContainer>
        <hr />
        {!windowEditStatus && (
          <InfoContainer>
              <span>Local: {place}</span>
              <span>Meta: {date}</span>
          </InfoContainer>
        )}

        {windowEditStatus && (
          <EditContainer>
            <h3>Editar Informações</h3>
            <input
              placeholder="Local"
              name="destiny"
              id="destiny"
              onChange={handleInputChange}
            />
            <InputMask
              mask="99/99/9999"
              placeholder="Mês/Ano"
              name="goal"
              id="goal"
              onChange={handleInputChange}
            />
            <div>

            <button onClick={()=>{setIdEdit(0)}}>Cancelar</button>

            <button onClick={handleEdit}>Salvar</button>

            </div>
          </EditContainer>
        )}
      </Content>
    </Container>
  );
}

import { useTravel } from "../../hooks/useTravel";

import { Card } from "../Card";
import { Searcher } from "../Searcher";
import { Container, Content } from "./styles";


export function CountryList() {

  const {travelWish} = useTravel()
  
  return (
    <Container>
      <Searcher />
      <Content>
        <div>
        {travelWish.map((place) => (
          <Card
          idCard={place.id}
          key={place.id}
            flag={place.flag}
            country={place.translation}
            place={place.destiny}
            date={place.goal}
          />
       ))}
       </div>
      </Content>
    </Container>
  );
}

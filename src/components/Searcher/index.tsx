import axios from "axios";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import InputMask from "react-input-mask";

import { Container, Content } from "./styles";

import { useTravel } from "../../hooks/useTravel";


interface CountriesResponse {
  name: string;
}

interface CountryResponse {
  flags: {
    png: string;
  };
  translations: {
    br: string;
  };
}

export function Searcher() {
  const { createTravelWish } = useTravel();

  const [countries, setCountries] = useState<any[]>([]);
  const [selectedFlags, setSelectedFlags] = useState<any>();
  const [selectedCountry, setSelectedCountry] = useState("0");
  const [selectedTranslatedName, setSelectedTranslatedName] = useState<any>();

  const [formData, setFormData] = useState({
    destiny: "",
    goal: "",
  });

  useEffect(() => {
    axios
      .get<CountriesResponse[]>("https://restcountries.com/v2/all")
      .then((Response) => {
        const countryInfo = Response.data;
        setCountries(countryInfo);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry === "0") {
      return;
    }

    axios
      .get<CountryResponse[]>(
        `https://restcountries.com/v2/name/${selectedCountry}`
      )
      .then((Response) => {

        const countryFlag = Response.data.map((flag) => flag.flags.png);
        
        const countryTranslatedName = Response.data.map(
          (translation) => translation.translations.br
        );

        setSelectedFlags(countryFlag);

        setSelectedTranslatedName(countryTranslatedName);

      });
  }, [selectedCountry]);

  function handleSelectCountry(event: ChangeEvent<HTMLSelectElement>) {
    const country = event.target.value;

    setSelectedCountry(country);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { destiny, goal } = formData;
    const country = selectedCountry;
    const flag = selectedFlags;
    const translation = selectedTranslatedName;

    if (country !== "0" && destiny !== "" && goal !== "") {
      await createTravelWish({
        translation,
        country,
        flag,
        destiny,
        goal,
      });
      alert("Cadastrado com sucesso");
    } else {
      alert("Por favor, preencha todos os campos");
      return;
    }
    setSelectedCountry("0");
    setFormData({
      destiny: "",
      goal: "",
    });
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country">País</label>

          <select
            id="country"
            placeholder="Selecione..."
            value={selectedCountry}
            onChange={handleSelectCountry}
          >
            <option value="0">Selecione um País...</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.translations.br}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="destiny">Local</label>
          <input
            id="destiny"
            placeholder="Digite o local que deseja conhecer"
            name="destiny"
            onChange={handleInputChange}
            value={formData.destiny}
          />
        </div>

        <div>
          <label htmlFor="goal">Meta</label>

          <InputMask
            mask="99/99/9999"
            placeholder="Mês/Ano"
            name="goal"
            id="goal"
            onChange={handleInputChange}
            value={formData.goal}
          />
        </div>

        <button>Adicionar</button>

      </Content>
    </Container>
  );
}

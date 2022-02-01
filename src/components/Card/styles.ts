import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);

  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.31);
  width: 240px;
  min-height: 240px;

  border-radius: 10px;

  margin: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.563em 1.563em 1.763em 1.563em;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  button {
    border: none;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;

  img {
    width: 54px;
    height: 34px;
    align-self: flex-start;
  }

  h3 {
    color: var(--green);
    margin: 10px 0px;
    font-size: 1rem;
    align-self: flex-start;
    width: 170px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: flex-start;
  min-width: 45px;
  margin-top: -10px;

  img {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  width: 100%;
  span {
    margin-bottom: 10px;
  }
`;

export const EditContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  h3 {
    color: var(--green);
    font-size: 1rem;
    margin-bottom: 10px;
  }

  input {
    border: 1px solid var(--gray);
    border-style: solid;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 5px;
  }

  div {
    display: flex;
    justify-content: space-around;

    button:nth-child(1) {
      color: var(--green);
      border: 1px solid var(--green);
      background-color: var(--white);

      transition: 0.1s;

      :hover {
        border-color: var(--green-darker);
        color: var(--green-darker);
      }
    }
  }

  button {
    color: var(--white);
    background: var(--green-dark);
    border: 0;
    flex: 1;
    padding: 10px;
    margin-right: 3px;
    border-radius: 7px;
    transition: 0.1s;

    :hover {
      background: var(--green-darker);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background: var(--green);
  max-width: 100%;

  min-width: 100%;
  max-width: 1440px;
  padding: 30px 0px;

  margin-top: -10px;
`;
export const Content = styled.form`
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 30px;
  margin: auto;

  flex-wrap: wrap;
  width: 90%;

  @media (max-width: 410px) {
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: space-around;
    margin: 0px 10px 0px 10px;

    @media (max-width: 390px) {
      margin-top: 10px;
    }
  }
  label {
    color: var(--white);
    display: flex;
    flex-direction: column;
    /* */
  }

  select,
  input {
    border-radius: 7px;
    border: none;

    padding: 10px;

    background: var(--white);

    margin: 0.1rem;

    color: var(--gray);

    @media (max-width: 422px) {
      max-width: 229px;
    }
  }

  button {
    color: var(--white);
    background: var(--green-dark);
    border: 0;
    flex: 1;
    padding: 10px;
    border-radius: 7px;

    @media (max-width: 410px) {
      margin: 15px auto;
      max-width: 260px;
      justify-self: center;
      flex: 1;
    }
    @media (min-width:556px) and (max-width: 639px) {
      margin-top: 15px;
    }

    @media (min-width:922px) and (max-width: 1005px) {
      margin-top: 15px;
    }
  }

  div:nth-child(2) {
    flex: 3;

    select {
      flex: 3;
    }
  }
  div:nth-child(3) {
    flex: 1;
  }
`;

export const Label = styled.p`
  color: var(--white);
`;

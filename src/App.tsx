import React from 'react';
import { CountryList } from './components/CountryList';
import { Header } from './components/Header';
import { Searcher } from './components/Searcher';
import { GlobalStyles } from './styles/global';
import { TravelsProvider } from './hooks/useTravel';

function App() {
  return (
    <TravelsProvider>
      <Header/>
      {/* <Searcher /> */}
      <CountryList />
      <GlobalStyles />
    </TravelsProvider>
  );
}

export default App;

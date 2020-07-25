import React from 'react';
import CaseInfoCards from './components/CaseInfoCards';
import { Header } from './components/Header';
import { Graphs } from './components/Graphs';
import { CountryList } from './components/CountryList';
import { GlobalProvider } from './components/GlobalContext/GlobalState';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <CountryList />
        <CaseInfoCards />
        <Graphs />
      </GlobalProvider>
    </div>
  );
}

export default App;

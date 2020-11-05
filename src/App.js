import React from 'react';
import Provider from './contextAPI/Provider';
import HomePage from './pages/paginaInicial';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <HomePage />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

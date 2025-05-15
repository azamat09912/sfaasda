import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main1 from "./components/Main1/Main1";
import Main2 from "./components/Main2/Main2";
import Main3 from "./Components/Main3/Main3";
import Main4 from "./Components/Main4/Main4";
import Main5 from "./Components/Main5/Main5";
import Main6 from "./Components/Main6/Main6";
import Main7 from "./Components/Main7/Main7";
import Main8 from "./Components/Main8/Main8";
import Main9 from "./Components/Main9/Main9";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Ai from "./components/Ai/Ai";
import "./App.css";

// Основной лейаут с Header и Footer
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Чистый лейаут без Header и Footer
const CleanLayout = ({ children }) => <>{children}</>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница с Header и Footer */}
        <Route path="/" element={
          <MainLayout>
            <section id="partnership">
              <Main1 />
            </section>
            <section id="products">
              <Main2 />
            </section>
            <section id="app">
              <Main3 />
            </section>
            <section id="team">
              <Main4 />
            </section>
            <section id="contacts">
              <Main5 />
            </section>
            <section id="geo">
              <Main6 />
            </section>
            <section id="shop">
              <Main7 />
            </section>
            <section id="comand">
              <Main9 />
            </section>
          </MainLayout>
        } />
        
        {/* Страница Ai без Header и Footer */}
        <Route path="/ai" element={
          <CleanLayout>
            <Ai />
          </CleanLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
import React, { FC } from "react";
import { Route, Routes } from "react-router";
import Header from "../header/header";
import styles from './app.module.scss';
import FundamentalsPage from "../../pages/fundamentals/fundamentals";
import MethodsPage from "../../pages/methods/methods";
import UsagePage from "../../pages/usage/usage";
import EfficiencyPage from "../../pages/efficiency/efficiency";
import Footer from "../footer/footer";
const App: FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Routes>
        <Route path="/" element={<FundamentalsPage/>}/>
        <Route path="methods" element={<MethodsPage/>}/>
        <Route path="usage" element={<UsagePage/>}/>
        <Route path="efficiency" element={<EfficiencyPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
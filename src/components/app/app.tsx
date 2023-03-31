import React, { FC } from "react";
import { Route, Routes } from "react-router";
import Header from "../header/header";
import styles from './app.module.css';
import FundamentalsPage from "../../pages/fundamentals/findamentals";
import MethodsPage from "../../pages/methods/methods";
import UsagePage from "../../pages/usage/usage";
import EfficiencyPage from "../../pages/efficiency/efficiency";

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
    </div>
  )
}

export default App
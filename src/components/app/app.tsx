import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { useScroll } from "framer-motion";
import useIntro from "../../utils/use-intro-hook";
import HeaderIntro from "../header/header-intro/header-intro";
import AnimatedRoute from "../animated-route/animated-route";
import HeaderDefault from "../header/header-default/header-default";
import styles from './app.module.scss';
import FundamentalsPage from "../../pages/fundamentals/fundamentals";
import MethodsPage from "../../pages/methods/methods";
import UsagePage from "../../pages/usage/usage";
import EfficiencyPage from "../../pages/efficiency/efficiency";
import Footer from "../footer/footer";


const App: FC = () => {
  const showAnimation = useIntro()

  return (
    <div className={styles.main}>
      {showAnimation ? <HeaderIntro /> : <HeaderDefault />}
      <Routes>
        <Route element={<AnimatedRoute />}>
          <Route path="/" element={<FundamentalsPage />} />
        </Route>
        <Route element={<AnimatedRoute />}>
          <Route path="usage" element={<UsagePage />} />
        </Route>
        <Route element={<AnimatedRoute />}>
          <Route path="methods" element={<MethodsPage />} />
        </Route>
        <Route element={<AnimatedRoute />}>
          <Route path="efficiency" element={<EfficiencyPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
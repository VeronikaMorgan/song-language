import { FC } from "react";
import footerStyles from './footer.module.scss'
import ArrowLink from "../arrow-link/arrow-link";
import { LEFT_LINK } from "../../utils/constants";
import Button from "../button/button";
const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__wrapper}>
        <div className={footerStyles.footer__logo}></div>
        <div>
        <h2 className={footerStyles.footer__form_title}>Хочу быть в курсе всех обновлений</h2>
        <form action="" className={footerStyles.footer__form}>
          <input type="text" className={footerStyles.footer__input} />
          <Button text="Подписаться" />
          {/* <input type="text" className={footerStyles.footer__input}/>
        <ArrowLink text="Подписаться" to="/" type={LEFT_LINK}/> */}
    </form>
    </div>
    </div>
    </footer >
  )
}

export default Footer
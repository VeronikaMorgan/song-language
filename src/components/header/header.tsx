import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import logo_sm from '../../images/header/logo.svg'
import headerStyles from './header.module.css'
const Header: FC = () => {
  const linkActive:string = `${headerStyles.header__item_active} link-default`;
  const linkDefault:string = `${headerStyles.header__item} link-default`
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__wrapper}>
        <Link to='/' className={headerStyles.header__logo} />
        <nav>
          <ul className={`${headerStyles.header__menu} list-default`}>
            <li>
              <NavLink to='/' className={({isActive}) => (isActive ? linkActive : linkDefault)}>Основы</NavLink>
            </li>
            <li>
              <NavLink to='methods' className={({isActive}) => (isActive ? linkActive : linkDefault)}>Методика</NavLink>
            </li>
            <li>
              <NavLink to='usage' className={({isActive}) => (isActive ? linkActive : linkDefault)}>Практика</NavLink>
            </li>
            <li>
              <NavLink to='efficiency' className={({isActive}) => (isActive ? linkActive : linkDefault)}>Статистика</NavLink>
            </li>
          </ul>
        </nav>
        <div className={headerStyles.header__button_wrapper}>
          <Link to='/' className={`${headerStyles.header__button} link-default`}>Профиль</Link>
        </div>
      </div>
      <div className={headerStyles.header__main_logo}></div>
      <div className={headerStyles.header__decor}></div>
    </header >
  )
}

export default Header
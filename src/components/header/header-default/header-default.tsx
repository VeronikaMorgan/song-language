import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import headerStyles from './header-default.module.scss';

const HeaderDefault:FC = () => {
  const linkActive: string = `${headerStyles.header__item_active} link-default`;
  const linkDefault: string = `${headerStyles.header__item} link-default`
  return (
    <header className={headerStyles.header}>
    <div className={headerStyles.header__wrapper}>
      <Link to='/' className={headerStyles.header__logo} />
      <nav>
        <ul className={`${headerStyles.header__menu} list-default`} >
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Основы</NavLink>
          </li>
          <li>
            <NavLink to='methods' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Методика</NavLink>
          </li>
          <li>
            <NavLink to='usage' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Практика</NavLink>
          </li>
          <li>
            <NavLink to='efficiency' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Статистика</NavLink>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.header__button_wrapper}>
        <Link to='/' className={`${headerStyles.header__button} link-default`}>Профиль</Link>
      </div>
    </div>
  </header>
  )
}

export default HeaderDefault

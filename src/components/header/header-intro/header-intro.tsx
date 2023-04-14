import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import headerStyles from './header-intro.module.scss'
import { motion, useTransform, useScroll } from "framer-motion";
import {leafAnimation, logoAnimation, navAnimation, navItem, buttonAnimation, titleAnimation, boyAnimation} from './header-intro-animation'

const HeaderIntro:FC = () => {
  // const fontSmall = 'var(--header-sm-size)'
  // const fontBig = 'var(--header-df-size)'
  console.log('intro')
  const windowHeight = window.innerHeight
  const { scrollY } = useScroll()

  const heights = [windowHeight, 70]
  const offsetY = [0, 500]
  const height = useTransform(scrollY, offsetY, heights)
  const leftDecorTransition = useTransform(scrollY, [0, 300], [16, -1000])
  const decorOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const rightDecorTransition = useTransform(scrollY, [0, 300], [-150, -500])
  const titleTransition = useTransform(scrollY, [0, 300], [1, 0])
  const fontSize = useTransform(scrollY, offsetY, ['20px', '16px'])
  const wrapperPaddingTop = useTransform(scrollY, offsetY, ['20px', '0px'])
  const logoTransition = useTransform(scrollY, offsetY, ['150px', '70px'])
  const wrapperDecorHeight = useTransform(scrollY, offsetY, ['142px', '100px'])
  const wrapperDecorWidth = useTransform(scrollY, offsetY, ['236px', '160px'])

  const linkActive: string = `${headerStyles.header__item_active} link-default`;
  const linkDefault: string = `${headerStyles.header__item} link-default`

  return (
      <motion.header className={headerStyles.header} style={{ height }}>
        <motion.div className={headerStyles.header__wrapper} style={{ paddingTop: wrapperPaddingTop }}>
          <motion.div variants={logoAnimation} animate="show" initial="hidden" exit="hidden" style={{ height: logoTransition, width: logoTransition }}>
            <Link to='/' className={headerStyles.header__logo} />
          </motion.div>
          <nav>
            <motion.ul className={`${headerStyles.header__menu} list-default`} variants={navAnimation} initial='hidden' animate="show">
              <motion.li variants={navItem} style={{ fontSize: fontSize }}>
                <NavLink to='/' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Основы</NavLink>
              </motion.li>
              <motion.li variants={navItem} style={{ fontSize: fontSize }}>
                <NavLink to='methods' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Методика</NavLink>
              </motion.li>
              <motion.li variants={navItem} style={{ fontSize: fontSize }}>
                <NavLink to='usage' className={({ isActive }) => (isActive ? linkActive : linkDefault)} >Практика</NavLink>
              </motion.li>
              <motion.li variants={navItem} style={{ fontSize: fontSize }}>
                <NavLink to='efficiency' className={({ isActive }) => (isActive ? linkActive : linkDefault)}>Статистика</NavLink>
              </motion.li>
            </motion.ul>
          </nav>
          <motion.div className={headerStyles.header__button_wrapper} style={{ fontSize: fontSize }} variants={buttonAnimation} animate="show" initial="hidden" exit="hidden">
            <motion.div className={headerStyles.header__button_wrapper_decor} style={{ width: wrapperDecorWidth, height: wrapperDecorHeight }}></motion.div>
            <Link to='/' className={`${headerStyles.header__button} link-default`}>Профиль</Link>
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div className={headerStyles.header__title} style={{ opacity: titleTransition }} variants={titleAnimation} animate='show' initial='hidden'></motion.div>
          <motion.div className={headerStyles.header__decor_position_left} style={{ left: leftDecorTransition, opacity: decorOpacity }} variants={boyAnimation} animate="show" initial="hidden" exit="hidden"></motion.div>
          <motion.div className={headerStyles.header__decor_position_right} style={{ right: rightDecorTransition, opacity: decorOpacity }} variants={leafAnimation} animate="show" initial="hidden" exit="hidden"></motion.div>
        </motion.div>
      </motion.header >
  )
}

export default HeaderIntro
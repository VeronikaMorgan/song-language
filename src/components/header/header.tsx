import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import headerStyles from './header.module.scss'
import { motion, useTransform, useScroll } from "framer-motion";

const navAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2,
      ease: 'ease'
    }
  }
}

const navItem = {
  hidden: {
    opacity: 0,
    y: '-30px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5
    }
  }
}
const titleAnimation = {
  hidden: {
    opacity: 0,
    y: '-50px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: 'spring',
      bounce: 0.5
    }
  }
}


const leafAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    x: 20,
    y: '330px',
    rotate: 0
  },
  show: {
    width: 415,
    opacity: 1,
    rotate: 105,
    y: 0,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.5,
      ease: 'easeInOut'
    }
  }
}

const boyAnimation = {
  hidden: {
    opacity: 0,
    x: '-50px',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

const logoAnimation = {
  hidden: {
    opacity: 0,
    x: '-50px',
    y: '-50px'
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

const buttonAnimation = {
  hidden: {
    opacity: 0,
    x: '50px',
    y: '-50px'
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

const headerWrapperAnimation = {
  hidden: {
    opacity: 1,
    height: '100%'
  },
  show: {
    height: '0px',
    opacity: 0,
    transition: {
      delay: 5,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}


const Header: FC = () => {
  // const fontSmall = 'var(--header-sm-size)'
  // const fontBig = 'var(--header-df-size)'

  const windowHeight = window.innerHeight
  const { scrollY } = useScroll()
  const heights = [windowHeight, 70]
  const offsetY = [0, 500]
  const height = useTransform(scrollY, offsetY, heights)
  const leftDecorTransition = useTransform(scrollY, [0, 300], [16, -1000])
  const decorOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const rightDecorTransition = useTransform(scrollY, [0, 300], [-150, -500])
  const titleTransition = useTransform(scrollY, offsetY, [1, 0])
  const fontSize = useTransform(scrollY, offsetY, ['20px', '16px'])
  const wrapperPaddingTop = useTransform(scrollY, offsetY, ['20px', '0px'])
  const logoTransition = useTransform(scrollY, offsetY, ['150px', '70px'])
  const wrapperDecorHeight = useTransform(scrollY, offsetY, ['142px', '100px'])
  const wrapperDecorWidth = useTransform(scrollY, offsetY, ['236px', '160px'])

  const linkActive: string = `${headerStyles.header__item_active} link-default`;
  const linkDefault: string = `${headerStyles.header__item} link-default`
  const defaultlinkActive: string = `${headerStyles.header__item_active} ${headerStyles.header__item_type_default} link-default`;
  const defaultlinkDefault: string = `${headerStyles.header__item} ${headerStyles.header__item_type_default} link-default`;

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
          <motion.div className={headerStyles.header__button_wrapper_decor} style={{width: wrapperDecorWidth, height: wrapperDecorHeight}}></motion.div>
          <Link to='/' className={`${headerStyles.header__button} link-default`}>Профиль</Link>
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.div className={headerStyles.header__title} style={{ opacity: titleTransition }} variants={titleAnimation} animate='show' initial='hidden'></motion.div>
        <motion.div className={headerStyles.header__decor_position_left} style={{ left: leftDecorTransition, opacity: decorOpacity }} variants={boyAnimation} animate="show" initial="hidden" exit="hidden"></motion.div>
        <motion.div className={headerStyles.header__decor_position_right} style={{ right: rightDecorTransition, opacity: decorOpacity }} variants={leafAnimation} animate="show" initial="hidden" exit="hidden"></motion.div>
      </motion.div>
    </motion.header >
    // <header className={headerStyles.header_type_default}>
    //   <div className={headerStyles.header__wrapper_type_default}>
    //     <Link to='/' className={headerStyles.header__logo_type_default} />
    //     <nav>
    //       <motion.ul className={`${headerStyles.header__menu} list-default`} variants={navAnimation} initial='hidden' animate="show">
    //         <motion.li variants={navItem}>
    //           <NavLink to='/' className={({ isActive }) => (isActive ? defaultlinkActive : defaultlinkDefault)}>Основы</NavLink>
    //         </motion.li>
    //         <motion.li variants={navItem}>
    //           <NavLink to='methods' className={({ isActive }) => (isActive ? defaultlinkActive : defaultlinkDefault)}>Методика</NavLink>
    //         </motion.li>
    //         <motion.li variants={navItem}>
    //           <NavLink to='usage' className={({ isActive }) => (isActive ? defaultlinkActive : defaultlinkDefault)}>Практика</NavLink>
    //         </motion.li>
    //         <motion.li variants={navItem}>
    //           <NavLink to='efficiency' className={({ isActive }) => (isActive ? defaultlinkActive : defaultlinkDefault)}>Статистика</NavLink>
    //         </motion.li>
    //       </motion.ul>
    //     </nav>
    //     <div className={headerStyles.header__button_wrapper_type_default}>
    //       <Link to='/' className={`${headerStyles.header__button} ${headerStyles.header__button_type_default} link-default`}>Профиль</Link>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Header
import { SLIDER_LG, SLIDER_SM } from "../../../utils/constants";
import {FC } from "react";
import { motion } from "framer-motion";
import slideStyles from './slide.module.scss'


interface ISlideProps {
  type: typeof SLIDER_LG | typeof SLIDER_SM
  title: string
  children: React.ReactNode
  direction?: 'next' | 'prev'
}
export const nextSlideAnimation = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0.3
    }
  }
}

export const prevSlideAnimation = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0.3
    }
  }
}

const Slide: FC<ISlideProps> = ({ title, type, children, direction }) => {

  return (
    <motion.div className={slideStyles.wrapper} variants={direction === 'next' ? nextSlideAnimation : prevSlideAnimation} animate="show" initial='hidden'>
      <h2 className={type === SLIDER_LG ? slideStyles.title_type_lg : slideStyles.title_type_sm }>{title}</h2>
      {children}
    </motion.div>
  )
}

export default Slide
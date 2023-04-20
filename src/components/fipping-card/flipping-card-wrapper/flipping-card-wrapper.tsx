import { FC } from "react";
import { motion } from "framer-motion";
import styles from './flipping-card-wrapper.module.scss';


interface IFlippingCardWrapper {
  children: React.ReactNode
  className: string
}

const FlippingCardWrapper: FC<IFlippingCardWrapper> = ({ children, className}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <motion.div className={styles.card__wrapper} whileHover={{ rotateY: 180 }} transition={{ type: 'spring', stiffness: 50, ease: "linear", duration: .5 }}>
        {children}
      </motion.div>
    </div>
  )
}

export default FlippingCardWrapper
import React, { Children, FC, ReactNode, useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from './card-deck.module.scss'
interface ICardDeskProps {
  children: React.ReactNode
}
const liAnimation = {
  hidden: {
   
  },
  show: {
    // zIndex: [20, 1],
    rotate:[4, 5, 8],
    translateX: ['0px', '-40px', '55px'],
    translateY: ['0px', '-120%', '-50px'],
    transition: {
      duration: 0.5,
      type: 'spring'
    }
  }
}

const CardDeck: FC<ICardDeskProps> = ({ children }): JSX.Element => {
  const [currentCard, setCurrentCard] = useState(0)
  const cardIndexes = Children.count(children) - 1;
  console.log(currentCard)
  const handleNextCard = (e: React.MouseEvent) => {
    currentCard === cardIndexes ? setCurrentCard(0) : setCurrentCard(currentCard + 1)
    const card = e.currentTarget
    card.classList.remove(`${styles.cards__card_type_out}`)
    card.classList.add(`${styles.cards__card_type_out}`)
  }
  return (
    <motion.ul  className={`${styles.cards} list-default`}>
      {Children.map(children, (child: ReactNode, index) => {
        return <motion.li className={styles.cards__card} style={{zIndex: cardIndexes - index}} onClick={handleNextCard}>{child}</motion.li>
      }
      )}
    </motion.ul>
  )
}

export default CardDeck
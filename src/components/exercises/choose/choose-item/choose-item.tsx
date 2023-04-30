import React, { FC, useEffect, useState } from "react";
import { TChooseExerciseData } from "../../../../types/prop-types";
import styles from './choose-item.module.scss'
import { motion } from "framer-motion";

const ChooseExerciseItem: FC<{ data: TChooseExerciseData, color: string, show: boolean}> = ({ data, color, show }) => {
  const [chosenAnswer, setChosenAnswer] = useState<number | null>()
  const handleChooseAnswer = (i: number, e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    if (chosenAnswer === i) {
      setChosenAnswer(null)
    } else {
      setChosenAnswer(i)
    }
  }
  console.log(chosenAnswer)
  useEffect(() => {
    show && setChosenAnswer(null)
  }, [show])
  return (
    <div className={styles.item}>
      <h3 className={`${styles.item__title}`}>{data.name}</h3>
      <ul className={`${styles.item__options} list-default`}>
        {data.options.map((option, i) => (
          <motion.li
            onClick={(e) => handleChooseAnswer(i, e)}
            whileHover={{ scale: 1.07, transition: { type: "spring", bounce: .7, repeatType: 'mirror' } }}
            key={i}
            className={`${styles.item__option} text_type_sm`}
            style={{ borderColor: `var(${color})`, backgroundColor: chosenAnswer === i ? `var(${color})` :( show && data.rightOption === i )? 'greenyellow' : '' }}
          >
            {option}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ChooseExerciseItem
import React, { FC, useEffect, useState } from "react";
import { TChooseExerciseData } from "../../../../types/prop-types";
import styles from './choose-item.module.scss';
import { motion } from "framer-motion";
import { shuffleArray } from "../../../../utils/helpers";
import { ReactComponent as WrongSVG } from '../../../../images/icons/wrong.svg';
import { useAnimationControls } from "framer-motion";
import { ReactComponent as CorrectSVG } from '../../../../images/icons/correct.svg';

interface IChooseExerciseItemProps {
  data: TChooseExerciseData,
  taskIndex: number,
  chosenAnswer: number | null,
  color: string,
  show: boolean,
  check: boolean,
  setAnswer: (taskIndex: number, answer: number | null) => void
}

const ChooseExerciseItem: FC<IChooseExerciseItemProps> = ({ data, color, show, check, setAnswer, taskIndex, chosenAnswer }) => {
  const controls = useAnimationControls()
  // const [shuffledData, setShuffledData] = useState<string[]>()

  // useEffect(() => {
  //   setShuffledData(shuffleArray(data.options))
  // },[data])

  const handleChooseAnswer = (i: number, e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    chosenAnswer === i ? setAnswer(taskIndex, null) : setAnswer(taskIndex, i)
  }
  useEffect(() => {
    // console.log('beforeshowAnswers')
    if (!show) return
    console.log('showAnswers')
    setAnswer(taskIndex, data.rightOption)
  }, [show])

  useEffect(() => {
    if (!check) return
    controls.start({ opacity: 1, scale: 1, transition: { delay: 0.3 * taskIndex, type: 'spring', bounce: .6 } })
  }, [check])

  return (
    <div className={styles.item}>
      <div className={`${styles.item__title}`}>
        <h3>{data.name}</h3>
        <motion.div animate={controls} initial={{ opacity: 0, scale: 0 }}>
          {check ? chosenAnswer === data.rightOption ?
            <CorrectSVG />
            :
            <WrongSVG />
            : <></>
          }
        </motion.div>
      </div>
      <ul className={`${styles.item__options} list-default`}>
        {data.options.map((option, i) => (
          <motion.li
            onClick={(e) => handleChooseAnswer(i, e)}
            whileHover={{ scale: 1.07, transition: { type: "spring", bounce: .7, repeatType: 'mirror' } }}
            key={i}
            className={`${styles.item__option} text_type_sm`}
            style={{
              borderColor: `var(${color})`,
              backgroundColor: chosenAnswer === i ? `var(${color})` : 'inherit',
              pointerEvents: check ? 'none' : 'auto'
            }}
          >
            {option}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ChooseExerciseItem
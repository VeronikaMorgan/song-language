import React, { FC, useState, useEffect } from "react";
import styles from './choose.module.scss'
import { TChooseExerciseData } from "../../../types/prop-types";
import { AnimatePresence, useAnimationControls, motion } from "framer-motion";
import ChooseExerciseItem from "./choose-item/choose-item";

//add uuid
const ChooseExercise: FC<{ data: TChooseExerciseData[], color: string }> = ({ data, color }) => {
  const qwty = data.length;
  const [correct, setCorrect] = useState<boolean>(true);
  const controls = useAnimationControls()
  const returnBtnControls = useAnimationControls()
  const [showAnswers, setShowAnswers] = useState<boolean>(false)
  useEffect(() => {
    console.log(correct)
    if (correct) {
      controls.start({ scale: 1.1, transition: { type: 'spring', bounce: .6 } })
    } else (
      controls.start({ scale: 1, transition: { type: 'spring', bounce: .6 } })
    )
  }, [correct])

  useEffect(() => {
    if (correct) {
      returnBtnControls.start({ scale: 1.1, opacity: 1, rotate: -360, cursor: 'pointer', transition: { type: 'spring', bounce: .6 } })
    } else (
      returnBtnControls.start({ scale: 1, opacity: 0, cursor: 'default', transition: { type: 'spring', bounce: .6 } })
    )
  }, [correct])


  // useEffect(() => {
  //   const areEqual = compareArrays(values, shuffledValues)
  //   areEqual ? setCorrect(true) : setCorrect(false)
  // }, [shuffledValues, values])

  // const handleReshuffle = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation()
  //   setCorrect(false)
  //   const newShuffledValues = shuffleArray([...shuffledValues])
  //   setShuffledValues(newShuffledValues)
  // }
  return (
    <div className={styles.wrapper}>
      <motion.div animate={controls} className={`${styles.title} text text_last`}>{correct ? `Tutto e Coretto! \u{1F355}` : 'Trova il significato delle seguenti parole'}</motion.div>
      <ul className={`${styles.exercise} list-default`}>
        {
          data.map((item, i) => (
            <li key={i} className={styles.item}>
             <ChooseExerciseItem color={color} data={item} show={showAnswers}/>
            </li>
          ))
        }</ul>
      <motion.button disabled={!correct} animate={returnBtnControls} className={styles.retry}  whileHover={{ rotate: -360, scale: 1.1, transition: { duration: .3 } }}><svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M3.30702 22.023C3.63229 21.8006 3.99818 21.6445 4.38379 21.5636C4.7694 21.4826 5.16718 21.4784 5.55441 21.5512C5.94164 21.624 6.31074 21.7724 6.64062 21.9879C6.9705 22.2033 7.25471 22.4817 7.47702 22.807L9.95302 26.429C11.422 20.6215 14.7759 15.4654 19.4895 11.7685C24.203 8.07165 30.0098 6.04284 36 6C50.557 6 62 18.036 62 32.584C62.0041 37.807 60.4586 42.9139 57.559 47.2582C54.6594 51.6024 50.5361 54.9887 45.7111 56.9885C40.886 58.9883 35.5761 59.5116 30.4535 58.4923C25.3309 57.4729 20.6259 54.9566 16.934 51.262C16.6555 50.9833 16.4346 50.6525 16.2839 50.2885C16.1332 49.9245 16.0557 49.5343 16.0558 49.1403C16.0559 48.7463 16.1335 48.3562 16.2844 47.9922C16.4353 47.6282 16.6563 47.2975 16.935 47.019C17.2137 46.7405 17.5445 46.5195 17.9085 46.3689C18.2726 46.2182 18.6627 46.1407 19.0567 46.1407C19.4507 46.1408 19.8408 46.2185 20.2048 46.3694C20.5688 46.5203 20.8995 46.7413 21.178 47.02C24.0309 49.8751 27.6668 51.8195 31.6253 52.6071C35.5838 53.3947 39.6871 52.99 43.4155 51.4443C47.144 49.8986 50.3299 47.2814 52.5701 43.9241C54.8103 40.5667 56.004 36.6201 56 32.584C56 21.344 47.248 12 36 12C31.3182 12.0421 26.7842 13.6441 23.1152 16.5527C19.4463 19.4613 16.8521 23.5103 15.743 28.059L20.057 24.091C20.3471 23.8243 20.6869 23.6173 21.057 23.4819C21.427 23.3465 21.8202 23.2853 22.2139 23.3019C22.6076 23.3184 22.9942 23.4123 23.3516 23.5783C23.7091 23.7442 24.0303 23.9789 24.297 24.269C24.5637 24.5591 24.7707 24.8989 24.9061 25.2689C25.0415 25.639 25.1027 26.0321 25.0861 26.4259C25.0696 26.8196 24.9757 27.2062 24.8098 27.5636C24.6438 27.921 24.4091 28.2423 24.119 28.509L14.382 37.461C14.369 37.474 14.352 37.481 14.339 37.494C14.272 37.554 14.196 37.604 14.124 37.657C14.0461 37.718 13.965 37.7747 13.881 37.827C13.805 37.873 13.722 37.909 13.641 37.947C13.5501 37.9927 13.457 38.0337 13.362 38.07C13.282 38.1 13.199 38.12 13.116 38.14C13.0097 38.1695 12.9019 38.1932 12.793 38.211C12.759 38.217 12.728 38.228 12.693 38.233C12.642 38.239 12.591 38.231 12.539 38.235C12.476 38.239 12.415 38.252 12.352 38.252C12.282 38.252 12.211 38.245 12.14 38.24L12.06 38.236L12.01 38.233C11.95 38.226 11.892 38.203 11.832 38.193C11.7009 38.1725 11.5713 38.1435 11.444 38.106C11.361 38.079 11.284 38.042 11.205 38.009C11.0974 37.9668 10.9926 37.9181 10.891 37.863C10.81 37.817 10.735 37.765 10.658 37.712C10.567 37.6504 10.4795 37.5836 10.396 37.512C10.3263 37.4519 10.2596 37.3885 10.196 37.322C10.1164 37.239 10.0416 37.1515 9.97202 37.06C9.94202 37.02 9.90302 36.987 9.87502 36.946L2.52302 26.193C2.30065 25.8677 2.14454 25.5018 2.06359 25.1162C1.98265 24.7306 1.97846 24.3328 2.05126 23.9456C2.12406 23.5584 2.27243 23.1893 2.4879 22.8594C2.70336 22.5295 2.9817 22.2453 3.30702 22.023Z" fill="#5F8E6A" />
      </svg>
      </motion.button>
      <button className="text text_type_main" onClick={() => setShowAnswers(true)}>Check</button>
    </div>
  )
}

export default ChooseExercise
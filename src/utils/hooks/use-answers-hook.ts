import { useState } from "react";

export interface IAnswers {
	[taskIndex: number]: number | null
}

export function useAnswers() {
  const [answers, setAnswers] = useState<IAnswers>({})
  const handleSetAnswer = (taskIndex: number, answer: number | null) => {
    setAnswers((prevState) => ({
      ...prevState, [taskIndex]: answer
    }))
    console.log(answers)
  }
  return {answers, handleSetAnswer, setAnswers}
}
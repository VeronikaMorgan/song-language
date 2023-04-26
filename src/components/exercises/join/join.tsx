import { FC, useState, useEffect } from "react";
import styles from './join.module.scss'
import { TJoinExerciseData } from "../../../types/prop-types";
import { shuffleArray } from "../../../utils/helpers";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//add uuid
const JoinExercise: FC<{ data: TJoinExerciseData }> = ({ data }) => {
  const [keys, setKeys] = useState<string[]>()
  const [values, setValues] = useState<string[]>([])

  useEffect(() => {
    setKeys(Object.keys(data))
    const shuffledValues = shuffleArray(Object.values(data))
    setValues(shuffledValues)
  }, [])
  const handleOnDragEnd = (result: any) => {
   if (!result.destination) return;
    const items = Array.from(values)
    const [reordedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordedItem)
    setValues(items)
  }
  return (
    <div className={styles.wrapper}>
      <ul className={`${styles.items} list-default`}>
        {
          keys && keys.map((key, i) => (
            <li key={i} className={styles.item}>{key}</li>
          ))
        }</ul>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <ul className={`${styles.items} list-default`} {...provided.droppableProps} ref={provided.innerRef}>
              {
                values && values.map((value, i) => (
                  <Draggable key={i} draggableId={`${i}`} index={i}>
                  {(provided) => (
                    <li className={styles.item} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{value}</li>
                  )}
                </Draggable>
                ))
              }
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default JoinExercise
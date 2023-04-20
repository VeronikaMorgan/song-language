import { FC } from "react";
import { FACE_TYPE_FRONT, FACE_TYPE_BACK } from "../../../utils/constants";
import styles from './flipping-card-face.module.scss'
interface IFlippingCardFace {
  type: typeof FACE_TYPE_BACK | typeof FACE_TYPE_FRONT
  children: React.ReactNode
  className: string
}

const FlippingCardFace: FC<IFlippingCardFace> = ({type, children, className}) => {
  return (
    <div className={`${styles.face} ${className} ${type === FACE_TYPE_BACK && styles.face_back}`}>
      {children}
    </div>
  )
}

export default FlippingCardFace
import { FC } from "react";
import titleStyles from './title.module.scss';

interface ITitleProps {
  text: string
}

const Title:FC<ITitleProps> = ({text}) => {
  return(
    <h1 className={titleStyles.title}>{text}</h1>
  )
}

export default Title
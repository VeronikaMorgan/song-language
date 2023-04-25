import { FC } from "react";

import { BLOCK_TYPE_RIGHT, BLOCK_TYPE_LEFT } from "../../utils/constants";
import styles from './example-block.module.scss';

interface IExampleBlockProps {
  color?: string
  className?: string
  children: React.ReactNode
}
const ExampleBlock: FC<IExampleBlockProps> = ({ color, className, children}) => {
  return (
    <div className={styles.wrapper} style={{ borderColor: color ? `var(${color})` : 'inherit' , backgroundColor: color ? `var(${color})` : 'inherit'}}>
      {children}
    </div>
  )
}

export default ExampleBlock
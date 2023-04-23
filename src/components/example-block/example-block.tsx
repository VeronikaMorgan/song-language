import { FC } from "react";
import { motion } from "framer-motion";
import { BLOCK_TYPE_RIGHT, BLOCK_TYPE_LEFT } from "../../utils/constants";
import styles from './example-block.module.scss';

interface IExampleBlockProps {
  color?: string
  className?: string
  children: React.ReactNode
  type: typeof BLOCK_TYPE_LEFT | typeof BLOCK_TYPE_RIGHT
}
const ExampleBlock: FC<IExampleBlockProps> = ({ color, className, children, type }) => {
  const blockClassName = `${styles.wrapper__top_block} `
  return (
    <div className={styles.wrapper} style={{ borderColor: color ? `var(${color})` : 'inherit' }}>
      {children}
      <div></div>
    </div>
  )
}

export default ExampleBlock
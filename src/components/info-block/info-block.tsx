import { FC } from "react";
import styles from './info-block.module.scss'

interface IinfoBlock {
  children: React.ReactNode
}

const InfoBlock: FC<IinfoBlock> = ({children}) => {
  return (
    <div className={styles.important_info}>
      {children}
    </div>
  )
}

export default InfoBlock
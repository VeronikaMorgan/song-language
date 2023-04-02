import { FC } from "react";
import styles from './list-item.module.scss';

interface IlistItem {
  text: string
  color: 'yellow' | 'red'
}
const ListItem: FC<IlistItem> = ({text, color}) => {
  const className = `item_type_${color}`
  return (
    <li className={`${styles.item_type_red} ${styles.item}`}>{text}</li>
  )
}

export default ListItem
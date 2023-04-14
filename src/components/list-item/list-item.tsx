import { FC, ReactNode } from "react";
import styles from './list-item.module.scss';

interface IlistItem {
  children: React.ReactNode
  type: 'circle' | 'star'
  textType: 'upperCase' | 'default'
}
const ListItem: FC<IlistItem> = ({children, type, textType}) => {
  const classNameTypeCircle = `${styles.item_type_circle} ${styles.item}`;
  const classNameTypeStar = `${styles.item_type_star} ${styles.item}`
  return (
    <li className={type === 'circle' ? classNameTypeCircle : classNameTypeStar} style={textType === 'upperCase' ? {textTransform: "uppercase"}: {textTransform: 'none'}}>{children}</li>
  )
}

export default ListItem
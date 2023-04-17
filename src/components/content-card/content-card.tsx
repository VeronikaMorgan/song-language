import { FC } from "react";
import cardStyles from './content-card.module.scss';

interface IContentCard {
  children: React.ReactNode
  width?: string
  height?: string
  color?: string
  title?: string
}
const ContentCard: FC<IContentCard> = ({ children, width, height, color, title }) => {
  return (
    <div className={cardStyles.card} style={{ width: width ? width : 'fit-content', height: height ? height : '50%', borderColor: color ? `var(${color})` : 'inherit' }}>
      {/* <div> */}
        {title &&
          <h2 className={cardStyles.card__heading} style={{ color: color ? `var(${color})` : 'inherit' }}>{title}</h2>
        }
        {children}
      {/* </div> */}
    </div>
  )
}

export default ContentCard


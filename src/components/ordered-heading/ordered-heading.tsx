import { FC } from "react";
import headingStyles from './ordered-heading.module.scss';

interface IOrderHeadingProps {
  text: string
  number: number
  className: string
}
const OrderedHeading: FC<IOrderHeadingProps> = ({ text, number, className }) => {
  return (
    <div className={`${headingStyles.wrapper} ${className}`}>
      <div className={headingStyles.number}>{number}</div>
      <h2 className={headingStyles.heading}>{text}</h2>
    </div>
  )
}

export default OrderedHeading
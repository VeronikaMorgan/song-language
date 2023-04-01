import { FC } from "react";
import { Link } from "react-router-dom";
import { IArrowLink } from "../../types/prop-types";
import linkStyles from './arrow-link.module.css';
import { RIGHT_LINK, LEFT_LINK } from "../../utils/constants";

const ArrowLink:FC<IArrowLink> = ({text, to, type}) => {
  const linkStyle = type === RIGHT_LINK ? `${linkStyles.arrow__link_type_right} link-default` : `${linkStyles.arrow__link_type_left} link-default`
  return (
   <Link to={to} className={linkStyle}>
    {text}
   </Link>
  )
}

export default ArrowLink
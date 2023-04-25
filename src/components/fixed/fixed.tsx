import { motion, useScroll } from "framer-motion";
import { FC, useRef, useState, useEffect} from "react";
import styles from './fixed.module.scss'
interface IFixedBlockProps {
  children: React.ReactNode
};
const FixedBlock:FC<IFixedBlockProps> = ({children}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const block = wrapperRef.current;
    if (block) {
      const offsetTop = block.offsetTop;
      const height = block.offsetHeight;
      const windowHalfHeight = window.innerHeight/ 15;

      const handleScroll = () => {
        const scrollY = window.pageYOffset;

        if (scrollY >= offsetTop - windowHalfHeight && scrollY <= offsetTop + height - windowHalfHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div ref={wrapperRef} className={`${styles.block} ${isFixed ? `${styles.block_fixed}`: ''}`}>
      {children}
    </div>
  )
}

export default FixedBlock
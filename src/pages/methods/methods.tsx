import { FC } from "react";
import methodsStyles from './methods.module.scss'
import { motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../../components/animated-route/animated-route";
import Title from "../../components/title/title";
import InfoBlock from "../../components/info-block/info-block";
import OrderedHeading from "../../components/ordered-heading/ordered-heading";
import MethodsSliderLg from "../../components/methods-sliders/methods-slider_lg/methods-slider-lg";
import styles from '../pages.module.scss';

const MethodsPage: FC = () => {
  const { showAnimation, scrollY, offsetY } = useAnimationContext()
  const marginTop = useTransform(scrollY, offsetY, offsetY)
  return (
    <motion.main className={styles.main} style={{ marginTop: showAnimation ? marginTop : undefined }}>
      <Title text="Что лежит в основе" />
      <section className={`${styles.section} ${styles.section_type_sm}`}>
        <OrderedHeading text="Особенности преподавания второго иностранного языка" number={1} />
      </section>
      <section className={`${styles.section} ${styles.section_type_sm}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main">В системе современного школьного образования можно наблюдать тенденцию
            мультилингвального или многоязычного обучения. Многие школы включают в учебный план второй или
            даже третий иностранный язык. </p>
          <p className="text">Сразу следует отметить огромный потенциал многоязычного образования для развития как
            учебных, так и личностных способностей обучаемого. Происходит развитие и совершенствование
            лингвистических навыков, развитие когнитивных способностей, вербального интеллекта, памяти,
            языковой рефлексии и догадки.</p>
          <p className="text text_last">Несмотря на явные плюсы мультилингвального обучения, на данном этапе развития
            школьного образования полная реализация его потенциала довольно затруднительна.</p>
        </div>
        <div className={methodsStyles.basics_img}></div>
      </section>
      <section className={`${styles.section} ${styles.section_align_baseline}`}>
        <div className={styles.section__content}>
          <ul className={`${methodsStyles.absence__list} list-default`}>
            <li className={methodsStyles.absence__list_item}> методического обеспечения</li>
            <li className={methodsStyles.absence__list_item}> обоснованности выбора<br></br> методического содержания </li>
            <li className={methodsStyles.absence__list_item}> модели обучения</li>
          </ul>
        </div>
        <div className={styles.section__content}>
          <p className="text text_type_main">При данном подходе игнорируются психолингвистические особенности освоения второго
            иностранного языка и&nbsp;не&nbsp;учитываются основополагающие понятия, такие как языковая
            интерференция и&nbsp;положительный перенос, влияющие на&nbsp;усвоение материала</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section_align_start}`}>
        <div className={styles.section__content}>
          <div className={methodsStyles.interfere__girl}></div>
        </div>
        <div className={`${styles.section__content} ${methodsStyles.interfere__wrapper_content_minus}`}>
          <h2 className={methodsStyles.interfere__heading}>Языковая интерференция</h2>
          <InfoBlock>
            Под языковой интерференцией понимается отрицательное воздействие при переносе
            знаний одного языка на другой.
          </InfoBlock>
          <p className='text'>Примером может служить неправильное употребление итальянского артикля, при несовпадении
            грамматического рода<br></br>
            (вопрос – la domanda)</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section_type_sm}`}>
        <div className={`${styles.section__content} ${methodsStyles.interfere__wrapper}`}>
          <h2 className={methodsStyles.interfere__heading}> Положительный перенос</h2>
          <InfoBlock>
            Положительный перенос, в свою очередь, способствует быстрому
            усвоению материала, при сопоставлении языковых явлений присутствующих в обоих языках
          </InfoBlock>
          <p className="text">Примером может служить само наличие определенного и неопределенного артиклей в
            языке ( the flower - il fiore), Употребление глаголов-связок, модальных глаголов ( I am
            Veronika - Io sono Veronika, i must go - io devo andare) </p>
        </div>
        <div className={methodsStyles.interfere__plus}></div>
      </section>
      <section className={styles.section}>
        <MethodsSliderLg/>
      </section>
    </motion.main>
  )
}

export default MethodsPage
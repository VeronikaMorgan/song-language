import { FC } from "react";
import usageStyles from './usage.module.scss'
import styles from '../pages.module.scss'
import fundStyles from '../fundamentals/fundamentals.module.scss';
import ListItem from "../../components/list-item/list-item";
import Title from "../../components/title/title";
import FlippingCardWrapper from "../../components/fipping-card/flipping-card-wrapper/flipping-card-wrapper";
import FlippingCardFace from "../../components/fipping-card/flipping-card-face/flipping-card-face";
import { FACE_TYPE_BACK, FACE_TYPE_FRONT } from "../../utils/constants";
import { motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../../components/animated-route/animated-route";


const UsagePage: FC = () => {
  const { showAnimation, scrollY, offsetY } = useAnimationContext()
  const marginTop = useTransform(scrollY, offsetY, offsetY)

  return (
    <motion.main className={styles.main} style={{ marginTop: showAnimation ? marginTop : undefined }}>
      <Title text="Как применить" />
      <section className={`${styles.section} ${styles.section_type_sm} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main">На&nbsp;первый взгляд, работа с&nbsp;песенным материалом имеет много общего с&nbsp;работой над аудированием и&nbsp;так&nbsp;же подразделяется на&nbsp;3&nbsp;основных этапа -
          </p>
          <ul className={`${fundStyles.stages__list} list-default`}>
            <ListItem type="circle" textType="upperCase"><p>предтекстовый</p></ListItem>
            <ListItem type="circle" textType="upperCase"><p>текстовый</p></ListItem>
            <ListItem type="circle" textType="upperCase"><p>послетекстовый</p></ListItem>
          </ul>
          <p className="text text_type_main text_last">В&nbsp;то&nbsp;же время эффективное использование данного методического средства предполагает более обширный спектр работ и&nbsp;может включать средства языковой наглядности в&nbsp;виде видеоклипа или lyrics-видео, что позволяет нам расширить трех-шаговую систему.</p>
        </div>
        <div className={fundStyles.stages__img}></div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
          <FlippingCardWrapper className={usageStyles.flip_card}>
            <FlippingCardFace type={FACE_TYPE_FRONT} className={usageStyles.flip_card__face_front}>
              <h2 className={usageStyles.flip_card__heading}>Первый слой</h2>
              <p className="text text_type_sm text_last">Является семантическим или смысловым, он отвечает за развитие  социокультурной, общеобразовательной и страноведческой компетенций учеников.
                <br></br>Песня рассматривается как объект культуры, транслирующий определенные моральные ценности и идеалы, настроение и эмоции.
              </p>
            </FlippingCardFace>
            <FlippingCardFace type={FACE_TYPE_BACK} className={usageStyles.flip_card__face_back}>
              <h2 className={usageStyles.flip_card__heading}>Второй слой</h2>
              <p className="text text_type_sm text_last">Является языковым, представляющим лингвистическую ценность. <br></br>Именно при работе с данным слоем происходит развитие лексико-грамматических навыков учащихся, автоматизация изученных языковых единиц и усвоение новых.
              </p>
            </FlippingCardFace>
          </FlippingCardWrapper>
        <div className={styles.section__content}>
          <p className="text text_type_main">
            В основе разработанной нами технологии лежит понятие о многослойности песни.
            Любой песенный материал, рассматриваемый в качестве методического средства в обучении иностранному языку,
            можно разделить на два основных слоя.
          </p>
        </div>
      </section>
    </motion.main>
  )
}

export default UsagePage
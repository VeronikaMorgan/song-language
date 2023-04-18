import { FC } from "react";
import usageStyles from './usage.module.scss'
import styles from '../pages.module.scss'
import fundStyles from '../fundamentals/fundamentals.module.scss';
import ListItem from "../../components/list-item/list-item";
import Title from "../../components/title/title";
const UsagePage: FC = () => {
  return (
    <main className={styles.main}>
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
      <section className={styles.section}>
        <div className={styles.section__content}>
          <p className="text text_type_main">
            В основе разработанной нами технологии лежит понятие о многослойности песни.
            Любой песенный материал, рассматриваемый в качестве методического средства в обучении иностранному языку,
            можно разделить на два основных слоя.
          </p>
        </div>
      </section>
    </main>
  )
}

export default UsagePage
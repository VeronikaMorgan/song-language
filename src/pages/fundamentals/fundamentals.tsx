import { FC } from "react";
import ArrowLink from "../../components/arrow-link/arrow-link";
import { useAnimationContext } from "../../components/animated-route/animated-route";
import { RIGHT_LINK, LEFT_LINK } from "../../utils/constants";
import styles from '../pages.module.scss';
import { motion, useTransform, MotionValue } from "framer-motion";
import fundStyles from './fundamentals.module.scss';

import Title from "../../components/title/title";
import InfoBlock from "../../components/info-block/info-block";
import ListItem from "../../components/list-item/list-item";


interface FundamentalsPageProps {
  scrollY: MotionValue<number>
  offsetY: number[]
  showAnimation: boolean
}

const FundamentalsPage: FC = () => {
  const {showAnimation, scrollY, offsetY} = useAnimationContext()

  const marginTop = useTransform(scrollY, offsetY, offsetY)
  return (
    <motion.main className={styles.main} style={{marginTop : showAnimation ? marginTop : undefined}}>
      <Title text="Зачем это нам"/>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main">С&nbsp;каждым годом потребность общества в&nbsp;овладении иностранными языками стремительно растет.</p>
          <p className="text text_type_main">Изменившийся запрос общества диктует существенные изменения в&nbsp;системе образования&nbsp;&mdash; появились новые методики и&nbsp;средства обучения, способные облегчить и&nbsp;интенсифицировать образовательный процесс.</p>
          <p className="text text_type_main">Акцент ставится на&nbsp;максимально точное воссоздание реалий страны изучаемого языка, изучение лингвистических структур без отрыва от&nbsp;их&nbsp;&laquo;естественной среды обитания&raquo;</p>
          <p className="text text_type_main">Важную роль играет использование аутентичного материала&nbsp;&mdash;<br></br>литературных произведений, статей, фильмов, аудиозаписей и&nbsp;песен.</p>
          <p className="text text_type_main text_last">Особый интерес представляет песня, так как может служить многогранным средство обучения для развития всех четырех сторон речевой деятельности&nbsp;&mdash; аудированию, говорению, чтению и&nbsp;даже письму.</p>
        </div>
        <div className={fundStyles.intro__img}></div>
      </section>
      <section className={`${styles.section} ${styles.section_type_big} ${styles.section__flex}`}>
        <div className={fundStyles.integration__img}></div>
        <div className={styles.section__content}>
          <p className='text text_type_main'><span className="text_type_accented">Интегрирование </span>песенного материала в&nbsp;процесс обучения способствует формированию социокультурной компетенции учащихся, воспитанию уважительного отношения к&nbsp;культурам и&nbsp;народам и&nbsp;поддержанию устойчивого интереса к&nbsp;дальнейшему овладению языком, что является важнейшей задачей на&nbsp;пути к&nbsp;развитию толерантного общества.</p>
          <InfoBlock>
            <p className="text_type_large">
              Таким образом, обучаемый получает не&nbsp;просто лингвистические знания о&nbsp;языке&nbsp;&mdash; он&nbsp;познает культуру, менталитет, ценности и&nbsp;традиции народа, говорящего на&nbsp;нем
            </p>
          </InfoBlock>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main">В&nbsp;старшем школьном возрасте на&nbsp;первое место выходит учебно-профессиональная деятельность, в&nbsp;ходе которой активизируется процесс самопознания, вырабатываются нравственные идеалы, формируется мировоззрение и&nbsp;профессиональные интересы.</p>
          <p className="text text_type_main text_last">Ключевые особенности развития личности на&nbsp;данном этапе, следует учитывать при составлении программы обучения иностранному языку, особенно в&nbsp;сфере с&nbsp;уклоном на&nbsp;мультилингвальное образование.</p>
          <ArrowLink to='methods' text="Особенности преподавания второго иностранного языка" type={LEFT_LINK} />
        </div>
        <div className={fundStyles.pecularity__img}></div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={fundStyles.methods__img_wrapper}>
          <span className={`${fundStyles.methods__img_content} ${fundStyles.methods__img_content_type_top}`}>преподаватель</span>
          <div className={fundStyles.methods__img}></div>
          <span className={`${fundStyles.methods__img_content} ${fundStyles.methods__img_content_type_bottom}`}>песенный материал</span>
        </div>
        <div className={styles.section__content}>
          <p className="text text_type_main">Работа с&nbsp;песенным материалом включена во&nbsp;многие УМК, однако часто недооценивается или игнорируется преподавателями. Многие педагоги-практики выбирают традиционные произведения, не&nbsp;вызывающие интерес у&nbsp;учащихся. Деятельность в&nbsp;основном сводится к&nbsp;&laquo;прослушиванию&raquo; и&nbsp;бессознательному &laquo;заучиванию&raquo; текста, что сводит ее&nbsp;эффективность к&nbsp;нулю.</p>
          <p className="text text_type_main text_last"><span className="text_type_accented">Однако </span>песня является ценнейшим учебным материалом, многофункциональным методическим средством. Многие ученые отмечают эффективность данного средства для формирования дополнительной мотивации учащихся, что считается довольно трудной задачей.</p>
          <ArrowLink to='usage' text="Песня как методическое средство" type={RIGHT_LINK} />
        </div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main">На&nbsp;первый взгляд, работа с&nbsp;песенным материалом имеет много общего с&nbsp;работой над аудированием и&nbsp;так&nbsp;же подразделяется на&nbsp;3&nbsp;основных этапа -
          </p>
          <ul className={`${fundStyles.stages__list} list-default`}>
            <ListItem type="circle" textType="upperCase"><p>предтекстовый</p></ListItem>
            <ListItem type="circle" textType="upperCase"><p>текстовый</p></ListItem>
            <ListItem type="circle" textType="upperCase"><p>послетекстовый</p></ListItem>
          </ul>
          <p className="text text_type_main text_last">В&nbsp;то&nbsp;же время эффективное использование данного методического средства предполагает более обширный спектр работ и&nbsp;может включать средства языковой наглядности в&nbsp;виде видеоклипа или lyrics-видео, что позволяет нам расширить трех-шаговую систему.</p>
          <ArrowLink to='usage' text="Этапы работы с песней" type={LEFT_LINK} />
        </div>
        <div className={fundStyles.stages__img}></div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <ul className="list-default">
            <li className={fundStyles.usage__item}>семантический</li>
            <li className={fundStyles.usage__item}>языковой</li>
          </ul>
        </div>
        <div className={styles.section__content}>
          <p className="text text_type_main">В&nbsp;основе разработанной нами технологии лежит понятие о&nbsp;многослойности&nbsp; песни. Любой песенный материал, рассматриваемый в&nbsp;качестве методического средства в&nbsp;обучении иностранному языку, можно разделить на&nbsp;два основных слоя.</p>
          <p className="text text_type_main text_last">Данная методика состоит из&nbsp;5&nbsp;этапов и&nbsp;включает в&nbsp;себя два полных прослушивания песни, каждый из&nbsp;которых отвечает за&nbsp;работу с&nbsp;определённым слоем, служащим для выполнения конкретных задач, поставленных учителем иностранного языка.</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className="text text_type_main text_last">Экспериментальное обучение, проведенное на&nbsp;базе данной методики продемонстрировала ее&nbsp;эффективность. У&nbsp;экспериментальной группы оценки за&nbsp;выполнение заданий, четко направленных на&nbsp;демонстрацию речевых навыков значительно возрасло, мы&nbsp;можем наблюдать существенную динамику роста лексико&nbsp;&mdash; грамматических навыков.</p>
          <ArrowLink to='efficiency' text="Практическое примененией" type={LEFT_LINK} />
        </div>
        <div className={fundStyles.research__img}></div>
      </section>
    </motion.main>
  )
}

export default FundamentalsPage
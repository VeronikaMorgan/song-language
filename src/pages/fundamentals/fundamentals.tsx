import { FC } from "react";
import ArrowLink from "../../components/arrow-link/arrow-link";
import { RIGHT_LINK, LEFT_LINK } from "../../utils/constants";
import styles from '../pages.module.css';
import fundStyles from './fundamentals.module.css'
import InfoBlock from "../../components/info-block/info-block";

const FundamentalsPage: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={fundStyles.title}>Зачем это нам</h1>
      <section className={styles.section}>
        <div className={styles.section__content}>
          <p className="text text_type_main">С&nbsp;каждым годом потребность общества в&nbsp;овладении иностранными языками стремительно растет.</p>
          <p className="text text_type_main">Изменившийся запрос общества диктует существенные изменения в&nbsp;системе образования&nbsp;&mdash; появились новые методики и&nbsp;средства обучения, способные облегчить и&nbsp;интенсифицировать образовательный процесс.</p>
          <p className="text text_type_main">Акцент ставится на&nbsp;максимально точное воссоздание реалий страны изучаемого языка, изучение лингвистических структур без отрыва от&nbsp;их&nbsp;&laquo;естественной среды обитания&raquo;</p>
          <p className="text text_type_main">Важную роль играет использование аутентичного материала&nbsp;&mdash;<br></br>литературных произведений, статей, фильмов, аудиозаписей и&nbsp;песен.</p>
          <p className="text text_type_main">Особый интерес представляет песня, так как может служить многогранным средство обучения для развития всех четырех сторон речевой деятельности&nbsp;&mdash; аудированию, говорению, чтению и&nbsp;даже письму.</p>
        </div>
        <div className={fundStyles.intro__img}></div>
      </section>
      <section className={styles.section}>
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
      <section className={styles.section}>
        <div className={styles.section__content}>
          <p className="text text_type_main">В&nbsp;старшем школьном возрасте на&nbsp;первое место выходит учебно-профессиональная деятельность, в&nbsp;ходе которой активизируется процесс самопознания, вырабатываются нравственные идеалы, формируется мировоззрение и&nbsp;профессиональные интересы.</p>
          <p className="text text_type_main">Ключевые особенности развития личности на&nbsp;данном этапе, следует учитывать при составлении программы обучения иностранному языку, особенно в&nbsp;сфере с&nbsp;уклоном на&nbsp;мультилингвальное образование.</p>
          <ArrowLink to='usage' text="Особенности преподавания второго иностранного языка" type={LEFT_LINK} />
        </div>
        <div className={fundStyles.pecularity__img}></div>
      </section>
      <section className={styles.section}>
        <div className={fundStyles.methods__img_wrapper}>
          <span className={`${fundStyles.methods__img_content} ${fundStyles.methods__img_content_type_top}`}>преподаватель</span>
          <div className={fundStyles.methods__img}></div>
          <span className={`${fundStyles.methods__img_content} ${fundStyles.methods__img_content_type_bottom}`}>песенный материал</span>
        </div>
        <div className={styles.section__content}>
          <p className="text text_type_main">Работа с&nbsp;песенным материалом включена во&nbsp;многие УМК, однако часто недооценивается или игнорируется преподавателями. Многие педагоги-практики выбирают традиционные произведения, не&nbsp;вызывающие интерес у&nbsp;учащихся. Деятельность в&nbsp;основном сводится к&nbsp;&laquo;прослушиванию&raquo; и&nbsp;бессознательному &laquo;заучиванию&raquo; текста, что сводит ее&nbsp;эффективность к&nbsp;нулю.</p>
          <p className="text text_type_main"><span className="text_type_accented">Однако </span>песня является ценнейшим учебным материалом, многофункциональным методическим средством. Многие ученые отмечают эффективность данного средства для формирования дополнительной мотивации учащихся, что считается довольно трудной задачей.</p>
          <ArrowLink to='usage' text="Песня как методическое средство" type={RIGHT_LINK} />
        </div>
      </section>
    </main>
  )
}

export default FundamentalsPage
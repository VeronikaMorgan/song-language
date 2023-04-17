import { FC } from "react";
import methodsStyles from './methods.module.scss'
import { motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../../components/animated-route/animated-route";
import Title from "../../components/title/title";
import InfoBlock from "../../components/info-block/info-block";
import OrderedHeading from "../../components/ordered-heading/ordered-heading";
import MethodsSliderLg from "../../components/methods-sliders/methods-slider_lg/methods-slider-lg";
import ContentCard from "../../components/content-card/content-card";
import ScrollArea from "../../components/scroll-area/scroll-area";
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
        <MethodsSliderLg />
        <div className={methodsStyles.slider_descr}>
          <p className="text text_type_main">Наукометрический анализ мнений исследователей, характеризующих особенности овладения ИЯ2,
            позволил нам выделить ряд принципов, необходимых для реализации образовательного процесса. Дадим их краткую характеристику.
          </p>
        </div>
      </section >
      <section className={styles.section}>
        <OrderedHeading text="Песня как методическое средство в обучении иностранному языку" number={2} />
      </section>
      <section className={`${styles.section} ${styles.section_type_sm}`}>
        <div className={methodsStyles.material_img_first}></div>
        <div className={styles.section__content}>
          <p className="text text_type_main">Песня является ценнейшим учебным материалом, многофункциональным методическим средством.
            Многие ученые отмечают эффективность данного средства для формирования дополнительной мотивации учащихся,
            что считается довольно трудной задачей.</p>
          <p className="text text_type_main"><span className="text_type_accented">Ф. Херцберг</span> в своих исследованиях по психологии мотивации в сфере методики преподавания иностранных языков подчеркивает,
            что для достижения устойчивых результатов в обучении, большое значение имеет внутренняя мотивация ученика,
            связанная с удовольствием и проявлением любознательности.  Невозможно овладеть языком без мотивации, которая имеет три источника:
            потребность, обязанность и удовольствие
          </p>
          <p className="text">Работа с песней представляет собой новый и разнообразный вид деятельности, что стимулирует не только заинтересованность учеников,
            но и способствует процессу обучения. </p>
          <p className="text text_type_main"><span className="text_type_accented">Паоло Бальбони</span> уверен что, новизна — это механизм оценки (позитивной оценки),
            который вызывает возбуждение (положительную реакцию) и создает мотивацию и отсутствие эмоциональных барьеров.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.section__content}>
          <p className="text text_type_main">Структура песни (цикличная музыкальная тема, повторяющийся текст) стимулирует неосознанное глубокое запоминание языкового материала,
            что является основным преимуществом песни, как методического средства в обучении ИЯ. </p>
          <p className="text">Примером данного явления могут служить мелодии, используемые в коммерческих целях,
            которые откладываются в памяти после первого прослушивания и с легкостью воспроизводятся спустя долгое время.</p>
          <p className="text text_type_main">Именно благодаря тому, что многие учебные программы не включают постоянную работу с песенным материалом,
            песня не ассоциируется у учащихся с учебным процессом, что снижает чувство тревожности и стимулирует неосознанное запоминание лексико-грамматических единиц. </p>
          <InfoBlock>
            Данная дидактическая ценность песни подтверждается в гипотезе Крашена (1983) о правиле забывания,
            согласно которому глубокое усвоение языка облегчается, когда человек забывает, что он его изучает
          </InfoBlock>
        </div>
        <div className={methodsStyles.material_img_second}></div>
      </section>
      <section className={styles.section}>
        <div className={methodsStyles.functions__img}></div>
        <div className={methodsStyles.functions__wrapper}>
          <p className="text text_type_main text_last"><span className="text_type_accented">Г. Блелль и К.Хельвинг</span> <br></br> в своих работах о связи иностранного языка и искусства, выделяют следующие основные функции музыки,
            как средства обучения языку:
          </p>
        </div>
      </section>
      <section className={`${styles.section} ${methodsStyles.functions__cards}`}>
        <ContentCard color='--content-color-red' title="Обучающая" height="55vh">
          <ScrollArea width="10px" trackColor="#EBEBEB" thumbColor="#B85953">
            <p className="text text_type_sm"><span className="text_type_accented">Музыка</span> — это форма искусства, присутствующая во всем мире и разделяемая людьми разных культур,
              возрастов и языков. Генри Уодсворт Лонгфелло однажды сказал о музыке: </p>
            <p className="text text_type_sm" style={{ color: `var(--content-color-red)` }}>«Музыка — это универсальный язык человечества».</p>
            <p className="text text_type_sm">Таким образом, песни могут вызывать общие чувства и воспоминания у учащихся,
              даже если они принадлежат к разным культурам и языкам,
              тем самым способствуя созданию гармонии и сплоченности в классе. </p>
            <p className="text text_type_sm text_last"><span className="text_type_accented">В. Леви</span> писал, что музыка считается одним из самых эффективных способов воздействия на эмоциональную сферу школьников
              и представляет собой мощнейший психологический побудитель,
              проникающий в потаенные глубины сознания </p>
          </ScrollArea>
        </ContentCard>
        <ContentCard color='--content-color-yellow' title="Образовательная" height="55vh">
          <ScrollArea width="10px" trackColor="#EBEBEB" thumbColor="#F5BF6B">
            <p className="text text_type_sm"><span className="text_type_accented">Песня</span> представляет собой эффективное средство для усвоения лексического материала,
              способствует расширению словарного запаса.  </p>
            <p className="text text_type_sm">Песни способствуют активизации уже изученной лексики. В контексте песни,
              уже знакомые для учащихся лексические единицы предстают в новом контексте,
              могут иметь дополнительную коннотацию или переносное значение, это способствует развитию языковой догадки и ассоциаций.  </p>
            <p className="text text_type_sm">Также в песнях очень часто можно встретить имена собственные, некоторые географические названия, реалии страны изучаемого языка, современные слова и выражения, сленг</p>
            <p className="text text_type_sm">
              Использование данного материала играет огромную роль при формировании фонетических навыков учащихся.
              При обучении и совершенствовании произносительной стороне речи, песня представляет собой наглядный пример
              произношения, используемый носителями в реальной жизни. </p>
            <p className="text text_type_sm">Воспроизводя строчки из песни, ученики легче усваивают интонационный строй языка.
              Однако при работе с фонетическим аспектом следует учитывать, и обращать внимание учеников,
              что слова при пении могут фонологически изменяться по отношению к их нормальному тоническому акценту,
              чтобы согласовываться с ритмической структурой песни.</p>
            <p className="text text_type_sm">В основе коммуникативной методики лежит обучение грамматике на функциональной
              и интерактивной основе. При помощи песен, происходит быстрое усвоение и активизация новых грамматических структур,
              через проговаривание их в определенном контексте</p>
            <p className="text text_type_sm text_last">Использование данного метода на этапе введения нового материала помогает
              проиллюстрировать употребление языковых единиц не изолированно, а в аутентичном контексте. </p>
          </ScrollArea>
        </ContentCard>
        <ContentCard color='--content-color-light-green' title="Эмоциональная" height="55vh">
          <ScrollArea width="10px" trackColor="#EBEBEB" thumbColor="#AEDDB1">
            <p className="text text_type_sm"><span className="text_type_accented">Включение песен</span> в программу обучения языку способствует формированию социокультурной компетенции учеников.
              Существует множество песен отражающие реалии страны изучаемого языка (Toto Cutugno «L'Italiano»).</p>
            <p className="text text_type_sm">
              Песня дает возможность работы с социолингвистическим аспектом -
              исполнители являются носителями иностранного языка и нередко демонстрируют
              в пении особенности их географического происхождения (акцент, разные способы произношения некоторых слов).
              Данные знания играют огромную роль в изучении итальянского языка, который сильно варьируется в зависимости от региона.
            </p>
            <p className="text text_type_sm text_last">
              Средства выразительности и речевые клише, встречающиеся в строчках песни,
              помогают развить знания о стилистических особенностях иностранного языка,
              что приводит к более глубокому пониманию специфики иноязычной культуры, национального менталитета, истории,
              традиций и обычаев страны изучаемого языка</p>
          </ScrollArea>
        </ContentCard>
      </section>
      <section className={styles.section}>
       
      </section>
    </motion.main>
  )
}

export default MethodsPage
import { FC } from "react";
import usageStyles from './usage.module.scss'
import styles from '../pages.module.scss'
import fundStyles from '../fundamentals/fundamentals.module.scss';
import ListItem from "../../components/list-item/list-item";
import Title from "../../components/title/title";
import FlippingCardWrapper from "../../components/fipping-card/flipping-card-wrapper/flipping-card-wrapper";
import FlippingCardFace from "../../components/fipping-card/flipping-card-face/flipping-card-face";
import UsageSlider from "../../components/usage-slider/usage-slider";
import OrderedHeading from "../../components/ordered-heading/ordered-heading";
import ExampleBlock from "../../components/example-block/example-block";
import SongLink from "../../components/song-link/song-link";
import FixedBlock from "../../components/fixed/fixed";
import { songs } from "../../utils/mocks/songs";

import JoinExercise from "../../components/exercises/join/join";
import { joinData } from "../../utils/mocks/exercises/join";
import { FACE_TYPE_BACK, FACE_TYPE_FRONT, BLOCK_TYPE_LEFT, BLOCK_TYPE_RIGHT } from "../../utils/constants";
import { motion, useTransform } from "framer-motion";
import { useAnimationContext } from "../../components/animated-route/animated-route";


const UsagePage: FC = () => {
  const { showAnimation, scrollY, offsetY } = useAnimationContext();
  const marginTop = useTransform(scrollY, offsetY, offsetY);

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
          <div className={usageStyles.flip_card__descr}>
            <div className={usageStyles.flip_card__arrow}></div>
            <p className='text text_type_main text_last'>
              В основе разработанной нами технологии лежит понятие о многослойности песни.
              Любой песенный материал, рассматриваемый в качестве методического средства в обучении иностранному языку,
              можно разделить на два основных слоя.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section__flex}`}>
        <div className={styles.section__content}>
          <p className={`${usageStyles.slider__descr} text text_type_main`}>Данная методика состоит из 5 этапов и включает в себя два полных прослушивания песни,
            каждый из которых отвечает за работу с определённым слоем, служащим для выполнения конкретных задач,
            поставленных учителем иностранного языка.
          </p>
        </div>
        <UsageSlider />
      </section>
      <section className={styles.section}>
        <OrderedHeading text="Предтекстовый этап" number={1} className={styles.section__heading} />
        <div className={usageStyles.stages__grid}>
          <ExampleBlock color="--content-color-yellow" >
            <p>“Bella ciao è uno dei canti popolari italiani più conosciuti in tutto il mondo anche grazie al suo inserimento nella famosa serie Netflix “La casa di carta.”
            </p>
            <p>
              Bella Ciao viene associato ai partigiani e alla Resistenza: le parole del testo evocano la libertà, la lotta contro le dittature e l'opposizione agli estremismi,
              e per questa ragione Bella ciao è considerata la canzone un simbolo della Resistenza italiana nata durante la seconda guerra mondiale, quando si combatteva contro le truppe fasciste e naziste.”
            </p>
            <SongLink songName='bella ciao' />
          </ExampleBlock>
          <p className="text text_type_main text_last">Вводная речь учителя, несомненно, варьируется от выбранного материала,
            но в тоже время имеет два основных сценария. Если песня является отражением исторического периода или культурного движения в Италии,
            следует предоставить историческую справку, которая поможет ученикам понять исторический фон, послуживший основой ее создания,
            найти возможные отсылки в ее тексте намекающие на позицию автора или важные события. Речь учителя в этом случае должна содержать всю основную тематическую лексику:
          </p>
          <p className="text text_type_main text_last">В случае если песня посвящена общим темам любви и отношений,
            культурным особенностям итальянцев, социальным проблемам или несет юмористический посыл, учителю следует
            сосредоточится на интересных фактах об исполнителе, истории создания песни и ее названии.
            Отдельно стоит подчеркнуть связь песни с мировыми конкурсами, знакомыми ученикам фильмами и сериалами если таковые имеются, чтобы они смогли провести ряд собственных ассоциаций:
          </p>
          <ExampleBlock color="--content-color-light-green">
            <p>“Sicuramente lo sapete già: il gruppo rock Måneskin, dopo aver trionfato a Sanremo, ha vinto anche l'edizione 2021 di Eurovision.
              Era dal 1990 che un cantante italiano non vinceva questo concorso canoro internazionale. I Måneskin ci sono riusciti con la loro canzone vincitrice: “Zitti e buoni”. Innanzitutto analizziamo il titolo: in italiano, nell’espressione “zitti e buoni” c’è un imperativo, ovvero “state zitti e buoni!”
            </p>
            <p> Questa è una frase usata spesso dagli insegnanti nei confronti di quegli studenti che in classe disturbano lo svolgimento della lezione. È acquista però spesso una connotazione repressiva per molti allievi, che si sentono così forzati a non esprimere la loro vitalità e la loro creatività un po’ ribelle, tipica della loro età.
              Per questo questa canzone è invito alle giovani generazioni a non abbassare la testa e a continuare a inseguire i loro sogni, rifiutandosi di stare zitti e buoni.”</p>
            <SongLink songName='zitti e buoni' />
          </ExampleBlock>
        </div>
      </section>
      <section className={styles.section}>
          <div className={styles.section__flex}>
            <div className={styles.section__content}>
              <JoinExercise data={joinData}/>
            </div>
            <div className={styles.section__content}>
              <p className="text text_type_main">К основным, вызывающим у учеников трудности, языковым едини-цам можно отнести профессиональную,
                специальную и не частотную лек-сику, неправильные глаголы и многоэлементные модальные или времен-ные формы глаголов.
              </p>
              <p className="text text_type_main">При работе со сложными грамматическими структурами важно по-мочь ученикам образовать начальную форму сложных глаголов и их формы встречающиеся в тексте песни.
                Для облегчения задачи следует обо-значить спряжение глаголов.
              </p>
              <p className="text">На старшем этапе обучения лексика объясняется беспереводным способом, с помощью синонимов или фраз, раскрывающих основное семан-тическое значение языковых единиц.
                Это оказывает влияние на выбор упражнений, примерами которых могут служить следующие:
              </p>
            </div>
          </div>
      </section>
    </motion.main>
  )
}

export default UsagePage
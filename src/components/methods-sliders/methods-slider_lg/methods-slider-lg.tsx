import { FC } from "react";
import SliderContainer from "../../slider/slider-container/slider-container";
import Slide from "../../slider/slide/slide";
import ListItem from "../../list-item/list-item";
import { SLIDER_LG } from "../../../utils/constants";
import styles from './methods-slider-lg.module.scss';

const MethodsSliderLg: FC = () => {
  return (
    <SliderContainer height="66vh" maxWidth="42%">
      <Slide title="Принцип сопоставления" type={SLIDER_LG}>
        <p className="text text_type_sm">При сопоставлении языковых систем, введении различных языковых опор происходит облегчение 
          и ускорение запоминания языкового материала, тем самым весь процесс обучения становится легче. 
          Этими языковыми опорами могут являться:</p>
      <ul className={`${styles.list} list-default`}>
        <ListItem textType="default" type="star">
          <p className="text_type_sm">
          лексические единицы схожие в произношении, написании или словообразовании (to dance – dansare, машина – macchina);
          </p>
        </ListItem>
        <ListItem textType="default" type="star">
          <p className="text_type_sm">способ образования временных форм (i am reading while… - io sto leggendo mentre...);
          </p>
        </ListItem>
        <ListItem textType="default" type="star">
          <p className="text_type_sm">
          использование глагола-связки (this flower is beautiful – quest fiore è bello);
          </p>
        </ListItem>
        <ListItem textType="default" type="star">
          <p className="text_type_sm">
          использование назывных структур (there is/there are - c'è/ci sono);
          </p>
        </ListItem>
        <ListItem textType="default" type="star">
          <p className="text_type_sm">
          наличие системы артиклей (a, the – un, il)
          </p>
        </ListItem>
      </ul>
      </Slide>
      <Slide title="Принцип интенсификации" type={SLIDER_LG}>
        <div className={styles.wrapper}>
          <p className="text text_type_sm">Процесс овладения вторым иностранным языком (ИЯ2) может быть значительно интенсифицирован,
            особенно на начальном этапе обучения. Облегчить процесс вхождения в новый язык могут облегчить ряд факторов:</p>
          <ul className={`${styles.list} list-default`}>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                изначальное владение латиницей помогает свести период алфабетизации к минимуму, объяснив лишь звукобуквенные особенности и графический образ слов нового языка.
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">наличие существенного словарного запаса первого иностранного языка значительно облегчает обучение чтению и усвоение лексики нового языка.
              </p>
            </ListItem>
          </ul>
        </div>
        <div  className={`${styles.wrapper_decor_type_bottom} ${styles.second_slide_bottom}`}></div>
      </Slide>
      <Slide title="Принцип коммуникативности" type={SLIDER_LG}>
        <div className={styles.wrapper}>
          <p className="text text_type_sm">Объем лингвистических знаний, полученный из родного языка и первого иностранного языка (ИЯ1), помогает учащимся осуществлять коммуникативную деятельность даже на начальном этапе обучения ИЯ2.</p>
          <p className="text text_type_sm">Принцип интенсификации процесса обучения позволяет преподавателю сконцентрироваться на достижении главной цели обучения – формировании коммуникативной компетенции. Доминирующими видами деятельности на уроке становятся:</p>
          <ul className={`${styles.list} list-default`}>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                монолог
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">диалог
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                дискуссия
              </p>
            </ListItem>
          </ul>
          <div className={`${styles.wrapper_decor_type_bottom} ${styles.third_slide_bottom}`}></div>
        </div>
      </Slide>
      <Slide title="Принцип сознательности" type={SLIDER_LG}>
        <div className={styles.wrapper}>
          <p className="text text_type_sm">Процесс обучения ИЯ2 должен носить когнитивно-коммуникативный характер.Вся речевая деятельность должна быть органично вплетена в интеллектуально - эмоциональный контекст другой деятельности на уроке</p>
          <p className="text text_type_sm"> При преподавании ИЯ2 особенно важен тщательный отбор средств обучения. Предпочтение отдается:</p>
          <ul className={`${styles.list} list-default`}>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
              аутентичным, актуальным материалам (аудио- и видеофрагменты, тексты)
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">материалам, способным вызвать эмоциональный отклик у учащихся, стимулируя их на речевое высказывание.
              </p>
            </ListItem>
          </ul>
        </div>
      </Slide>
    </SliderContainer>
  )
}

export default MethodsSliderLg
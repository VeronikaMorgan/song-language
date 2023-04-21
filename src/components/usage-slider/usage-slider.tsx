import { FC } from "react";
import SliderContainer from "../slider/slider-container/slider-container";
import Slide from "../slider/slide/slide";
import { SLIDER_LG } from "../../utils/constants";
import ListItem from "../list-item/list-item";
import sliderStyles from './usage-slider.module.scss';

const UsageSlider: FC = () => {
  return (
    <SliderContainer height="66vh" maxWidth="42%">
      <Slide title="Предтекстовый" type={SLIDER_LG}>
        <p className="text text_type_sm">Данный этап напрямую влияет на то, будет ли дальнейшая деятельность продуктивной и результативной.
          На предтекстовом этапе, преподаватель ставит перед собой 2 основных задачи.</p>
        <p className="text text_type_sm"><span className="text text_type_accented">Первая задача </span> заключается в стимулировании интереса учеников к теме урока и определении в ней роли песни.
          Учитель рассказывает об исполнителе, предлагает  ученикам предположить жанр по названию или дает историческую справку. Благодаря данному шагу, и легкой коммуникации, который он предполагает, ученики включаются в работу,
          появляется интерес к дальнейшему прослушиванию. </p>
        <p className="text text_type_sm text_last"><span className="text text_type_accented">Второй задачей </span> является подготовка учащихся к прослушиванию и снятии трудностей.
          В предварительной проработке нуждаются ключевые для понимания общего контекста лексико-грамматические единицы, смысл которых непонятен даже при помощи языковой догадки. </p>
      </Slide>
      <Slide title="Первый текстовый" type={SLIDER_LG}>
        <div>
          <p className="text text_type_sm">Основная цель первого прослушивания лежит в ознакомлении учеников с песней в целом, ее основной темой, идеей, смысловым содержанием и настроением, которое она несет.</p>
          <p className="text text_type_sm">Первичное прослушивание подразумевает выполнения упражнений, которые служат лишь для стимуляции осознанной деятельности и концентрации: </p>
          <ul className={`${sliderStyles.list} list-default`}>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                ответы на основные вопросы
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                составление частей текста в парах
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                выписывание слов, относящихся к одной тематической группе
              </p>
            </ListItem>
          </ul>
        </div>
      </Slide>
      <Slide title="Второй текстовый" type={SLIDER_LG}>
        <div>
          <p className="text text_type_sm">На данном этапе раскрывается весь потенциал песни как методического средства в развитии лексико-грамматических навыков. </p>
          <p className="text text_type_sm">Песня выступает в качестве основы для выполнения разнообразных образовательных задач:</p>
          <ul className={`${sliderStyles.list} list-default`}>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                повторение изученной лексики по теме
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                усвоение дополнительной лексики по теме
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                активизация новых грамматических структур в контексте
              </p>
            </ListItem>
            <ListItem textType="default" type="star">
              <p className="text_type_sm">
                преобразование новых грамматических структур
              </p>
            </ListItem>
          </ul>
        </div>
      </Slide>
      <Slide title="Послетекстовый" type={SLIDER_LG}>
        <div className={`${sliderStyles.wrapper} ${sliderStyles.wrapper_after_text_slide}`}>
          <p className="text text_type_sm">Четвертый этап заключается не только в проверке выполненных при повторном прослушивании заданий, но и в закреплении нового языкового материала в последующих упражнениях. </p>
          <p className="text text_type_sm">Учитель может отойти от текста песни, используя упражнения, в которых знакомые языковые единицы используются в новом контексте, приобретают дополнительные значения и коннотации. </p>
          <p className="text text_type_sm">
            Предпочтение отдается аутентичным, актуальным
            материалам (аудио- и видеофрагменты, тексты), способным вызвать эмоциональный
            отклик у учащихся, стимулируя их на речевое высказывание.
          </p>
        </div>
      </Slide>
      <Slide title="Продуктивно-творческий" type={SLIDER_LG}>
        <div className={`${sliderStyles.wrapper} ${sliderStyles.wrapper_art_slide}`}>
          <p className="text text_type_sm">Последний этап отвечает основной цели обучения иностранному языку, а именно формированию элементов иноязычной коммуникационной компетенции. </p>
          <p className="text text_type_sm">С помощью наводящих вопросов учитель стимулирует учеников на монологическую, диалогическую речь или совместную дискуссию.</p>
          <p className="text text_type_sm text_last">Учащиеся, выражая свое мнение, самостоятельно проговаривая лексико-грамматические единицы по теме, учатся употреблять их в своем контексте, что помогает осознанному и эффективному запоминанию материала. </p>
        </div>
      </Slide>
    </SliderContainer>
  )
}

export default UsageSlider
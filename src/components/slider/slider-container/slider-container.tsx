import React, { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import sliderStyles from './slider-container.module.scss'

interface ISliderContainerProps {
  children: React.ReactNode
  width?: string
  height?: string
  maxWidth?: string
}

const SliderContainer: FC<ISliderContainerProps> = ({ children, width, height, maxWidth }) => {

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const [direction, setDirection] = useState<'prev' | 'next'>('next')
  const slidesIndexes = React.Children.count(children) - 1

  const handleNextSlide = () => {
    activeSlideIndex === slidesIndexes ? setActiveSlideIndex(0) : setActiveSlideIndex(activeSlideIndex + 1)
    setDirection('next')
  }

  const handlePrevSlide = () => {
    activeSlideIndex === 0 ? setActiveSlideIndex(slidesIndexes) : setActiveSlideIndex(activeSlideIndex - 1)
    setDirection('prev')
  }

  const activeSlide = React.Children.toArray(children)[activeSlideIndex] as React.ReactElement

  return (
    <div className={sliderStyles.main_slider} style={{ maxWidth: maxWidth ? maxWidth : undefined, width: width ? width : undefined, height: height ? height : undefined }}>
      <div className={sliderStyles.main_slider__container}>
        <button className={sliderStyles.main_slider_button_left} onClick={handlePrevSlide}></button>
        <button className={sliderStyles.main_slider_button_right} onClick={handleNextSlide}></button>
        {React.cloneElement(activeSlide, { direction: direction })}
      </div>
    </div>
  )
}

export default SliderContainer
import { Outlet, useOutletContext } from "react-router";
import useIntro from "../../utils/use-intro-hook";
import { MotionValue, useScroll } from "framer-motion";
import { FC } from "react";

type TContext = {
  showAnimation: boolean
  scrollY: MotionValue<number>
  offsetY: number[]
}

export function useAnimationContext () {
  return useOutletContext<TContext>()
}

const AnimatedRoute: FC = () => {
  const showAnimation = useIntro()
  const {scrollY} = useScroll()
  const offsetY = [0, 500]
  return <Outlet context={{showAnimation, offsetY, scrollY}}/>
}

export default AnimatedRoute
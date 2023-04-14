import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from 'framer-motion';

const useIntro = () => {
  console.log('here')
  const { scrollY } = useScroll()

  const location = useLocation()
  const storage = window.sessionStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

  const timeLimit = 1 * 30 * 60 * 1000; //30 minutes

  const hasTimePassed = currTimestamp - timestamp > timeLimit;
 
  // let hasScrolled = false

  // useEffect(() => {
  //   if (hasTimePassed) {
  //     scrollY.on('change', y => {
  //       console.log('fg')
  //       if(y === 0) {
  //         hasScrolled = true;
  //         console.log('scrolled', hasScrolled)
  //         return
  //       }
  //     })
  //   }
  // }, [hasTimePassed, scrollY])

  useEffect(() => {
    hasTimePassed ?
      storage.setItem('timestamp', currTimestamp.toString())
      :
      storage.setItem('timestamp', timestamp.toString());
  }, [location.pathname]);

  return hasTimePassed
};

export default useIntro;

// for every page

export const useIntroPage = () => {

  const location = useLocation()
  const urlPath = location.pathname
  const storage = window.localStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem(`timestamp${urlPath}`) || '1000');

  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed ?
      storage.setItem(`timestamp${urlPath}`, currTimestamp.toString())
      :
      storage.setItem(`timestamp${urlPath}`, timestamp.toString());
  }, []);

  return hasTimePassed;
};

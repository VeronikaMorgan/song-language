import { FC } from "react";
import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { TSong } from "../../types/prop-types";
import { useAppSelector } from "../../utils/hooks/typed-app-hooks";
import { findSongByName } from "../../utils/helpers";
import styles from './song-link.module.scss';


const wrapperMotion = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      duration: .5,
      ease: easeInOut,
      bounce: .7
    }
  }
}

const pathMotion = {
  rest: {
    fill: `var(--main-text-color)`,
    opacity: .5,
  },
  hover: {
    fill: `var(--content-color-red)`,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: .3,
      ease: easeInOut,
    }
  }
}

interface ISongLinkProps {
  songName: string
}
const SongLink: FC<ISongLinkProps> = ({ songName }) => {
  const songs = useAppSelector(store => store.songs.songs)
  const [song, setSong] = useState<TSong | null>()

  useEffect(() => {
    if (!!songs) {
      const data = findSongByName(songName, songs)
      !!data && setSong(data)
    }
  }, [songs])

  return (
    !!song ? (
      <motion.button className={styles.wrapper} onClick={() => window.open(song.link)} variants={wrapperMotion} whileHover='hover' initial='rest' animate='rest'>
        <motion.svg width="42" height="27" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={pathMotion} d="M70 13.9827C70 6.24606 63.1858 0 54.7456 0H15.2544C6.81416 0 0 6.24606 0 13.9827V31.0174C0 38.7539 6.81416 45 15.2544 45H54.7456C63.1858 45 70 38.7539 70 31.0174V13.9827ZM45.0664 23.3517L29.3473 31.3013C28.6504 31.6562 28.031 31.1593 28.031 30.4495V14.1956C28.031 13.4858 28.6504 12.989 29.3473 13.3438L45.2212 21.6483C45.9181 22.0741 45.7633 22.9968 45.0664 23.3517Z" fill="#474444" fillOpacity="0.8" />
        </motion.svg>
        <motion.div className={styles.name__wrapper} >
          <p>{song.name}</p>
          {song.performer && <p className='text_type_sm'>by {song.performer}</p>}
        </motion.div>
      </motion.button>
    ) : (<></>)
  )
}

export default SongLink
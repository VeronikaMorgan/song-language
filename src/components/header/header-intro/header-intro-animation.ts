export const navAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2,
      ease: 'ease'
    }
  }
}

export const navItem = {
  hidden: {
    opacity: 0,
    y: '-30px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5
    }
  }
}
export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: '-50px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: 'spring',
      bounce: 0.5
    }
  }
}


export const leafAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    x: 20,
    y: '330px',
    rotate: 0
  },
  show: {
    width: 415,
    opacity: 1,
    rotate: 105,
    y: 0,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.5,
      ease: 'easeInOut'
    }
  }
}

export const boyAnimation = {
  hidden: {
    opacity: 0,
    x: '-50px',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

export const logoAnimation = {
  hidden: {
    opacity: 0,
    x: '-50px',
    y: '-50px'
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

export const buttonAnimation = {
  hidden: {
    opacity: 0,
    x: '50px',
    y: '-50px'
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      bounce: 0.6
    }
  }
}

export const headerWrapperAnimation = {
  hidden: {
    opacity: 1,
    height: '100%'
  },
  show: {
    height: '0px',
    opacity: 0,
    transition: {
      delay: 5,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}
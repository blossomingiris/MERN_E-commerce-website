import { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.css'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisable(true)
    } else {
      setIsVisable(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisable ? (
    <div className={styles.arrow} onClick={scrollToTop}>
      <IoIosArrowUp className={styles.arrow_icon} />
    </div>
  ) : (
    <div className={styles.arrow_no_visability} onClick={scrollToTop}>
      <IoIosArrowUp className={styles.arrow_icon} />
    </div>
  )
}

export default ScrollToTop

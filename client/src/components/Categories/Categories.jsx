import styles from './Categories.module.scss'
import video from '../../assets/other/video.mp4'
import { categories } from '../../data/data'
import Category from './Category/Category'

function Categories() {
  return (
    <section className={styles.categories_container}>
      <div className={styles.categories_desc}>
        <p>
          Meet our Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos facilis laborum non iusto praesentium distinctio obcaecati
          nulla? Sunt, quis temporibus.
        </p>
      </div>

      <div className={styles.categories_wrapper}>
        <div className={styles.categories_container_left}>
          {categories.map((item) => (
            <Category item={item} key={item.id} />
          ))}
        </div>
        <div className={styles.categories_container_right}>
          <video
            src={video}
            className={styles.categories_video}
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>
    </section>
  )
}

export default Categories

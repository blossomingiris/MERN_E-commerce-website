import styles from './Difference.module.scss'

function Difference({ title, image }) {
  console.log(image)
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h6 className={styles.desc}>Transparency</h6>
        <h1 className={styles.title}>{title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
          saepe, quae numquam suscipit sequi quibusdam blanditiis provident
          itaque nemo adipisci? Illum consequuntur vero enim facere ducimus
          modi? Eius odit animi aperiam similique molestias sit! Quo distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
          saepe.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
        </p>{' '}
        <br />
      </div>
      <div className={styles.image_wrapper}>
        {/* <img src={require(`../../assets/others/${image}`)} alt={title} /> */}
        <img src={require(`../../assets/other/${image}`)} alt='' />
      </div>
    </div>
  )
}

export default Difference

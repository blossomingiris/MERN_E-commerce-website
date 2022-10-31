import React from 'react'
import styles from './AboutUsPage.module.scss'
import image from '../../../assets/other/about_us.jpg'

function AboutUsPage() {
  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <img src={image} alt='founders' />
      </div>

      <div className={styles.content_wrapper}>
        {' '}
        <h6>Our story</h6>
        <h1>Who we are</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
          amet voluptas ea dolorem odit totam dolor tempora, est facilis non
          quis sequi dicta facere minus laudantium commodi molestiae dolore?
          Recusandae vitae aliquam voluptatum corrupti! Atque perspiciatis
          expedita quis. Aut at dolor soluta sit dolore omnis quaerat incidunt.
          Deserunt nisi dolorum repellendus, hic qui impedit alias quasi officia
          sapiente error. Totam, illum officia? Odit tempore impedit vero
          nostrum nulla. Ducimus incidunt laboriosam a animi. Sunt deleniti nisi
          ipsam. Quisquam beatae eos quia, architecto dicta officia cumque
          exercitationem atque esse unde? <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          maiores, corrupti, enim laboriosam soluta expedita eos blanditiis eum
          modi doloremque temporibus magni sit maxime, doloribus saepe porro
          cumque quod autem? Tempora perferendis expedita provident voluptates
          ut fugit est, laboriosam repellat incidunt ab neque. Ex, facere eum
          nesciunt ea exercitationem ab placeat soluta molestiae. Eius repellat,
          ipsam eaque asperiores laudantium rerum! <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam,
          earum voluptatum accusantium, magni ullam sint eaque eligendi nostrum
          architecto minus tempore quo saepe sequi aperiam voluptas atque
          suscipit voluptate! Iste natus eum dolore odio molestias maiores
          delectus fugiat veritatis odit quod, ab ullam pariatur doloremque at
          quisquam, perspiciatis quo quis velit vel. Odio aliquid at inventore
          modi! Quisquam, cupiditate!
        </p>
      </div>
    </section>
  )
}

export default AboutUsPage

import styles from './../../styles/home/designer.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { useEffect } from 'react'
import Circle from '../global/circle'

gsap.registerPlugin(ScrollTrigger)


const title = gsap.timeline()
const button = gsap.timeline()

export default function Designer() {

  useEffect(() => {
    title.to('#message', {
      yPercent: -200,
      opacity: 0,
      duration: 0.75
    })

    button.to('#button', {
      opacity: 1
    })


    ScrollTrigger.create({
      animation: title,
      trigger: "#Main",
      markers: true,
      start: "4%",
      end: "7%",
      toggleActions: "play play none reverse"
    })

    ScrollTrigger.create({
      animation: button,
      trigger: "#Main",
      markers: true,
      start: "9%",
      end: "15%",
      toggleActions: "play play none reverse"
    })

  })

  return (
    <section className={styles.main} id="main">
      <div className={styles.image}>
        <div className={styles.message} id="message">
          <h1>title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum ipsum ex cum sint a necessitatibus aperiam. Nulla, nemo magni sapiente nihil ex ullam quo omnis ad exercitationem, illo eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque, labore tempore perferendis at provident totam tenetur eveniet ad aut sunt culpa qui, voluptate consequatur animi quos quod assumenda aperiam!</p>
        </div>
        <Circle left="20%" top="10%" />
        <Circle left="80%" top="80%" />
      </div>
    </section>
  )
}
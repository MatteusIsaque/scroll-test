import styles from './../../styles/global/circle.module.scss'

type position = {
  left: string
  top: string
}

export default function Circle({ left, top }: position) {


  return (
    <div className={styles.button} id="button" style={{ left: left, top: top }} />
  )
}
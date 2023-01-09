import React from 'react'
import styles from './sidebarOption.module.css'

type Props = {
  text: string
  Icon: any
  active: boolean
}

function SidebarOption({ text, Icon, active }: Props) {
  return (
    <div
      className={`${styles.sidebarOption} ${
        active ? `${styles.sidebarOption__active}` : ''
      }`}
    >
      <Icon className={styles.MuiSvgIcon} />
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default SidebarOption

import React from 'react'
import styles from './sidebarOption.module.css'

type Props = {
  text: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

function SidebarOption({ text, Icon }: Props) {
  return (
    <div className={styles.sidebarOption}>
      <Icon className={styles.MuiSvgIcon} />
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default SidebarOption

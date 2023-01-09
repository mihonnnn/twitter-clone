import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'
import styles from './sidebar.module.css'

function sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* ツイッターアイコン */}
      <TwitterIcon className={styles.sidebar__twitterIcon} />

      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon} active={false} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} active={false} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} active={false} />
      <SidebarOption
        text="ブックマーク"
        Icon={BookmarkBorderIcon}
        active={false}
      />
      <SidebarOption text="リスト" Icon={ListAltIcon} active={false} />
      <SidebarOption
        text="プロフィール"
        Icon={PermIdentityIcon}
        active={false}
      />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} active={false} />

      {/* ツイートボタン */}
      <Button variant="outlined" className={styles.sidebar__tweet} fullWidth>
        ツイートする
      </Button>
    </div>
  )
}

export default sidebar

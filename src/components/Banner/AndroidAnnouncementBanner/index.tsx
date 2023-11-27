import { Trans } from '@lingui/macro'
import { InterfaceElementName } from '@uniswap/analytics-events'
import { useScreenSize } from 'hooks/useScreenSize'
import { useLocation } from 'react-router-dom'
import { useHideAndroidAnnouncementBanner } from 'state/user/hooks'
import { ThemedText } from 'theme/components'
import { useIsDarkMode } from 'theme/components/ThemeToggle'
import { openDownloadApp } from 'utils/openDownloadApp'
import { isMobileSafari } from 'utils/userAgent'

import androidAnnouncementBannerQR from '../../../assets/images/androidAnnouncementBannerQR.png'
import darkAndroidThumbnail from '../../../assets/images/AndroidWallet-Thumbnail-Dark.png'
import lightAndroidThumbnail from '../../../assets/images/AndroidWallet-Thumbnail-Light.png'
import {
  Container,
  DownloadButton,
  PopupContainer,
  StyledQrCode,
  StyledXButton,
  TextContainer,
  Thumbnail,
} from './styled'

export default function AndroidAnnouncementBanner() {
  return null;
}

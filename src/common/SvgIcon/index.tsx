import { SvgIconProps } from '../types'
import { StyledImg } from './styles'

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <StyledImg src={`/img/svg/${src}`} alt={src} width={width} height={height} />
)

import { BackgroundImageProps } from '../types'
import { StyledSVG } from './styles'

export const BackgroundImage = ({ src }: BackgroundImageProps) => {
  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <img
        src={`/img/normal/${src}`}
        alt="happy team image"
        style={{ width: '100%', display: 'block' }}
      />
      <StyledSVG viewBox="0 0 500 500">
        {/* <polygon points="0,0 0,500 500,500 500,0" color="dark"/> */}
        <circle cx={250} cy={150} r={100} />
      </StyledSVG>
    </div>
  )
}

// export default BackgroundImage;

import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { Container, TextWrapper, Content } from './styles'

interface Props {
  title: string
  content: string
  t: TFunction
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h5>{t(title)}</h5>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  )
}

export default withTranslation()(Block)

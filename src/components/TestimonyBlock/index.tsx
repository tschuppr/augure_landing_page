import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Container from "../../common/Container";
import { TestimonyBlockSection, ContentWrapper,CardWrapper,MinPara,Name,Title } from "./styles";

interface TestimonyBlockProps {
  title: string;
  content: string;
  elements?: {
    name: string;
    text: string;
  }[];
  id: string;
  t: TFunction;
}

const TestimonyBlock = ({ title, content, elements, t, id}: TestimonyBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
        
    <TestimonyBlockSection>
        <Container>
            <Slide direction="down" triggerOnce>
                <Row justify="center" align="middle" id={id}>
                    <ContentWrapper>
                        {/* <Col lg={32} md={32} sm={32} xs={32}> */}
                        <Title>{t(title)}</Title>
                        {/* <h6 color="">{t(title)}</h6> */}
                        {<CardWrapper>
                            <Row justify="space-evenly" align="middle">
                                {typeof elements === "object" &&
                                    elements.map(
                                    (
                                        item: {
                                        name: string;
                                        text: string;
                                        },
                                        id: number
                                    ) => {
                                        return (
                                        <Col key={id} lg={10} md={10} sm={10} xs={10}>
                                            <MinPara>{t(item.text)}</MinPara>

                                            <Name>{t(item.name)}</Name>
                                        </Col>
                                        );
                                    }
                                )}
                            </Row>
                        </CardWrapper>}
                        {/* </Col> */}
                    </ContentWrapper>
                </Row>
            </Slide>
        </Container>
    </TestimonyBlockSection>
  );
};

export default withTranslation()(TestimonyBlock);

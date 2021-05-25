import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import sierpinskiTriangle from '../img/sierpinski-triangle.png'

export default function Mission() {
    return (
        <section id="contest">
            <Container className="position-relative">
                <Row>
                    <Col>
                        <Fade triggerOnce direction="left" className="reveal-fade" style={{ left: -500 }}>
                            <img src={sierpinskiTriangle} alt="" id="sierpinski-triangle"/>
                        </Fade>
                    </Col>
                    <Col md={5}>
                        <h1 className="font-w400 text-black">mission<span className="text-primary">.</span></h1>
                        <p>Mathematics is all about using concepts in innovative ways to approach problems from different perspectives.</p>
                        <p>The satisfaction of solving a problem that at first seemed impossible cannot be described and is what drives many mathematicians to this day.</p>
                        <p>We want to give high-reaching high school students a chance to experience this satisfaction, and allow them to apply their knowledge in a different, more explorative way.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

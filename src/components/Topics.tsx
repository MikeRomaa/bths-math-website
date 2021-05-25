import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import primeFactors from '../img/prime-factors.png'

export default function Topics() {
    return (
        <section id="topics">
            <Container>
                <Row>
                    <Col md={5}>
                        <h1 className="font-w400 text-black">topics<span className="text-primary">.</span></h1>
                        <table className="mb-3">
                            <colgroup>
                                <col width="1%"/>
                                <col width="90%"/>
                            </colgroup>
                            <tr>
                                <td className="pb-1 pr-2 text-center font-w200">x&sup2;</td>
                                <td>Algebra</td>
                            </tr>
                            <tr>
                                <td className="pb-1 pr-2 text-center font-w200">&#9651;</td>
                                <td>Geometry</td>
                            </tr>
                            <tr>
                                <td className="pb-1 pr-2 text-center font-w200">sin</td>
                                <td>Trigonometry</td>
                            </tr>
                            <tr>
                                <td className="pb-1 pr-2 text-center font-w200">&infin;</td>
                                <td>Number Theory</td>
                            </tr>
                        </table>
                        <p>The questions on the contest only required common core knowledge of mathematics, and assume no prior experience with math contests.</p>
                        <p className="mb-0">The questions are written to be both challenging and fun to solve, and are unlike SAT or regents exam questions.</p>
                    </Col>
                    <Col>
                        <Fade triggerOnce direction="right" className="reveal-fade" style={{ right: -300 }}>
                            <img src={primeFactors} alt="" id="prime-factors"/>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

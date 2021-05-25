import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import gameOfLife from '../img/game-of-life.png'

export default function Contest() {
    return (
        <section id="contest">
            <Container>
                <Row className="mb-4">
                    <Col md={8}>
                        <h1 className="font-w400 text-black">the contest<span className="text-primary">.</span></h1>
                        <p>Entry into the contest is recommended to any high-achieving math students in New York State who have not yet been exposed to math competitions or are relatively new to them.</p>
                        <p>If you’ve qualified for AIMEs or been on the math team for many years, this probably isn’t the contest for you :(</p>
                        <p>Our contest is split up into the following three rounds:</p>
                    </Col>
                    <Col>
                        <Fade triggerOnce direction="down" className="reveal-fade">
                            <img src={gameOfLife} alt="" id="game-of-life"/>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h4 className="font-w400 text-black">individual - <span className="text-primary">60min</span></h4>
                        <p className="mb-0">For the individual round, participants will independently solve a series of challenging and interesting questions.</p>
                    </Col>
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h4 className="font-w400 text-black">team - <span className="text-primary">60min</span></h4>
                        <p className="mb-0">For the team round, participants will be placed on a team of fellow problem-solvers to solve another series of questions collaboratively.</p>
                    </Col>
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h4 className="font-w400 text-black">relay - <span className="text-primary">60min</span></h4>
                        <p className="mb-0">For the relay round, student will receive three questions.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
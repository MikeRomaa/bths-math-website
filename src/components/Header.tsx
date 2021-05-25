import { Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { Fade } from 'react-awesome-reveal'
import background from '../img/homepage-bg.jpg'

export default function Header() {
    return (
        <Parallax bgImage={background} strength={400} className="mb-5 header-parallax">
            <Fade triggerOnce delay={100} duration={1000}>
                <section id="header">
                    <Container>
                        <h1 id="header-title" className="font-w700 text-white">BTHS MAΘ INVITATIONAL MATH COMPETITION</h1>
                        <h1 id="header-year" className="font-w900">2021</h1>
                        <h4 id="header-date" className="font-w400 text-white">Date to be determined soon&trade;</h4>
                    </Container>
                </section>
            </Fade>
        </Parallax>
    )
}

import { Container } from 'react-bootstrap'
import { IoLogoGithub } from 'react-icons/all'

export default function Footer() {
    return (
        <footer className="bg-black" id="footer">
            <Container>
                <div className="mb-4">
                    <h4 className="font-w600 text-white mb-1">Mu Alpha Theta.</h4>
                    <h5 className="font-w300 text-white">Brooklyn Technical High School</h5>
                </div>
                <p className="font-sm text-white mb-0">&copy; 2021. All Rights Reserved</p>
                <p className="font-sm font-w200 text-white mb-0">
                    <a href="https://github.com/MikeRomaa/bths-math-website" target="_blank" rel="noreferrer" className="mr-2">
                        Open source on <IoLogoGithub size={20} className="fill-white" viewBox="0 20 500 500"/>
                    </a>
                    <span className="mr-2">|</span>
                    <span>Site design by&nbsp;
                        <a href="https://github.com/MikeRomaa" target="_blank" rel="noreferrer">
                            Michael Romashov
                        </a>
                    </span>
                </p>
            </Container>
        </footer>
    )
}

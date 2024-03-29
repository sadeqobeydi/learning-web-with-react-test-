import { Col , Row } from "react-bootstrap";
import './footer.css'

function Footer(){
    return (
        <>
            <footer>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" className="footersvg">
                    <path fill="#eee" 
                        fill-opacity="1" 
                        d="M0,128L60,112C120,96,240,64,360,90.7C480,117,600,203,720,213.3C840,224,960,160,1080,149.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>

                <Row className="myfooter align-item-center justify-content-center">
                    <Col className="text-center">ستون1</Col>
                    <Col className="text-center">ستون2</Col>
                    <Col className="text-center">ستون3</Col>
                </Row>
        </footer>
        </>
    )
}

export default Footer
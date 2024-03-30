import { Col , Container, Row } from "react-bootstrap";
import './footer.css'
import { RiInstagramFill } from "react-icons/ri";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";





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
            <Row className="myfooter pt-5">
                <div className="icon-content d-flex justify-content-center my-5">
                    <BsTelegram size="28px" color="#156ca7"/>
                    <RiInstagramFill size="30px" color="#a71576"/>
                    <PiWhatsappLogoFill size="33px" color="#15a76f"/>
                    <FaFacebook size="30px" color="#1548a7"/>
                </div>

                <div className="link-box pb-5">
                       <a href="#"> قوانین و مقررات</a>
                       <a href="#"> خدمات و نحوه پرداخت ها</a>
                       <a href="#"> تقاضای بازگشت وجه</a>
                       <a href="#"> خدمات امن زرین پال</a>
                </div>
            </Row>
        </footer>
        </>
    )
}

export default Footer
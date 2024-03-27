import { Col, Row } from 'react-bootstrap'
import './Hero.css'
import pragrammerImage from "../../accet/images/programmer-image.svg"
import HeroBox from '../herobox/HeroBox'
import { FaUser } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaCode } from "react-icons/fa6";
import { IoPlaySkipBack } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';





function Hero() {

    useEffect(()=>{
        Aos.init()
    },[])

    return(
        <>
            <header>
                <Row>
                    <Col className='col-12 col-md-6 px-5 pt-4'  data-aos="fade-left" data-aos-duration="2000">
                        <img src={pragrammerImage}  className='conentimage container-fluid'/>
                    </Col>
                    <Col className='col-12 col-md-6 pt-4 px-4' data-aos="fade-right" data-aos-duration="2000">
                        <h1 className='text-center lalezar fs-2 my-3' style={{color:'#0fa8c7'}}>آمار ها باعث افتخار ما هستند</h1>
                        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>

                            <Col className='py-2 text-center'>
                                <HeroBox title="تعداد دانشجو" count={3600} color="bg-info-subtle">
                                    <FaUser size={30}/>
                                </HeroBox>
                            </Col>
                            <Col className='py-2 text-center'>
                                <HeroBox title="تعداد مقاله" count={902} color="bg-warning-subtle">
                                    <MdArticle size={30}/>
                                </HeroBox>
                            </Col>
                            <Col className='py-2 text-center'>
                                <HeroBox title="تعداد دوره ها" count={19} color="bg-danger-subtle">
                                    <ImBooks size={30}/>
                                </HeroBox>
                            </Col>
                            <Col className='py-2 text-center'>
                                <HeroBox title="پروژه واقعی" count={15} color="bg-primary-subtle">
                                    <FaCode size={30}/>
                                </HeroBox>
                            </Col>
                        </Row>
                        <p className='text-end mt-4 mx-5 fs-3' style={{color:'#551274', textDecoration :"underline"}}>
                            <b>شروع آموزش</b>
                            <IoPlaySkipBack/>
                        </p>
                    </Col>
                </Row>
            </header>   
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mysvg'>
                <path
                    fill="#eee"
                    d="M0 192l48-10.7C96 171 192 149 288 170.7 384 192 480 256 576 272s192-16 288-53.3c96-37.7 192-79.7 288-96 96-15.7 192-5.7 240 0l48 5.3V0H0z">
                </path>
            </svg>
        </>
    )
}

export default Hero
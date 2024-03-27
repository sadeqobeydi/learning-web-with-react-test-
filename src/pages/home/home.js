import Item from "../../componnent/article-item/Item"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Hero from "../../componnent/hero/Hero"
import SwiperButton from "../../componnent/SwiperButton/SwiperButton"
import CoursItem from "../../componnent/CoursIten/CoursItem"
import axios from "axios"
import { useEffect, useState } from "react"
import './home.css'

// code imported with swuper pakage 
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';


function Home (){

    const [article , setArticle] = useState([])
    const [courses , setCourses] = useState([])

    useEffect( ()=>{
        axios.get("http://localhost/react/api/articles/?page=1&limit=7")
        .then( response => setArticle(response.data.data))

        axios.get("http://localhost/react/api/courses/?page=1&limit=6")
        .then( response => setCourses(response.data.data))

    },[])

    return(
        <>
            <Hero/>
            <Container>
                <Row className="mt-5">
                    <h2 className="mx-2 py-4 fs-2 yekan">جدید ترین دوره ها</h2>
                    <Swiper
                            className="customSwiperStyle"
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1200 : {
                                    slidesPerView : 4
                                },
                                992 : {
                                    slidesPerView : 3
                                },
                                768 : {
                                    slidesPerView : 2
                                },
                                500 : {
                                    slidesPerView : 1
                                }
                            }}
                            modules={[Autoplay]}
                        
                        >
                            {
                                courses.map( cours => <SwiperSlide key={cours.id}><CoursItem {...cours}/></SwiperSlide>)
                            }  
                        <SwiperButton/>
                    </Swiper>
                </Row>
                <Row className="mt-5">
                    <h2 className="mx-5 py-4 fs-2 yekan">جدید ترین مقالات</h2>
                    <Swiper
                            className="customSwiperStyle"
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1200 : {
                                    slidesPerView : 4
                                },
                                992 : {
                                    slidesPerView : 3
                                },
                                768 : {
                                    slidesPerView : 2
                                },
                                500 : {
                                    slidesPerView : 1
                                }
                            }}
                            modules={[Autoplay]}
                        
                        >
                            {
                                article.map( item => <SwiperSlide key={item.id}><Item {...item}/></SwiperSlide>)
                            }  
                        <SwiperButton/>
                    </Swiper>
                </Row>
            </Container>
        </>
    )
}
export default Home
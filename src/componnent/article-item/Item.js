import { useEffect } from "react";
import "./item.css"
import Card from 'react-bootstrap/Card';
import { MdAccessTime } from "react-icons/md";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


function Item ({title , image , readingTime , writter , id}){


    useEffect(()=>{
        Aos.init()
    },[])

    return(
        <Card data-aos="zoom-in-up" data-aos-duration = "700" className="my-1">
            <Card.Img variant="top" src={`${image}`} />
            <Card.Body>
                <Card.Title className="py-2">{title}</Card.Title>
                <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است 
                </Card.Text>
            </Card.Body>
            <Link to={`/article/${id}`}>
                <span className="read-more">
                    <span>ادامه مطلب</span>
                    <span><TiArrowLeftThick size="25px"/></span>
                </span>
            </Link>
            <Card.Footer className="d-flex justify-content-between align-items-center py-3">
                <span className="writter-info d-flex align-items-center">نویسنده : {writter}</span>
                <span className="writter-info d-flex align-items-center"><MdAccessTime/>{readingTime} دقیقه</span>
            </Card.Footer>
        </Card>
    )
}

export default Item
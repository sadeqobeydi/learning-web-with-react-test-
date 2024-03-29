import { Col, Container, Row ,Form, Alert } from "react-bootstrap"
import Item from "../../componnent/article-item/Item"
import CoursItem from "../../componnent/CoursIten/CoursItem"
import { useEffect, useState } from "react"
import axios from "axios"
import Accordion from 'react-bootstrap/Accordion';
import { FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import './Courses.css'


function Courses(){

    const [items , setItems] = useState([])
    const [sortType , setSortType] = useState('lasted')
    const [searchKey , setSearchKey] = useState('')
    const [category , setCategory] = useState('')
    const [coursState , setCoursState] = useState('')

 
    useEffect( ()=>{
        if(sortType === 'firsed') getCoursesByOrder( 'id' , 'desc')
        else if (sortType === 'lasted') getCoursesByOrder( 'id' , 'asc') 
        else if (sortType === 'expensived') getCoursesByOrder( 'mainPrice' , 'desc') 
        else if (sortType === 'cheapest') getCoursesByOrder( 'mainPrice' , 'asc') 
        
    },[sortType])

    useEffect( ()=>{
        if (category == 'frontend')
            getCoursesByCategory('فرانت اند')
        else if (category == 'bakend')
            getCoursesByCategory('بک اند')
    },[category])

    useEffect( ()=>{
        if (coursState == 'completed')
            getCoursesByState('completed')
        else if (coursState == 'presell')
            getCoursesByState('presell')
        else if (coursState == 'recording')
            getCoursesByState('recording')
    },[coursState])

    const sortHandler = (e)=>{
        setSortType(e.target.id);
    }
    
    const getCoursesByOrder = (column , order)=>{
        axios.get(`http://localhost/react/api/courses/?column=${column}&order=${order}`)
        .then( response => setItems(response.data.data)) 
    }

    const getCoursesByCategory = (category)=>{
        axios.get(`http://localhost/react/api/courses/?category=${category}`)
        .then( response => setItems(response.data.data)) 
    }
    
    const getCoursesByState = (state)=>{
        axios.get(`http://localhost/react/api/courses/?state=${state}`)
        .then( response => setItems(response.data.data)) 
    }

    const searchHandler = (input) => {
        axios.get(`http://localhost/react/api/articles/?search=${input}&column=category`)
        .then( response => {
            
            console.log(response.data.data);
            console.log(`http://localhost/react/api/articles/?search=${input}&column=category`);
            setItems(response.data.data)
        }) 
    }

    const categoryHandler = (e) =>{
        setCategory(e.target.value);
    }

    const coursStateHandler = (e) =>{
        setCoursState(e.target.value);
    }
    return(
        <>
            <div className="topBox my-4">
                <h1 className=" fs-2">لیست مقالات</h1>
                <div className="searchBox">
                    <input type="text" className="searchInput" onChange={(e)=>setSearchKey(e.target.value)}/>
                    <button className="searchButton" onClick={ () => searchHandler(searchKey)}>جست و جو</button>
                </div>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={3} >
                        
                        <Accordion  alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <FaSort fontSize="18px" className="sort-icons"/> مرتب سازی</Accordion.Header>
                                <Accordion.Body>
                                <Form.Check
                                    label="جدید ترین"
                                    name = "sort"
                                    type="radio"
                                    id="firsed"
                                    value="firsed"
                                    onChange = {sortHandler}
                                    />
                                <Form.Check
                                    label="قدیمی ترین"
                                    name = "sort"
                                    type="radio"
                                    id="lasted"
                                    value="lasted"
                                    onChange = {sortHandler}
                                />
                                <Form.Check
                                    label="گران ترین"
                                    name = "sort"
                                    type="radio"
                                    id="expensived"
                                    value="expensived"
                                    onChange = {sortHandler}
                                />
                                <Form.Check
                                    label="ارزان ترین"
                                    name = "sort"
                                    type="radio"
                                    id="cheapest"
                                    value="cheapest"
                                    onChange = {sortHandler}
                                />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="filterWrapper mb-3">
                            <div className="filterIcon my-2">
                                <MdCategory/>
                                <b className="yekan">دسته بندی</b>
                            </div>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    value='frontend'
                                    label = 'فرانت اند'
                                    onChange={categoryHandler}
                                    checked={category == 'frontend' ? true : false}
                                />
                                <Form.Check
                                    type="checkbox"
                                    value='bakend'
                                    label = 'بک اند '
                                    onChange={categoryHandler}
                                    checked={category == 'bakend' ? true : false}
                                />
                            </Form>
                        </div> 
                        <div className="filterWrapper mb-3">
                            <div className="filterIcon my-2">
                                <FaFilter />
                                <b className="yekan">وضعیت دوره ها</b>
                            </div>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    value='completed'
                                    label = 'تکمیل شده'
                                    onChange={coursStateHandler}
                                    checked={coursState == 'compeleted' ? true : false}
                                />
                                <Form.Check
                                    type="switch"
                                    value='presell'
                                    label = 'پیش فروش'
                                    onChange={coursStateHandler}
                                    checked={coursState == 'presell' ? true : false}
                                />
                                <Form.Check
                                    type="switch"
                                    value='recording'
                                    label = 'درحال ضبط'
                                    onChange={coursStateHandler}
                                    checked={coursState == 'recording' ? true : false}
                                />
                            </Form>
                        </div> 
                    </Col>

                    <Col xs={12} md={9} >
                        <Row className="row-cols-1 row-cols-md-2  row-cols-xl-3 gy-4">
                            {
                                items.map( item => (
                                    <Col key={item.id}>
                                        <CoursItem {...item}/>
                                    </Col> 
                                ))
                            }
                        </Row>
                       { items == 0 &&  <Alert variant="warning" className="text-center my-4">
                           <p>مقاله ای یافت نشد</p>
                        </Alert>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Courses
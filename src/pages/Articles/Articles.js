import { Col, Container, Row ,Form, Alert } from "react-bootstrap"
import "./Articles.css"
import Item from "../../componnent/article-item/Item"
import { useEffect, useState } from "react"
import axios from "axios"
import Accordion from 'react-bootstrap/Accordion';
import { FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

function Articles(){

    const [items , setItems] = useState([])
    let [sortType , setSortType] = useState('lasted')
    let [searchKey , setSearchKey] = useState('')

 
    useEffect( ()=>{
        if(sortType === 'firsed') getArticlesByOrder( 'id' , 'desc')
        else if (sortType === 'lasted') getArticlesByOrder( 'id' , 'asc') 
        else if (sortType === 'longed') getArticlesByOrder( 'readingTime' , 'desc') 
        else if (sortType === 'shorted') getArticlesByOrder( 'readingTime' , 'asc') 
        
    },[sortType])

    const sortHandler = (e)=>{
        setSortType(e.target.id);
    }
    
    const getArticlesByOrder = (column , order)=>{
        axios.get(`http://localhost/react/api/articles/?column=${column}&order=${order}`)
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
                                    label="بلند ترین"
                                    name = "sort"
                                    type="radio"
                                    id="longed"
                                    value="longed"
                                    onChange = {sortHandler}
                                />
                                <Form.Check
                                    label="کوتاه ترین"
                                    name = "sort"
                                    type="radio"
                                    id="shorted"
                                    value="shorted"
                                    onChange = {sortHandler}
                                />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <MdCategory fontSize="18px" className="sort-icons"/> دسته بندی</Accordion.Header>
                                <Accordion.Body>
                                    <h6>دسته بندی مقالات</h6>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col xs={12} md={9} >
                        <Row className="row-cols-1 row-cols-md-2  row-cols-xl-3 gy-4">
                            {
                                items.map( item => (
                                    <Col key={item.id}>
                                        <Item {...item}/>
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
export default Articles
import './Courses.css'
import { Col, Row , Form, Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { FaSort } from 'react-icons/fa6';

function Courses(){

    const sortHandler =()=>{
        return 10
    }

    return(
        <>
            <div className="topBox mt-5 d-flex">
                <h1 className=" fs-2">لیست دوره ها</h1>
                <div className="searchBox">
                    <input type="text" className="searchInput" onChange={(e)=>setSearchKey(e.target.value)}/>
                    <button className="searchButton" onClick={ () => searchHandler(searchKey)}>جست و جو</button>
                </div>
            </div>
            <Container>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-5 col-lg-3'>
                        <aside className='px-2'>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0" >
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
                                            id="longed"
                                            value="longed"
                                            onChange = {sortHandler}
                                            />
                                        <Form.Check
                                            label="ارزان ترین"
                                            name = "sort"
                                            type="radio"
                                            id="shorted"
                                            value="shorted"
                                            onChange = {sortHandler}
                                            />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className="category-box">
                            <Form.Check
                                disabled
                                type={type}
                                label={`disabled ${type}`}
                                id={`disabled-default-${type}`}
                            />
                            </div>
                        </aside>
                    </Col>

                    <Col className='col-12 col-sm-7 col-lg-9'>

                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Courses
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import {Button , Form} from 'react-bootstrap';


function Edit (){

    let navigate = useNavigate()
    let {articleId} = useParams()
    let [articleData , setArticleData] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost/react/api/articles/?id=${articleId}`)
        .then( responce => setArticleData(responce.data.data[0]))
        
    },[])


    const formHandler = (e)=>{
        setArticleData({ ...articleData , [e.target.name] : e.target.value})
    }

    const editArticleHandler = ()=>{
        axios.put(`http://localhost/react/api/articles/?id=${articleId}` , articleData)
        alert('مقاله با موفقیت ویرایش شد')
        navigate('/')
        
    }


    return(
        <>
            <div className="formcontent p-md-5 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>عنوان مقاله</Form.Label>
                        <Form.Control onChange= {formHandler} type="text" name="title" value={articleData.title} placeholder="یک عنوان برای مفاله انتخاب کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>توضیح کوتاه</Form.Label>
                        <Form.Control onChange= {formHandler} type="text" name="describtion" value={articleData.describtion} placeholder="توضیحات کوتاه را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>دسته بندی</Form.Label>
                        <Form.Control onChange={formHandler} type="text" name="category" value={articleData.category} placeholder="یک دسته بندی برای مقاله انتخاب کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>نویسنده</Form.Label>
                        <Form.Control onChange={formHandler} type="text" name="writter" value={articleData.writter} placeholder="نام نویسنده را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>تصویر</Form.Label>
                        <Form.Control onChange={formHandler}type="text" name="image" value={articleData.image} placeholder="آدرس تصویر را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>زمان مطالعه</Form.Label>
                        <Form.Control onChange={formHandler} type="number" name="readingTime" value={articleData.readingTime} placeholder="مدت زمان مطالعه این مفاله را وارد کنید"  min="0"/>
                    </Form.Group>

                    <Button onClick={editArticleHandler} variant="primary" type="button">
                        ویرایش مقاله
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default Edit
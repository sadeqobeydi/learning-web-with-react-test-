import axios from "axios";
import "./AddArticle.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle (){


    let [formData , setFormData] = useState({})

    const formHandler = (e)=> {
        setFormData({ ...formData , [e.target.name] : e.target.value})
    }

    const reset = ()=>{
        setFormData({
            title: "",
            describtion : "",
            image : "",
            readingTime : "" ,
            category : "",
            writter : ""
        })
    }
    
    const addArticleHandler = ()=>{
        axios.post('http://localhost/react/api/articles/' , formData)
        .then((resp)=>{
            reset()
            if(resp.status === 200){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "مقاله با موفقیت ساخته شد",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                });    
            }
        })
        .catch((err)=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "مشکلی پیش آمد",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            }); 
        })
        
    }

    return(
        <>
            <div className="formcontent p-md-5 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>عنوان مقاله</Form.Label>
                        <Form.Control onChange= {formHandler} type="text" name="title" value={formData.title} placeholder="یک عنوان برای مفاله انتخاب کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>توضیح کوتاه</Form.Label>
                        <Form.Control onChange= {formHandler} type="text" name="describtion" value={formData.describtion} placeholder="توضیحات کوتاه را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>دسته بندی</Form.Label>
                        <Form.Control onChange={formHandler} type="text" name="category" value={formData.category} placeholder="یک دسته بندی برای مقاله انتخاب کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>نویسنده</Form.Label>
                        <Form.Control onChange={formHandler} type="text" name="writter" value={formData.writter} placeholder="نام نویسنده را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>تصویر</Form.Label>
                        <Form.Control onChange={formHandler}type="text" name="image" value={formData.image} placeholder="آدرس تصویر را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>زمان مطالعه</Form.Label>
                        <Form.Control onChange={formHandler} type="number" name="ridingTime" value={formData.ridingTime} placeholder="مدت زمان مطالعه این مفاله را وارد کنید"  min="0"/>
                    </Form.Group>

                    <Button onClick={addArticleHandler} variant="primary" type="button">
                        ثبت مقاله
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default AddArticle
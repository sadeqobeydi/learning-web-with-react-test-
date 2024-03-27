import './CoursItem.css'
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiDollarSign } from "react-icons/fi";
import { Button } from 'react-bootstrap';


function CoursItem({image , studentCount , title , description , teacher , mainPrice}){
    return(
        <div className="coursCardContainer">
            <div className="coursImage">
                <img src={image} alt="" />
                <p>
                    <FaUsers size='20px'/>
                    <span>{studentCount}</span>
                </p>
            </div>
            <div className="coursBody">
                <h5 className='yekan'>{title}</h5>
                <p className='vazir'>
                    {description}
                </p>
            </div>
            <div className="coursTeacher pb-3 border-bottom ">
                <GiTeacher size="25px"/>
                <span className='px-2'>مدرس {teacher}</span>
            </div>

            <div className="cousrFooter py-3 d-flex justify-content-between align-items-center">
                <button type='button' className='align-self-center'>ثبت نام دوره</button>
                <p>
                    <FiDollarSign size='16px'/>
                    <b className='mx-1'>{mainPrice}</b>
                </p>
            </div>
        </div>
    )
}

export default CoursItem
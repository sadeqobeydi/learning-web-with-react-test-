import './SwiperButton.css'
import { useSwiper } from 'swiper/react';
import { GrNext , GrPrevious } from "react-icons/gr";

function SwiperButton (){

    const swiper = useSwiper();
    return(
        <div className="contentSwiperbhtn">

            <button
            onClick={() => {swiper.slidePrev()}}
            className='btn-swiper'>
                <GrNext size='20px'/>
            </button>
            <button 
            onClick={() => {swiper.slideNext()}} 
            className='btn-swiper'>
                <GrPrevious size='20px'/>
            </button>


        </div>
    )
}

export default SwiperButton
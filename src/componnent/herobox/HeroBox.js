
import { useEffect, useRef  , useState} from 'react'
import './herobox.css'
import CountUp from 'react-countup';

function HeroBox({title , count , children ,color}){


    return(
        <>  
            <div className={`herobox-content bg-white d-inline-block pt-3 px-5 ${color}`}>
                <div className="herobox-text d-inline-flex justify-content-center align-items-center">
                    {children}
                    <b className="d-inline fs-4 px-2">{title}</b>
                </div>
                <p className="herobox-count text-center fs-4 pt-2" style={{fontWeight:'bold'}}>
                    <CountUp
                        start={0}
                        end={count}
                        duration={4}
                        separator=''
                        delay={0.8}
                    />
                </p>
            </div>        
        </>
    )
}

export default HeroBox
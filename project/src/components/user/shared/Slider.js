import React, {useState, useEffect} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import axios from 'axios'
import {API_URL, API_PATH} from '../../../util/API_URL'

const Slider = () => {

  let [allImages, setAllImages] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}/slider/images`).then(response=>{
      setAllImages(response.data);
    })
  },[])

  return (
   

    <div className='slide-containter'>
      <Slide>
        {
          allImages.map((item, index)=>{

            return(
              <div key={item._id} style={{display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundSize: 'cover',
                          height: '400px', 
                          backgroundImage : `url('${API_PATH}/slider/${item.name}')`,
                          backgroundSize : "100% 100%"

                          }}>
                <span>The Stepping Stone</span>
              </div>
            );
        })
      }
      </Slide>
    </div>
  )
}

export default Slider
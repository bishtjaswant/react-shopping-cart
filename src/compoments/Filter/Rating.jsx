import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Rating({styles, rating, onClick}) {
    return (
        <>
         {
             [...new Array(5)].map((_,i)=>(
                 <span key={i}  onClick={()=>onClick(i) }  style={styles}>
                    {
                        (rating>i)? <AiFillStar/>: <AiOutlineStar/>
                    }
                 </span>
             ))
         }
        </>
    )
}

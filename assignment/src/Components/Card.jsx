import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const imageUrl=item.url;
  return (
    <div className=' w-[250px] h-[250px] border border-black flex flex-row rounded-lg'>
        <Link to={`/DetailsOfImage/${item.id}`}><img className='size-full cursor-pointer' src={imageUrl} alt='image'/></Link>
    </div>
  )
}

export default Card
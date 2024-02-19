import React from 'react'
import Card from '../Components/Card';

const Home = ({data}) => {
  return (
    <div className='flex flex-row flex-wrap gap-5 justify-center'>
        {
            data.map((item,index)=>{
                return (
                    <Card key={index} item={item}/>
                )
            })
        }
    </div>
  )
}

export default Home
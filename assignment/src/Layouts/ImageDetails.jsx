import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const  ImageDetails= () => {
    const[data,setData]=useState();
    const {id} = useParams()
    const getData=async()=>{
      const resp=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const {photo}=await resp.json();
      setData(photo)
    }
  
    useEffect(()=>{
      getData()
    },[])
    return (
        <div className="flex flex-row border border-black bg-blue-950 w-[1000px] gap-6 justify-center m-auto h-[400px] items-center  ">
                <img className="drop-shadow-2xl w-[250px] h-[250px] border border-black flex flex-row rounded-lg" src={data?.url} alt="" />
                <div className="text-white">
                    <h1 className="text-3xl start-0">{data?.title}</h1>
                    <p className="start-0">
                            {data?.description}
                    </p>
                </div>
        </div>
    )
}
export default ImageDetails;
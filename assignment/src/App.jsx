
import { useEffect, useState } from 'react';
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './Layouts/Home';
import ImageDetails from './Layouts/ImageDetails';
const url="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";
function App() {
  const [data,setData]=useState([]);
  const getAllPhoto=async()=>{
    try{
      const data=await fetch(url);
      const jsonData=await data.json();
      setData(jsonData.photos);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllPhoto();
  },[])
  return (
    <>
     <Routes>
      <Route path="/" element={<Home data={data}/>}/>
      <Route path="/DetailsOfImage/:id" element={<ImageDetails/>}/>
     </Routes>
    </>
  )
}

export default App

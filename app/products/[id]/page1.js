'use client';
import React from 'react'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCheckCircleFill } from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";
import { useParams } from 'next/navigation';



// export async function getServerSideProps(context) {
//   const {params} = context;
//   const {id} = params;
//   // console.log(params)

//   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const data = await response.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }


// async function fetchProducts(id){
//   const productsResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
//   return productsResponse.json();
// }







export default function SingleProduct (){
  
  const params = useParams();
  const {id} = params;
  let datas;
  // data = await fetchProducts(id);
  // console.log(id);
  // const {id} = params;
  
  
  useEffect(()=>{
  
    const fetchData = async ()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
      }
      datas =  fetchData();
      fetchData();
    }, [])
  
  // console.log(datas,'datassss')
  // console.log(id,'id')
  const [quantity, setQuantity] = useState(1)
  const [tick, setTick] = useState("")
  const tickOnclick = ()=>{
    setTick(<AiOutlineCheck/>)
  }
  
  const increaseOnClick= ()=>{
    setQuantity((c)=>{
      if(c<5){
        return c+1;
      }
      else{
        return 5;
      }
    });
  }
  const decreaseOnClick= ()=>{
    setQuantity((c)=>{
      if(c>=2){
        return c-1;
      }
      else{
        return 1;
      }
    });
  }
  
  
  
  
  return (
    
    <>
    
{/*      
    <div className='w-full flex bg-[#FDF6F6] ' >
      <div className="w-3/4 m-auto flex  my-12" >
      
      <div className='productImage h-96 w-1/2 flex justify-center cursor-zoom-in bg-white ' >
        <Image 
        src={data.image}
        width={100}
        height={100}
        alt='productImage'
        className='w-auto h-full '
        />

      </div>
      <div className='w-1/2 px-12 flex flex-col'>
        <div className="productDirectory flex">
          <Link href='./' >
           <div className="text-sm font-extralight">Product</div>
          </Link>
         <div className="text-sm font-extralight">/</div>
         <div className="text-sm font-extralight">{data.category}</div>
         <div className="text-sm font-extralight">/</div>
         <div className="text-sm font-extralight">{data.title}</div>
        </div>
        <div className="mt-2 text-[#413E65] text-lg">{data.category}</div>
        <div className='mt-2 text-3xl text-[#413E65]'>{data.title}</div>
        <div className="priceDetail flex my-4 items-center">
          <div className="text-xl font-bold text-[#413E65]">${data.price}</div>
          <div className="text-base text-[#413E65] mx-1">&Free Shipping</div>
        </div>
        <div className='mt-2 text-[#413E65]'>
          {data.description}
        </div>
        <div className="quantityBox flex my-4 h-8">
        <div className="quantity flex ">
        <button className='w-8  border-2 border-solid' onClick={decreaseOnClick}>-</button>
        <div className="border-2 w-8 flex justify-center" >{quantity}</div>
        <button className='w-8 border-2 border-solid' onClick={increaseOnClick}>+</button>
        </div>
        <div className="addtoCartBox  ml-2">
          <button className='bg-[#413E65] flex justify-center items-center text-white w-80 border-2 border-solid h-8 hover:bg-[#F25C54]' onClick={tickOnclick} >Add To Cart <div className='mx-1 text-base font-bold'>{tick}</div></button>
        </div>
        </div>
        <div className="font-semibold text-[#413E65] mt-4">Free shipping on order over $50</div>
        <div className='text-[#413E65] flex text-sm items-center'>
          <div><BsFillCheckCircleFill/></div>
          <div className='mx-2'> No-Risk Money Back Guarantee!</div>
          </div>
        <div className='text-[#413E65] flex text-sm items-center'>
          <div><BsFillCheckCircleFill/></div>
          <div className='mx-2'> No Hassle Refunds</div>
          </div>
        <div className='text-[#413E65] flex text-sm items-center'>
          <div><BsFillCheckCircleFill/></div>
          <div className='mx-2'> Secure Payments</div>
          </div>
        
      </div>

      </div>

    </div>
     */}
    
  </>
  )
}


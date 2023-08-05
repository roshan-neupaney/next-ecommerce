

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCheckCircleFill } from "react-icons/bs";
import Functions from '@components/singleProductPage/Functions';

// import { useParams } from 'next/navigation';

const page = async ({params}) => {
    const {id} = params;
    console.log(id);

    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    
    
    // const data = await fetchData();
    // console.log(data.length,'hello');
    console.log(data.price,'price');

    


  return (
    <>
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
        <Functions/>
      </div>

      </div>

    </div>
    </>
  )
}

export default page
import React from 'react'
import Category from './Category'

async function ProductNavbar(props){
  let data = props.data;

  return (
    <>
    <div className="productNavbar flex justify-between items-center ">
          <Category data={data} 
          // setApiUrls={setApiUrls} 
          />
          <div className="m-2">
            <p>{data.length} total products</p>
          </div>
          <input
            className="w-44 h-4 m-2 mr-10 p-4 border-2  rounded-2xl"
            type="text"
            placeholder="Search.."
          />
        </div>
    </>
  )
}

export default ProductNavbar
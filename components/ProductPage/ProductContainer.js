import React from 'react'
import ItemCard from './ItemCard';

async function ProductContainer (props) {
    let datas = props.data;
  return (
    <>
    <div className='productList  grid grid-cols-4 mx-auto mt-8 w-11/12 gap-6  ' >
      {datas.map((element)=>{
        return(
          <div key={element.id}>
          <ItemCard 
          title={element.title}
          price={element.price}
          image={element.image}
          id={element.id}
           />
           </div>
        )
      })}
      {/* <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/> */}
    </div>
    
    </>
  )
}

export default ProductContainer
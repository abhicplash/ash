import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useProducts from '../utils/useProduct'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux';

function SingleProduct() {
  const dispath = useDispatch();
  const { id } = useParams()
  const select = useProducts(id)
  function HandleAdd(items) {
    dispath(addItem(items));
  }
  return (
    <div>
      <Link to={"/cart"}>
        <button >cart</button>
      </Link>
      <h1>{select.title}</h1>
      <img src={select.image} alt="" className='w-56' />
      <button onClick={() => HandleAdd(select)} className='border border-black p-3'>add</button>
    </div>
  )
}

export default SingleProduct
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {orders,addOrder} from './Action'

function Mydashboard() {

    const selector = useSelector(state => state.myOrders)
    const dispatch = useDispatch()
    console.log(selector, 'total order')



  return (
    <>
    <div>Mydashboard</div>
    <h1> Total Orders {selector} </h1>
    <button onClick={()=>dispatch(orders)} > Complete Order </button>
    <button onClick={()=>(dispatch(addOrder))} > Complete Order </button>
    </>
  )
}

export default Mydashboard
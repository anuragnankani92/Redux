import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData, sendApiData } from './redux/Action'

function MyApiData() {
    const allData = useSelector(item => item.allData)
    const dispatch = useDispatch()

    const [sendApi, setSendApi]=useState(
        {
            firstname:'',
            email:'',
            password:''
        }
    )

    const handelChange=(e)=>{
        setSendApi({...sendApi,[e.target.name]:e.target.value})
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(sendApiData(sendApi))
        
    }

    useEffect(()=>{
        dispatch(getApiData())
    },[dispatch])
console.log(allData, 'dataaaa')

console.log(sendApi,'senddd')
  return (
    <>
    

    <form onSubmit={handelSubmit}>
        <h1>Register Form</h1>
        <label>First Name:</label>
        <input 
        type='text' 
        placeholder='Enter Your Name' 
        name='firstname' 
        value={sendApi.firstname}
        onChange={handelChange}
        /> <br />
          <label>Email:</label>
        <input 
        type='email' 
        placeholder='Enter Your Email' 
        name='email' 
        value={sendApi.email} 
        onChange={handelChange}
        /> <br />
          <label>Password:</label>
        <input 
        type='password' 
        placeholder='Enter Your Password' 
        name='password' 
        value={sendApi.password}
        onChange={handelChange}
        /> <br />
        <input type="submit" />
    </form>
    <div>MyApiData</div>
    <table>
        <thead>
            <tr>
                <th>SNO</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                allData.map((item,index)=>{
                   return <tr>
                        <td> {index + 1} </td>
                        <td> {item.firstname} </td>
                        <td> {item.email} </td>
                        <td> {item.password} </td>
                    </tr>

                })
            }
        </tbody>

    </table>
    </>
  )
}

export default MyApiData
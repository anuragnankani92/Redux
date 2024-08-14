import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from './redux/Action'

function MyApiData() {
    const allData = useSelector(item => item.allData)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getApiData())
    },[dispatch])
console.log(allData, 'dataaaa')
  return (
    <>
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

import axios from 'axios'
// export const total_orders = 'total_orders'
// export const add_order = 'add_order'
export const get_data = 'get_data'

export const orders={

    type:'total_orders'

}

export const addOrder ={

    type:'add_order'

}

export const getData=(data)=>({
    type: get_data,
    payload:data

})

export const getApiData=()=>(dispatch)=>{
    axios.get('https://633e7f1783f50e9ba3b1cef1.mockapi.io/students')
    .then((res)=>{
        console.log('dataaa',res)
        dispatch(getData(res.data))

    })

}

// export {orders, addOrder}


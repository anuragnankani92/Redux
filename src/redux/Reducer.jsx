// import { total_orders,add_order } from "./Action";
import { get_data } from "./Action"

const initialState ={
    allData:[],
    myOrders:10
}
const reducer =(state = initialState, action)=>{
    switch (action.type) {
        case 'total_orders':
            return{
                ...state, myOrders:state.myOrders - 1
            }
            case 'add_order':
                return{
                    ...state, myOrders:state.myOrders + 1
                }
                case get_data:
                    return{
                        ...state, allData:action.payload
                    }
            default:
                return state
    
        
    }

}
console.log('myData',initialState.allData)

export default reducer;
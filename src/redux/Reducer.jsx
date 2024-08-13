// import { total_orders,add_order } from "./Action";

const initialState ={
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
            default:
                return state
    
        
    }

}

export default reducer;
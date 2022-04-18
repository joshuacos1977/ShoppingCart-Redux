import * as  actionTypes from './shopping-types';

const INITAL_STATE = {
     products: [] , //{id,title,descr,price,img}
     cart:[],// {id,title,descr,price,img,qty}
     currentItem:null
}

const shopReducer  = (state=INITAL_STATE,action) => {
     switch(action.type){
         case actionTypes.ADD_TO_CART:
             return {}
         case actionTypes.REMOVE_FROM_CART:
             return {}
         case actionTypes.ADJUST_QTY:
             return {}
         case actionTypes.LOAD_CURRENT_ITEM:
             return {}
         default:
             return state;

              
     }
}

export default shopReducer;
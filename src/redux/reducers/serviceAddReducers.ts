import { ChangeState } from "../../types/ChangeState";
import Product from "../../types/Product";
import {CHANGE_SERVICE_FIELD} from "../actions/actionTypes";

const initialState: ChangeState = {
  id: "",
  name: "",
  price: "",
  changing: false
};

export default function serviceAddReducer(state: ChangeState = initialState, action: any) {
  switch(action.type) {
    case CHANGE_SERVICE_FIELD:
      const product: Product = action.payload;
      return {...product, changing: action.payload.changing};
    default: 
      return state;
  }
}

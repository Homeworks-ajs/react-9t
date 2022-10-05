import { nanoid } from "nanoid";
import Product from "../../types/Product";
import {ADD_SERVICE, REMOVE_SERVICE} from "../actions/actionTypes";

const initialState: Product[] = [
  new Product(nanoid(), "Груша", 2000),
  new Product(nanoid(), "Яблоко", 1000),
];

export default function productListReducer(state = initialState, action: any) {
  switch(action.type) {
    case ADD_SERVICE: 
      const {name, price}: {name: string, price: number} = action.payload;
      return [...state, new Product(nanoid(), name, price)];
    case REMOVE_SERVICE:

      const {id} = action.payload;
      return state.filter((product: Product) => product.getId() !== id);
    default:
      return state;
  }
}
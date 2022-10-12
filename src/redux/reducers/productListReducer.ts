import { nanoid } from "nanoid";
import Product from "../../types/Product";
import { ADD_SERVICE, REMOVE_SERVICE, REPLACE_PRODUCT } from "../actions/actionTypes";

const initialState: Product[] = [
  new Product(nanoid(), "Груша", 2000),
  new Product(nanoid(), "Яблоко", 1000),
];

export default function productListReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_SERVICE: {
      console.log("add")
      const { name, price }: { name: string, price: number } = action.payload;
      return [...state, new Product(nanoid(), name, price)];
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter((product: Product) => product.getId() !== id);
    }
    case REPLACE_PRODUCT: {
      const { name, price, id }:
        { name: string, price: number, id: string } = action.payload;
      console.log(name, price, id)
      return state.map((el: Product) => {
        if (el.getId() === id) {
          el.setName(name);
          el.setPrice(price);
        }
        return el;
      })
    }
    default:
      return state;
  }
}
import Product from "../types/Product"
import { CHANGE_SERVICE_FIELD, REMOVE_SERVICE } from "./actions/actionTypes"

const toRemove: Function = (id: string) => {
  return { type: REMOVE_SERVICE, payload: { id } }
}

const toChange: Function = (product: Product) => {
  return { type: CHANGE_SERVICE_FIELD, payload: { ...product, changing: true } }
}

export {toRemove, toChange}
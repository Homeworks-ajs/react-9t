import React, { MouseEventHandler } from 'react'
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_SERVICE } from '../../redux/actions/actionTypes';
import Product from '../../types/Product';
import ListElement from './list-element/ListElement';



function List() {
  const state: Product[] = useSelector((state: any) => state.serviceList)
  const dispatch = useDispatch();

  const getIdFromTarget = (target: any): string => {
    const card: HTMLElement = target.closest(".card-of-product");
    const id: string = card.dataset.id || '';
    return id;
  }
  
  const onChange: MouseEventHandler = (event): void => {
    const id: string = getIdFromTarget(event.target);
    dispatch({type: "", payload: ""})
  }
  
  const onRemove: MouseEventHandler = (event): void => {
    const id: string = getIdFromTarget(event.target);
    dispatch({type: REMOVE_SERVICE, payload: {id}})
  }

  return (
    <Row className="my-5">
      {!!state ? state.map((el: Product) => <ListElement
        key={el.getId()}
        name={el.getName()}
        id={el.getId()}
        value={el.getPrice()}
        onChange={onChange}
        onRemove={onRemove}
      />) : "Нет элементов"}
    </Row>
  )
}

export default List;
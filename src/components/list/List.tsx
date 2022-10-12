import { AnyCnameRecord } from 'dns';
import React, { MouseEventHandler } from 'react'
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch, connect } from 'react-redux';
import { CHANGE_SERVICE_FIELD, REMOVE_SERVICE } from '../../redux/actions/actionTypes';
import { toChange, toRemove } from '../../redux/dipatchers';
import Product from '../../types/Product';
import ListElement from './list-element/ListElement';

function List(props: any) {

  const { serviceList }: { serviceList: Product[] } = props;


  const getIdFromTarget = (target: any): string => {
    const card: HTMLElement = target.closest(".card-of-product");
    const id: string = card.dataset.id || '';
    return id;
  }

  const onChange: MouseEventHandler = (event): void => {
    const id: string = getIdFromTarget(event.target);
    const changingProduct: Product | undefined = serviceList.find((el: Product) => el.getId() === id);
    props.onChange(changingProduct);
  }

  const onRemove: MouseEventHandler = (event): void => {
    const id: string = getIdFromTarget(event.target);
    props.onRemove(id);
  }

  return (
    <Row className="my-5">
      {!!serviceList ? serviceList.map((el: Product) => <ListElement
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

const mapStateToProps = (state: any) => {
  const serviceList: Product[] = state.serviceList;
  return { serviceList }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onChange: (product: Product) => dispatch(toChange(product)),
    onRemove: (id: string) => dispatch(toRemove(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
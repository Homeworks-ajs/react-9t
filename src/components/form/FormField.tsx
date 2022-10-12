import React, { MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_SERVICE, CHANGE_SERVICE_FIELD, REPLACE_PRODUCT } from '../../redux/actions/actionTypes';
import { ChangeState } from '../../types/ChangeState';
import Product from '../../types/Product';

function validate(...arg: HTMLInputElement[]) {
  const notValid: HTMLInputElement | undefined = arg.find((el: HTMLInputElement) => !el.checkValidity())
  if (!notValid) {
    return false;
  }

  if (notValid) {
    notValid.setCustomValidity("Поле не заполнено");
    return true;
  }
}

function FormField() {
  const state: ChangeState = useSelector((state: any) => state.serviceAdd);
  const dispatch = useDispatch();

  const appendNewCard: MouseEventHandler = (event) => {
    event.preventDefault()
    const target: HTMLButtonElement = (event.target as HTMLButtonElement);
    const form: HTMLFormElement | null = target.form;
    if (form) {
      const name: HTMLInputElement = (form[0] as HTMLInputElement);
      const price: HTMLInputElement = (form[1] as HTMLInputElement);
      const resetButton: HTMLButtonElement = (form[3] as HTMLButtonElement);

      if (validate(name, price)) {
        return;
      }

      if (state.changing) {
        dispatch({ type: CHANGE_SERVICE_FIELD, payload: { id: "", name: "", price: "", changing: false } })
        dispatch({ type: REPLACE_PRODUCT, payload: { ...state, name: name.value, price: price.valueAsNumber, changing: false } });
        resetButton.click();
        return;
      }
      
      dispatch({ type: ADD_SERVICE, payload: { name: name.value, price: price.valueAsNumber } })
      resetButton.click();
    }
  }

  return (
    <Form>
      <Form.Group className="my-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required defaultValue={state.name} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" min="0" placeholder="Enter price" required defaultValue={state.price} />
      </Form.Group>
      <Button variant="success" type="submit" onClick={appendNewCard}>{state.changing ? "Replace" : "Append"}</Button>
      <Button variant="warning" type="reset">Reset</Button>
    </Form>
  )
}

export default FormField;
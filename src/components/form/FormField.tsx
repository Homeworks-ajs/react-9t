import React, { MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_SERVICE } from '../../redux/actions/actionTypes';
import Product from '../../types/Product';

function validate(...arg: HTMLInputElement[]) {
  const notValid: HTMLInputElement | undefined = arg.find((el: HTMLInputElement) => !el.checkValidity())
  if(!notValid) {
    return false;
  }

  if(notValid) {
    notValid.setCustomValidity("Поле не заполнено");
    return true;
  }
}

function FormField() {
  const state: Product[] = useSelector((state: any) => state.serviceList)
  const dispatch = useDispatch();

  const appendNewCard: MouseEventHandler = (event) => {
    event.preventDefault()
    const target: HTMLButtonElement = (event.target as HTMLButtonElement);
    const form: HTMLFormElement | null = target.form;
    if(form) {
      const name: HTMLInputElement = (form[0] as HTMLInputElement);
      const price: HTMLInputElement = (form[1] as HTMLInputElement);
      if(validate(name, price)) {
        return;
      }
      dispatch({type: ADD_SERVICE, payload: {name: name.value, price: price.valueAsNumber}})
    }
  }

  return (
    <Form>
      <Form.Group className="my-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required/>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" min="0" placeholder="Enter price" required/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={appendNewCard}>Append</Button>
      <Button variant="warning" type="reset">Reset</Button>
    </Form>
  )
}

export default FormField;
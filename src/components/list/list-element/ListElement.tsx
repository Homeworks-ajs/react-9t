import React, { MouseEventHandler } from 'react'
import { Card, Button, Row } from 'react-bootstrap'

type ElementListProps = {
  name: string,
  value: number,
  id: string,
  onRemove: MouseEventHandler,
  onChange: MouseEventHandler
}

function ListElement(props: ElementListProps) {
  return (
    <Card className="my-1 card-of-product" data-id={props.id}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.value}
        </Card.Text>
        <Row className="d-flex flex-row">
          <Button className="w-25 mx-1" variant="warning" onClick={props.onChange}>Reduct</Button>
          <Button className="w-25 mx-1" variant="danger" onClick={props.onRemove}>Remove</Button>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ListElement

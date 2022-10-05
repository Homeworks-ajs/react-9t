import { Row } from 'react-bootstrap';
import FormField from '../form/FormField';
import List from '../list/List';

const Main = () => {
  return (
    <Row>
      <Row>
        <FormField />
      </Row>
      <Row>
        <List />
      </Row>
    </Row>
  )
}

export default Main
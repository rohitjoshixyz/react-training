import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormFeedback, FormGroup, Label, Input, Card, CardBody, Container, Row, Col} from 'reactstrap';
const LoginComponent = ({logValues,
  state, dispatch}) => {
  
  const setUsernameWrapper = (event) => {
    console.log(state.username, event.target.value)
    dispatch({type: 'setUsername', username: event.target.value})
  }
  const setPasswordWrapper = (event) => {
    console.log(state.password, event.target.value)
    dispatch({type: 'setPassword', password: event.target.value})
  }

  return (
    <Container>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
                  onChange={setUsernameWrapper} invalid={state.usernameError==='' ? false : true}/>
                  <FormFeedback>{state.usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
                  onChange={setPasswordWrapper} invalid={state.passwordError==='' ? false : true}/>
                  <FormFeedback>{state.passwordError}</FormFeedback>
                </FormGroup>
                <Button onClick={logValues}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col> 
      </Row>
    </Container>  
  );
}

export default LoginComponent

LoginComponent.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}
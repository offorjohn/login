import React, { useState } from "react";
import {
   
  redirect,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {login,listpayments} from "./API"

async function action({ params }) {
  return redirect(params);
}

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  function handleUsername(e) {
    setUsername(e.target.value);
}
function handlePassword(e) {
  setPassword(e.target.value);
}
  function doLogin(){
   login(username,password).then(res=>{
      console.log("Login part")
      console.log(res)
      if(res.status){
       // console.log("Redirecting")
       listpayments("otp",res.token).then(res=>{
        console.log(res)
       })
        
         
      }
    })
  }
  return (<div>
    <Container>
      <Row>
        <Col>
    <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleUsername} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" onChange={handlePassword} />
      </Form.Group>
      <Button variant="primary" onClick={doLogin} >Login</Button>{' '}
    </Form>
    </Col>
    </Row>
    </Container>
  </div>)
}
function ListPayments(){
  return (<div>List Payments</div>)
}

function ListPaymentsOTP(){
  return (<div></div>)
}
function ListPaymentsMDN(){
  return (<div></div>)
}
function ListMessagesOTP(){
  return (<div></div>)
}
function ListMessagesMDN(){
  return (<div></div>)
}
function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export {App,Login,ListPayments,ListPaymentsOTP,ListPaymentsMDN,ListMessagesOTP,ListMessagesMDN};

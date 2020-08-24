import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
var firebase = require('firebase');
var firebaseui = require('firebaseui');
var axios = require('axios');

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
// firebase.initializeApp();
var firebaseConfig = {
  // ...
  apiKey: "AIzaSyA4LLLTEeRtEmpO_C_Q5x9PjGRmhxWQK_o",
  authDomain: "familyhome-287021.firebaseapp.com",
  databaseURL: "https://familyhome-287021.firebaseio.com",
  projectId: "familyhome-287021",
  storageBucket: "familyhome-287021.appspot.com",
  messagingSenderId: "320323557266",
  appId: "1:320323557266:web:1554050277b93e9f52934b",
  measurementId: "G-DHY1HNJ3CM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});
class Login extends Component {


  constructor(props){
    super(props);
    this.connexion= this.connexion.bind(this);
}
  connexion(){

    if((document.getElementById("pwd").value==="")||(document.getElementById("email").value==="")){
        alert("Error! Veuillez SVP renseignez le(s) champ(s) manquant(s)!");
    }else {


      axios.post('http://localhost:3005/user/connect', {
        email: document.getElementById("email").value,
        pwd: document.getElementById("pwd").value
      }).then(response => {
console.log(response)
          //   var x = 0
          //   x = response.data['code']
          //  // console.log(response.data['CONNEXION REUSSIE']['key'])
          //   if (typeof  x === "undefined") {
          //     console.log(x)
          //      console.log(response.data['CONNEXION REUSSIE'])

          //   }else {
          //       alert("Error!" + response.data['Message']);
          //   }
        });

    }
}










  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Connexion</h1>
                      <p className="text-muted">Se connecter à mon compte My Family Home</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" id='email' autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mot de passe" id='pwd' autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                      <Link to="/dashboard">
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={()=> this.connexion()}>Login</Button>
                        </Col>
                        </Link>
                        
                      </Row>
                      <Row>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Mot de passe oublié?</Button>
                        </Col>
                      </Row>
                      <Row>
                          <div id="firebaseui-auth-container"></div>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>S'inscrire</h2>
                      <p>Vous n'avez pas encore de compte Family Home ? Inscrivez-vous !</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Inscription</Button>
                      </Link>



 
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

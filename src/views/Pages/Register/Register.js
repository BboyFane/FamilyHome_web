import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
var axios = require('axios');

class Register extends Component {

  constructor(props){
    super(props);
    this.inscription= this.inscription.bind(this);
}
  inscription(){
if((document.getElementById("email").value==="")||(document.getElementById("username").value==="")||(document.getElementById("pwd").value==="")){
        alert("Error! Veuillez SVP renseignez le(s) champ(s) manquant(s)!");
    }else {
console.log(document.getElementById("pwd").value)

      axios.post('http://localhost:3005/user/newadmin', {
        username:document.getElementById("username").value,
        email: document.getElementById("email").value,
        pwd: document.getElementById("pwd").value
      }).then(response => {
        console.log(response)
            // var x = 0
            // x = response.data['code']
          //  // console.log(response.data['inscription REUSSIE']['key'])
          //   if (typeof  x === "undefined") {
          //     console.log(x)
          //      console.log(response.data['inscription reussie'])

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
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Inscription</h1>
                    <p className="text-muted">Creer votre compte!</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nom/Prenom" autoComplete="username" id='username'/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" id='email'/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Mot de passe" autoComplete="new-password" id='pwd'/>
                    </InputGroup>

                    <Link to="/">
                    <Button color="success" block onClick={()=> this.inscription()}>Creation !</Button>
                    </Link>
                    <Link to="/login">
                    <Button block color="link">Vous avez deja un compte ? </Button>
                    </Link>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                    <Button block color="danger">Google</Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <a href="http://127.0.0.1:5500/index.html">
                      <Button block color="link">Annuler ?</Button>
                      </a>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;

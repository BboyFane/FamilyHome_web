import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
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
                        <Input type="text" placeholder="Email" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mot de passe" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                      <Link to="/dashboard">
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        </Link>
                        <Col xs="6">
                        <a href="http://localhost:3000/#/login"><small>Se connecter avec Google?</small></a>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Mot de passe oublié?</Button>
                        </Col>
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

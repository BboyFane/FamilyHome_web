import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col,  Input, Row } from 'reactstrap';


class Payment extends Component {

  render() {
    return (

      <Row>
      <Col xs="12" sm="6">
      <Card>
        <CardHeader>
          <strong>Credit Card</strong>
          <small> Renseignements</small>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Nom et Prenom</Label>
                <Input type="text" id="name" placeholder="Enter your name" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="ccnumber">Numéro de la carte</Label>
                <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="ccmonth">Mois</Label>
                <Input type="select" name="ccmonth" id="ccmonth">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="ccyear">Année</Label>
                <Input type="select" name="ccyear" id="ccyear">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="cvv">CVV/CVC</Label>
                <Input type="text" id="cvv" placeholder="123" required />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <Link to="/dashboard">
          <Button color="primary" className="mt-3" active tabIndex={-1}>Valider</Button>
        </Link>
      </Card>
    </Col>

    <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Choix Abonnement</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem action>
                    <ListGroupItemHeading>Starter 0€</ListGroupItemHeading>
                    <ListGroupItemText>
                    Une durée gratuite d'un mois avec la possibilité d'ajouter 1 contact, et 2 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>Basin 9.99€</ListGroupItemHeading>
                    <ListGroupItemText>
                    Inclu une durée gratuite d'un mois(Abonnement une année), ajout de 2 contacts et 5 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>Pro 14.99€</ListGroupItemHeading>
                    <ListGroupItemText>
                    Inclu une durée gratuite d'un mois(Abonnement une année), ajout de 5 contacts et 10 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>Unlimited 19.99€</ListGroupItemHeading>
                    <ListGroupItemText>
                    Inclu une durée gratuite d'un mois(Abonnement une année), ajout illimité de contacts et d'appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
       
  </Row>
   
    );
  }
}

export default Payment;

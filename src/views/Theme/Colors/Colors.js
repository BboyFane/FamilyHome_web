import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, FormGroup,ListGroupItemHeading , Col, ListGroupItem, ListGroup, Input, ListGroupItemText, Label, Row } from 'reactstrap';



class Colors extends Component {
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
                <Input type="text" id="name" placeholder="Nom et Prenom du titulaire de la carte" required />
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
          <Link to="/dashboard">
          <Button color="primary" className="mt-3">Valider</Button>
        </Link>
        </CardBody>

      </Card>
    </Col>

    <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Choix Abonnement</strong>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col xs="6">
                    <div className="radio">
                      <label>
                        <input type="radio" value="mensuel"/>
                          {'  '}Mensuel
                      </label>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="radio">
                      <label>
                        <input type="radio" value="annuel" />
                          {'  '}Annuel
                      </label>
                    </div>
                  </Col>

                </Row>
                <ListGroup>
                  <ListGroupItem action >
                    <ListGroupItemHeading>
                    <div className="radio">
                      <label>
                        <input type="radio" value="starter"/>
                          {' '}Starter 0€
                      </label>
                    </div>
                      </ListGroupItemHeading>
                    <ListGroupItemText>
                    Une durée gratuite d'un mois avec la possibilité d'ajouter 1 contact, et 2 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>

                  <ListGroupItem action>
                    <ListGroupItemHeading>
                    <div className="radio">
                      <label>
                        <input type="radio" value="basic"/>
                        {' '}Basic 9.99€
                      </label>
                    </div> 
                      </ListGroupItemHeading>
                    <ListGroupItemText>
                    Inclu une durée gratuite d'un mois(Abonnement une année), ajout de 2 contacts et 5 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                    <div className="radio">
                      <label>
                        <input type="radio" value="pro"/>
                        {' '}Pro 14.99€
                      </label>
                    </div> 
                      </ListGroupItemHeading>
                    <ListGroupItemText>
                    Inclu une durée gratuite d'un mois(Abonnement une année), ajout de 5 contacts et 10 appareils connectés.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="radio">
                        <label>
                          <input type="radio" value="unlimited"/>
                          {' '}Unlimited 19.99€
                        </label>
                      </div> 
                      </ListGroupItemHeading>
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

export default Colors;

import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Badges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-history"></i><strong>Mon Historique</strong>
                <div className="card-header-actions">
                 </div>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="oneday"/>
                          Dernieres 24H
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="oneweek" />
                         Derniere semaine
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="onemounth" />
                        Dernier mois
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="all" />
                          Tout l'historique
                      </label>
                    </div>
                  </Col>
                </Row>
                <br/>
                <Alert color="success">
                  Pas d'Historique pour l'instant !
                </Alert>
 
              </CardBody>
            </Card>
          </Col>
       </Row>

      </div>
    );
  }
}

export default Badges;
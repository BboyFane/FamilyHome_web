import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Alerts extends Component {
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
                <i className="fa fa-file-pdf-o"></i><strong>Mes factures</strong>
                <div className="card-header-actions">
                 </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="threemounth"/>
                          Derniers trois mois
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="sixmounth" />
                         Derniers 6 mois
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="oneyear" />
                        Derniere année
                      </label>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="radio">
                      <label>
                        <input type="radio" value="all" />
                          Toutes les factures
                      </label>
                    </div>
                  </Col>
                </Row>
                <br/>
                <Alert color="primary">
                  Pas de facture pour l'instant !
                </Alert>
 
              </CardBody>
            </Card>
          </Col>
       </Row>

      </div>
    );
  }
}

export default Alerts;

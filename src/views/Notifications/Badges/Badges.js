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
                <i className="fa fa-align-justify"></i><strong>Mon Historique de Commandes</strong>
                <div className="card-header-actions">
                 </div>
              </CardHeader>
              <CardBody>
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
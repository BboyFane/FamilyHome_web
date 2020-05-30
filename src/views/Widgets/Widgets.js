import React, { Component } from 'react';
import { Col, Row,Card, CardBody, CardHeader } from 'reactstrap';
import Widget02 from './Widget02';


// Brand Card Chart


class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
            <Card>
              <CardHeader>
              <i className="fa fa-mobile"></i><strong>Mes appareils</strong>
                <div className="card-header-actions">
                 </div>
              </CardHeader>
           
            <CardBody>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Lampe" mainText="Salon" icon="fa fa-moon-o" color="primary" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Lampe" mainText="Chambre" icon="fa fa-moon-o" color="primary" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Prise" mainText="Cuisine" icon="fa fa-bell" color="success" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="Prise" mainText="Cuisine" icon="fa fa-bell" color="warning" variant="1" />
          </Col>
      </Row>
      </CardBody>
      </Card>
  </div>
    );
  }
}

export default Widgets;

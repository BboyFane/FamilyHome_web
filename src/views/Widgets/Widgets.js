import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import Widget01 from './Widget01';
import Widget02 from './Widget02';
import Widget03 from './Widget03';
import Widget04 from './Widget04';
import { Line } from 'react-chartjs-2';


// Brand Card Chart
const makeSocialBoxData = (dataSetNo) => {
  const socialBoxData = [
    { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
    { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
    { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
    { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
  ];

  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <row>{}</row>
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
  </div>
    );
  }
}

export default Widgets;

import React, { Component } from 'react';

import { Nav, NavItem, NavLink,  TabContent, TabPane, CardHeader, CardBody} from 'reactstrap';



class Colors extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }


  demo() {
    return `Démo`;
  }
  standard() {
    return `Standard`;
  }
  premium() {
    return `Premium`;
  }


  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }


  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {`${this.demo()}`}
        </TabPane>
        <TabPane tabId="2">
          {`${this.standard()}`}
        </TabPane>
        <TabPane tabId="3">
          {`${this.premium()}`}
        </TabPane>
      </>
    );
  }



  render() {
    return (
      <div className="animated fadeIn">
        <card>
          <CardHeader>
          <i class="fa fa-cc-stripe" aria-hidden="true"></i><strong>Mon Payment</strong>
          <div className="card-header-actions"></div>
          </CardHeader>
          <CardBody>

        <Nav tabs>
        <NavItem>
          <NavLink
            active={this.state.activeTab[0] === '1'}
            onClick={() => { this.toggle(0, '1'); }}
          >
            Démo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={this.state.activeTab[0] === '2'}
            onClick={() => { this.toggle(0, '2'); }}
          >
            Standard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={this.state.activeTab[0] === '3'}
            onClick={() => { this.toggle(0, '3'); }}
          >
            Premium
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab[0]}>
        {this.tabPane()}
      </TabContent>

  

          </CardBody>
        </card>
        
   </div>
    );
  }
}

export default Colors;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, Card, CardBody, CardHeader, Col, Row, Table, Button,Form, FormGroup, InputGroup,Input,InputGroupAddon,InputGroupText } from 'reactstrap';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`



  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Button color="danger">Supprimer</Button></td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Membre du compte MyFamilyHome 
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Ajout d'un nouveau membre
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Nom</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="username3" name="username3" autoComplete="name"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Email</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email3" name="email3" autoComplete="username"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="3"><Label>Role </Label></Col>
                    <Col md="9">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Admin</Label>
                      </FormGroup>

                    </Col>
                    </FormGroup>
                     <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                  <small>*A la creation l'utilisateur recevra un mail avec un lien afin de choisir son mot de passe et pouvoir se connecter.</small>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;

import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Alert,
  CardTitle,
  Card,
  CardText,
  Button,
} from "reactstrap";

class UrunListesi extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.bilgiUrunListesi.baslik}</h3>
        <div>
          <h4>{this.props.seciliKategori}</h4>
          <Alert>
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </div>
        <p>
          Leak <code>checking</code> large and complex systems can be daunting.
          Let Agilent help.
        </p>
        <div>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </div>
        <Card body color="primary" inverse>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </div>
    );
  }
}

export default UrunListesi;

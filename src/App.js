import React, { Component } from "react";
import Kategori from "./Kategori";
import Navigate from "./Navigate";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = { seciliKategori: "" };

  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.categoryName,
    });
  };
  render() {
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlaveBilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate />
          </Row>
          <Row>
            <Col xs="5">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="7">
              <UrunListesi
                seciliKategori={this.state.seciliKategori}
                bilgiUrunListesi={bilgiUrunListesi}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

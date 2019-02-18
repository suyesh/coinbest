import React from "react";
import { Card, Grid, Avatar, Text, Header } from "tabler-react";
import Currency from "react-currency-formatter";
import PropTypes from "prop-types";

const RateCard = ({ title, rate, change, logoURL, changeBy, Chart }) => (
  <Grid.Col>
    <Card>
      <Card.Header>
        <Avatar imageURL={logoURL} />
        <Text style={{ marginLeft: "10px" }}>{title}</Text>
      </Card.Header>
      <Card.Body>
        <Grid.Row>
          <Grid.Col>
            <Header.H3>
              <Currency quantity={rate} currency="USD" />
            </Header.H3>
          </Grid.Col>
          <Grid.Col>
            <Text
              color={change === "+" ? "green" : "red"}
            >{`${change}${changeBy}%`}</Text>
          </Grid.Col>
          <Chart />
        </Grid.Row>
      </Card.Body>
    </Card>
  </Grid.Col>
);

RateCard.propTypes = {
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  change: PropTypes.string.isRequired,
  changeBy: PropTypes.number.isRequired,
  logoURL: PropTypes.string.isRequired
};

export { RateCard };

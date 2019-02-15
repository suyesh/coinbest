import React from "react";
import { Card, Grid, Avatar, Text, Header } from "tabler-react";
import { LineChart, Line } from "recharts";
import { PageWrapper } from "../../components";
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const Dashboard = () => (
  <PageWrapper title="Dashboard">
    <Grid.Row cards>
      <Grid.Col>
        <Card>
          <Card.Header>
            <Avatar imageURL="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" />
            <Text style={{ marginLeft: "10px" }}>Bitcoin</Text>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col>
                <Header.H3>$3578.00</Header.H3>
              </Grid.Col>
              <Grid.Col>
                <Text color="green">+2.5%</Text>
              </Grid.Col>
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Grid.Col>
      <Grid.Col>
        <Card>
          <Card.Header>
            <Avatar imageURL="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/CwSMaokbSgaw3ZX58S7i" />
            <Text style={{ marginLeft: "10px" }}>Ethereum</Text>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col>
                <Header.H3>$120.00</Header.H3>
              </Grid.Col>
              <Grid.Col>
                <Text color="red">+3.5%</Text>
              </Grid.Col>
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Grid.Col>
      <Grid.Col>
        <Card>
          <Card.Header>
            <Avatar imageURL="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580" />
            <Text style={{ marginLeft: "10px" }}>Litecoin</Text>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col>
                <Header.H3>$40.00</Header.H3>
              </Grid.Col>
              <Grid.Col>
                <Text color="green">+0.01%</Text>
              </Grid.Col>
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Grid.Col>
    </Grid.Row>
  </PageWrapper>
);

export default Dashboard;

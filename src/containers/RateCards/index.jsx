import React from "react";
import { Grid } from "tabler-react";
import { RateCard, RateChart } from "../../components";

const RateCards = () => (
  <Grid.Row cards>
    <RateCard
      title="Bitcoin"
      logoURL="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"
      rate={3578}
      change="+"
      changeBy={2.5}
      Chart={() => <RateChart />}
    />

    <RateCard
      title="Ethereum"
      logoURL="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/CwSMaokbSgaw3ZX58S7i"
      rate={120}
      change="+"
      changeBy={3.5}
      Chart={() => <RateChart />}
    />

    <RateCard
      title="Litecoin"
      logoURL="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
      rate={40}
      change="-"
      changeBy={0.02}
      Chart={() => <RateChart />}
    />
  </Grid.Row>
);

export { RateCards };

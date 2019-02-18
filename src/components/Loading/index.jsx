import React from "react";
import { Loader, Grid } from "tabler-react";
import { PageWrapper } from "../PageWrapper";

const Loading = () => (
  <PageWrapper>
    <Grid.Row>
      <Grid.Col auto width={12} offset={6}>
        <Loader />
      </Grid.Col>
    </Grid.Row>
  </PageWrapper>
);

export { Loading };

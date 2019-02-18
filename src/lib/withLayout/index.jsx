import React from "react";
import { Page } from "tabler-react";
import { Main, TopHeader, HeaderNav, HeaderNavItems } from "../../components";

const withLayout = Comp => {
  return props => (
    <Main>
      <TopHeader />
      <HeaderNav NavItems={HeaderNavItems} />
      <Page.Main>
        <Comp {...props} />
      </Page.Main>
    </Main>
  );
};

export default withLayout;

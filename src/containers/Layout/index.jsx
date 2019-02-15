import React from "react";
import { Page } from "tabler-react";
import PropTypes from "prop-types";
import { Main, TopHeader, HeaderNav, HeaderNavItems } from "../../components";

const Layout = ({ children }) => (
  <Main>
    <TopHeader />
    <HeaderNav NavItems={HeaderNavItems} />
    <Page.Main>{children}</Page.Main>
  </Main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout };

import React from "react";
import { Page, Site } from "tabler-react";
import PropTypes from "prop-types";

const Main = ({ children }) => (
  <Page>
    <Site>{children}</Site>
  </Page>
);

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export { Main };

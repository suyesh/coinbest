import React from "react";
import PropTypes from "prop-types";
import { Page } from "tabler-react";

const PageWrapper = ({ children, title }) => (
  <Page.Content title={title}>{children}</Page.Content>
);

PageWrapper.defaultProps = {
  title: "Dashboard"
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export { PageWrapper };

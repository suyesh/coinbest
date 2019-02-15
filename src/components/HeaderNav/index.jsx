import React from "react";
import { Site } from "tabler-react";
import PropTypes from "prop-types";

const HeaderNav = ({ NavItems }) => <Site.Nav items={<NavItems />} />;

HeaderNav.propTypes = {
  NavItems: PropTypes.func.isRequired
};

export { HeaderNav };

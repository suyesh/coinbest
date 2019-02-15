import React from "react";
import { Nav } from "tabler-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";

const HeaderNavItems = ({ navigations }) =>
  navigations.map(nav => (
    <Nav.Item
      value={nav.name}
      icon={nav.icon}
      key={nav.name}
      LinkComponent={Link}
      to={nav.route}
    />
  ));

HeaderNavItems.defaultProps = {
  navigations: NAV_ITEMS
};

HeaderNavItems.propTypes = {
  navigations: PropTypes.array.isRequired
};

export { HeaderNavItems };

import React from "react";
import { Site } from "tabler-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { USER_PAGES, HEADER } from "../../constants";

const TopHeader = ({ logoUrl, userAvatar, userName, notifications }) => (
  <Site.Header
    imageURL={logoUrl}
    accountDropdown={{
      avatarURL: userAvatar,
      name: userName,
      options: USER_PAGES,
      optionsRootComponent: Link
    }}
    notificationsTray={{
      notificationsObjects: notifications
    }}
  />
);

TopHeader.defaultProps = {
  logoUrl: HEADER.LOGO_URL,
  userAvatar: HEADER.USER_AVATAR,
  userName: HEADER.USER_NAME,
  notifications: HEADER.NOTIFICATIONS
};

TopHeader.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  notifications: PropTypes.array.isRequired
};

export { TopHeader };

import React from "react";

export const HEADER = {
  LOGO_URL:
    "https://www.coinbase.com/assets/press/coinbase-logos/coinbase-white-a16d0d1ae86bcb6058884d2f18e4e86034206ac0ad094c42c37594516d33cf0b.png",
  USER_AVATAR: "https://avatars3.githubusercontent.com/u/8418861?s=400&v=4",
  USER_NAME: "Karthik Namburu",
  NOTIFICATIONS: [
    {
      avatarURL: "demo/faces/male/41.jpg",
      message: (
        <React.Fragment>
          <strong>Nathan</strong> pushed new commit: Fix page load performance
          issue.
        </React.Fragment>
      ),
      time: "10 minutes ago"
    },
    {
      avatarURL: "demo/faces/female/1.jpg",
      message: (
        <React.Fragment>
          <strong>Alice</strong> started new task: Tabler UI design.
        </React.Fragment>
      ),
      time: "1 hour ago"
    },
    {
      avatarURL: "demo/faces/female/18.jpg",
      message: (
        <React.Fragment>
          <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
        </React.Fragment>
      ),
      time: "2 hours ago"
    }
  ]
};

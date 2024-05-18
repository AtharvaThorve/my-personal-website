"use client";
import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);

  return (
    <div className="social">
      <SocialIcon
        style={styles.iconStyle}
        url="https://linkedin.com/in/atharva-thorve"
        network="linkedin"
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        style={styles.iconStyle}
        url="https://github.com/AtharvaThorve"
        network="github"
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        style={styles.iconStyle}
        url="mailto:aaathorve@gmail.com"
        network="email"
        target="_blank"
        rel="noopener"
      />
    </div>
  );
}

export default Social;

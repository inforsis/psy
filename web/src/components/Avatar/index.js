import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/avatar.module.scss';

export default function Avatar(props) {
  const { userName } = props;
  const [avatarColor, setAvatarColor] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    function stringToColor() {
      let hash = 0;
      let i;

      /* eslint-disable no-bitwise */
      for (i = 0; i < userName.length; i += 1) {
        hash = userName.charCodeAt(i) + ((hash << 5) - hash);
      }

      let color = '#';

      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }
      /* eslint-enable no-bitwise */

      setAvatarColor(color);
    }

    function stringAvatar() {
      const initials = `${userName.split(' ')[0][0]}${
        userName.split(' ')[1][0]
      }`;
      setName(initials);
    }
    stringAvatar();
    stringToColor();
  }, [userName]);
  return (
    <div className={styles.avatar} style={{ backgroundColor: avatarColor }}>
      {name}
    </div>
  );
}

Avatar.propTypes = {
  userName: PropTypes.string,
};

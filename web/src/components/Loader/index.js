import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import styles from './assets/scss/loader.module.scss';

export default function Loader(props) {
  const { toggle, message } = props;
  return (
    <div
      className={styles.mainLoadingContainer}
      data-show={toggle}
      data-message={message || 'LOADING...'}
    >
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
    </div>
  );
}

Loader.propTypes = {
  toggle: PropTypes.bool,
  message: PropTypes.string,
};

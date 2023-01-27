/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import ModalConfirm from '../components/Modals/ModalConfirm';

// import axios from 'axios';
import Loader from '../components/Loader';
// import { api } from '../services';

const WebContext = createContext();

function WebProvider({ children }) {
  const [loader, setLoader] = useState({});
  const [sectionTitle, setSectionTitle] = useState();
  const [bgColor, setBgColor] = useState();
  // const navigate = useNavigate();

  const toggleLoader = useCallback(
    (obj) => {
      setLoader(obj);
    },
    [setLoader],
  );

  const notify = useCallback((opts) => {
    switch (opts.type) {
      case 'success':
        toast.success(opts.message, {
          autoClose: 10000,
        });
        break;
      case 'dark':
        toast.dark(opts.message, {
          autoClose: 10000,
        });
        break;
      case 'warning':
        toast.warn(opts.message, {
          autoClose: 10000,
        });
        break;
      case 'info':
        toast.info(opts.message, {
          autoClose: 10000,
        });
        break;
      case 'error':
        toast.error(opts.message, {
          autoClose: 15000,
        });
        break;
      default:
        toast(opts.message, {
          autoClose: 10000,
        });
    }
  }, []);

  // modal confirm
  const [modalConfirm, setModalConfirm] = useState(false);
  const [dataModalConfirm, setDataModalConfirm] = useState();
  const toggleModalConfirm = (obj) => {
    setDataModalConfirm(obj);
    setModalConfirm(obj.modal !== undefined ? obj.modal : !modalConfirm);
  };

  return (
    <WebContext.Provider
      value={{
        notify,
        loader,
        toggleLoader,
        toggleModalConfirm,
        sectionTitle,
        setSectionTitle,
        bgColor,
        setBgColor,
      }}
    >
      {children}
      <ToastContainer />
      <ModalConfirm
        modal={modalConfirm}
        toggle={toggleModalConfirm}
        data={dataModalConfirm}
      />

      <Loader toggle={loader.visibile} message={loader.message} />
    </WebContext.Provider>
  );
}

export default WebProvider;

export function useWeb() {
  const context = useContext(WebContext);
  return context;
}

WebProvider.propTypes = {
  children: PropTypes.object,
};

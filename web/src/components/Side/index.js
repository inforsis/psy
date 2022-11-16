import React from 'react';
import { RiHome3Fill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { MdLocationOn, MdMail } from 'react-icons/md';
import { TbPower } from 'react-icons/tb';
import { GiNotebook } from 'react-icons/gi';
import { Button } from 'reactstrap';
import styles from './assets/scss/side.module.scss';
import Logo from './assets/img/psy.png';

import Avatar from '../Avatar';

export default function Side() {
  return (
    <aside
      id={styles.side}
      // data-expand-mode={sideStatus}
      // onClick={() => {
      //   setSideStatus();
      // }}
    >
      <div className={styles.header}>
        <img src={Logo} alt="Logo" />
        <span>s</span>
      </div>
      <div className={styles.content}>
        <div className={styles.contentAvatar}>
          <Avatar userName="Jadson Moreira" />
          <div className="my-2" />
          <h6>Jadson Moreira</h6>
          <small>
            {/* <MdMail /> */}
            inforsis@gmail.com
          </small>
          <address>
            {/* <MdLocationOn /> */}
            Aracaju, SE - Brazil
          </address>
        </div>
        <nav className={styles.menu}>
          <Link to="/" className="item" title="Dashboard">
            <RiHome3Fill />
            Dashboard
          </Link>
          <Link to="/usuarios" className="item" title="Usuários">
            <HiUserGroup />
            Usuários
          </Link>
          <Link to="/agenda" className="item d-none" title="Agenda">
            <FaCalendarAlt />
            Agenda
          </Link>
          <Link to="/diarios" className="item" title="Diários">
            <GiNotebook />
            Diários
          </Link>
          <Link to="/configuracao/1" className="item" title="Configuração">
            <IoMdSettings />
            Configuração
          </Link>
        </nav>
        <div className={styles.logout}>
          <Button type="button" color="danger" outline title="Sair">
            <TbPower />
          </Button>
        </div>
      </div>
    </aside>
  );
}

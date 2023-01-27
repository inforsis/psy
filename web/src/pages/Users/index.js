import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';
import { BsInfoCircleFill } from 'react-icons/bs';
import classnames from 'classnames';
import { MdEmail, MdOutlineOpenInNew } from 'react-icons/md';
import { RiInboxUnarchiveFill } from 'react-icons/ri';
import styles from './assets/scss/users.module.scss';
import { useWeb } from '../../contexts';
import Avatar from '../../components/Avatar';

export default function Users(props) {
  const { setSectionTitle, setBgColor } = useWeb();
  const { title, bgColor } = props;
  useEffect(() => {
    setSectionTitle(title);
  }, [setSectionTitle, title]);
  useEffect(() => {
    setBgColor(bgColor);
  }, [setBgColor, bgColor]);

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container fluid className="p-0">
      <Nav id={styles.header} tabs className="mb-5">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggleTab('1');
            }}
          >
            Ativos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggleTab('2');
            }}
          >
            Arquivados
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="gy-4">
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6">
              <Card className="h-100">
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-between mt-8 px-4">
                    <BsInfoCircleFill size={24} />
                    <Link to="/perfil/1">
                      <MdOutlineOpenInNew size={24} />
                    </Link>
                    <MdEmail size={24} />
                  </div>
                  <hr className="my-7" />
                  <Row>
                    <Link
                      to="/perfil/1/diarios"
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <GiNotebook size={24} />7 diários
                    </Link>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="gy-4">
            <Col xl="3" sm="6">
              <Card className={`${styles.inactive} h-100`}>
                <CardHeader className="text-center">Jadson Moreira</CardHeader>
                <CardBody className="d-flex justify-content-between flex-column">
                  <div className={styles.contentAvatar}>
                    <Avatar userName="Jadson Moreira" />
                    <i className="my-3" />
                    <small>inforsis@gmail.com</small>
                    <address>PACIENTE</address>
                  </div>
                  <div className="my-4" />
                  <div className="d-flex justify-content-center mt-8 px-4">
                    <RiInboxUnarchiveFill size={24} />
                  </div>
                  <hr className="my-7" />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

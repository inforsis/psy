import {
  Container,
  Nav,
  NavItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  List,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { IoArchive } from 'react-icons/io5';
import Avatar from '../../components/Avatar';
import { useWeb } from '../../contexts';

import styles from './assets/scss/profile.module.scss';

export default function Profile({ children }) {
  const { toggleModalConfirm } = useWeb();
  const handleArchiveUser = () => {
    toggleModalConfirm({ modal: false });
  };
  return (
    <Container fluid className="p-0">
      <div id={styles.header} className="mb-5">
        <Row className="g-0 mb-5">
          <Col className="col-auto">
            <div className={styles.contentAvatar}>
              <Avatar userName="Jadson Moreira" />
            </div>
          </Col>
          <Col className="ps-4 pt-4 d-flex align-items-end">
            <div className="d-flex flex-column">
              <h6 className={styles.name}>Jadson Moreira</h6>
              <small className={styles.role}>ADMIN</small>
            </div>
          </Col>
          <Col className="col-md-auto d-flex align-items-end mt-2 mt-md-0 mb-md-3 hstack gap-2 mt-4 mt-sm-0">
            <Button
              color="danger"
              title="Arquivar usuário"
              onClick={() => {
                toggleModalConfirm({
                  body: <p>Arquivar Usuário: Jadson Moreira?</p>,
                  type: 'archiveUser',
                  fn: handleArchiveUser,
                });
              }}
            >
              <IoArchive size={20} />
            </Button>
          </Col>
        </Row>
        <Nav tabs className={`${styles.menu} mb-5`}>
          <NavItem>
            <Link className="nav-link" to="/perfil/1">
              Perfil
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/perfil/1/diarios">
              Diários
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/perfil/1/estatisticas">
              Estaísticas
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/perfil/1/configuracao">
              Configuração
            </Link>
          </NavItem>
        </Nav>
      </div>
      <Container fluid className="p-0">
        <Row className="g-6">
          <Col xl={8}>{children}</Col>
          <Col xl={4}>
            <Card className="mb-5">
              <CardHeader>
                <CardTitle>Localização</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="d-flex align-items-center">
                  <MdLocationOn className="me-2" /> Aracaju, SE, BRAZIL
                </div>
              </CardBody>
            </Card>
            <Card className="">
              <CardHeader>
                <CardTitle>Contatos</CardTitle>
              </CardHeader>
              <CardBody>
                <List>
                  <li>E-mail: inforsis@gmail.com</li>
                  <li>Twitter: http://twitter.com/inforsis</li>
                  <li>Site: https://jadson.dev</li>
                </List>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

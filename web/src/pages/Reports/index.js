import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Button,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import { MdOpenInNew } from 'react-icons/md';
import { RiUserShared2Fill } from 'react-icons/ri';
import classnames from 'classnames';
import styles from './assets/scss/reports.module.scss';
import Avatar from '../../components/Avatar';
import Users from '../../components/Reports/Users';
import ReportYear from '../../components/Reports/Year';
import { useWeb } from '../../contexts';

export default function Reports(props) {
  const navigate = useNavigate();
  const { setSectionTitle, setBgColor } = useWeb();
  const { title, bgColor } = props;
  useEffect(() => {
    setSectionTitle(title);
  }, [setSectionTitle, title]);
  useEffect(() => {
    setBgColor(bgColor);
  }, [setBgColor, bgColor]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

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
            Diários
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            nav
            caret
            className={classnames({ active: activeTab !== '1' })}
          >
            Agrupar
          </DropdownToggle>
          <DropdownMenu style={{ margin: 0 }}>
            <DropdownItem
              onClick={() => {
                toggleTab('2');
              }}
            >
              Usuários
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                toggleTab('3');
              }}
            >
              Período
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mb-5 d-none">
            <div className="d-flex justify-content-between flex-column flex-sm-row gap-3">
              <div className="hstack gap-2">
                <div className="input-group input-group-sm input-group-inline">
                  <span className="input-group-text pe-2">
                    <i className="bi bi-search" />{' '}
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-sm px-3 btn-neutral d-flex align-items-center"
                  >
                    <i className="bi bi-funnel me-2" /> <span>Filters</span>{' '}
                    <span className="vr opacity-20 mx-3" />{' '}
                    <span className="text-xs text-primary">2</span>
                  </button>
                </div>
              </div>
              <div className="btn-group">
                <a href="#" className="btn btn-sm btn-neutral">
                  <i className="bi bi-cloud-download me-2" />
                  Download all{' '}
                </a>
                <a href="#" className="btn btn-sm btn-neutral">
                  <i className="bi bi-gear-wide me-2" />
                  Settings
                </a>
              </div>
            </div>
          </Row>
          <Row className="g-6 mb-5">
            <Col xl="12">
              <Card className="h-100">
                <CardBody>
                  <Table striped className={styles.table}>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="">
                            <Avatar userName="Jadson Moreira" />
                          </div>
                        </td>
                        <td>Jadson Moreira</td>
                        <td>05/06/2022</td>
                        <td className="text-right">
                          <div className="d-flex justify-content-end">
                            <Button
                              className="me-3"
                              color="info"
                              outline
                              title="Visualizar usuário"
                              onClick={() => {
                                navigate('/perfil/1');
                              }}
                            >
                              <RiUserShared2Fill />
                            </Button>{' '}
                            <Button
                              className="me-3"
                              color="success"
                              outline
                              title="Visualizar diário"
                              onClick={() => {
                                navigate('/perfil/1/diario/1');
                              }}
                            >
                              <MdOpenInNew />
                            </Button>{' '}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Card className="h-100">
              <CardHeader>
                <CardTitle className="text-uppercase">
                  Diários agrupados por usuário
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Users />
              </CardBody>
            </Card>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Card className="h-100">
              <CardHeader>
                <CardTitle className="text-uppercase">
                  Diários agrupados por período
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ReportYear />
              </CardBody>
            </Card>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Plot from 'react-plotly.js';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Badge,
  Table,
  Button,
} from 'reactstrap';
import { HiUserGroup } from 'react-icons/hi';
import { MdDelete, MdOpenInNew } from 'react-icons/md';
import { RiUserShared2Fill } from 'react-icons/ri';
import { GiWhiteBook } from 'react-icons/gi';
import styles from './assets/scss/dashboard.module.scss';
import { useWeb } from '../../contexts';
import Avatar from '../../components/Avatar';

export default function Dashboard(props) {
  const { setSectionTitle } = useWeb();
  const { title } = props;
  useEffect(() => {
    setSectionTitle(title);
  }, [setSectionTitle, title]);
  const navigate = useNavigate();
  const trace1 = {
    x: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
    type: 'bar',
    marker: {
      color: 'rgb(49,130,189)',
      opacity: 0.7,
    },
  };

  return (
    <Container fluid className="p-0">
      <Row className="g-6 mb-5">
        <Col xl="2">
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2 text-uppercase">
                    Pacientes
                  </span>{' '}
                  <span className="h3 font-bold mb-0">11</span>
                </Col>
                <Col className="justify-content-end align-items-center d-flex">
                  <div className={styles.badge}>
                    <HiUserGroup />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="2">
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2 text-uppercase">
                    Diários
                  </span>{' '}
                  <span className="h3 font-bold mb-0">201</span>
                </Col>
                <Col className="justify-content-end align-items-center d-flex">
                  <div className={styles.badge}>
                    <GiWhiteBook />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="g-6 mb-5">
        <Col xl="8">
          <Card className="h-100">
            <CardHeader>
              <CardTitle className="text-uppercase">Estatísticas</CardTitle>
            </CardHeader>
            <CardBody>
              <Plot
                data={[trace1]}
                layout={{
                  xaxis: {
                    tickangle: -45,
                  },
                  barmode: 'group',
                }}
                config={{ responsive: true }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="h-100">
            <CardHeader>
              <CardTitle className="text-uppercase">Ranking</CardTitle>
            </CardHeader>
            <CardBody>
              <ListGroup>
                <ListGroupItem className={styles.listItem}>
                  <div className={styles.profile}>
                    <div className="me-3">
                      <Avatar userName="Jadson Moreira" />
                    </div>
                    <div className={styles.profileInfor}>
                      <Link to="/perfil/1" className="h6 font-semibold">
                        Jadson Moreira
                      </Link>
                      <small className="text-sm text-muted">
                        inforsis@gmail.com
                      </small>
                    </div>
                  </div>
                  <Badge pill color="info">
                    <Link
                      to="/perfil/1/diarios"
                      className="text-decoration-none"
                    >
                      4
                    </Link>
                  </Badge>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="g-6 mb-5">
        <Col xl="12">
          <Card className="h-100">
            <CardHeader>
              <CardTitle className="text-uppercase">Últimos diários</CardTitle>
            </CardHeader>
            <CardBody>
              <Table striped className={styles.table}>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Data</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <Avatar userName="Jadson Moreira" />
                        </div>
                        Jadson Moreira
                      </div>
                    </td>
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
                            navigate('/diario/1');
                          }}
                        >
                          <MdOpenInNew />
                        </Button>{' '}
                        <Button
                          color="danger"
                          className="d-none"
                          outline
                          title="Deletar diário"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

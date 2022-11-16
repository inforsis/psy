// import { useEffect } from 'react';
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
} from 'reactstrap';
import { MdOpenInNew } from 'react-icons/md';
import { RiUserShared2Fill } from 'react-icons/ri';
import styles from './assets/scss/reports.module.scss';

export default function Reports() {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-0">
      <Row className="g-6 mb-5">
        <Col xl="12">
          <Card className="h-100">
            <CardHeader>
              <CardTitle className="text-uppercase">Diários</CardTitle>
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
                      <div className="avatar rounded-circle me-3">
                        <img
                          alt="..."
                          src="https://jadson.dev/img/jadson_moreira.fe97d204.webp"
                        />
                      </div>
                      Jadson Moreira
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
                            navigate('/diario/1');
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

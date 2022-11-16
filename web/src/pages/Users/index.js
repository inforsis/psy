import { useEffect } from 'react';
import { Container, Card, CardBody, Row, Col, CardHeader } from 'reactstrap';
import { GiNotebook } from 'react-icons/gi';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import styles from './assets/scss/users.module.scss';
import { useWeb } from '../../contexts';
import Avatar from '../../components/Avatar';

export default function Users(props) {
  const { setSectionTitle } = useWeb();
  const { title } = props;
  useEffect(() => {
    setSectionTitle(`${title}`);
  }, [setSectionTitle, title]);

  return (
    <Container fluid className="p-0">
      <Row className="gy-4">
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" sm="6">
          <Card>
            <CardHeader className="text-center">Jadson Moreira</CardHeader>
            <CardBody className="d-flex justify-content-center flex-column">
              <div className={styles.contentAvatar}>
                <Avatar userName="Jadson Moreira" />
              </div>
              <div className="my-4" />
              <div className="d-flex justify-content-between mt-8 px-4">
                <BsInfoCircleFill size={24} />
                <MdEmail size={24} />
              </div>
              <hr className="my-7" />
              <Row className="d-flex flex-direction-colloum justify-content-center align-items-center">
                <GiNotebook size={24} />7 diários
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

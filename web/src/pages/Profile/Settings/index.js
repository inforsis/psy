// import styles from './assets/scss/profile.module.scss';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import ProfileLayout from '../../../layouts/Profile';

export default function Settings() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <ProfileLayout fluid className="p-0">
      <Card>
        <CardHeader>
          <CardTitle>Configuração</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label>Tipo</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Administrador</option>
                    <option>Paciente</option>
                    <option>Auxiliar</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input id="exampleEmail" name="email" type="email" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <FormGroup>
                  <Label for="exampleAddress">Nome</Label>
                  <Input id="exampleAddress" name="address" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleAddress">Data de Nascimento</Label>
                  <Input id="exampleAddress" name="address" type="date" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleText">Biográfia</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">Cidade</Label>
                  <Input id="exampleCity" name="city" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input id="exampleState" name="state" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleZip">Pais</Label>
                  <Input id="exampleZip" name="zip" />
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleZip">Telefone</Label>
                  <Input id="exampleZip" name="zip" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleZip">Celular</Label>
                  <Input id="exampleZip" name="zip" />
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={3}>
                <FormGroup className="mb-0 p-0">
                  <Button color="danger" outline onClick={toggle}>
                    TROCAR SENHA
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Button>Salvar</Button>
          </Form>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Trocar senha</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="examplePassword">Senha atual</Label>
                <Input id="examplePassword" name="password" type="password" />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label for="examplePassword">Nova Senha</Label>
                <Input id="examplePassword" name="password" type="password" />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Salvar
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </ProfileLayout>
  );
}

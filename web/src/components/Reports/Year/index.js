import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  Accordion,
  Table,
  Button,
} from 'reactstrap';
import { MdDelete, MdOpenInNew } from 'react-icons/md';
import { RiUserShared2Fill } from 'react-icons/ri';
import styles from './assets/scss/year.module.scss';
import Avatar from '../../Avatar';

export default function Year() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };
  const navigate = useNavigate();
  return (
    <UncontrolledAccordion stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="11" className={styles.year}>
          2022
        </AccordionHeader>
        <AccordionBody accordionId="11">
          <div className="p-4">
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1" className={styles.month}>
                  Janeiro
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <div className="p-4">
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
                            <div>
                              <Avatar userName="Jadson Moreira" />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                  navigate('/perfil/1/diario/1');
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
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2" className={styles.month}>
                  Fevereiro
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  <div className="p-4">
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
                            <div>
                              <Avatar userName="Jadson Moreira" />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                  navigate('/perfil/1/diarios');
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
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3" className={styles.month}>
                  Março
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  <div className="p-4">
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
                            <div>
                              <Avatar userName="Jadson Moreira" />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                  navigate('/perfil/1/diarios');
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
                  </div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="22" className={styles.year}>
          2021
        </AccordionHeader>
        <AccordionBody accordionId="22">2</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="33" className={styles.year}>
          2020
        </AccordionHeader>
        <AccordionBody accordionId="33">3</AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

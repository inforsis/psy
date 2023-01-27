// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  Table,
  Button,
} from 'reactstrap';
import { MdDelete, MdOpenInNew } from 'react-icons/md';
import { RiUserShared2Fill } from 'react-icons/ri';
import styles from './assets/scss/users.module.scss';
import Avatar from '../../Avatar';

export default function Users() {
  const navigate = useNavigate();
  return (
    <UncontrolledAccordion stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1" className={styles.name}>
          Jadson Moreira
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
        <AccordionHeader targetId="2" className={styles.name}>
          Danielle Costa
        </AccordionHeader>
        <AccordionBody accordionId="2">2</AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

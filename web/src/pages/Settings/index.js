import { useEffect } from 'react';
import { Container } from 'reactstrap';
// import styles from './assets/scss/settings.module.scss';
import { useWeb } from '../../contexts';

export default function Settings(props) {
  const { setSectionTitle } = useWeb();
  const { title } = props;
  useEffect(() => {
    setSectionTitle(`${title}`);
  }, [setSectionTitle, title]);

  return (
    <Container fluid className="p-0">
      Configuracoes
    </Container>
  );
}

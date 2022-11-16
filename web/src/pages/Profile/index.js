import { useEffect } from 'react';
import { Container } from 'reactstrap';
// import styles from './assets/scss/profile.module.scss';
import { useWeb } from '../../contexts';

export default function Profile(props) {
  const { setSectionTitle } = useWeb();
  const { title } = props;
  useEffect(() => {
    setSectionTitle(`${title}`);
  }, [setSectionTitle, title]);

  return (
    <Container fluid className="p-0">
      Perfil
    </Container>
  );
}

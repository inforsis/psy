import { useEffect } from 'react';
import { Container } from 'reactstrap';
// import styles from './assets/scss/report.module.scss';
import { useWeb } from '../../contexts';

export default function Report(props) {
  const { setSectionTitle, setBgColor } = useWeb();
  const { title, bgColor } = props;
  useEffect(() => {
    setSectionTitle(title);
  }, [setSectionTitle, title]);
  useEffect(() => {
    setBgColor(bgColor);
  }, [setBgColor, bgColor]);

  return (
    <Container fluid className="p-0">
      Report
    </Container>
  );
}

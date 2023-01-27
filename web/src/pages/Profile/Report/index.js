import { useEffect } from 'react';
// import styles from './assets/scss/userReports.module.scss';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import { useWeb } from '../../../contexts';
import ProfileLayout from '../../../layouts/Profile';

export default function UserReport(props) {
  const { setSectionTitle, setBgColor } = useWeb();
  const userName = 'Jadson Moreira';
  useEffect(() => {
    function stringToColor() {
      let hash = 0;
      let i;

      /* eslint-disable no-bitwise */
      for (i = 0; i < userName.length; i += 1) {
        hash = userName.charCodeAt(i) + ((hash << 5) - hash);
      }

      let color = '#';

      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }
      /* eslint-enable no-bitwise */

      setBgColor(color);
    }
    stringToColor();
  }, [setBgColor, userName]);
  const { title } = props;
  useEffect(() => {
    setSectionTitle(title);
  }, [setSectionTitle, title]);

  return (
    <ProfileLayout fluid className="p-0">
      <Card>
        <CardHeader>
          <CardTitle>Diário</CardTitle>
        </CardHeader>
        <CardBody />
      </Card>
    </ProfileLayout>
  );
}

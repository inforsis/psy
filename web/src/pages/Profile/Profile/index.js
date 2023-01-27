import { useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import ProfileLayout from '../../../layouts/Profile';
// import styles from './assets/scss/profile.module.scss';
import { useWeb } from '../../../contexts';

export default function Profile(props) {
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
    setSectionTitle(`${title}`);
  }, [setSectionTitle, title]);
  return (
    <ProfileLayout fluid className="p-0">
      <Card className="mb-5">
        <CardHeader>
          <CardTitle>Resumo</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            distinctio porro repudiandae enim quos corporis aperiam eveniet
            optio nesciunt incidunt maiores cupiditate architecto ipsum, neque
            mollitia similique, totam illo dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            distinctio porro repudiandae enim quos corporis aperiam eveniet
            optio nesciunt incidunt maiores cupiditate architecto ipsum, neque
            mollitia similique, totam illo dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            distinctio porro repudiandae enim quos corporis aperiam eveniet
            optio nesciunt incidunt maiores cupiditate architecto ipsum, neque
            mollitia similique, totam illo dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            distinctio porro repudiandae enim quos corporis aperiam eveniet
            optio nesciunt incidunt maiores cupiditate architecto ipsum, neque
            mollitia similique, totam illo dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            distinctio porro repudiandae enim quos corporis aperiam eveniet
            optio nesciunt incidunt maiores cupiditate architecto ipsum, neque
            mollitia similique, totam illo dolorum?
          </p>
        </CardBody>
      </Card>
      <Card className="mb-5">
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
        </CardHeader>
        <CardBody />
      </Card>
    </ProfileLayout>
  );
}

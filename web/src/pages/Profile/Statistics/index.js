// import styles from './assets/scss/profile.module.scss';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import ProfileLayout from '../../../layouts/Profile';

export default function Profile() {
  return (
    <ProfileLayout fluid className="p-0">
      <Card>
        <CardHeader>
          <CardTitle>Estatísticas</CardTitle>
        </CardHeader>
        <CardBody>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Horário que foi para cama</CardTitle>
            </CardHeader>
            <CardBody />
          </Card>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Horário que levantou da cama</CardTitle>
            </CardHeader>
            <CardBody />
          </Card>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Horário que acordou</CardTitle>
            </CardHeader>
            <CardBody />
          </Card>
        </CardBody>
      </Card>
    </ProfileLayout>
  );
}

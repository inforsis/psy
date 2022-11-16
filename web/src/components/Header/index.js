import { MdOutlineCloudDownload } from 'react-icons/md';

import { Button } from 'reactstrap';
import styles from './assets/scss/header.module.scss';
import { useWeb } from '../../contexts';

export default function Header() {
  const { sectionTitle } = useWeb();
  return (
    <header id={styles.header}>
      <form
        method="post"
        encType="application/x-www-form-urlencoded"
        className={styles.form}
      >
        <input
          type="file"
          className="d-none"
          accept=".csv"
          name="csv"
          id="csv"
        />
        <Button
          type="file"
          color="warning"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById('csv').click();
          }}
          outline
          title="Importar Planilha"
        >
          <MdOutlineCloudDownload /> Importar Planilha
        </Button>
      </form>
      <div className={styles.content}>
        <h6 className={styles.title}>{sectionTitle}</h6>
      </div>
    </header>
  );
}

// Header.propTypes = {
//   direction: PropTypes.string,
// };

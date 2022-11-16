import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import styles from './assets/scss/main.module.scss';

export default function Main() {
    return (
        <main className={`${styles.main}`}>
            <div className={`${styles.header}`}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    color="text.primary" fontSize="24px"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Typography>
                </Breadcrumbs>
            </div>
            <div className={`${styles.content}`}>
                content
            </div>
        </main>
    )
}
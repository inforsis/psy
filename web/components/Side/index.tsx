import Box from '@mui/material/Box';

import styles from './assets/scss/side.module.scss';

export default function Side() {
    return (
        <aside className={`${styles.side}`}>
            <Box mb={2} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
                <div className={`${styles.title}`}>
                    <h6>Perfil</h6>
                </div>
                <div className={`${styles.content}`}>
                    content
                </div>
            </Box>

            <Box mb={2} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
                <div className={`${styles.title}`}>
                    <h6>Agenda</h6>
                </div>
                <div className={`${styles.content}`}>
                    content
                </div>
            </Box>
        </aside>
    )
}
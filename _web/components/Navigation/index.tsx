import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ClientsIcon from '@mui/icons-material/Person';
import ExitIcon from '@mui/icons-material/Logout';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import DreamIcon from '@mui/icons-material/Cloud';

import styles from './assets/scss/navigation.module.scss';

export default function Navigation() {
    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    return (
        <aside className={`${styles.side}`}>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <div className={`${styles.content}`}>
                <Box p={3} mb={5} justifyContent="center">
                    <Avatar {...stringAvatar('Jadson Moreira')} /> 
                </Box>
                <Box justifyContent="center" flexDirection="column" alignItems="center" sx={{ display: 'flex'}}>
                    <Link
                    underline="hover"
                    fontSize={32}
                    mb={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <HomeIcon fontSize="inherit" />
                    </Link>

                    <Link
                    underline="hover"
                    fontSize={32}
                    mb={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <ClientsIcon fontSize="inherit" /> 
                    </Link>

                    <Link
                    underline="hover"
                    fontSize={32}
                    mb={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <CalendarIcon fontSize="inherit" />
                    </Link>

                    <Link
                    underline="hover"
                    fontSize={32}
                    mb={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <DreamIcon fontSize="inherit" />
                    </Link>

                    <Link
                    underline="hover"
                    fontSize={32}
                    mb={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <SettingsIcon fontSize="inherit" />
                    </Link>
                </Box>
                <Box justifyContent="center" flexDirection="column" alignItems="center" sx={{ display: 'flex'}}>
                <Link
                    underline="hover"
                    fontSize={32}
                    mb={5}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                        <ExitIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    </Link>
                </Box>
            </div>
        </aside>
    )
}
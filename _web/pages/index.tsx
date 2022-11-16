import Box from '@mui/material/Box';
import Navigation from '../components/Navigation';
import Side from '../components/Side';
import Main from '../components/Main';

export default function Home() {
  return (
    <Box flexDirection="row" m={3} sx={{ flexGrow: 1, display: 'flex' }}>
      <Navigation/>
      <Main/>
      <Side/>
    </Box> 
  )
}

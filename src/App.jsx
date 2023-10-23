import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import AccessAlarm from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {

  return (
    <>
      <ModeToggle/>

      <hr/>
      <div>abc</div>
      <Button variant="text">Hello World</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br/>
      <AccessAlarm/>
      <ThreeDRotation/>
      <HomeIcon color="primary"/>
      <HomeIcon color="secondary"/>
      <HomeIcon color="success"/>
      <HomeIcon color="action"/>
      <HomeIcon color="disabled"/>
      <HomeIcon sx={{ color: pink [500] }}/>
 
    </>
  )
}

export default App

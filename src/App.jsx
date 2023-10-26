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

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light"> 
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <LightModeIcon fontSize='small'/>   Light
            </div>
          </MenuItem>
          <MenuItem value="dark">
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <DarkModeOutlinedIcon fontSize='small'/>   Dark
            </div>
          </MenuItem>
          <MenuItem value="system">
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <SettingsBrightnessIcon fontSize='small'/>   System
            </div>
          </MenuItem>

        </Select>
      </FormControl>
  )
}

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
      <ModeSelect/>
      <hr/>
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

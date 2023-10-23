import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import AccessAlarm from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
function App() {

  return (
    <>
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
      <HomeIcon sx={{color: pink [500]}}/>


    </>
  )
}

export default App

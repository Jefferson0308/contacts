import React from 'react'
import '@fontsource/roboto/300.css'
import {
  CardHeader,
  Typography,
  Card,
  CardContent,
  Avatar
} from '@mui/material'

function Showcard(props) {
  return (
    <Card sx={{ mt: 5, mb: 5 }}>
      <CardHeader
        title={<Typography variant="h4">{props.name}</Typography>}
        avatar={
          <Avatar
            alt="Remy Sharp"
            src={props.img}
            sx={{ width: 150, height: 150 }}
          />
        }
        style={{ backgroundColor: 'lightgreen',}}
      />
      <CardContent>
        <Typography variant="body2">{props.tel}</Typography>
        <Typography variant="body1">{props.email}</Typography>
      </CardContent>
    </Card>
  )
}

export default Showcard

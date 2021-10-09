import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard(props) {

	const title = props.title
	const url = props.url

  return (
    <Card sx={{ maxWidth: 345 , margin : "6px" }}>
      <CardMedia
        component="img"
        alt="картинка"
        height="140"
        image={url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Удалить</Button>
        <Button size="small">Узнать больше</Button>
      </CardActions>
    </Card>
  );
}

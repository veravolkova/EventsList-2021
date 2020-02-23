import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340
  },
  media: {
    height: 140
  }
});

export default function EventCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} position={props.key}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component='img'
          alt='Event Image Placeholder'
          src={
            props.event.description.images[0]
              ? props.event.description.images[0]['url']
              : '/images/milkyway.jpeg'
          }
        />

        <CardContent className={classes.content}>
          <Typography variant='body2' component='p'>
            {props.event.event_dates.starting_day.substring(0, 10) +
              ' ' +
              props.event.event_dates.starting_day.substring(11, 16)}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            component='h4'
            noWrap={true}
            defaultValue='No name provided'
          >
            {props.event.name['en']
              ? props.event.name['en']
              : props.event.name['fi']
              ? props.event.name['fi']
              : 'No Title Provided'}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            maxLength='80'
            noWrap={true}
          >
            {props.event.location.address.street_address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          size='small'
          color='primary'
          target='_blank'
          href={
            props.event.info_url
              ? props.event.info_url
              : 'https://www.myhelsinki.fi/en/see-and-do/events'
          }
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  image: {
    width: 100,
    height: 80,
    marginTop: 20
  }
});

export default function ErrorScreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant='h5' component='h4'>
        Oops! Something went worng...
      </Typography>
      <img className={classes.image} src='/images/sadcat.jpeg' alt='sadcat' />
    </div>
  );
}
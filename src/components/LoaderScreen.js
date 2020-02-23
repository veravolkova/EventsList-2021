import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export default function LoaderScreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant='h5' component='h4'>
        Loading...
      </Typography>
    </div>
  );
}
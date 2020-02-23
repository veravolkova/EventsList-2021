import React from 'react';
import { Grid } from '@material-ui/core/';
import EventCard from './EventCard';

export default function GridLayout(props) {
  
  const gridList = props.events.map((event, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <li key={index} style={{ listStyleType: 'none' }}>
        <EventCard event={event} position={index} />
      </li>
    </Grid>
  ));

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='center'
      >
        {gridList}
      </Grid>
    </div>
  );
}

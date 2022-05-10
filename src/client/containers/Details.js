import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { DataContext } from '../context/dataContext';
import { Grid, Typography } from '@material-ui/core';
import { formatDate } from '../utils/common';
import { useStyles } from './details.styles';

export const Details = () => {
  const classes = useStyles();
  const dataContext =  useContext(DataContext);
  const { id } = useParams();
  const details = dataContext.data.features.find(feature => feature.id === id)
  const fields = [
    { label: "Title", value: "title" },
    { label: "Magnititude", value: "mag" },
    { label: "Time", value: "time" },
    { label: "Status", value: "status" },
    { label: "Tsunami", value: "tsunami" },
    { label: "Type", value: "type" }
  ]

  const fieldDetails = fields.map(field =>
      <Grid item className={classes.detailsContainer} key={field.value}>
        <Grid item className={classes.label}>
          {field.label}
        </Grid>
        <Grid item className={classes.value}>
          {field.value === 'time' ? formatDate(details.properties[field.value]) : details.properties[field.value]}
        </Grid>
      </Grid>
  );

  return (
    <Grid container className={classes.container}>
        <Grid item className={classes.heading}>
            <Typography variant="h6" align="center">{details.properties.place}</Typography>
        </Grid>
        <Grid item>
            {fieldDetails}
        </Grid>
    </Grid>
  )
};


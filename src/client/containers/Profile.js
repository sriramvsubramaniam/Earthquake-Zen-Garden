import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './details.styles';

export const Profile = () => {
  const classes = useStyles();
  const dataContext =  useContext(DataContext);
  const profile = dataContext.profile;

  const fields = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Phone", value: "phone" },
    { label: "Email", value: "email" },
    { label: "Bio", value: "bio" }
  ]

  const fieldDetails = fields.map(field => 
      <Grid item className={classes.detailsContainer} key={field.value}>
        <Grid item className={classes.label}>
          {field.label}
        </Grid>
        <Grid item className={classes.value}>
          {profile[field.value]}
        </Grid>
      </Grid>
  );

  return (
    <Grid container className={classes.container}>
        <Grid item className={classes.heading}>
            <Typography variant="h6" align="center">Profile</Typography>
        </Grid>
        <Grid item className={classes.detailsContainer}>
            <Grid item className={classes.imageContainer}>
                <img width={150} src={profile.avatarImage} />
            </Grid>
            <Grid item className={classes.details}>
                {fieldDetails}
            </Grid>
        </Grid>
    </Grid>
  )
};
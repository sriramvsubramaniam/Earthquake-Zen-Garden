import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataContext';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
      backgroundColor: theme.palette.tertiary.light,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
  title: {
    color: theme.palette.tertiary.medium,
    fontWeight: 700,
  },
  link: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const dataContext = useContext(DataContext);

  return (
    <header>
      <Grid container className={classes.headerContainer}>
        <Grid item>
          <Link to={`/`}>
            <img width={50} height={50} src={dataContext.site.logoImage} alt={dataContext.site.title} />
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.title}>{dataContext.site.title}</Typography>
        </Grid>
        <Grid item>
          <Link to={"/profile"}>
            <Typography variant="body2" className={classes.link}>Welcome {dataContext.profile.firstName}</Typography>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
};

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataContext';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import { formatDate } from '../utils/common';

const useStyles = makeStyles((theme) => ({
    tHeader: {
        cursor: 'pointer',
        textDecoration: 'underline',
    },
    table:{
        maxWidth: 600,
        margin: 'auto',
    },
    heading: {
        marginTop: 20,
        marginBottom: 10,
    },
    link: {
        color: theme.palette.secondary.main,
        fontWeight: 600,
    },
}));

export const Summary = () => {
  const classes = useStyles();
  const dataContext =  useContext(DataContext);
  const [sortAscending, setSortAscending] = useState();
  const [sortedData, setSortedData] = useState(dataContext.data.features);

  const sortData = (name) => {
    setSortAscending(!sortAscending)

    sortedData.sort((a, b) => {
      if (a.properties[name] < b.properties[name]) {
        return sortAscending ? 1 : -1
      }
      if (a.properties[name] > b.properties[name]) {
        return sortAscending ? -1 : 1
      }
      return 0
    })

    setSortedData(sortedData)
  };

  return (
    <Grid container justifyContent="center" direction="column">
        <Grid item className={classes.heading}>
            <Typography variant="h5" align="center">USGS All Earthquakes, Past hour</Typography>
        </Grid>
        <Grid item>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="table">
                    <TableHead className={classes.tHeader}>
                    <TableRow>
                        <TableCell onClick={() => sortData('place')}>Title</TableCell>
                        <TableCell onClick={() => sortData('mag')} align="right">Magnitude</TableCell>
                        <TableCell onClick={() => sortData('time')} align="right">Time</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell component="th" scope="row">
                                    <Link className={classes.link} to={`/detail/${data.id}`}>{data.properties.place}</Link>
                                </TableCell>
                                <TableCell align="right">{data.properties.mag}</TableCell>
                                <TableCell align="right">{formatDate(data.properties.time)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
  );
};

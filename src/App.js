import React from 'react'
import {
    BrowserRouter as Router, Route, Routes,
  } from 'react-router-dom';
import { Header } from './client/components/Header';
import { Summary } from './client/containers/Summary';
import { Details } from './client/containers/Details';
import { Profile } from './client/containers/Profile';
import { DataProvider } from './client/context/dataContext';
import data from './server/data.json';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily : 'sans-serif',
    },
    palette: {
        primary: {
            main: '#0011bb',
        },
        secondary: {
            main: '#6600cc',
        },
        tertiary: {
            light: '#ededed',
            medium: '#777777',
            dark: '444444',
        },
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <DataProvider value={data}>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route path="/detail/:id" element={<Details />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </DataProvider>
    </ThemeProvider>
);

export default App;
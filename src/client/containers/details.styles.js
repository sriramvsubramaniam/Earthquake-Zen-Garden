import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container: {
        margin: 'auto',
        maxWidth: 500,
        justifyContent: 'center',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 0,
    },
    details: {
        ...theme.typography.body2,
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
    },
    label: {
        ...theme.typography.body2,
        width: 100,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    value:{
        ...theme.typography.body2,
        width: '50%',
    },
    heading: {
        marginTop: 20,
        marginBottom: 10,
    },
}));
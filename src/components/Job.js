import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';

const styles = {
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    name: {
        fontSize: '1.2em',
        paddingRight: 5,
    },
    role: {
        fontStyle: 'italic',
        fontSize: '1.0em',
        paddingLeft: 5,
    },
    fat: {
        fontWeight: 400,
    },
};

const Job = ({ name, role, period, classes, children }) => {
    return (
        <div>
            <div className={classes.row}>
                <Typography className={[classes.name, classes.fat].join(' ')}>{name}</Typography> -{' '}
                <Typography className={[classes.role, classes.fat].join(' ')}>{role}</Typography>
            </div>
            <div className={classes.fat}>{period}</div>
            <Typography>{children}</Typography>
        </div>
    );
};

export default withStyles(styles)(Job);

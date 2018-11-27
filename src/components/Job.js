import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Chip from '@material-ui/core/Chip/Chip';

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

const Job = ({ name, employer, role, from , to, content, classes, languages = [], tags = [] }) => {
    return (
        <div>
            <div className={classes.row}>
                <Typography className={[classes.name, classes.fat].join(' ')}>{name}</Typography> -{' '}
                <Typography className={[classes.role, classes.fat].join(' ')}>{role}</Typography>
            </div>
            {employer && <Typography color={'primary'}>{employer}</Typography>}
            <div className={classes.fat}>{`${from}${to && ' - ' + to}`}</div>
            <Typography>{content}</Typography>
            <div>{languages.map(lang => <Chip color={'primary'} label={lang} />)} {tags.map(tag => <Chip label={tag} />)}</div>
        </div>
    );
};

export default withStyles(styles)(Job);

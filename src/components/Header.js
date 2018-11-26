import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
    header: {
        display: 'grid',
        minHeight: 130,
        gridArea: 'header',
        gridTemplateRows: '60% 40%',
        gridTemplateAreas: `'name' 'title'`,
    },
    name: {
        gridArea: 'name',
        placeSelf: 'center',
        alignSelf: 'end',
        fontWeight: 300
    },
    title: {
        gridArea: 'title',
        placeSelf: 'center',
        alignSelf: 'start',
        fontWeight: 300
    },
});

const Header = ({ classes }) => {
    return (
        <div className={classes.header}>
            <div className={classes.name}>
                <Typography style={{fontWeight: 'inherit'}} variant={'display2'}>PETER HELENEFORS</Typography>
            </div>
            <div className={classes.title}><Typography style={{fontWeight: 'inherit'}} variant={'subheading'}>Mjukvaruprojektör, arkitekt och utvecklare</Typography></div>
        </div>
    );
};

export default withStyles(styles)(Header);

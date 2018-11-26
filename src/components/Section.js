import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
const styles = theme => ({
    section: {
        display: 'grid',
        gridTemplateAreas: `'box title' 'padding content'`,
        gridTemplateColumns: '30px auto',
        marginBottom: 20,
        // gridColumnGap: '10px'
    },
    box: {
        gridArea: 'box',
        backgroundColor: '#43526E',
        width: '100%',
        marginRight: 20,
        height: 37.5,
    },
    title: {
        gridArea: 'title',
        alignSelf: 'center',
        paddingTop: 2,
        paddingLeft: 8,
        borderBottom: '2px solid #43526E',
        height: '100%',
    },
    content: {
        gridArea: 'content',
        paddingLeft: 8,
        marginTop: 15,
        [theme.breakpoints.down(767)]: {
            paddingRight: 30,
        },
    },
    padding: {
        gridArea: 'padding',
    },
});

const Section = ({ title, classes, children }) => {
    return (
        <div className={classes.section}>
            <div className={classes.box} />
            <div className={classes.title}>
                <Typography variant={'headline'}>{title}</Typography>
            </div>
            <div className={classes.content}>
                {React.Children.map(children, child => <Typography paragraph={true}>{child}</Typography>)}
            </div>
        </div>
    );
};

export default withStyles(styles)(Section);

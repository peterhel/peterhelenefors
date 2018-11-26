import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../src/components/Header';
import Typography from '@material-ui/core/Typography/Typography';
import Sammanfattning from '../src/components/Sammanfattning';
import Arbetslivserfarenhet from '../src/components/Arbetslivserfarenhet';
import profileImage from '../src/components/profileImage';
import Email from "../src/components/Email";

// https://www.cv-mallen.se/online-cv/exempelkonto/reseledare

const styles = theme => ({
    page: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 15px',
        border: '1px solid #e6e6e6',
        [theme.breakpoints.down(767)]: {
            padding: 0,
        },
    },
    grid: {
        display: 'grid',
        minHeight: 240,
        gridTemplateAreas: `'topbar' 'header' 'cv'`,
        gridTemplateRows: `30px 180px auto`,
        // gridTemplateColumns: `180px auto 180px`,
    },
    topbar: {
        gridArea: 'topbar',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        backgroundColor: '#43526E',
        color: 'white',
    },
    topbarCell: {
        placeSelf: 'center',
    },
    header: {
        gridArea: 'header',
        placeSelf: 'center',
        fontSize: '5em',
    },
    name: {
        gridArea: 'name',
        placeSelf: 'center left',
        fontSize: '2em',
    },
    profileImage: {
        width: '100%',
        paddingBottom: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        gridArea: 'profileImage',
        marginBottom: 15,
        background: `url(${profileImage})`,
        [theme.breakpoints.down(767)]: {
            width: 230,
            paddingBottom: 'unset',
            marginBottom: 'unset'
        },

    },
    cv: {
        gridArea: 'cv',
        display: 'grid',
        gridTemplateAreas: `'content profile'`,
        gridTemplateColumns: 'auto 290px',
        [theme.breakpoints.down(767)]: {
            gridTemplateColumns: 'unset',
            gridTemplateRows: '290px auto',
            gridTemplateAreas: `'profile' 'content'`,
        },
    },
    profileSection: {
        [theme.breakpoints.down(767)]: {
            display: 'none'
        },
    },
    content: {
        gridArea: 'content',
    },
    profile: {
        gridArea: 'profile',
        border: 'solid 1px #43526E',
        marginLeft: 15,
        padding: 15,
        backgroundColor: '#f3f3f3',
        [theme.breakpoints.down(767)]: {
            display: 'flex',
            justifyContent: 'center',
            padding: 'unset',
            backgroundColor: 'unset',
            border: 'unset',
            maxHeight: 230
        },
    },
});

const ageMillis = Date.now() - new Date('1981/04/27').getTime();

const yearsOfAge = new Date(ageMillis).getFullYear() - 1970;

const Index = ({ classes }) => (
    <div className={classes.page}>
        <div className={classes.grid}>
            <div className={classes.topbar}>
                <div className={classes.topbarCell}>
                    <Typography style={{ color: 'inherit' }}>
                        <strong>TEL:</strong> +46739332499
                    </Typography>
                </div>
                <div className={classes.topbarCell}>
                    <Typography style={{ color: 'inherit' }}>
                        <strong>E-MAIL:</strong> <Email/>
                    </Typography>
                </div>
                {/*<div className={classes.address}>*/}
                {/*<strong>ADRESS:</strong> Långmyran&nbsp;439 74020&nbsp;Vänge*/}
                {/*</div>*/}
            </div>
            <Header />

            <div className={classes.cv}>
                <div className={classes.content}>
                    <Sammanfattning />
                    <Arbetslivserfarenhet />
                </div>
                <div className={classes.profile}>
                    <div className={classes.profileImage} />
                    <div className={classes.profileSection}>
                        <Typography variant={'title'}>Adress</Typography>
                        <Typography paragraph>
                            Långmyran 439<br />
                            74020<br />
                            Vänge<br />
                        </Typography>
                    </div>
                    <div className={classes.profileSection}>
                        <Typography variant={'title'}>Personuppgifter</Typography>
                        <Typography paragraph>
                            E-post: <Email/><br />
                            Telefon: +46739332499<br />
                            Ålder: {yearsOfAge}
                            <br />
                        </Typography>
                    </div>
                    <div className={classes.profileSection}>
                        <Typography variant={'title'}>Språk</Typography>
                        <Typography paragraph>
                            Svenska: Modersmål<br />
                            Engelska: Med beröm godkänt<br />
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default withStyles(styles)(Index);

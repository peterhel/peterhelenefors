import Section from './Section';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Job from "./Job";

const Utbildning = () => {
    return (
        <Section title={'Utbildning'}>
            <Job name={'Centrum för Livslångt Lärande'} role={'Objektorienterad Utveckling i Java'} period={'2006 - 2008'}>
                Yrkesutbildning inom Javaprogrammering.
            </Job>
        </Section>
    );
};

export default Utbildning;

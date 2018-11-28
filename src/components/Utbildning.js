import Section from './Section';
import React from 'react';
import Job from './Job';

const Utbildning = () => {
    return (
        <Section title={'Utbildning'}>
            <Job
                name={'Centrum för Livslångt Lärande'}
                role={'Objektorienterad Utveckling i Java'}
                from={2006}
                to={2008}>
                Yrkesutbildning inom Javaprogrammering.
            </Job>
        </Section>
    );
};

export default Utbildning;

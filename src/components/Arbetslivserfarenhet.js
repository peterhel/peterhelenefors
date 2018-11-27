import Section from './Section';
import React from 'react';
import jobs from '../../data/jobs';
import Job from "./Job";

const Arbetslivserfarenhet = () => {
    return (
        <Section title={'Arbetslivserfarenhet'}>
            {jobs.map(job => <Job {...job} />)}
        </Section>
    );
};

export default Arbetslivserfarenhet;

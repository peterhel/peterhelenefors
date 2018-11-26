import Section from './Section';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';

const Sammanfattning = () => {
    return (
        <Section title={'Sammanfattning'}>
            <Typography>
                Kreativ kodare som tänder på snabba puckar. Har ofta konkreta lösningar i huvudet innan möten är slut
                och går gärna hem till kammaren och tar fram en proof of concept.
            </Typography>

            {/*<Typography>*/}
            {/*Fritiden präglas otaliga projekt. Gipsa väggar, spela in hitlåtar, köra lastmaskin, bygga*/}
            {/*hårdvara till hemautomation och mata katten, något som bör automatiseras snarast.*/}
            {/*</Typography>*/}
            <Typography>
                12 års erfarenhet av högnivåspråken Java, C# och JavaScript. Figurerar på både fram- och baksidan men
                överlåter UI/UX med varm hand till de som vet vad de håller på med.
            </Typography>
        </Section>
    );
};

export default Sammanfattning;

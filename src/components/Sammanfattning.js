import Section from './Section';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import jobs from '../../data/jobs';

const languages = jobs.reduce((val, job) => {
    if (!job.languages) {
        return val;
    }
    job.languages.forEach(l => {
        val[l] = val[l] ? val[l] + 1 : 1;
    });
    return val;
}, {});

const langsSorted = Object.entries(languages).sort(([name, count], [name2, count2]) => {
    if (count < count2) {
        return 1;
    }
    return count > count2 ? -1 : 0;
});

let langMost = langsSorted[0];
const langsSorted2 = langsSorted.map(([name, count]) => [name, Math.round(count / langMost[1] * 5)]);

console.log(langsSorted2);

const Circle = ({ fill }) => (
    <span
        style={{
            display: 'inline-block',
            height: 16,
            width: 16,
            borderRadius: 10,
            marginLeft: 12,
            backgroundColor: fill ? '#43526E' : '#e0e0e0',
        }}
    />
);

// https://www.npmjs.com/package/wordcloud

const Sammanfattning = () => {
    return (
        <React.Fragment>
            <Section title={'Kunskaper'}>
                {/*<Typography>Språk i relation till varandra utifrån utförda projekt</Typography>*/}

                {langsSorted2.map(
                    ([lang, count]) =>
                        count > 1 ? (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    maxWidth: 240,
                                    lineHeight: '0'
                                }}>
                                <div>{lang}</div>
                                <div>
                                    {(() => {
                                        const dots = [];
                                        for (let i = 0; i < 5; i++) {
                                            dots.push(i < count ? <Circle fill /> : <Circle />);
                                        }
                                        return dots;
                                    })()}
                                </div>
                            </div>
                        ) : null,
                )}
            </Section>
            <Section title={'Sammanfattning'}>
                <Typography>
                    Kreativ kodare som tänder på snabba puckar. Har ofta konkreta lösningar i huvudet innan möten är
                    slut och går gärna hem till kammaren och tar fram en proof of concept.
                </Typography>

                {/*<Typography>*/}
                {/*Fritiden präglas otaliga projekt. Gipsa väggar, spela in hitlåtar, köra lastmaskin, bygga*/}
                {/*hårdvara till hemautomation och mata katten, något som bör automatiseras snarast.*/}
                {/*</Typography>*/}
                <Typography>
                    12 års erfarenhet av högnivåspråken Java, C# och JavaScript. Figurerar på både fram- och baksidan
                    men överlåter UI/UX med varm hand till de som vet vad de håller på med.
                </Typography>
            </Section>
        </React.Fragment>
    );
};

export default Sammanfattning;

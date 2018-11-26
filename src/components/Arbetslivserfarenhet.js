import Section from './Section';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Job from "./Job";

const Arbetslivserfarenhet = () => {
    return (
        <Section title={'Arbetslivserfarenhet'}>
            <Job name={'Jickl'} role={'Utvecklare JavaScript / Java'} period={'2017 - 2018'}>
                Under mitt år i casinostartupen Jickl fick jag god insikt i Google Clouds produktportfölj.
                Vår sajt och de bakomliggande mikrotjänsterna driftades i Kubernetes. Byggen och automation
                sköttes med hjälp av Gitlab.
            </Job>
            <Job name={'Ridebite'} role={'Utvecklare JavaScript / TypeScript'} period={'2015 - 2018'}>
                Var med från början i en bildelningsstartup. Tillsammans med en till utvecklare och våra två grundare tog jag fram en bildelningstjänst
                som hostades i Amazons moln. Jag ansvarade för utveckling av vårt backend-API, vår infrastruktur, drift och kontinuerliga
                deployer. Integrationer mot Stripe för betalningar och trafikverket och Carfax för körkortskontroll och bildata.
            </Job>
            <Job name={'MrGreen'} role={'Utvecklare C# / JavaScript'} period={'2014 - 2017'}>
                Satt i ett litet team och tog fram den nya plattformen för casinot Garbo med backend i JavaScript (NodeJS).
                Byggde nya plattformen för casinot MrGreen där vi ersatte många gamla komponenter skrivna i ASP.NET med JavaScript.
                Här blev det mycket R&D och utveckling av nya funktioner för att få mer realtidskänsla och göra sajten mer levande.
            </Job>
            <Job name={'Social Thrills'} role={'Utvecklare C# / JavaScript'} period={'2012 - 2014'}>
                Var med tidigt i satsningen på det sociala casinot Spin Tower där jag började som ensam senior utvecklare och tog fram
                aktitektur för utveckling av backend och infrastruktur. Vi började med att drifta allt i Microsoft Azure som då var
                lite för omoget och ersattes senare av Amazons motsvarande tjänster. Integrationer mot spelleverantörer och Facebook.
            </Job>
            <Job name={'Abou'} role={'Utvecklare C#'} period={'2010 - 2012'}>
                Var med och tog fram e-tjänster åt kommuner.
            </Job>
            <Job name={'QBranch - ICA'} role={'Utvecklare C#'} period={'2009 - 2010'}>
                Hjälpte till att bygga den nya ICA-sajten. Var också med från början i projektet Matkassen och byggde den interaktiva varukorgen
                med dra- och släppfunktion med hjälp av "asynkron javascript" så att sidan inte behövde laddas om.
            </Job>
            <Job name={'QBranch - Salus Ansvar'} role={'Utvecklare C#'} period={'2008 - 2009'}>
                Förvaltning och utveckling inom bank och försäkring. Byggde integration för Svensk Fastighetsförmedling som gjorde det enkelt för agenter att
                koppla ihop kunder som varit på visningar med lånelöften och bolån.
            </Job>
            <Job name={'QBranch'} role={'Utvecklare C#'} period={'2007-2010'}>
                Min första period på QBranch gjorde jag integrationer för kommuner och skolor och automatiserade repetitiva arbetsuppgifter.
            </Job>
        </Section>
    );
};

export default Arbetslivserfarenhet;

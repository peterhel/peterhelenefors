const roles = {
    UTVECKLING: 'Utveckling',
    FORVALTNING: 'Systemförvaltning',
};

export default [
    {
        name: 'Jickl',
        role: roles.UTVECKLING,
        content:
            'Under mitt år i casinostartupen Jickl fick jag god insikt i Google Clouds produktportfölj. Vår sajt och de bakomliggande mikrotjänsterna driftades i ett Kuberneteskluster. Byggen och automation sköttes med hjälp av Gitlab. Sajten byggdes med ramverken ReactJS och Redux. I mikrotjänsterna används Spring Boot och som datakälla Kafka.',
        from: 2017,
        to: 2018,
        tags: [
            'Spring Boot',
            'Kubernetes',
            'Google Cloud',
            'SendBird',
            'Prismic',
            'Gitlab CI',
            'ReactJS',
            'Material UI',
        ],
    },
    {
        name: 'Ridebite',
        role: roles.UTVECKLING,
        from: 2015,
        to: 2018,
        content:
            'Var med från början i en bildelningsstartup. Tillsammans med en till utvecklare och våra två grundare tog jag fram en bildelningstjänst som hostades i Amazons moln. Jag ansvarade för utveckling av vårt backend-API, vår infrastruktur, drift och kontinuerliga deployer. Integrationer mot Stripe för betalningar och trafikverket och Carfax för körkortskontroll och bildata.',
        tags: ['Jenkins CI', 'Amazon AWS', 'Terraform', 'NodeJS', 'Nginx'],
    },
    {
        name: 'MrGreen',
        role: roles.UTVECKLING,
        from: 2014,
        to: 2017,
        content:
            'Tog fram den nya plattformen för casinot Garbo med backend i JavaScript (NodeJS). Byggde nya plattformen för casinot MrGreen där vi ersatte många gamla komponenter skrivna i ASP.NET med JavaScript. Den nya webbklienten skrevs i AngularJS. Introducerade EpiServer som nytt verktyg för contenthantering. Gjorde även mycket automation med kodgenerering, CI/CD och dashboards för att underlätta arbetet för våra utvecklare.',
        tags: ['AngularJS', 'Firebase', 'Rabbit MQ', 'Octopus', 'Chef', 'Nginx', 'EpiServer', 'NodeJS'],
    },
    {
        name: 'Social Thrills',
        role: roles.UTVECKLING,
        from: 2012,
        to: 2014,
        content:
            'Var med tidigt i satsningen på det sociala casinot Spin Tower där jag började som ensam senior utvecklare och tog fram aktitektur för utveckling av backend och infrastruktur. Vi började med att drifta allt i Microsoft Azure som då var lite för omoget och ersattes senare av Amazons motsvarande tjänster. Integrationer mot spelleverantörer och Facebook.',
        tags: ['JavaScript MVC', 'jMeter', 'Microsoft Azure', 'Amazon AWS', 'Nginx'],
    },
    {
        name: 'Abou',
        role: roles.UTVECKLING,
        from: 2010,
        to: 2012,
        content:
            'Byggde i ett tremannateam Jobbtorgsportalen åt Stadsdelsförvaltningen i Stockholms Stad, en plattform där tre olika parter kunde kommunicera och dela information.',
        languages: ['C#', 'JavaScript', 'HTML', 'CSS'],
        tags: [],
    },
    {
        name: 'Abou',
        role: roles.UTVECKLING,
        from: 2010,
        to: 2012,
        content:
            'Byggde ett administrationsgränssnitt till ett enkätverktyg till en produkt som bidrog stort till att Upplands Väsby titulerades Sveriges IT-kommun 2011.',
        languages: ['C#', 'JavaScript', 'HTML', 'CSS'],
        tags: [],
    },
    {
        name: 'Abou',
        role: 'Pre-sale / Teknisk resurs',
        from: 2010,
        to: 2012,
        content: 'Satt med som teknisk resurs i förhandlingar om att i enlighet med Lean förbättra processerna för hur en myndighet skulle kommunicera med sina leverantörer. Rent konkret hur ett specialanpassat system skulle kunna ersätta och hantera data gentemot epost med bifogade filer.',
        tags: ['Lean', 'Microsoft Visio', 'Microsoft Office'],
    },
    {
        name: 'Abou',
        role: roles.UTVECKLING,
        from: 2010,
        to: 2012,
        content: 'Utvecklade plattform utifrån vilken man byggde e-tjänster åt kommuner.',
        languages: ['C#', 'HTML', 'CSS', 'JavaScript'],
        tags: ['Visual Studio, TFS', 'DojoToolkit', 'E-legitimation'],
    },
    {
        name: 'SMART Hälsa i Nykvarn',
        employer: 'Generic Constructions',
        role: roles.UTVECKLING,
        from: 2009,
        to: 2011,
        content: 'Byggde ett bokningssystem från grunden för gymbesökare att boka in sig på pass. I version två av bokningssystemet skrevs det om från Java till C#.',
        languages: ['Java', 'HTML', 'CSS', 'JavaScript', 'C#'],
        tags: ['Google App Engine', 'MySQL']
    },

    {
        name: 'ICA',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2009,
        to: 2010,
        content: 'Arbetade i ett litet team som byggde ett system för att kontrollera logistik, plocklistor och prenumerationer på recept och matvaror.',
        languages: ['C#', 'HTML', 'CSS', 'JavaScript'],
        tags: ['ASP.NET MVC'],
    },
    {
        name: 'ICA',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2009,
        to: 2010,
        content: 'Byggde den nya kundwebben/butiksportalen med specialanpassad EpiServer.',
        languages: ['C#', 'HTML', 'CSS', 'JavaScript'],
        tags: ['ASP.NET MVC', 'EpiServer'],
    },
    {
        name: 'ICA',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2009,
        to: 2010,
        content: 'Byggde med två kollegor ett administrationsgränssnitt för recept.',
        tags: ['ASP.NET MVC', 'EpiServer'],
    },
    {
        name: 'Salus Ansvar',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2008,
        to: 2009,
        content:
            'Byggde i ett tvåmannateam ett system där man samlade in kundleads för bolån. Systemet bestod av administrationsgränssnitt och en webbtjänst för integration från externa parter.',
        languages: ['C#', 'JavaScript'],
        tags: ['Visual Studio', 'EpiServer', 'jQuery', 'AJAX', 'ASP.NET MVC'],
    },
    {
        name: 'Salus Ansvar',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2008,
        to: 2009,
        content:
            'Skapade tillsammans med en kollega en webbsida där besökarna fick realtidsuppslag på försäkringspremier.',
        languages: ['C#', 'JavaScript'],
        tags: ['Visual Studio', 'EpiServer', 'jQuery', 'AJAX', 'ASP.NET MVC'],
    },
    {
        name: 'Salus Ansvar',
        employer: 'QBranch',
        role: roles.UTVECKLING,
        from: 2008,
        to: 2009,
        content:
            'Hade stor betydelse för utformning och arkitektur vid framtagningen av en omfattande integrationsplattform för premieuppslag för försäkringar',
        languages: ['C#', 'Java', 'XML'],
        tags: ['Visual Studio', 'TFS', 'WCF', 'FitNesse', 'BDD', 'DDD'],
    },
    {
        name: 'Salus Ansvar',
        employer: 'QBranch',
        role: roles.FORVALTNING,
        from: 2008,
        to: 2009,
        content:
            'Satt i ett förvaltningsteam inom bank och försäkring. Uppdraget gick ut på att underhålla och vidareutveckla befintliga system i företagets infrastruktur såsom kundwebb, databaskörningar och informationsflöden.',
        languages: ['Visual Basic', 'Java', 'C#', 'SQL'],
        tags: ['Visual Studio', 'TFS', 'Windows Server', 'TDD', 'DDD', 'WCF', 'SOAP'],
    },
    {
        name: 'QBranch',
        role: roles.UTVECKLING,
        from: 2007,
        to: 2010,
        languages: ['C#', 'Java', 'JavaScript', 'Visual Basic', 'HTML', 'CSS', 'XML', 'SQL'],
        content:
            'Min första period på QBranch gjorde jag integrationer för kommuner och skolor och automatiserade repetitiva arbetsuppgifter.',
    },
];

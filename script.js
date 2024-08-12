let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Controlling Drop Down Menu Code

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active'); // Toggle the 'active' class on the dropdown
    const items = dropdown.querySelector('.items'); // Find the items within the dropdown
    items.classList.toggle('active'); // Toggle the 'active' class on the items
});

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['System Analyst', 'Backend Developer', 'Solution Provider'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// Session for translating Home Section Code

document.addEventListener('DOMContentLoaded', function() {
      
    document.querySelectorAll('.dropdown .items a').forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  
    function setLanguage(lang) {
      document.querySelectorAll('[data-translate]').forEach(item => {
        const key = item.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'description') {
                item.innerHTML = '<pre>' + translations[lang][key] + '</pre>';
            } else {
                item.textContent = translations[lang][key];
            }
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navHighlights : "Highlights",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            name: "Michael Dambock",
            title: "System Analyst, Backend Developer, Solution Provider",
            homeDescription: "Experienced Developer with over 20 years in IT, now focused on applying expertise to Data Science,\n" +
            "Data Alchemy and AI-driven development. Seeking to leverage strong background in programming,\n" +
            "project management, data analysis, and large-scale system development to create innovative solutions.\n\n" +
            "Committed to technological advancement through the integration of traditional software engineering,\n" + 
            "innovation and modern AI methodologies.",
            download: "Download CV",
            contact: "Contact Me",
            aboutHeading: "About Me",
            aboutDescription: `I am a passionate enthusiast of IT and technology in general. 
            <br />My professional journey is as diverse as my eclectic taste in music, which ranges 
            <br />from ABBA's pop to ZZ Top's rock. In my spare time, you can find me immersed in a good book, 
            <br />be it technical, historic, filosofic, dramatic, biblical, or fantasy fiction, reflecting my love 
            <br />for reading and continuous learning. 
            <br />
            <br />As a cinephile, I appreciate the art of visual storytelling as much as the thrill of a 
            <br />Formula 1 race. Above all, I am a nature lover, finding peace and inspiration whether at 
            <br />the beach, by the sea, or amidst the greenery of the woods.`,
            highlightsHeading: "Professional Highlights and Goals",
            highlightsDescription: `A professional with over four decades of experience in technology and administration sectors, my career
            <br />is marked by significant projects and complex systems. I started in IT, developing solutions such as 
            <br />annual balance sheets in Lotus 1-2-3, budget control systems in dBase III/Clipper'87, and project
            <br />coordination with CA-SuperProject.<br />
            <br />My expertise encompasses the creation of a complete telemarketing system in CA-QbyX, implementation 
            <br />and programming of electronic time clocks using Visual Basic, C, and SQL, as well as programming, 
            <br />adaptation, and implementation of customer service systems (CRM) using BMC AR System and SQL databases.
            <br />After a period in administration, where I optimized management processes, I am returning to the IT field with 
            <br />a new purpose: to apply my accumulated knowledge in Data Science, Data Alchemy, and AI-driven development, 
            <br />contributing to create innovative solutions.<br />
            <br />My competencies include:<br />
            <ul>
                <li>. Design, programming, and implementation of solutions</li>
                <li>. Analysis and implementation of large-scale projects</li>
                <li>. IT support, Telemarketing and portfolio development</li>
            </ul>
            <br />I am seeking new challenges that allow me to utilize my skills in problem-solving, analytical thinking,  
            <br />and attention to detail. I am enthusiastic about contributing my vast experience, collaborating with 
            <br />the growth of a dynamic and future-oriented team.`
        },
        pt: {
            navHome: "Início",
            navAbout: "Sobre",
            navHighlights : "Destaques",
            navPortfolio: "Portfólio",
            navContact: "Contato",
            name: "Michael Dambock",
            title: "Analista de Sistemas, Desenvolvedor Backend, Provedor de Soluções",
            homeDescription: "Desenvolvedor Experiente com mais de 20 anos em TI, agora focado em aplicar expertise em Ciência de Dados,\n" +
            "Alquimia de Dados e desenvolvimento impulsionado por IA. Buscando aproveitar forte experiência em programação,\n" +
            "gerenciamento de projetos, análise de dados e desenvolvimento de sistemas em larga escala para criar soluções inovadoras.\n\n" +
            "Comprometido com o avanço tecnológico através da integração de engenharia de software tradicional,\n" +
            "inovação e metodologias modernas de IA.",
            download: "Baixar CV",
            contact: "Contato",
            aboutHeading: "Sobre Mim",
            aboutDescription: `Sou um entusiasta apaixonado de TI e tecnologia em geral. 
            <br />Minha jornada profissional é tão diversa quanto meu gosto eclético em música, que varia 
            <br />do pop do ABBA ao rock do ZZ Top. No meu tempo livre, você pode me encontrar imerso em um bom livro, 
            <br />seja ele técnico, histórico, filosófico, dramático, bíblico ou de ficção fantástica, refletindo meu amor 
            <br />pela leitura e aprendizado contínuo. 
            <br />
            <br />Como cinéfilo, aprecio a arte da narrativa visual tanto quanto a emoção de uma 
            <br />corrida de Fórmula 1. Acima de tudo, sou um amante da natureza, encontrando paz e inspiração seja na 
            <br />praia, ao lado do mar, ou no meio da vegetação das florestas.`,
            highlightsHeading: "Destaques Profissionais e Objetivos",
            highlightsDescription: `Um profissional com mais de quatro décadas de experiência nos setores de tecnologia e administração, minha carreira
            <br />é marcada por projetos significativos e sistemas complexos. Comecei na área de TI, desenvolvendo soluções 
            <br />como balanços anuais em Lotus 1-2-3, sistemas de controle de orçamentos em dBase III/Clipper'87 e coordenação 
            <br />de projetos com CA-SuperProject.<br />
            <br />Minha expertise abrange a criação de um sistema completo de telemarketing em CA-QbyX, implementação 
            <br />e programação de pontos eletrônicos utilizando Visual Basic, C e SQL, bem como programação, adaptação 
            <br />e implementação de sistemas de atendimento ao cliente (CRM) utilizando BMC AR System e bancos de dados SQL.
            <br />Após um período na administração, onde otimizei processos de gestão, estou retornando ao campo da TI com um 
            <br />novo propósito: aplicar meu conhecimento acumulado em Ciência de Dados, Alquimia de Dados e desenvolvimento 
            <br />com IA, contribuindo para criar soluções inovadoras.<br />
            <br />Minhas competências incluem:
            <ul>
                <li>. Elaboração, programação e implementação de soluções</li>
                <li>. Análise e implementação de projetos de grande porte</li>
                <li>. Suporte em informática, Telemarketing e desenvolvimento de portfólios</li>
            </ul>
            <br />Estou em busca de novos desafios que me permitam utilizar minhas habilidades em resolução de problemas, 
            <br />pensamento analítico e atenção aos detalhes. Estou entusiasmado para contribuir com minha vasta experiência, 
            <br />colaborando com o crescimento de uma equipe dinâmica e orientada para o futuro.`
        },
        de: {
            navHome: "Startseite",
            navAbout: "Über",
            navHighlights : "Höhepunkte",
            navPortfolio: "Portfolio",
            navContact: "Kontakt",
            name: "Michael Dambock",
            title: "Systemanalytiker, Backend-Entwickler, Lösungsanbieter",
            homeDescription: "Erfahrener Entwickler mit über 20 Jahren in der IT, jetzt fokussiert auf die Anwendung von Expertise in Data Science,\n" +
            "Data Alchemy und AI-gesteuerter Entwicklung. Suche nach der Nutzung eines starken Hintergrunds in Programmierung,\n" +
            "Projektmanagement, Datenanalyse und Entwicklung von Großsystemen zur Schaffung innovativer Lösungen.\n\n" +
            "Engagiert für den technologischen Fortschritt durch die Integration von traditioneller Softwareentwicklung,\n" +
            "Innovation und modernen KI-Methoden.",
            download: "Lebenslauf herunterladen",
            contact: "Kontakt",
            aboutHeading: "Über mich",
            aboutDescription: `Ich bin ein leidenschaftlicher Enthusiast für IT und Technologie im Allgemeinen. 
            <br />Meine berufliche Reise ist so vielfältig wie mein eklektischer Musikgeschmack, der sich 
            <br />vom Pop von ABBA bis zum Rock von ZZ Top erstreckt. In meiner Freizeit finden Sie mich in einem guten Buch versunken, 
            <br />sei es technisch, historisch, philosophisch, dramatisch, biblischen oder Fantasy-Fiction, was meine Liebe 
            <br />für das Lesen und kontinuierliches Lernen widerspiegelt. 
            <br />
            <br />Als Filmkunstliebhaber schätze ich die Kunst der visuellen Erzählung ebenso sehr wie die Spannung eines 
            <br />Formel-1-Rennens. Vor allem bin ich ein Naturliebhaber, der Ruhe und Inspiration findet, ob am Strand, 
            <br />am Meer oder im Grünen der Wälder.`,
            highlightsHeading: "Berufliche Höhepunkte und Ziele",
            highlightsDescription: `Ein Fachmann mit über vier Jahrzehnten Erfahrung in den Bereichen Technologie und Verwaltung, meine Karriere 
            <br />wie Jahresabschlüsse in Lotus 1-2-3, ist geprägt von bedeutenden Projekten und komplexen Systemen. Ich begann
            <br />im IT-Bereich und entwickelte Lösungen Budgetkontrollsysteme in dBase III/Clipper'87 und Projektkoordination
            <br />mit CA-SuperProject.<br />
            <br />Meine Expertise umfasst die Erstellung eines vollständigen Telemarketingsystems in CA-QbyX, die Implementierung
            <br />und Programmierung von elektronischen Zeiterfassungssystemen mit Visual Basic, C und SQL sowie die Programmierung,
            <br />Anpassung und Implementierung von Kundenservicesystemen (CRM) mit BMC AR System und SQL-Datenbanken.
            <br />Nach einer Phase in der Verwaltung, in der ich Managementprozesse optimierte, kehre ich mit einem neuen Ziel in 
            <br />den IT-Bereich zurück: mein angesammeltes Wissen in Datenwissenschaft, Datenalchemie und KI-Entwicklung anzuwenden,
            <br />um innovative Lösungen zu schaffen.<br />
            <br />Meine Kompetenzen umfassen:<br />
            <ul>
                <li>. Entwurf, Programmierung und Implementierung von Lösungen</li>
                <li>. Analyse und Implementierung von Großprojekten</li>
                <li>. IT-Support, Telemarketing und Portfolioentwicklung</li>
            </ul>
            <br />Ich suche nach neuen Herausforderungen, die es mir ermöglichen, meine Fähigkeiten in Problemlösung, analytischem
            <br />Denken und  Detailgenauigkeit zu nutzen. Ich bin begeistert, meine umfangreiche Erfahrung einzubringen und zum 
            <br />Wachstum eines dynamischen und zukunftsorientierten Teams beizutragen.`
        }
    };

    document.querySelectorAll('.dropdown .items a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(item => {
            const key = item.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                item.innerHTML = translations[lang][key];
            }
        });
    }
});
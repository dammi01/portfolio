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

// Session for translating all the text in the Section Code
  
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navHighlights : "Highlights",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        name: "Michael Dambock",
        title: "System Analyst, Backend Developer, Solution Provider",
        homeDescription: `<br />Experienced Developer with over 40 years in IT, now focused on applying expertise to Data Science,
        <br />Data Alchemy and AI-driven development. Seeking to leverage strong background in programming,
        <br />project management, data analysis and large-scale system development to create innovative solutions.
        <br />
        <br />Committed to technological advancement through the integration of traditional software engineering,
        <br />innovation, and applying modern AI methods.`,
        download: "Download CV",
        contact: "Contact Me",
        aboutHeading: "About Me",
        aboutDescription: `I am a passionate enthusiast of IT and technology in general. My professional journey is as 
        <br />diverse as my eclectic taste in music, which ranges from ABBA's pop to ZZ Top's rock. In my 
        <br />spare time, you can find me immersed in a good book, be it technical, historic, filosofic, 
        <br />dramatic, biblical, or science / fantasy fiction, reflecting my love for reading and continuous 
        <br />learning. 
        <br />
        <br />As a cinephile, I appreciate the art of visual storytelling as much as the thrill of a Formula 1 
        <br />race. Above all, I am a nature lover, finding peace and inspiration whether at the beach, 
        <br />by the sea, or amidst the greenery of the woods.`,
        highlightsHeading: "Professional Highlights and Goals",
        highlightsDescription: `A professional with over four decades of experience in technology and administration sectors, my career
        <br />is marked by significant projects and complex systems. I started in IT, developing solutions such as 
        <br />annual balance sheets in Lotus 1-2-3, budget control systems in dBase III / Clipper'87 and project
        <br />management, implementation and coordination with CA-SuperProject.<br />
        <br />My expertise encompasses the creation of a complete telemarketing system in CA-QbyX, implementation 
        <br />and programming of electronic time register / clocks using Visual Basic, C, and SQL, as well as programming, 
        <br />adaptation, and implementation of customer service systems (CRM) using BMC AR-System and SQL databases.
        <br />After a period in administration, where, among others, I optimized and digitalized management processes, I am 
        <br />returning to the IT field with a new purpose: to apply my accumulated knowledge now in Data Science, Data 
        <br />Alchemy and AI-driven development, thus contributing to create innovative solutions.<br />
        <br />My competencies include:<br />
        <ul>
            <li>. Design, programming, and implementation of solutions</li>
            <li>. Analysis and implementation of large-scale projects</li>
            <li>. IT support, Telemarketing and portfolio development</li>
        </ul>
        <br />I am seeking new challenges that allow me to utilize my skills in problem-solving, analytical thinking,  
        <br />and attention to detail. I am enthusiastic about contributing my vast experience, collaborating with 
        <br />the growth of a dynamic and future-oriented team.`,
        skillsHeading: "Skills",
        toolsAndTechnologies: "Tools and Technologies",
        myPortfolio: "My Portfolio",
        contactMe: "Contact Me",
        namePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        phonePlaceholder: "Phone Number",
        subjectPlaceholder: "Email Subject",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message"
    },
    pt: {
        navHome: "Início",
        navAbout: "Sobre",
        navHighlights : "Destaques",
        navPortfolio: "Portfólio",
        navContact: "Contato",
        name: "Michael Dambock",
        title: "Analista de Sistemas, Desenvolvedor Backend, Provedor de Soluções",
        homeDescription: `<br />Desenvolvedor Experiente com mais de 40 anos em TI, agora focado em aplicar expertise existente em
        <br />Ciência de Dados, Data Alchemy e desenvolvimento impulsionado por IA. Buscando aproveitar vasta
        <br />experiência em programação, gerenciamento de projetos, análise de dados e desenvolvimento de sistemas 
        <br />em larga escala para criar soluções inovadoras.
        <br />
        <br />Comprometido com o avanço tecnológico através da integração de engenharia de software tradicional,
        <br />inovação e a aplicação de metodologias modernas de IA.`,
        download: "Baixar CV",
        contact: "Contato",
        aboutHeading: "Sobre Mim",
        aboutDescription: `Sou um entusiasta apaixonado de TI e tecnologia em geral. Minha jornada profissional é tão 
        <br />diversa quanto meu gosto eclético em música, que varia do pop do ABBA ao rock do ZZ Top. 
        <br />No meu tempo livre, você pode me encontrar imerso em um bom livro, seja ele técnico, 
        <br />histórico, filosófico, dramático, bíblico ou de ficção scientífica / fantasia, refletindo meu amor 
        <br />pela leitura e aprendizado contínuo. 
        <br />
        <br />Como cinéfilo, aprecio a arte da narrativa visual tanto quanto a emoção de uma corrida de 
        <br />Fórmula 1. Acima de tudo, sou um amante da natureza, encontrando paz e inspiração seja na 
        <br />praia, perto do mar, no meio do mato ou nas florestas.`,
        highlightsHeading: "Destaques Profissionais e Objetivos",
        highlightsDescription: `Um profissional com mais de quatro décadas de experiência nos setores de tecnologia e administração, minha carreira
        <br />é marcada por projetos significativos e sistemas complexos. Comecei na área de TI, desenvolvendo soluções 
        <br />como balanços anuais em Lotus 1-2-3, sistemas de controle de orçamentos em dBase III / Clipper'87 e gerenciamento,
        <br />coordenação e implementação de projetos com CA-SuperProject.<br />
        <br />Minha expertise abrange a criação de um sistema completo de telemarketing em CA-QbyX, implementação e programação 
        <br />de pontos eletrônicos utilizando Visual Basic, C e SQL, bem como programação, adaptação e implementação de sistemas
        <br />de atendimento ao cliente (SAC) utilizando BMC AR-System e bancos de dados SQL. Após um período na administração, 
        <br />onde entre outros, otimizei e digitalizei processos de gestão, estou retornando ao campo da TI com um novo propósito: 
        <br />aplicar meu conhecimento acumulado agora em Ciência de Dados, Data Alchemy e desenvolvimento orientado por IA, 
        <br />contribuindo assim na criação de soluções novas e inovadoras.<br />
        <br />Minhas competências incluem:
        <ul>
            <li>. Elaboração, programação e implementação de soluções</li>
            <li>. Análise e implementação de projetos de grande porte</li>
            <li>. Suporte em informática, Telemarketing e desenvolvimento de portfólios</li>
        </ul>
        <br />Estou em busca de novos desafios que me permitam utilizar minhas habilidades em resolução de problemas, pensamento 
        <br />analítico e atenção aos detalhes. Estou entusiasmado em poder contribuir com minha vasta experiência, colaborando 
        <br />com o crescimento de uma equipe dinâmica e orientada para o futuro.`,
        skillsHeading: "Skills / Habilidades",
        toolsAndTechnologies: "Ferramentas e Tecnologias",
        myPortfolio: "Meu Portfolio",
        contactMe: "Contate-me",
        namePlaceholder: "Nome Completo",
        emailPlaceholder: "Endereço de E-mail",
        phonePlaceholder: "Telefone",
        subjectPlaceholder: "Assunto",
        messagePlaceholder: "Mensagem",
        sendMessage: "Enviar Mensagem"
    },
    de: {
        navHome: "Startseite",
        navAbout: "Über",
        navHighlights : "Höhepunkte",
        navPortfolio: "Portfolio",
        navContact: "Kontakt",
        name: "Michael Dambock",
        title: "Systemanalytiker, Backend-Entwickler, Lösungsanbieter",
        homeDescription: `<br />Erfahrener Entwickler mit über 40 Jahren in der IT, jetzt fokussiert auf die Anwendung vorhandener Expertise
        <br />in Data Science, Data Alchemy und KI-gestützter Entwicklung. Suche nach Nutzung starken Hintergrundes in
        <br />Programmierung, Projektmanagement, Datenanalyse und Entwicklung von Großsystemen zur Schaffung neuer
        <br />und innovativer Lösungen.
        <br />
        <br />Engagiert für den technologischen Fortschritt durch die Integration von traditioneller Softwareentwicklung,
        <br />Innovation und die Anwendung von modernen KI-Methoden.`,
        download: "Lebenslauf herunterladen",
        contact: "Kontakt",
        aboutHeading: "Über mich",
        aboutDescription: `Ich bin ein leidenschaftlicher Enthusiast für IT und Technologie im Allgemeinen. Meine berufliche Reise ist so 
        <br />vielfältig wie mein eklektischer Musikgeschmack, der sich vom Pop von ABBA bis zum Rock von ZZ Top erstreckt. 
        <br />In meiner Freizeit finden Sie mich in einem guten Buch versunken, sei es technisch, historisch, philosophisch, 
        <br />dramatisch, biblischen oder Science / Fantasy-Fiction, was meine Liebe für das Lesen und kontinuierliches 
        <br />Lernen widerspiegelt. 
        <br />
        <br />Als Filmkunstliebhaber schätze ich die Kunst der visuellen Erzählung ebenso sehr wie die Spannung eines 
        <br />Formel-1-Rennens. Vor allem bin ich ein Naturliebhaber, der Ruhe und Inspiration findet, ob am Strand 
        <br />und Meer oder im Grünen.`,
        highlightsHeading: "Berufliche Höhepunkte und Ziele",
        highlightsDescription: `Ein Fachmann mit über vier Jahrzehnten Erfahrung in den Bereichen Technologie und Verwaltung, meine Karriere 
        <br />ist geprägt von bedeutenden Projekten und komplexen Systemen. Ich begann im IT-Bereich und entwickelte 
        <br />Lösungen wie Jahresabschlüsse in Lotus 1-2-3, Budgetkontrollsysteme in dBase III / Clipper'87 sowie Projektmanagement, 
        <br />Implementierung und Koordination mit CA-SuperProject.<br />
        <br />Meine Expertise umfasst die Erstellung eines vollständigen Telemarketingsystems in CA-QbyX, die Implementierung
        <br />und Programmierung von elektronischen Zeiterfassungssystemen mit Visual Basic, C und SQL sowie die Programmierung,
        <br />Anpassung und Implementierung von Kundenservicesystemen (CRM) mit BMC AR-System und SQL-Datenbanken. Nach 
        <br />einer Phase in der Verwaltung, in der ich u.a. Managementprozesse optimierte und digitalizierte, kehre ich mit einem neuen
        <br />Ziel in den IT-Bereich zurück: mein angesammeltes Wissen nun in Data Science, Data Alchemy und KI-gestützter Entwicklung 
        <br />anzuwenden, um somit neue und innovative Lösungen zu schaffen.<br />
        <br />Meine Kompetenzen umfassen:<br />
        <ul>
            <li>. Entwurf, Programmierung und Implementierung von Lösungen</li>
            <li>. Analyse und Implementierung von Großprojekten</li>
            <li>. IT-Support, Telemarketing und Portfolioentwicklung</li>
        </ul>
        <br />Ich suche nach neuen Herausforderungen, die es mir ermöglichen, meine Fähigkeiten in Problemlösung, analytischem
        <br />Denken und Detailgenauigkeit zu nutzen. Ich hoffe meine umfangreiche Erfahrung einbringen zu können und zum 
        <br />Wachstum eines dynamischen und zukunftsorientierten Teams beizutragen.`,
        skillsHeading: "Skills / Fähigkeiten",
        toolsAndTechnologies: "Werkzeuge und Technologien",
        myPortfolio: "Mein Portfolio",
        contactMe: "Kontaktiere mich",
        namePlaceholder: "Voller Name",
        emailPlaceholder: "E-Mail Adresse",
        phonePlaceholder: "Telefonnummer",
        subjectPlaceholder: "Betreff",
        messagePlaceholder: "Ihr Nachricht",
        sendMessage: "Nachricht senden"
    }
};
/**
 * Set the language for all elements with a data-translate attribute
 * @param {string} lang - The language to set
 */
function setLanguage(lang) {
  console.log('setLanguage function 1 called with lang:', lang);
  // Check if lang is valid
  if (!lang || !translations || !translations[lang]) {
    if (!lang) {
      console.warn('No language provided');
    } else if (!translations) {
      console.warn('No translations provided');
    } else {
      console.warn(`No translations found for language: ${lang}`);
    }
    return;
  }
  // Loop through all elements with a data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  if (!elements) {
    console.warn('No elements with data-translate found');
    return;
  }
  // Loop through all elements with a data-translate attribute
  elements.forEach(item => {
    // Get the key from the data-translate attribute
    const key = item.getAttribute('data-translate');
    if (!key) {
      console.warn('No data-translate attribute found on element');
      return;
    }
    // Check if the language has a translation for the key
    if (!translations[lang] || !translations[lang][key]) {
      console.warn(`No translation found for key: ${key} in language: ${lang}`);
      return;
    }
    // Set the text content of the element based on it's type
    if (item.tagName === 'INPUT' || item.tagName === 'TEXTAREA') {
      if (item.type === 'submit') {
        if (!item.value) {
          console.warn('No value found on element');
          return;
        }
        item.value = translations[lang][key];
      } else {
        if (!item.placeholder) {
          console.warn('No placeholder found on element');
          return;
        }
        item.placeholder = translations[lang][key];
      }
    } else {
      if (!item.textContent) {
        console.warn('No text content found on element');
        return;
      }
      item.textContent = translations[lang][key];
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('.dropdown .items a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

});

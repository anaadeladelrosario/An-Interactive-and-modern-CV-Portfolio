// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astrofy | Personal Portfolio Website Template";
export const SITE_DESCRIPTION =
  "Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

export const Config = {
  SiteName: "Ana d a r r c v",
  MyName: "Ana",
  MyGitHub: "https://github.com/anaadeladelrosario",
  MyLinkedIn: "https://www.linkedin.com/in/ana-d-72a63192",
};

type EducationItem = {
  QualificationLevel: string;
  QualificationName: string;
  YearStart: number;
  YearEnd: number;
  InstituteName: string;
};
export const Education: Array<EducationItem> = [
  {
    QualificationLevel: "Bachelor of Science",
    QualificationName: "Computer and Systems Science",
    YearStart: 2016,
    YearEnd: 2019,
    InstituteName: "Stockholm University",
  },
  {
    QualificationLevel: "Bachelor of Science",
    QualificationName: "Sociology",
    YearStart: 2003,
    YearEnd: 2006,
    InstituteName: "Universidad de la Habana",
  },
  {
    QualificationLevel: "Master of Science",
    QualificationName: "Sociology",
    YearStart: 2008,
    YearEnd: 2009,
    InstituteName: "Universidad de la Habana",
  },
];

type LanguageItem = {
  Id: string;
  Name: string;
  Level: string;
  Example: string;
};
export const Languages: Array<LanguageItem> = [
  { Name: "Spanish", Level: "Native", Example: "Hola!", Id: "es" },
  { Name: "English", Level: "Fluent", Example: "Hi!", Id: "gb" },
  { Name: "Swedish", Level: "Fluent", Example: "Hej!", Id: "sv" },
];

type ExperienceItem = {
  Role: string;
  Description: string;
  Company: string;
  StartYear: number;
  EndYear?: number | null;
  City: string;
  Country: string;
};

export const Experiences: Array<ExperienceItem> = [
  {
    Role: "ICT DevOps Engineer",
    StartYear: 2020,
    EndYear: 2021,
    Company: "Ericsson AB",
    City: "Stockholm",
    Country: "Sweden",
    Description:
      "IT Trainee program. Rotation in different areas within Group-IT and get a broader understanding of Ericsson Business. Opportunity to build a larger network within Ericsson and explore different areas of interest such as Cloud, Analytics, Machine Learning, Artificial Intelligence and Cyber Security.",
  },
  {
    Role: "ICT Consultant",
    StartYear: 2021,
    Company: "Ericsson AB",
    City: "Stockholm",
    Country: "Sweden",
    Description:
      "Responsible for delivering results in a software development team. Meet customer expectations. Manage License Models, ensure  asset registration and definition management.",
  },
];

type CertificationItem = {
  Name: string;
  ProvidedBy?: string;
  Year: number;
};

export const Certifications: Array<CertificationItem> = [
  { Name: "IT Trainee program", ProvidedBy: "Ericsson AB", Year: 2021 },
  { Name: "Azure Fundamentals", ProvidedBy: "Microsoft", Year: 2021 },
  { Name: "Lean Six Sigma Yellow Belt", ProvidedBy: "Ericsson AB", Year: 2021 },
];

type SkillItem = {
  Item: string;
};

export const Skills: Array<SkillItem> = [
  { Item: "JavaScript" },
  { Item: "TypeScript" },
  { Item: "CSS" },
  { Item: "HTML" },
  { Item: "React Testing Library" },
  { Item: "React Library" },
  { Item: "Java" },
  { Item: "SQL" },
  { Item: ".Net Core" },
  { Item: "NoSQL" },
  { Item: "C#" },
  { Item: "SOAP" },
  { Item: "Network Security" },
  { Item: "Digital Forensics" },
  { Item: "TCP/IP" },
  { Item: "Windows OS" },
  { Item: "Linux OS (basics)" },
  { Item: "AzureDevOps" },
];

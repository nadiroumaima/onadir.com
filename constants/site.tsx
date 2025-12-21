interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  github: {
    username: string;
    url: string;
  };
  twitter?: string;
}
interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}
export const SITE: Site = {
    url: '',
  name: "oumaima's portfolio",
  title: 'NADIR Oumaima',
  description:
    '',
  author: {
    name: 'NADIR Oumaima',
    url: '',
    email: 'nadiroumaima17@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/oumaima-nadir',
    github: {
      username: 'nadiroumaima',
      url: 'https://www.github.com/nadiroumaima',
    },
    avatar: '',
    twitter: '',
  },
  keywords: [
    
  ],
};
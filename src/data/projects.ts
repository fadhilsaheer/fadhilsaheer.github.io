interface Project {
  title: string;
  description: string;
  link: string;
  stack: string;
}

export const projects: Project[] = [
  {
    title: 'Uchat',
    description:
      'A chat app, where users can create rooms and chat together. Its like clubhouse but for chatting.',
    link: 'https://github.com/octoi/uchat',
    stack:
      'Typescript, Socket IO, GraphQl, Prisma, PostgreSQL, Redis, Tailwind, Next JS, Chakra UI.',
  },
  {
    title: 'Hearbeat',
    description:
      'A patient management system designed for doctors. In this app doctors can add patient data using simple forms, which later they can save as PDF or print as document.',
    link: 'https://octoi.github.io/heartbeat/',
    stack: 'Rust, Tauri, SQlite, Typescript, React, Tailwind, Chakra UI.',
  },
  {
    title: 'Ecom',
    description:
      'A fullstack E-commerce app where users can list their products, & chat other product owners to make a deal. Similar like olx.',
    link: 'https://github.com/octoi/ecom',
    stack:
      'Rust, Typescript, Prisma, GraphQL, JWT, Next.Js, Tailwind, Mantine.',
  },
  {
    title: 'RTTP',
    description:
      'A CLI application which parse json files to send customized API requests blazingly fast.',
    link: 'https://github.com/octoi/rttp',
    stack: 'Rust.',
  },
  {
    title: 'Proshop',
    description:
      'An E-commerce app where admins can upload products & users can buy it using paypal.',
    link: 'https://github.com/octoi/uchat',
    stack: 'Python, Django, React, Paypal API.',
  },
];

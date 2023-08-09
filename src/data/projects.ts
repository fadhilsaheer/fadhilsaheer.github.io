interface Project {
  title: string;
  description: string;
  link: string;
  stack: string;
}

export const projects: Project[] = [
  {
    title: 'Snorlax\u{1F4C1}',
    description: 'A local cloud storage system where users can connect to a server & manage files using client.',
    link: 'https://github.com/hyfic/snorlax',
    stack: 'Go, Gin, Rust, Tauri, Typescript, React, Tailwind, Chakra UI',
  },
  {
    title: 'Hearbeat\u2764',
    description:
      'A patient management system designed for doctors. In this app doctors can add patient data using simple forms, which later they can save as PDF or print as document.',
    link: 'https://hyfic.github.io/heartbeat/',
    stack: 'Rust, Tauri, SQlite, Typescript, React, Tailwind, Chakra UI',
  },
  {
    title: 'Ecom\u{1F6D2}',
    description:
      'A fullstack E-commerce app where users can list their products, & chat other product owners to make a deal. Similar like olx.',
    link: 'https://github.com/octoi/ecom',
    stack: 'Rust, Typescript, Prisma, GraphQL, JWT, Next.Js, Tailwind, Mantine',
  },
  {
    title: 'Uchat\u{1F4AC}',
    description:
      'A chat app, where users can create rooms and chat together. Its like clubhouse but for chatting.',
    link: 'https://github.com/octoi/uchat',
    stack:
      'Typescript, Socket IO, GraphQl, Prisma, PostgreSQL, Redis, Tailwind, Next JS, Chakra UI',
  },
];

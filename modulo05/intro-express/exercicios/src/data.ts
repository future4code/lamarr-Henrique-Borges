import { Usuario, Post } from "./tipos";

export const usuarios: Usuario[] = [

  {
    id: 1,
    name: "Walter",
    phone: "102030405",
    email: "walter@gmail.com",
    website: "walter.com"
  },

  {
    id: 2,
    name: "Neymar",
    phone: "12345678",
    email: "neymar@gmail.com",
    website: "neymar.com"
  },

  {
    id: 3,
    name: "Shikamaru",
    phone: "554535251505",
    email: "shikamaru@gmail.com",
    website: "shikamaru.com"
  }

]

export const posts: Post[] = [

  {
    id: 1,
    userId: 1,
    title: "Say my name",
    body: "Heisenberg"
  },

  {
    id: 1,
    userId: 2,
    title: "Vasco",
    body: "Vasco da Gama"
  },

  {
    id: 1,
    userId: 3,
    title: "Chaves",
    body: "do oito"
  }

]
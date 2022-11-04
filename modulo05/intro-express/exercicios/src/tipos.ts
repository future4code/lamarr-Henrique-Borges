export type Usuario = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string
}

export type Post = {
  id: number,
  userId: number,
  title: string,
  body: string
}
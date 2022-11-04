enum Funcao {
  USER = "user",
  ADMIN = "admin"
}

type Usuario = {
  name: string,
  email: string,
  role: Funcao
}

const emailsUsuarios = ( usuarios:Usuario[] ):string[] => {
  const usuariosFiltrados:Usuario[] = usuarios.filter((usuario) => {
    return (usuario.role === Funcao.ADMIN )
  })

  const emails:string[] = usuariosFiltrados.map((emailUsuario) => {
    return emailUsuario.email
  })

  return emails
}

console.table(emailsUsuarios([
	{name: "Rogério", email: "roger@email.com", role: Funcao.USER},
	{name: "Ademir", email: "ademir@email.com", role: Funcao.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Funcao.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Funcao.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Funcao.USER},  
	{name: "Carina", email: "carina@email.com", role: Funcao.ADMIN}      
] ))
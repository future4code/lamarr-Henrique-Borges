// Sistema de login:

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const cadastrarConta = (emailCadastro, senhaCadastro) => {
  if(emailCadastro.includes("@") && senhaCadastro.length > 5) {
   contas.push({email: emailCadastro, password:senhaCadastro})
   console.log("Login bem-sucedido.");
  } else {
    console.log("e-mail ou senha incorretos (senha deve possuir no mínimo 6 caracteres).");
  } 
}

console.log(contas);

cadastrarConta("vasco@gmail.com", "o123")

console.log(contas);
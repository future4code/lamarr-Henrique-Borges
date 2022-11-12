USE `jbl-4416837-henrique-borges`;

-- TABELA DE ATORES:

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
	birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- VARCHAR(255) => Determina uma string com no máximo 255 caracteres;
-- FLOAT => É uma forma de representar um número não inteiro em uma tabela;
-- DATE => Representa uma data (aaaa/mm/dd);
-- VARCHAR(6) => Determina uma string com no máximo 6 caracteres;
-- PRIMARY KEY => Determina como chave Primária (Chave única na tabela);
-- NOT NULL => Indica que a coluna não pode ser nula;

SHOW DATABASES;
-- SHOW DATABASES => Exibe todos os bancos de dados correspondentes a um determinado servidor MySQL;

SHOW TABLES;
-- SHOW TABLES => Exibe todas as tabelas correspondentes a um determinado banco de dados;

DESCRIBE Actor;
-- O comando DESCRIBE exibe a estrutura de uma tabela e os tipos de dados de cada coluna;

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender )
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "004",
  "Chris Tucker",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;
-- Query que retorna todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela; 

SELECT id, salary FROM Actor;
-- Query que retorna somente o ide o salário de todos os atores;

SELECT id, nome FROM Actor WHERE gender = "male";
-- Query que retorna somente o id e o nome dos atores de gender = "male";

SELECT * FROM Actor WHERE gender = "female";
-- Query que retorna todas as informações das atrizes;

SELECT salary FROM Actor WHERE nome = "Tony Ramos";
-- Query que retorna o salário do ator com o nome Tony Ramos;

SELECT * FROM Actor WHERE gender = "invalid";
-- Query que retorna todas as informações que tenham o gender com o valor "invalid";

SELECT id, nome, salary FROM Actor WHERE salary < 500000;
-- Query que retorna o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000;

SELECT id, nome FROM Actor WHERE id = "002";
-- Query que retorna o id e o nome do Ator/atriz que tenham o id com valor "002";

SELECT * FROM Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;
-- Query que retorna todos os atores e atrizes, cujos nomes começam com "A" ou "J" e 
-- cujos salários são maiores do que R$300.000;
-- LIKE => Permite comparar strings;
-- Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: LIKE "A%", onde % indica 
-- uma string genérica. O operador "ou" é indicado por OR, e "e" por AND;

SELECT * FROM Actor WHERE (nome NOT LIKE "A%") AND salary > 350000;
-- Query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00;
-- NOT => Indica uma negação de comparação. Pode ser usado antes de outros operadores como: NOT LIKE;

SELECT * FROM Actor WHERE (nome LIKE "%g%" OR nome LIKE "%G%");
-- Query com os atores que possuam "G" ou "g" em qualquer parte do nome;

SELECT * FROM Actor 
WHERE 
	(nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%")
	AND salary BETWEEN 350000 AND 900000;
-- Query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e 
-- o salário entre R$350.000,00 e R$900.000,00;
-- BETWEEN => permite verificar se um valor está entre dois: BETWEEN valor1 AND valor2;

-- ----------------------------------------------------------------------------------------------------------- --

-- TABELA DE FILMES:

CREATE TABLE Filmes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
	data_lanc DATE NOT NULL,
    avaliacao INT  NOT NULL
);

INSERT INTO Filmes (nome, sinopse, data_lanc, avaliacao)
VALUES(
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/06/01", 
  7
);

INSERT INTO Filmes (nome, sinopse, data_lanc, avaliacao)
VALUES(
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);

INSERT INTO Filmes (nome, sinopse, data_lanc, avaliacao)
VALUES(
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);

INSERT INTO Filmes (nome, sinopse, data_lanc, avaliacao)
VALUES(
  "Cidade de Deus",
  "Buscapé é um jovem pobre, negro e sensível, 
  que cresce em um universo de muita violência. Ele vive na Cidade de Deus, 
  favela carioca conhecida por ser um dos locais mais violentos do Rio.",
  "2002/08/30", 
  9
);

SELECT id, nome, avaliacao FROM Filmes WHERE id = 4;
-- Query que retorna o id, título e avaliação a partir de um id específico;

SELECT * FROM Filmes WHERE nome = "Doce de mãe";
-- Query que retorna um filme a partir de um nome específico;

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
-- Query que retorna o id, título e sinopse dos filmes com avaliação mínima de 7;

SELECT * FROM Filmes;
-- Query que retorna todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela;

SELECT * FROM Filmes WHERE (nome LIKE "%cidade%");
 -- Query que retorna um filme cujo título contenha a palavra cidade;

SELECT * FROM Filmes WHERE (nome LIKE "%Fosse%" OR sinopse LIKE "%Fosse%");
-- Query com os filmes que possuam "Fosse" em qualquer parte do nome ou da sinopse;

SELECT * FROM Filmes WHERE data_lanc < "2022-11-12";
-- Query que retorna todos os filmes que já tenham lançado;

SELECT * FROM Filmes 
WHERE data_lanc < "2022-11-12"
AND (nome LIKE "%de%" OR sinopse LIKE "%de%") 
AND avaliacao > 7;
-- Query que retorna algum filme que já tenha lançado, 
-- que possuam "de" em qualquer parte do nome ou da sinopse e com a avaliação maior do que 7. 

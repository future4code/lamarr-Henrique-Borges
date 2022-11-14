-- APROFUNDAMENTO SQL:

-- O comando abaixo adiciona uma coluna na tabela de 
-- Actor para representar o sabor de sorvete favorito da celebridade;
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

-- O comando abaixo garante que todos os atores já salvos no banco até então tenham 
-- a coluna type com o valor "NotDirector". Para isso;
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- O comando abaixo altere a coluna gender da tabela ACTOR para que ela aceite strings com até 100 caracteres;
ALTER TABLE Actor MODIFY gender VARCHAR(100);

--  O comando DESCRIBE é usado para conferir a estrutura da tabela e os tipos de dados de cada coluna;
DESCRIBE Actor;

-- Query que atualize o nome e a data de nascimento do ator com o id 003;
UPDATE Actor SET nome = "Moacyr Franco", birth_date = "1936/10/05" WHERE id = "003";

-- query que atualize o nome da atriz Juliana Paes para JULIANA PAES;
UPDATE Actor SET nome = "JULIANA PAES" WHERE nome = "Juliana Paes";

-- E outra query para voltar ao nome anterior;
UPDATE Actor SET nome = "Juliana Paes" WHERE nome = "JULIANA PAES" ;

--  query que atualize todas as informações do ator com o id 005;
UPDATE Actor
SET nome = "Carol Burnett", birth_date = "1933/04/26", salary = 22222222
WHERE id = "005";

-- query que apagua  ator com o nome "Moacyr Franco";
DELETE FROM Actor WHERE nome = "Moacyr Franco";

-- query que apaga todos os atores (do gênero male) com o salário maior do que R$1.000.000,00;
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- query que pegue o maior salário de todos os atores e atrizes;
SELECT MAX(salary) FROM Actor;

--  query que pegue o menor salário das atrizes;
SELECT MIN(salary) FROM Actor;

-- query que pegue a quantidade de atrizes;
SELECT COUNT(*) FROM Actor WHERE gender = "female";

--  query que pegue a soma de todos os salários;
SELECT SUM(salary) FROM Actor;

-- query que conta a quantidade de atrizes e atores contidos/as na tabela Actor, divididos por gênero; 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

--  query que retorne somente o id e o nome dos atores em ordem decrescente alfabética;
SELECT id, nome FROM Actor ORDER BY nome ASC;

-- query que retorne todas as pessoas atoras ordenados pelo salário;
SELECT * FROM Actor ORDER BY salary ASC;

-- query que retorne as pessoas atoras com os três maiores salarios;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- query que retorne a média de salário por gênero;
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

SELECT * FROM Filmes;

-- O comando abaixo adiciona a tabela de Filmes um novo parâmetro: 
-- playing_limit_date que indique a data limite em que o filme será passado no cinema;
ALTER TABLE Filmes ADD playing_limit_date DATE ;

-- O comando abaixo altera a coluna avaliacao da tabela Filmes para que ela
-- possa aceitr valores não inteiros;
ALTER TABLE Filmes MODIFY avaliacao FLOAT;

-- Atualizando data limite em que dois filmes ainda estaram em cartaz;
UPDATE Filmes
SET playing_limit_date = "2022-12-31" WHERE id = "003";
UPDATE Filmes
SET playing_limit_date = "2019-12-31" WHERE id = "002";

-- Excluindo um filme através do id;
DELETE FROM Filmes WHERE id = "001";
-- RELAÇÕES SQL:

--  Query que cria tabela Avaliacao:
CREATE TABLE Avaliacao (
	id VARCHAR(255) PRIMARY KEY,
    comentario TEXT NOT NULL,
	nota FLOAT NOT NULL,
	fk_filme_id INT ,	
	FOREIGN KEY (fk_filme_id) REFERENCES Filmes(id)
);

SELECT * FROM Avaliacao;
DESCRIBE Avaliacao;

--  A chave estrangeira (fk_filme_id) é uma referência em uma tabela a uma chave primária de outra tabela.

-- Criando uma avaliação para cada um dos filmes;
INSERT INTO Avaliacao (id, comentario, nota, fk_filme_id) 
VALUES (
	"008",
    "Bom filme!",
    8,
	008
);

-- Alterando a tabela de filmes para que ela não tenha mais uma coluna chamada avaliacao.
ALTER TABLE  Filmes DROP COLUMN  avaliacao;

-- criar uma avaliação para um filme que não existe (ou seja, um id inválido).
-- "Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha";

-- Erro ao tentar apagra um filme com chave estrangeira:
-- "Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha";

--  Query que cria tabela ElencoFilme:
CREATE TABLE ElencoFilme  (
	fk_filme_id INT,
	fk_actor_id VARCHAR(255),
    FOREIGN KEY (fk_filme_id) REFERENCES Filmes(id),
    FOREIGN KEY (fk_actor_id) REFERENCES Actor(id)
);

SELECT * FROM ElencoFilme ;
DESCRIBE ElencoFilme;

-- Criando relações nessa tabela;
INSERT INTO  ElencoFilme  (fk_filme_id, fk_actor_id)
VALUES(
	002,
	"002"
);

-- Esse operador (INNER JOIN) retorna somente os dados que possuem correspondentes nas duas tabelas. 
-- Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas 
-- respectivas avaliações, poderíamos fazer assim:
-- o operador ON, traz a condição para a execução da query em questão. 
SELECT * FROM Filmes 
INNER JOIN Avaliacao ON Filmes.id = Avaliacao.fk_filme_id;

-- query que retorna somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT nome, fk_filme_id, nota FROM Filmes
INNER JOIN Avaliacao ON Filmes.id = Avaliacao.fk_filme_id;
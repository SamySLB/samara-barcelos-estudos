# git e github

## git

[Git - Documentation](https://git-scm.com/doc)

software

sistema de controle de versão

versionamento de software

## github

serviço de hospedagem em nuvem

guarda o que foi guardado no git

colaboração, tarefas e networking

## git config

git config —global

user.name

user.email

init.default branch- pasta normalmente nomeada de main também podendo ser chamada de Master

## Como criar um repositório?

git init- cria o repositório

cd-trocar de diretório, coloca dentro de onde se deseja estar, seja pasta, arquivo ou diretório

dir- verifica onde está

‘’cd /users/andreiacono

ls

git init’’

criação de um repositório oculto

provavelmente nada foi adicionado, se confirma no git status

quero adicionar as copias ao meu repositório

git add index.html (adicionou a pasta)

quero remover um arquivo de um repositório

git rm —cached index.html

quero adicionar mais de um

git add —all

or

git add .

## commit

 salvo, copia e registro, podendo voltar para a versão anterior se for preciso

git commit -m “primeiro commit - todos os arquivos”

quero saber o que foi alterado

git diff

quero ver as modificações do commit

git log

git log —oneline

movimentação dos arquivos

working

staging

commit

Não quero passar pelo stage

git commit -a -m “alterei a data do arquivo”

## removendo e restaurando arquivos

remove pastas da arvore de trabalho e do index

git - rm 

restaurando

git restore <file>

## renomeando arquivos

git mv nome 1 nome 2

## alterar/amend

git commit -m “alterei data” —amend

## log detalhado

git log -p

## git reset

retornar a um ponto no tempo

- soft

move o arquivo para o ultimo commit, e o arquivo cujo se estava no presente é colocado em staged, é arrumado e pronto para ser feito um novo commit

retorno simples

- mixed

move o arquivo para o ultimo commit, e o arquivo cujo se estava no presente é colocado em unstaged, é arrumado e add, pronto para ser feito um novo commit

retorno complexo

- hard

remove qualquer coisa após o retorno

## git Alias- atalho

criando atalhos pro comando

git config —global (todos que trabalham com o git) alias.log1 “log —oneline”

## Branch

filial, pasta, grupo

main

nova branch- quando se quer criar uma nova alteração grande,

 lembrando que o git é um sistema de versões, antigamente quando o github não simplificava essa função de compartilhamento e ate hoje, é muito comum que cada desenvolvedor tenha sua versão daquela main, tendo assim mais de um menu.

levando para um exemplo mais diário, é como quando compartilhamos o mesmo meme para varias pessoas, cada uma delas vai ter a mesma branch mas as conversas ali desenvolvidas serão diferentes.

merge- coloca tudo para a main.

[Git - merge-strategies Documentation](https://git-scm.com/docs/merge-strategies)

Ao ter commits compartilhados, quando se é feito um merge, podem haver conflitos, para maiores informações o próprio git viabiliza como resolve-los.

Vale lembrar que tudo rodando dentro do git, são dados, então podemos dizer que são dados relacionais que se perderam do seu pai inicial ou origem, importante também manter as boas práticas para evitar o conflito dessas branchs.

O mais comum é que para quem está começando utilizar o git reset hard

# Criação de uma nova Branch

git branch NovaBranch

ir para a nova Branch

git siwtch NovaBranch

Todos os arquivos da Branchn anterior  ja fazem parte dessa Branch

git merge -m “merge da branch NovaBranch para a Branch Main” NovaBranch

## remover Branch

git branch -d NovaBranch

por boas praticas, finalizou o uso, transferiu pra main, deleta
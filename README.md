<div> 
  <h1 align="center">Cadastro de empregados - Frontend & Backend</h1> 
</div>

<div>
  <h3 align="center">Projeto com frontend e backend</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/portifolio/assets/112639055/4aaeef49-c8ac-4fd2-8ff3-82b82095421d" width='950px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
  <div>
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width='100px'>
    <img src= "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width='147px'>
    <img src= "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width='120px'>
  </div>
</div>


## Sobre o projeto📃
Este é o meu portfólio de desenvolvedor web, onde apresento todos os projetos que já desenvolvi até hoje, além de informações sobre mim e formas de contato. Durante esse projeto, apliquei meu conhecimento e técnicas em tecnologia React, abrangendo desde componentes e hooks até custom hooks. Também utilizei o React Router para criar rotas dinâmicas. Além disso, implementei um formulário de contato que envia e-mails diretamente do portfólio por meio da API `EmailJS`.
 <br>
 <br>
O projeto foi estruturado em pastas e subpastas. Cada componente possui sua própria pasta, incluindo os componentes relacionados a ele, bem como o arquivo de estilo com a extensão `.module`, por exemplo `Projeto.module.scss`. Essa abordagem evita conflitos entre os estilos e torna o projeto mais organizado e fácil de manter. Além disso, alguns componentes, como os links e botões, são personalizáveis, o que ajuda a evitar repetições no código.
 
### Deploy(vercel)✈

◻<a href="https://portifolio-plum-psi.vercel.app/">Portifólio</a>

&nbsp;
&nbsp;

## Partes importantes
### Routes
Utilizei o React Router para dividir o projeto em rotas, o que tornou a página mais reativa sem a necessidade de carregamentos adicionais. O projeto consiste em quatro rotas no total: Home, Sobre, Contato e Projetos. No componente `<Home />`, coloquei toda a página principal com links para acessar as outras rotas. As rotas foram configuradas no componente `<App />`.
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/44a7cd1c-fac0-41ee-bcec-f6a5e84bdfe4" width="700px">
</div>

### Estrutura e organização

A organização de pastas no meu projeto foi planejada para ser coerente e fácil de entender. Na pasta src, criei as seguintes subpastas:
<ul>
	<li>
		<code>components</code>: Aqui, cada componente tem sua própria pasta. Dentro dela, encontramos o arquivo JSX correspondente e o estilo em SASS com a extensão .module. Se um componente contém outros componentes em sua composição, esses também têm suas próprias pastas, mantendo os estilos separados.
	</li>
	<li>
		<code>hooks</code>: Nesta pasta, agrupei todos os custom hooks do projeto. Isso facilita a reutilização e a manutenção dessas funcionalidades.
	</li>
	<li>
 		<code>img</code>: As imagens estão organizadas em subpastas dentro desta pasta. Isso ajuda a manter a estrutura limpa e permite que as imagens sejam facilmente localizadas.
 	</li>
	<li>
		<code>json</code>: Aqui, temos um arquivo JSON que contém informações sobre todos os projetos. Essa abordagem centraliza os dados e torna mais simples a atualização ou expansão do conteúdo.
	</li>
</ul>
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/72f565e6-939f-463e-921a-59f0aaf91b83" width="250px">
</div>

### Custom hook - useForm
Esse foi o hook que criei com o intuito de facilitar a criação de estados para campos do formulário de contato e com validação desses estados/valores dos componentes `<Input />`. Assim, cada estado definido com o `useForm()` vai receber o `value` do estado e o `error` se ouver na validação(por exemplo não digitar nada). O hook recebe o argumento `tipoDado` que é o tipo de dado a ser validado, com isso, criei um objeto `dado` que possui os tipos com seus regex para validação e a mensagem de erro caso a validação retorne um erro.
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/2f95e739-7f13-4014-9ae7-a8dca4109165" width="700px">
</div>
&nbsp;
&nbsp;

Na validação, primeiro é verificado se o valor do estado é igual a 0, se sim define o erro como "Preencha este campo" e retorna false para finaliza a execução. Depois, é verificado se o tipo de dado a ser verificado existe no objeto das validações(`dado`), fiz isso para caso não seja passado nenhum tipo especifico de dado a ser validado, e se o teste do regex seja invalido, se sim define o estado do error com a mensagem de error do objeto de validações.
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/90d7fc65-1d80-43ca-ae7d-5c53baf9ebda" width="700px">
</div>

&nbsp;
&nbsp;

Caso não seja passado nenhum tipo de dado para ser validado, na função de onChange(executa toda vez que o foco é tirado do input) que recebe o target(input) é verificado se existe error, se sim executa a função de validação passando o `value` do target(input). Caso não exista nenhum erro, atualiza o valor do estado para o value do input `setValor(target.value)`.
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/78e0b52e-4e02-4f5b-88a3-6b4641745272" width="700px">
</div>

&nbsp;
&nbsp;

Ao final, no return retornei todos os estados e a função `onChange`. Todos esses valores vão ser colocados como propriedades dos componentes de input `<Input />`. Assim, no componente de input recebe o value como o valor(estado) do useForm, a função de `onChange` e o `error` que fica logo abaixo dele.

#### `return`
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/8673c648-cd4d-4c28-b461-455f165944ca" width="700px">
</div>

#### `<Input />`
<div align="center">
	<img align="center" src="https://github.com/WillianOL/portifolio/assets/112639055/5640063e-e0dc-433b-b120-e30b252e4db1" width="700px">
</div>

&nbsp;
&nbsp;


















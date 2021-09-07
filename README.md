# Teste MKData Softwares

> Projeto para CRUD de clientes</br>
> Link em produção: 

## Tecnologias utilizadas
- [**Angular 12**](https://angular.io)
- [**Bootstrap 5**](https://getbootstrap.com)
- [**HTML**](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [**SASS**](https://sass-lang.com)
- [**TypeScript**](https://www.typescriptlang.org)

## Regra de negócio

- Criar uma tela para consulta dos clientes permitindo:
  - Filtrar por nome e/ou somente ativos.
  - Incluir, alterar e excluir.

- Criar um cadastro de clientes contendo: 
  - Nome, obrigatório;
  - Tipo (pessoa física ou jurídica), obrigatório;
  - CPF (se pessoa física) ou CNPJ (se pessoa jurídica), obrigatório;
  - RG (se pessoa física) ou IE (se pessoa jurídica);
  - Data de Cadastro;
  - Ativo (se está ativo);     
  - Telefone, contendo ddd e número, permitir adicionar mais do que um e remover os adicionados. (Mestre Detalhe)
  - Ao gravar validar se já existe um cliente cadastrado com o CPF/CNPJ informado.
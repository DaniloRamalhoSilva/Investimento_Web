Baseado no projeto existente `Business_Hub\Business_Hub_web`, crie um novo projeto chamado `Template_Web`.

O objetivo é que o `Template_Web` seja um **template reutilizável**, seguindo o mesmo padrão técnico, arquitetural e visual utilizado no `Business_Hub_web`, porém sem regras de negócio específicas do Business Hub.

Antes de implementar, analise o projeto `Business_Hub_web` e identifique os padrões utilizados, incluindo:

- Estrutura de pastas e organização do projeto;
- Arquitetura e separação de responsabilidades;
- Padrão de componentes;
- Organização de páginas, layouts e rotas;
- Gerenciamento de estado;
- Serviços e comunicação com APIs;
- Tratamento de erros;
- Configuração de ambiente;
- Autenticação/autorização, caso exista;
- Componentes compartilhados;
- Hooks, helpers, utils e constantes;
- Padrões de tipagem e interfaces;
- Estilos, tema, responsividade e identidade visual;
- Modo claro/escuro, caso exista;
- Bibliotecas e dependências utilizadas;
- Convenções de nomenclatura;
- Configurações de lint, build e desenvolvimento.

### Implementação

Crie `Template_Web` reproduzindo esses padrões de forma organizada e genérica.

O template deve servir como ponto de partida para novos projetos, portanto:

1. Não copie regras de negócio específicas do `Business_Hub_web`.
2. Substitua componentes específicos do Business Hub por exemplos genéricos quando necessário.
3. Preserve componentes estruturais reutilizáveis, como:

   - Layout;
   - Header;
   - Sidebar;
   - Menu;
   - Navegação;
   - Tema;
   - Loading;
   - Modais;
   - Toasts/notificações;
   - Tratamento de erros;
   - Estrutura de formulários;
   - Componentes base.

4. Mantenha o mesmo padrão de UX/UI utilizado no projeto de referência.
5. Mantenha responsividade e suporte adequado para desktop e mobile.
6. Evite duplicação de código.
7. Mantenha responsabilidades bem separadas.
8. Utilize boas práticas atuais de desenvolvimento front-end.
9. Não introduza uma arquitetura diferente sem necessidade.
10. Não adicione bibliotecas novas quando o projeto de referência já possuir uma solução equivalente.

### Importante

Não quero apenas uma cópia renomeada do projeto.

Quero que você **entenda os padrões do `Business_Hub_web` e transforme esses padrões em um template limpo, genérico e reutilizável**.

Remova:

- nomes específicos do Business Hub;
- endpoints específicos;
- textos específicos;
- regras de negócio;
- dados mockados que representem o negócio atual;
- configurações que só façam sentido para o Business Hub.

Quando algum recurso do projeto original depender diretamente de uma regra de negócio, mantenha apenas a infraestrutura necessária e crie uma implementação genérica ou um exemplo simples.

### Qualidade do código

Durante a implementação:

- Respeite os padrões já existentes no projeto de referência;
- Priorize legibilidade e manutenção;
- Utilize componentes reutilizáveis;
- Evite componentes excessivamente grandes;
- Separe UI, lógica, serviços e modelos quando o padrão do projeto indicar isso;
- Remova código morto e referências desnecessárias;
- Não deixe imports quebrados;
- Não deixe warnings evitáveis;
- Não altere o projeto `Business_Hub_web`.

### Validação

Ao terminar:

1. Revise toda a estrutura criada.
2. Instale/restaure as dependências necessárias.
3. Execute o build do `Template_Web`.
4. Corrija erros de compilação, imports, tipagem e configuração.
5. Se existirem testes ou lint configurados, execute-os e corrija os problemas encontrados.
6. Verifique se o projeto pode ser iniciado normalmente.

Por fim, apresente um resumo contendo:

- Estrutura criada;
- Padrões identificados no `Business_Hub_web`;
- O que foi reaproveitado;
- O que foi generalizado/removido;
- Principais decisões tomadas;
- Eventuais pontos que merecem atenção em futuros projetos.

O resultado final deve ser um `Template_Web` que eu possa copiar para iniciar novos projetos mantendo o mesmo padrão de desenvolvimento do `Business_Hub_web`.

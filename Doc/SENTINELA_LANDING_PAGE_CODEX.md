# Sentinela — Especificação para criação da Landing Page em React

> **Documento de instruções para o Codex**
>
> Objetivo: implementar a landing page oficial do **Sentinela** em React, com foco em conversão para **lista de espera**, experiência **mobile-first**, excelente responsividade, performance, acessibilidade e identidade visual consistente.
>
> Este documento deve ser tratado como a principal referência funcional e visual da landing page.

---

# 1. Contexto do produto

O **Sentinela** é um produto de monitoramento inteligente de investimentos.

A proposta central é simples:

> **Você investe. O Sentinela vigia.**

O usuário cadastra os investimentos que acompanha e o Sentinela procura informações relevantes sobre esses ativos, filtra o excesso de conteúdo e apresenta apenas aquilo que merece atenção.

A primeira versão do produto será focada em **Fundos Imobiliários — FIIs**, mas a marca e a landing page devem permitir evolução futura para ações, ETFs e outros tipos de ativos.

O produto não deve ser apresentado como:

- corretora;
- banco;
- plataforma de trading;
- portal de notícias;
- robô de recomendação;
- promessa de retorno;
- sistema de monitoramento em tempo real.

O produto deve ser apresentado como:

> **uma camada de monitoramento e inteligência entre o investidor e as informações relacionadas à carteira dele.**

---

# 2. Objetivo da landing page

A landing page **não tem como objetivo vender uma assinatura neste momento**.

O principal objetivo é:

```text
VISITANTE
   ↓
ENTENDE O PROBLEMA
   ↓
ENTENDE A PROPOSTA
   ↓
PERCEBE VALOR
   ↓
CONFIA NO PRODUTO
   ↓
ENTRA NA LISTA DE ESPERA
```

CTA principal:

```text
Quero entrar na lista de espera
```

CTA secundário:

```text
Ver como funciona
```

A principal métrica de conversão da página é:

```text
visitante → cadastro na lista de espera
```

---

# 3. Estratégia de desenvolvimento

A landing page será utilizada para ajudar a validar:

- posicionamento do produto;
- clareza da proposta de valor;
- interesse real dos usuários;
- percepção de utilidade;
- perfil de quem demonstra interesse;
- quantidade média de FIIs dos potenciais usuários;
- funcionalidades percebidas como mais valiosas.

Por isso, não tratar a página apenas como uma peça visual.

A landing page faz parte do processo de **descoberta e validação do produto**.

---

# 4. Stack

## Regra principal

Antes de alterar qualquer coisa, analisar a estrutura atual do projeto.

Se já existir um projeto/template React:

- preservar a arquitetura;
- preservar convenções;
- preservar lint;
- preservar formatação;
- preservar biblioteca de UI já adotada;
- reutilizar componentes existentes;
- reutilizar sistema de tema existente;
- não substituir dependências sem motivo.

Não criar um projeto paralelo se a landing page fizer parte de um projeto existente.

## Caso seja um projeto novo

Preferência:

```text
React
TypeScript
Vite
```

Estilização:

- preferir a solução já existente no projeto;
- se não houver solução definida, CSS Modules ou CSS organizado por componente é suficiente;
- Tailwind só deve ser utilizado se já fizer parte do projeto ou houver justificativa clara.

Evitar adicionar bibliotecas apenas para resolver coisas simples que CSS nativo resolve bem.

---

# 5. Princípio visual principal

A landing page deve ser:

- premium;
- escura;
- limpa;
- tecnológica;
- confiável;
- moderna;
- sofisticada;
- com bastante espaço;
- orientada verticalmente;
- pensada primeiro para celular.

Evitar:

- excesso de cards na mesma dobra;
- excesso de textos visíveis simultaneamente;
- aparência de dashboard financeiro;
- layout apertado;
- excesso de ícones;
- gráficos decorativos genéricos;
- visual típico de fintech com fundo branco + verde + gráfico subindo;
- animações excessivas.

A página deve convidar o usuário a **rolar**.

A sensação deve ser:

```text
descoberta progressiva
+
narrativa
+
respiração visual
```

---

# 6. Mobile-first é obrigatório

A landing page deve ser desenhada primeiro para telas pequenas.

Breakpoints podem seguir o padrão do projeto, mas como referência:

```text
mobile:      < 640px
tablet:      640px – 1023px
desktop:     >= 1024px
large:       >= 1440px
```

O desktop não deve parecer uma página mobile esticada.

Entretanto, a hierarquia vertical deve permanecer.

No desktop:

- aumentar largura;
- criar composições lado a lado apenas quando melhorarem a leitura;
- preservar bastante espaço entre seções;
- evitar colocar conteúdo demais em uma única tela.

---

# 7. Imagem de fundo fornecida

Foi criada uma arte vertical sem textos/cards contendo:

- montanhas;
- farol;
- radar;
- luzes;
- homem sentado observando a paisagem;
- malha tecnológica;
- atmosfera noturna.

Arquivo de referência fornecido:

```text
paisagem_de_montanhas_com_farol_e_radar.png
```

Ao incorporar ao projeto, renomear preferencialmente para:

```text
sentinela-background.png
```

Local sugerido:

```text
src/assets/images/sentinela-background.png
```

ou seguir o padrão de assets já existente.

---

# 8. IMPORTANTE — como utilizar o fundo

Não usar a imagem obrigatoriamente como um único:

```css
body {
  background-image: url(...);
  background-size: cover;
}
```

em toda a página.

Isso tende a:

- deformar a composição;
- cortar elementos importantes;
- prejudicar mobile;
- causar problemas de escala;
- fazer partes relevantes desaparecerem dependendo da proporção da tela.

A imagem deve ser tratada como **fonte de atmosfera visual**.

Criar um componente ou sistema como:

```text
PageAtmosphere
SectionBackground
AtmosphericBackground
```

e utilizar a imagem em diferentes seções com:

- background-position controlado;
- overlays;
- gradientes;
- opacidade;
- pseudo-elements;
- recortes diferentes no mobile e desktop.

Pode reutilizar a mesma imagem em múltiplas seções com posições distintas.

Exemplo conceitual:

```text
Hero
→ farol / montanhas

Problema / Radar
→ radar

História
→ homem sentado / montanha

CTA final
→ montanhas / luz distante
```

O conteúdo HTML nunca deve depender da imagem para ser legível.

Sempre usar overlays escuros.

---

# 9. Tratamento do fundo

Criar overlays para garantir contraste.

Exemplo conceitual:

```css
background:
  linear-gradient(
    180deg,
    rgba(5, 11, 18, .55),
    rgba(5, 11, 18, .92)
  ),
  url(...);
```

Não copiar obrigatoriamente os valores acima.

Ajustar visualmente.

O objetivo é:

> a imagem criar atmosfera sem competir com os textos.

---

# 10. Paleta visual

Usar como referência.

## Fundo principal

```text
#080D16
```

## Superfície

```text
#101824
```

## Superfície elevada

```text
#13202C
```

## Cor principal da marca

```text
#22D3B6
```

Pode ajustar levemente o tom para manter coerência com o logo/fundo.

## Texto principal

```text
#F5F7FA
```

## Texto secundário

```text
#94A3B8
```

## Bordas

```text
rgba(148, 163, 184, 0.15)
```

## Estado positivo / normal

Verde.

## Atenção

Âmbar.

## Urgente

Vermelho.

### Regra importante

Verde/âmbar/vermelho representam **estado da informação**.

O teal/ciano representa **a marca Sentinela**.

Não transformar vermelho e verde na identidade principal.

---

# 11. Tipografia

Usar fonte moderna, limpa e altamente legível.

Se o projeto já possuir fonte definida, preservá-la.

Caso contrário, considerar:

```text
Inter
Manrope
Plus Jakarta Sans
```

Preferência:

```text
Inter
```

Não importar várias famílias tipográficas sem necessidade.

---

# 12. Escala tipográfica

Referência, não regra absoluta:

## Hero desktop

```text
font-size: clamp(3rem, 7vw, 6.5rem)
font-weight: 700/800
line-height: ~0.95–1.05
```

## Hero mobile

```text
font-size: clamp(2.5rem, 12vw, 4rem)
```

## Títulos de seção

```text
clamp(2rem, 4vw, 4rem)
```

## Texto comum

```text
16px – 20px
```

Não usar textos pequenos demais.

---

# 13. Espaçamento

A landing deve ser longa.

Isso é intencional.

Cada seção deve respirar.

Referência desktop:

```text
padding vertical: 120px – 180px
```

Mobile:

```text
padding vertical: 72px – 110px
```

Não comprimir seções apenas para reduzir scroll.

O scroll faz parte da narrativa.

---

# 14. Largura de conteúdo

Criar container consistente.

Referência:

```text
max-width: 1200px – 1320px
```

Com padding lateral responsivo.

No mobile:

```text
20px – 24px
```

---

# 15. Estrutura geral da página

Implementar nesta ordem:

```text
Header
Hero
Problema
Menos informação / Mais relevância
Como funciona
Produto na prática
O que o Sentinela mostra
IA + fontes
História
Comparativo
Lista de espera
FAQ
CTA final
Footer
```

Não alterar drasticamente essa sequência sem motivo.

Ela foi pensada como narrativa comercial.

---

# 16. Header

Header simples e elegante.

Desktop:

```text
Logo Sentinela

Início
Como funciona
Recursos
Sobre
FAQ

[ Entrar na lista ]
```

Mobile:

- logo;
- botão CTA;
- menu hamburger se necessário.

Não lotar o header.

Pode ser sticky com fundo translúcido após scroll.

Aplicar:

```text
backdrop-filter: blur(...)
```

quando suportado.

Não comprometer performance.

---

# 17. HERO

Esta é a seção mais importante.

Eyebrow:

```text
MONITORAMENTO INTELIGENTE DE INVESTIMENTOS
```

Headline:

```text
Você investe.
O Sentinela vigia.
```

Destacar visualmente:

```text
O Sentinela vigia.
```

com a cor da marca.

Subheadline:

```text
Cadastre os ativos da sua carteira e deixe o Sentinela acompanhar
informações que podem importar para seus investimentos.

Menos notícias. Mais relevância.
```

CTA primário:

```text
Quero entrar na lista de espera
```

CTA secundário:

```text
Ver como funciona
```

Microcopy:

```text
Primeira versão focada em Fundos Imobiliários.
Novos tipos de investimentos poderão ser adicionados futuramente.
```

---

# 18. Hero visual

Desktop:

- texto de um lado;
- mockup do aplicativo do outro;
- farol e montanhas compondo o fundo.

Mobile:

- texto primeiro;
- CTA;
- mockup abaixo;
- não obrigar o usuário a ver mockup antes da proposta de valor.

Não usar mockup gigantesco que ocupe várias telas.

O mockup é apoio.

A mensagem continua sendo protagonista.

---

# 19. Seção — problema

Título:

```text
O problema não é falta de informação.
```

Subtítulo:

```text
É descobrir qual informação realmente importa.
```

Texto:

```text
Todos os dias são publicados comunicados, fatos relevantes, relatórios
e outras informações sobre investimentos.

A informação pode estar disponível na B3, CVM, Fundos.NET ou em uma
fonte oficial — mas isso não significa que você vai descobrir que ela existe.

E quando finalmente descobre, o mercado pode já ter reagido.
```

Apresentar três pontos.

## Informação demais

```text
Acompanhar diferentes fontes todos os dias consome tempo.
```

## Documentos complexos

```text
Informações importantes podem estar escondidas em PDFs e comunicados extensos.
```

## Descoberta tardia

```text
Você pode descobrir algo importante apenas depois que o mercado já reagiu.
```

No mobile:

- empilhar;
- dar espaço;
- não tentar mostrar os três itens lado a lado.

---

# 20. Seção — frase de impacto

Essa seção deve ter bastante espaço visual.

Headline:

```text
36 informações encontradas.
```

Headline de destaque:

```text
2 merecem sua atenção.
```

Texto:

```text
O Sentinela não foi criado para colocar mais notícias no seu dia.

Ele foi criado para ajudar a identificar, no meio de tudo que foi publicado,
aquilo que pode realmente importar para os investimentos que você acompanha.
```

Frase final:

```text
Você continua vivendo sua vida.
O Sentinela continua observando.
```

Usar radar no fundo.

---

# 21. Seção — Como funciona

Título:

```text
Você cadastra.
O Sentinela acompanha.
```

Etapas:

## 01 — Cadastre seus investimentos

```text
Informe os FIIs que fazem parte da sua carteira.
```

Visual opcional:

```text
MXRF11
HGLG11
KNRI11
CACR11
```

## 02 — Nós acompanhamos as informações

```text
O Sentinela procura novas informações relacionadas aos ativos monitorados
em fontes confiáveis.
```

## 03 — A inteligência filtra o que importa

```text
As informações são analisadas, resumidas e classificadas de acordo
com sua relevância e possível impacto.
```

## 04 — Você recebe o essencial

```text
Quando existe algo que merece atenção, você encontra uma explicação simples
e pode consultar a fonte original.
```

Fechamento:

```text
Você continua vivendo sua vida.
O Sentinela continua observando.
```

---

# 22. Não prometer tempo real

Não utilizar:

```text
tempo real
instantâneo
em segundos
em minutos
monitoramento 24/7 garantido
```

O MVP ainda não garante isso.

Utilizar:

```text
quando uma informação relevante for identificada
quando houver algo que mereça atenção
acompanhamento inteligente
monitoramento periódico
```

---

# 23. Seção — O app na prática

Mostrar três situações.

Pode usar mockups reais criados programaticamente com HTML/CSS dentro de frames de smartphone ou imagens dos mockups fornecidas posteriormente.

Evitar colocar textos dentro de imagens quando for possível fazê-los em HTML.

## Tela 1 — Carteira

Exemplo:

```text
Sua carteira está sendo monitorada

11 ativos acompanhados

9 sem novidades
2 com atualizações
0 alertas importantes
```

## Tela 2 — Notificação

Texto:

```text
Nova informação importante identificada sobre CACR11.
```

Não escrever:

```text
notificação em tempo real
```

Título sugerido:

```text
2. Alerta quando algo merece atenção
```

## Tela 3 — Análise

Conteúdo:

```text
O que aconteceu
Por que isso importa
Principais riscos
Possível impacto
Fonte original
```

CTA:

```text
Ver documento original
```

---

# 24. Seção — O que o Sentinela mostra

Título:

```text
O que o Sentinela mostra
```

Subtexto:

```text
Cada informação vem com contexto para ajudar você a entender o que aconteceu.
```

Apresentar:

## Importância

```text
Indica o nível de relevância da informação.
```

## Resumo inteligente

```text
Um resumo claro, direto e objetivo.
```

## Possível impacto

```text
Indica se a informação pode ter efeito positivo, negativo, neutro ou incerto.
```

## Riscos

```text
Destaca os principais pontos de atenção identificados.
```

## Horizonte

```text
Ajuda a entender se o possível efeito pode ser de curto, médio ou longo prazo.
```

## Fonte original

```text
Sempre que possível, disponibiliza o caminho para o documento original.
```

No desktop pode existir grid.

No mobile deve ser:

- 1 coluna;
- eventualmente 2 colunas apenas em telas maiores;
- espaçamento confortável.

---

# 25. Seção — Inteligência artificial e fontes

Título:

```text
Inteligência artificial ajuda a interpretar.
A fonte continua sendo a referência.
```

Texto:

```text
O Sentinela utiliza inteligência artificial para ajudar a ler,
organizar e destacar informações relevantes.

Sempre que possível, a origem da informação permanece disponível
para que você possa consultar a fonte original.
```

Apresentar visualmente:

```text
B3
CVM
Fundos.NET
Gestoras e fontes oficiais
```

Não criar logos falsos.

Se logos oficiais forem usados:

- utilizar assets legítimos;
- respeitar identidade;
- não sugerir parceria ou endosso.

Se não houver assets aprovados, usar apenas os nomes em texto.

Fechamento:

```text
Nada de resumo sem contexto.
Nada de esconder a origem da informação.
```

---

# 26. Seção — História

Título:

```text
O Sentinela nasceu depois que uma informação chegou tarde demais.
```

Texto em primeira pessoa:

```text
Eu possuía um fundo imobiliário e uma informação importante sobre ele
havia sido publicada.

Eu simplesmente não vi.

Quando descobri o que estava acontecendo, outros investidores já haviam
tomado suas decisões e o mercado já tinha reagido.

A informação não estava escondida.

Eu só não sabia que precisava procurá-la naquele momento.
```

Pergunta em destaque:

```text
E se existisse algo acompanhando meus investimentos
mesmo quando eu não estivesse olhando?
```

Fechamento:

```text
Foi dessa pergunta que nasceu o Sentinela.
```

Usar o homem sentado na montanha nesta seção.

---

# 27. Seção — Comparativo conceitual

Título:

```text
Um produto diferente de mais um portal financeiro.
```

Lado esquerdo:

## Mais informação

```text
✕ Dezenas de notícias
✕ Informações genéricas
✕ Excesso de conteúdo
✕ Você procura o que importa
```

Lado direito:

## Sentinela

```text
✓ Sua carteira
✓ Informação filtrada
✓ Contexto simples
✓ O que merece atenção fica em destaque
```

Headline final:

```text
Menos barulho.
Mais sinal.
```

Essa frase deve receber bastante destaque visual.

---

# 28. Planos

Nesta versão da landing page, não criar tabela comercial completa.

Não exibir ainda:

```text
R$ 9,90
R$ 19,90
```

Esses valores ainda serão validados.

Pode existir um pequeno bloco:

Título:

```text
Comece grátis.
```

Texto:

```text
O Sentinela terá uma opção gratuita para acompanhar uma carteira inicial
e planos para quem quiser monitorar uma quantidade maior de investimentos
ou utilizar recursos adicionais.
```

Microcopy:

```text
Plano gratuito previsto: até 3 FIIs.
```

Não transformar essa seção no foco da landing.

---

# 29. Lista de espera — principal ponto de conversão

Título:

```text
Seja um dos primeiros a testar o Sentinela.
```

Texto:

```text
Estamos preparando os primeiros acessos.

Entre na lista de espera e seja avisado quando novas vagas forem liberadas.
```

Campos:

```text
Nome
E-mail
```

CTA:

```text
Quero entrar na lista
```

Microcopy:

```text
Sem spam. Avisaremos sobre o desenvolvimento e a liberação dos primeiros acessos.
```

---

# 30. Formulário da lista de espera

Criar componente isolado:

```text
WaitlistForm
```

Validações:

## Nome

- obrigatório;
- remover espaços excedentes;
- tamanho mínimo razoável.

## E-mail

- obrigatório;
- trim;
- lowercase antes de enviar;
- validação de formato.

Estados:

```text
idle
submitting
success
error
```

Durante envio:

- bloquear duplo submit;
- mostrar loading;
- preservar acessibilidade.

---

# 31. Integração da lista de espera

Não inventar endpoint.

Criar um service isolado, por exemplo:

```text
waitlist.service.ts
```

Se a API real já possuir endpoint, utilizar configuração por variável de ambiente.

Exemplo:

```text
VITE_WAITLIST_API_URL
```

ou seguir convenção do projeto.

Se o endpoint não tiver sido informado:

- deixar a integração preparada;
- não hardcodar URL falsa;
- não enviar para serviços terceiros sem autorização;
- permitir mock/local apenas em desenvolvimento;
- documentar claramente o ponto de integração pendente.

---

# 32. Pós-cadastro — pesquisa opcional

Após sucesso na lista de espera, mostrar:

```text
Você está na lista 🎉

Quer nos ajudar a construir o Sentinela?
São apenas 3 perguntas.
```

Não obrigar.

Botão:

```text
Responder agora
```

Alternativa:

```text
Agora não
```

---

# 33. Pesquisa — pergunta 1

```text
Quantos FIIs você possui atualmente?
```

Opções:

```text
Ainda não invisto em FIIs
1–3
4–10
11–20
21+
```

---

# 34. Pesquisa — pergunta 2

```text
Com que frequência você acompanha informações dos seus investimentos?
```

Opções:

```text
Todos os dias
Algumas vezes por semana
Uma vez por semana
Raramente
Só quando acontece alguma coisa
```

---

# 35. Pesquisa — pergunta 3

```text
O que mais faria o Sentinela valer a pena para você?
```

Permitir selecionar até 3:

```text
Alertas sobre informações importantes
Resumo simples dos comunicados
Classificação do possível impacto
Principais riscos
Histórico de acontecimentos por ativo
Resumo diário da carteira
Outro
```

Deixar integração dessa pesquisa separada da lista de espera.

---

# 36. FAQ

Implementar accordion acessível.

Perguntas:

## O Sentinela recomenda comprar ou vender investimentos?

Resposta:

```text
Não. O Sentinela organiza informações e apresenta contexto para apoiar
sua análise. A decisão de investimento continua sendo sua.
```

---

## Quais investimentos serão suportados?

```text
A primeira versão será focada em Fundos Imobiliários.
A visão do produto permite incorporar outros tipos de investimentos futuramente.
```

---

## O monitoramento acontece em tempo real?

```text
A frequência de monitoramento poderá variar durante as primeiras versões.
Nosso foco inicial é entregar informações relevantes de forma confiável,
sem prometer monitoramento em tempo real antes que essa capacidade esteja disponível.
```

---

## De onde vêm as informações?

```text
O Sentinela prioriza fontes confiáveis e oficiais, incluindo B3,
CVM, Fundos.NET e fontes oficiais relacionadas aos ativos acompanhados.
```

---

## A inteligência artificial pode errar?

```text
Sim. Tecnologias de inteligência artificial podem cometer erros.

Por isso, o Sentinela mantém a análise conectada à fonte original sempre
que possível, permitindo que o usuário confira a informação.
```

---

## O Sentinela será gratuito?

```text
Haverá uma opção gratuita limitada e planos adicionais para usuários
que quiserem acompanhar uma carteira maior ou utilizar recursos adicionais.
```

---

## Quando será lançado?

```text
O Sentinela está sendo validado com um grupo inicial de usuários.
Quem estiver na lista de espera será avisado conforme novos acessos forem disponibilizados.
```

---

# 37. CTA final

Texto pequeno:

```text
Você não precisa acompanhar tudo.
```

Headline:

```text
Você investe.
O Sentinela vigia.
```

Complemento:

```text
Entre na lista de espera e acompanhe a construção de uma nova forma
de monitorar seus investimentos.
```

CTA:

```text
Quero acesso antecipado
```

Ao clicar:

- scroll suave até lista de espera;
- ou abrir formulário inline conforme arquitetura escolhida.

---

# 38. Footer

Conteúdo:

```text
Sentinela
Monitoramento inteligente de investimentos.
```

Links:

```text
Como funciona
Privacidade
Termos de uso
Contato
```

Disclaimer:

```text
O Sentinela é uma ferramenta informativa e não constitui recomendação
de investimento.

Informações geradas ou resumidas por inteligência artificial podem conter
imprecisões.

Consulte as fontes originais e faça sua própria análise.
```

---

# 39. Componentização sugerida

Não criar um único componente gigante.

Estrutura conceitual:

```text
LandingPage

├── Header
├── HeroSection
├── ProblemSection
├── SignalSection
├── HowItWorksSection
├── ProductPreviewSection
├── FeaturesSection
├── SourcesSection
├── StorySection
├── ComparisonSection
├── WaitlistSection
│   └── WaitlistForm
├── WaitlistSurvey
├── FAQSection
├── FinalCTASection
└── Footer
```

Componentes auxiliares possíveis:

```text
Section
SectionHeader
PhoneMockup
FeatureItem
StepItem
StatusBadge
SourceItem
CTAButton
AtmosphericBackground
```

Não componentizar por excesso.

Criar abstrações apenas quando houver repetição ou benefício claro.

---

# 40. Conteúdo deve ficar fora de imagens

Regra importante:

Textos principais devem ser HTML.

Não colocar dentro da imagem de fundo:

- headlines;
- botões;
- cards;
- FAQs;
- textos comerciais;
- tabelas;
- formulário.

Isso garante:

- responsividade;
- SEO;
- acessibilidade;
- tradução futura;
- manutenção;
- melhor rendering mobile.

A imagem deve ser puramente decorativa.

---

# 41. Mockups do app

Preferência:

1. utilizar screenshot real do produto quando existir;
2. usar mockup visual fornecido;
3. criar mockup com HTML/CSS como demonstração.

Se criar mockup com HTML/CSS:

- não fingir que funções ainda inexistentes já estão disponíveis de forma comercial;
- representar conceito;
- manter coerência com o MVP.

Pode incluir labels como:

```text
Exemplo de análise
```

caso necessário.

---

# 42. Responsividade dos mockups

Mobile:

```text
1 mockup por vez
```

ou carousel horizontal com snap, se realmente necessário.

Preferência:

- empilhar verticalmente;
- evitar carousel se não for necessário.

Tablet:

```text
1–2 colunas
```

Desktop:

```text
até 3 mockups
```

---

# 43. Animações

Permitidas:

- fade-in;
- slide suave;
- radar pulsando discretamente;
- glow leve;
- pequenas transições;
- hover suave;
- números surgindo;
- movimento lento do background.

Evitar:

- parallax agressivo;
- animações contínuas pesadas;
- partículas demais;
- textos voando;
- elementos que desviem atenção.

---

# 44. prefers-reduced-motion

Obrigatório respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

Desativar ou reduzir:

- scroll animation;
- radar pulse;
- transitions;
- parallax.

---

# 45. Scroll

Utilizar:

```css
scroll-behavior: smooth;
```

somente quando apropriado.

Links do menu devem direcionar para IDs semânticos.

Exemplo:

```text
#inicio
#como-funciona
#recursos
#sobre
#faq
#lista-de-espera
```

---

# 46. SEO

Criar metadados adequados.

Title sugerido:

```text
Sentinela — Monitoramento inteligente de investimentos
```

Description:

```text
Cadastre os investimentos que você acompanha e deixe o Sentinela
ajudar a identificar informações que realmente merecem sua atenção.
Primeira versão focada em Fundos Imobiliários.
```

Adicionar:

- Open Graph;
- Twitter/X cards quando aplicável;
- canonical quando houver domínio;
- favicon;
- theme-color.

Não inventar URL final.

---

# 47. Headings

Manter hierarquia correta.

A página deve ter apenas um:

```html
<h1>
```

O restante:

```html
<h2>
<h3>
```

de maneira semântica.

Não utilizar heading apenas por tamanho visual.

---

# 48. Acessibilidade

Obrigatório:

- contraste adequado;
- navegação por teclado;
- foco visível;
- `aria-expanded` no FAQ;
- labels reais no formulário;
- alt text em imagens informativas;
- `aria-hidden` para decoração;
- botão deve ser `<button>`;
- link deve ser `<a>`;
- não depender apenas de cor para status.

Exemplo:

```text
🔴 Urgente
```

não apenas um círculo vermelho.

---

# 49. Performance

A landing deve carregar rápido em celular.

Aplicar:

- WebP/AVIF quando possível;
- lazy loading para imagens abaixo da dobra;
- preload somente do essencial;
- evitar JS pesado;
- evitar bibliotecas de animação gigantes;
- code splitting apenas quando fizer sentido;
- compressão dos assets;
- tamanho adequado por breakpoint quando possível.

A grande imagem de fundo deve ser otimizada.

Gerar versões, se necessário:

```text
sentinela-background-mobile.webp
sentinela-background-tablet.webp
sentinela-background-desktop.webp
```

Preferir `<picture>` quando for um `<img>`.

Para background CSS, usar media queries.

---

# 50. Core Web Vitals

Ter atenção especial a:

```text
LCP
CLS
INP
```

Evitar CLS definindo dimensões/aspect-ratio de:

- mockups;
- imagens;
- logo;
- blocos dinâmicos.

Hero visual não deve atrasar excessivamente o LCP.

---

# 51. Analytics

Preparar eventos sem amarrar a um fornecedor específico.

Criar helper conceitual:

```text
trackEvent(...)
```

Eventos importantes:

```text
landing_view
hero_waitlist_click
how_it_works_click
waitlist_submit_started
waitlist_submit_success
waitlist_submit_error
survey_started
survey_completed
faq_opened
final_cta_click
```

Se analytics ainda não existir:

- criar interface;
- não instalar fornecedor sem autorização.

---

# 52. Segurança do formulário

Não confiar apenas em validação do front-end.

Preparar para backend implementar:

- validação;
- rate limit;
- proteção contra abuso.

No front:

- não expor API keys;
- não colocar segredo em `VITE_*`;
- lembrar que variáveis `VITE_*` são públicas no bundle.

---

# 53. Não usar localStorage para dados sensíveis

A lista de espera não exige autenticação.

Não persistir e-mail desnecessariamente no navegador.

Se usar estado local para UX, limpar conforme necessário.

---

# 54. Estado de erro da lista

Mensagem:

```text
Não foi possível concluir seu cadastro agora.
Tente novamente em alguns instantes.
```

Evitar expor stack/error interno.

Permitir retry.

---

# 55. Estado de sucesso

Mensagem:

```text
Você está na lista 🎉
```

Complemento:

```text
Avisaremos quando novos acessos forem liberados.
```

Depois oferecer pesquisa opcional.

---

# 56. Logo

Utilizar o logo oficial já definido para o Sentinela.

Não redesenhar logo sem solicitação.

Se houver apenas versão raster:

- manter proporção;
- não distorcer;
- gerar variante apropriada apenas se necessário.

---

# 57. Tom de voz

A comunicação deve ser:

- simples;
- objetiva;
- segura;
- adulta;
- moderna;
- sem hype excessivo;
- sem promessas irreais;
- sem linguagem de day trader.

Evitar:

```text
Nunca mais perca dinheiro
Ganhe mais
Antecipe o mercado
Saia antes de todo mundo
IA que prevê quedas
Proteja seu patrimônio automaticamente
```

Preferir:

```text
Ajude a identificar
Pode merecer atenção
Possível impacto
Informação relevante
Fonte original
Acompanhar
Entender
Contextualizar
```

---

# 58. Frases oficiais da marca

Priorizar estas frases.

## Slogan

```text
Você investe. O Sentinela vigia.
```

## Proposta

```text
Saiba quando algo importante acontecer com seus investimentos.
```

## Conceito

```text
Menos notícias. Mais relevância.
```

## Comparativo

```text
Menos barulho. Mais sinal.
```

## Demonstração de valor

```text
36 informações encontradas.
2 merecem sua atenção.
```

Não criar dezenas de slogans concorrentes.

---

# 59. Evitar poluição visual

Regra crítica.

A versão anterior do conceito visual foi considerada boa em:

- imagens;
- frases;
- conteúdo;
- identidade.

Porém havia conteúdo demais por área visível.

A nova versão deve manter o conteúdo, mas distribuí-lo ao longo de uma página maior.

Princípio:

```text
uma ideia principal por bloco visual
```

Não tentar colocar:

```text
headline + 6 cards + mockup + radar + texto longo
```

na mesma dobra.

---

# 60. Verticalidade

A landing deve parecer uma história sendo descoberta com o scroll.

Em mobile, isso é ainda mais importante.

Pense em cada seção como um capítulo:

```text
1. promessa
2. problema
3. valor
4. funcionamento
5. demonstração
6. confiança
7. origem
8. comparação
9. conversão
```

---

# 61. Desktop

No desktop, manter verticalidade.

Não transformar a página em um mosaico compacto.

Pode haver:

- split layouts;
- texto + imagem;
- grids.

Mas preservar:

- altura;
- espaço;
- ritmo.

---

# 62. Design tokens

Centralizar valores.

Exemplo conceitual:

```css
:root {
  --color-bg: #080d16;
  --color-surface: #101824;
  --color-brand: #22d3b6;
  --color-text: #f5f7fa;
  --color-muted: #94a3b8;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;

  --container: 1280px;
}
```

Adaptar ao sistema existente.

Não espalhar valores mágicos.

---

# 63. Bordas e cards

Cards devem ser usados somente quando melhorarem agrupamento.

Estilo:

- fundo translúcido;
- border discreta;
- leve glow;
- radius moderado/grande.

Evitar todo conteúdo dentro de cards.

Muitas seções devem ser apenas:

```text
texto + espaço + imagem
```

---

# 64. Ícones

Usar biblioteca já presente no projeto.

Caso não exista, considerar uma biblioteca leve e consistente.

Não misturar estilos de ícones.

Não usar emoji como ícone visual principal da interface.

Emoji pode aparecer apenas em mensagens humanas de sucesso, como:

```text
Você está na lista 🎉
```

---

# 65. Navegação mobile

Header deve permanecer simples.

Se usar drawer:

- foco controlado;
- ESC fecha;
- click fora fecha;
- aria apropriado;
- scroll lock enquanto aberto.

---

# 66. FAQ mobile

Accordion ocupa largura total.

Separar itens claramente.

Área clicável confortável:

```text
mínimo ~44px de altura
```

---

# 67. Formulário mobile

Campos em coluna.

CTA largura total.

Desktop:

```text
nome | e-mail | CTA
```

pode ser usado se ficar elegante.

Não sacrificar acessibilidade.

---

# 68. Loading

Não bloquear a página toda ao enviar lista.

Loading apenas no botão/form.

Exemplo:

```text
Entrando na lista...
```

---

# 69. Estados vazios

Não são relevantes para a landing, exceto se mockups forem dinâmicos.

Se houver mockup dinâmico sem dados:

```text
Sua carteira está tranquila.
Nenhuma informação relevante identificada.
```

Pode ser inclusive positivo para demonstrar o conceito.

---

# 70. Rotas

Se a landing for a home pública:

```text
/
```

Se o projeto já possuir aplicação autenticada:

avaliar:

```text
/
```

para landing e:

```text
/app
```

para produto.

Não alterar rotas existentes sem analisar impacto.

---

# 71. Legal

Links podem inicialmente apontar para páginas existentes.

Se páginas ainda não existirem:

criar placeholders somente se solicitado.

Não inventar termos legais definitivos.

Os links devem estar previstos:

```text
Privacidade
Termos de uso
```

---

# 72. Disclaimer financeiro

Exibir no footer.

Texto:

```text
O Sentinela é uma ferramenta informativa e não constitui recomendação
de investimento.

Informações geradas ou resumidas por inteligência artificial podem conter
imprecisões.

Consulte as fontes originais e faça sua própria análise.
```

---

# 73. Testes

Testar pelo menos:

## Componentes

```text
WaitlistForm
FAQ
Header mobile
Survey
```

## Fluxos

```text
CTA → scroll formulário
form válido
form inválido
submit
erro
sucesso
survey opcional
FAQ keyboard
```

---

# 74. Testes de responsividade

Verificar manualmente:

```text
320px
360px
390px
430px
768px
1024px
1280px
1440px+
```

Não aceitar overflow horizontal.

---

# 75. Browsers

Garantir funcionamento nas versões modernas de:

```text
Chrome
Edge
Firefox
Safari
Chrome Android
Safari iOS
```

Não depender de recurso experimental essencial.

---

# 76. Checklist visual

Antes de finalizar:

- [ ] página tem bastante espaço vertical;
- [ ] nenhuma seção parece apertada;
- [ ] textos estão legíveis sobre o background;
- [ ] radar não compete com conteúdo;
- [ ] farol não fica cortado de forma estranha;
- [ ] homem sentado aparece em seção apropriada;
- [ ] teal é a cor da marca;
- [ ] vermelho/âmbar são usados apenas para estados;
- [ ] mockups parecem parte da mesma marca;
- [ ] nenhum bloco está visualmente superlotado.

---

# 77. Checklist mobile

- [ ] hero funciona em 360px;
- [ ] CTA aparece claramente;
- [ ] texto não encosta nas laterais;
- [ ] mockups não estouram largura;
- [ ] FAQ funciona por toque;
- [ ] formulário é confortável;
- [ ] botão tem área de toque adequada;
- [ ] menu não cobre conteúdo indevidamente;
- [ ] background não prejudica leitura;
- [ ] não existe overflow horizontal.

---

# 78. Checklist técnico

- [ ] React + padrão atual do projeto;
- [ ] TypeScript se o projeto usar;
- [ ] sem dependências desnecessárias;
- [ ] componentes organizados;
- [ ] conteúdo em HTML;
- [ ] background decorativo;
- [ ] SEO;
- [ ] acessibilidade;
- [ ] performance;
- [ ] loading/error/success;
- [ ] sem segredo no front-end;
- [ ] testes principais;
- [ ] lint limpo;
- [ ] build funcionando.

---

# 79. Não fazer

Não:

- recriar a página inteira como uma única imagem;
- colocar textos dentro da imagem de fundo;
- prometer tempo real;
- prometer ganho financeiro;
- inventar endpoint;
- inventar depoimentos;
- inventar quantidade de usuários;
- inventar parceiros;
- afirmar parceria com B3/CVM/Fundos.NET;
- colocar preço definitivo sem autorização;
- instalar bibliotecas pesadas por estética;
- mudar arquitetura existente sem necessidade;
- criar dezenas de microcomponentes inúteis.

---

# 80. Diretriz para o Codex

Antes de começar a codificar:

1. analisar o projeto;
2. identificar stack;
3. identificar convenções;
4. identificar sistema de tema;
5. identificar componentes reutilizáveis;
6. identificar como assets são tratados;
7. identificar como formulários e API são tratados;
8. verificar se já existe analytics;
9. verificar estrutura de rotas.

Somente depois começar a implementação.

---

# 81. Ordem sugerida de implementação

```text
1. Estrutura / rota
2. Design tokens
3. Background/atmosfera
4. Header
5. Hero
6. Problema
7. Signal
8. Como funciona
9. Produto na prática
10. Recursos
11. Fontes / IA
12. História
13. Comparativo
14. Waitlist
15. Survey
16. FAQ
17. CTA final
18. Footer
19. Responsividade
20. Acessibilidade
21. SEO
22. Performance
23. Testes
```

---

# 82. Definition of Done

A landing está pronta quando:

- reproduz a identidade aprovada do Sentinela;
- funciona muito bem no celular;
- desktop também é elegante;
- mantém a narrativa vertical;
- não parece visualmente poluída;
- usa o background como atmosfera;
- todo conteúdo importante está em HTML;
- CTAs conduzem à lista;
- formulário tem estados completos;
- integração está isolada;
- FAQ está funcional;
- conteúdo não promete o que o MVP não entrega;
- é acessível;
- performática;
- responsiva;
- possui SEO mínimo;
- build e lint passam;
- não possui erros no console;
- não possui overflow horizontal.

---

# 83. Critério final de qualidade

Ao abrir a landing pela primeira vez, uma pessoa deve entender em poucos segundos:

```text
1. O Sentinela monitora investimentos.
2. Ele tenta separar o que importa do excesso de informação.
3. A primeira versão é focada em FIIs.
4. Não é um robô que manda comprar ou vender.
5. Existe uma lista de espera.
```

Ao continuar rolando, ela deve entender:

```text
6. qual problema o produto resolve;
7. como funciona;
8. o que ela receberá;
9. de onde vêm as informações;
10. por que o produto existe;
11. por que confiar;
12. como entrar na lista.
```

---

# 84. Resumo da experiência desejada

A página deve transmitir:

> **calma, vigilância e confiança.**

O usuário não deve sentir:

> "estão tentando me vender uma plataforma financeira cheia de funções."

Ele deve sentir:

> **"Existe algo acompanhando a minha carteira e me ajudando a perceber quando uma informação realmente merece atenção."**

Esse é o conceito central do Sentinela.

---

# 85. Frase-guia para todas as decisões

Quando houver dúvida de UX, UI, conteúdo ou implementação, usar:

> **Menos barulho. Mais sinal.**

Se uma decisão acrescentar ruído sem acrescentar clareza, removê-la.

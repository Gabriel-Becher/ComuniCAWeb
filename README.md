# ComuniCAWeb

Comunicador alternativo e aumentativo (CAA) para navegador, gratuito e de baixo custo. A pessoa escolhe cartões de comunicação, combina palavras ou frases e reproduz a mensagem em voz alta. Feito como MVP demonstrativo para a Atividade da Unidade 4 de Tecnologias Assistivas.

## Como usar

1. Baixe ou clone este repositório.
2. Abra `index.html` em um navegador moderno. Não é necessário instalar dependências nem iniciar servidor.
3. Escolha uma categoria e toque nos cartões para montar a mensagem.
4. Use **Falar mensagem** para reproduzi-la com a voz em português do navegador.
5. Em **Uma frase sua**, crie cartões pessoais. Eles ficam salvos no armazenamento local do navegador.

## Recursos do MVP

- Cartões divididos em essenciais, sentimentos, conversa e escola.
- Composição de mensagens e leitura com síntese de voz (`pt-BR`).
- Cartões personalizados salvos no dispositivo com `localStorage`.
- Alto contraste, tamanho ajustável dos cartões e layout adaptado a celular.
- Navegação por teclado, foco visível, rótulos acessíveis e anúncio das mudanças da mensagem.
- Interface em português, sem conta, servidor ou serviço pago.

## Tecnologias e custo

HTML, CSS e JavaScript sem frameworks. A síntese de voz usa a Web Speech API fornecida pelo navegador e pelo sistema operacional; sua disponibilidade e as vozes instaladas variam entre dispositivos. O app não envia frases para um servidor. O MVP funciona sem conexão depois de aberto, exceto pelas fontes decorativas carregadas do Google Fonts; se não houver rede, usa fontes locais alternativas.

## Acessibilidade e limites

Os cartões usam texto além de emoji, áreas de toque amplas, contraste reforçado opcional, operação por teclado e mensagens de estado anunciadas. Emoji podem ter aparência diferente entre sistemas e não substituem símbolos pictográficos consistentes. Esta primeira versão é uma demonstração acadêmica: categorias, imagens e frases devem ser adaptadas com cada pessoa usuária, sua família e profissionais de apoio. A solução não substitui uma avaliação individual de comunicação alternativa.

## Co-design e ciclo de TA sugerido

- **Avaliação:** conversar com a pessoa e quem a acompanha para entender contextos, vocabulário, acesso motor/visual e barreiras atuais.
- **Prescrição:** definir em conjunto se cartões digitais, voz, categorias e acionamento por toque são adequados.
- **Adaptação:** personalizar vocabulário, ordem, tamanho, cores e forma de acesso, sem presumir necessidades a partir de um diagnóstico.
- **Acompanhamento:** observar tarefas reais, registrar cartões úteis ou ausentes e revisar o recurso com a pessoa usuária.

Para um teste inicial, proponha tarefas consentidas e de baixo risco, como comunicar uma preferência ou pedir ajuda. Não simule uma deficiência nem trate um integrante do grupo como representante de todas as pessoas com deficiência.

## Demonstração de até 5 minutos

1. **Contexto (0:00–1:00):** apresente a barreira de comunicação identificada e como pretende validar a necessidade com participação da pessoa usuária.
2. **Solução (1:00–2:30):** explique o fluxo, as tecnologias abertas e o baixo custo.
3. **Demonstração (2:30–4:00):** selecione cartões, combine uma mensagem, reproduza a voz, crie uma frase e mostre contraste/tamanho ajustável.
4. **Acompanhamento (4:00–5:00):** mostre como coletar feedback e quais adaptações dependem de avaliação individual.

## Próximos passos

- Realizar co-design com pessoas usuárias e ajustar vocabulário/representações.
- Permitir reordenar e remover cartões personalizados.
- Avaliar com tecnologias assistivas e navegadores/dispositivos usados pelo público participante.
- Considerar símbolos pictográficos licenciados e uma opção de instalação offline.

## Privacidade

As frases personalizadas são guardadas apenas no armazenamento local do navegador deste dispositivo. Limpar os dados do site no navegador também apaga essas frases. Não inclua informações pessoais sensíveis em equipamentos compartilhados.

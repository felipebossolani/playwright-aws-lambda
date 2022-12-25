# Playwright executando na AWS Lambda

Prova de conceito para testar o playwright rodando na aws lambda. Utilizei a seguinte lib para ter sucesso: [JupiterOne/playwright-aws-lambda](https://github.com/JupiterOne/playwright-aws-lambda).
Um breve tutorial (em Inglês) pode ser obtido [aqui](https://scrapingant.com/blog/how-to-run-playwright-on-aws-lambda). No tutorial há um segundo método que te da um pouco mais de liberdade pois você controla a versão do chromium e do playwright e não depende de terceiros para manutenções.


# Instalação

Execute o seguinte comando na pasta:

    npm  install playwright-core playwright-aws-lambda --save

Para testes locais, instale o Playwright com o seguinte comando:

    npx playwright install


# Teste local

Para executar um teste local, basta executar o comando abaixo (testado com node 16):

    node test.js

# Publicando na AWS Lambda

A maneira mais rápida de publicar é zipar o conteúdo (com a pasta node_modules) e fazer o upload no seu lambda. 
Há maneiras de fazer por linha de comando ou ferramentas de terceiros mas que não é o foco aqui.

# Gerador de Promissórias

Sistema web para geração de notas promissórias em formato PDF.

## Requisitos

- Node.js 14.x ou superior
- npm 6.x ou superior

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd promissoria
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse o sistema em seu navegador:
```
http://localhost:3000
```

## Como Usar

1. Preencha todos os campos do formulário:
   - Valor da promissória
   - Data de vencimento
   - Data de emissão
   - Nome e CPF do devedor
   - Nome e CPF do credor

2. O PDF da promissória será gerado automaticamente após o preenchimento de todos os campos.

3. Você pode visualizar o PDF diretamente no navegador e imprimi-lo conforme necessário.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- React-PDF 
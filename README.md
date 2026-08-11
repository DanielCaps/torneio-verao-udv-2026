# App Torneio de Verão UDV 2026

Esta pasta tem uma app HTML/CSS/JS pronta a publicar gratuitamente.

## Ficheiros principais

- `index.html`: página pública do torneio
- `admin.html`: painel para inserir resultados e marcadores
- `css/style.css`: identidade visual inspirada no cartaz UDV
- `js/data.js`: dados iniciais do torneio
- `js/app.js`: jogos, classificações, fase final e marcadores
- `js/admin.js`: gravação de resultados
- `google-apps-script/Code.gs`: backend gratuito com Google Sheets

## Publicar apenas como site estático

1. Criar conta em GitHub.
2. Criar repositório público chamado `torneio-verao-udv-2026`.
3. Enviar estes ficheiros para o repositório.
4. Abrir `Settings > Pages`.
5. Em `Build and deployment`, escolher `Deploy from a branch`.
6. Escolher branch `main` e pasta `/root`.
7. Abrir o link gerado pelo GitHub Pages.

Atenção: sem Google Apps Script, os resultados inseridos no admin ficam apenas guardados no dispositivo onde foram inseridos. Com Google Apps Script, a atualização fica disponível para todos. O site usa JSONP para leitura e POST simples para gravar a partir do GitHub Pages.

## Ligar ao Google Sheets para atualizar para todos

1. Criar um Google Sheets novo chamado `Torneio Verão UDV 2026`.
2. Ir a `Extensões > Apps Script`.
3. Apagar o conteúdo padrão e colar o ficheiro `google-apps-script/Code.gs`.
4. Guardar.
5. Na função selecionada, escolher `setupTournament` e clicar em Run.
6. Autorizar permissões.
7. Ir a `Deploy > New deployment > Web app`.
8. Em `Execute as`, escolher `Me`.
9. Em `Who has access`, escolher `Anyone`.
10. Copiar o URL do Web App.
11. Abrir `js/config.js` e colar o URL em `API_URL`.
12. A chave admin fica guardada no Apps Script. Por defeito é `muda-esta-chave-udv-2026`; podes alterá-la nas Propriedades do Script.
13. No `admin.html`, escreve essa chave quando fores guardar resultados.
14. Voltar a enviar os ficheiros atualizados para GitHub.

## Inserir marcadores

No `admin.html`, usa uma linha por marcador:

```text
Nome do Jogador;NOME DA EQUIPA;1
Outro Jogador;NOME DA EQUIPA;2
```

## Notas

- Os jogos foram pré-carregados a partir do ficheiro enviado.
- Corrigi nomes e grupos para ficarem coerentes com a estrutura Grupo A e Grupo B.
- Se precisares de alterar equipas, datas ou jogos, podes editar `js/data.js` ou a folha `Matches` no Google Sheets.


## Atualização desta versão

- Adicionada a imagem/logo do Torneio de Verão ao cabeçalho.
- Adicionada classificação para o quadro feminino.
- Mantida tipografia clean: Montserrat para títulos e Inter para texto.
- A classificação feminina usa os jogos do grupo F.

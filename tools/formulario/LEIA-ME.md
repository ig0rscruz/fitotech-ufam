# Ferramentas do Formulário de Fitoterápicos

Scripts usados para gerar `app/js/formulario.js` a partir do PDF do
*Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed.* (Anvisa, 2026).
Precisam de Python com `pymupdf` e de Node.js.

1. Extrair as monografias do PDF (posição de cada linha, para separar as tabelas):
   `python extrair_formulario.py "Formulário de Fitoterápicos.pdf" ff.json`
2. Gerar o arquivo do app (riscos, idade, tempo de uso, calculadora, fotos):
   `python gerar_formulario_js.py ff.json mem_ids.json ../../app/js/formulario.js ../../app/assets/img/especies/credits.json`
   (`mem_ids.json` e `mem_names.json`: ids e nomes das espécies do Memento, na mesma pasta)
3. Baixar fotos da Wikimedia Commons para espécies novas:
   `node baixar_fotos.js ../..`

Os alertas de risco das espécies novas são extraídos das ADVERTÊNCIAS do Formulário por regras
de palavras-chave. Conferir sempre com a monografia antes de usar clinicamente.

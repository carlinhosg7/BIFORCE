# BIForce V6

Nova versão visual da BIForce com linguagem mais corporativa, clean e enterprise.

## Rodar localmente

```bat
cd /d D:\BIFORCE\V6
npm install
npm run dev
```

Abra:
http://localhost:3000

## Gerar versão para Locaweb / hospedagem estática

```bat
npm run build
```

Será criada a pasta:

`D:\BIFORCE\V6\out`

Publique **somente o conteúdo da pasta `out`** dentro de `public_html`.

Não publique `node_modules`, `app`, `components`, `.next` ou os arquivos de desenvolvimento.

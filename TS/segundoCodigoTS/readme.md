# criar arquivo de configuração do ts
npx tsc --init

# configurações adcionais no arquivo tsconfig.json

"target": "es6";
"module": "commonjs";
"sourceMap": true;
"outDir": "./build";
"removeComments": ld";
"rootDir": "./src;
"noImplicityAny": true;

# substituir "test..." no package.json por
"start": "npx tsc && node ./build/nomeArquivo.js"

# para executar no terminal
npm start



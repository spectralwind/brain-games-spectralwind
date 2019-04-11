install:
	npm install

parity:
	npx babel-node src/bin/brain-even.js

calculator:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish

lint:
	npx eslint .
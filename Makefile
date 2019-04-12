install:
	npm install

parity:
	npx babel-node src/bin/brain-even.js

calculator:
	npx babel-node src/bin/brain-calc.js

gcd:
	npx babel-node src/bin/brain-gcd.js

progression:
	npx babel-node src/bin/brain-progression.js

prime:
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish

lint:
	npx eslint .
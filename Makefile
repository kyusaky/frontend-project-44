install:
	npm ci
	chmod +x bin/brain-games.js bin/brain-even.js bin/brain-calc.js bin/brain-gcd.js

brain-games:
	node bin/brain-games.js 

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

link: 
	npm link

lint:
	npx eslint --fix
TESTS = $(shell find test -type f -name "*.js")
REPORTER = spec
TIMEOUT = 10000
MOCHA_OPTS =

install:
	@npm install

lint: install
	@npm run lint

build:
	@npm run build

test: install lint
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@NODE_ENV=test node \
		./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha \
		-- -u exports \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-travis:
	@NODE_ENV=test node \
		./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-all: test test-cov 

.PHONY: test-cov test-travis test-all build

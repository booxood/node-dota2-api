TESTS = $(shell find test -type f -name "*.js")
REPORTER = spec
TIMEOUT = 10000
MOCHA_OPTS =

install:
	@npm install

lint:
	@npm run lint

build:
	@npm run build

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@rm -f coverage.html
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=html-cov > coverage.html
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=travis-cov
	@ls -lh coverage.html

test-all: lint build test test-cov

.PHONY: test test-cov test-all

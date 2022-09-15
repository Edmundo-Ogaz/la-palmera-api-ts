run:
	npm run start

run-dev:
	npm run start:dev
 
generate-module:
	nest g module $(filter-out $@,$(MAKECMDGOALS))

generate-service:
	nest g service $(filter-out $@,$(MAKECMDGOALS))

generate-controller:
	nest g controller $(filter-out $@,$(MAKECMDGOALS))

test-unit:
	npm run test $(filter-out $@,$(MAKECMDGOALS))

test-e2e:
	npm run test:e2e $(filter-out $@,$(MAKECMDGOALS))
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


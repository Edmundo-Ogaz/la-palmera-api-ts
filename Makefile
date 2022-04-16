generate-module:
	nest g module $(filter-out $@,$(MAKECMDGOALS))

generate-service:
	nest g service $(filter-out $@,$(MAKECMDGOALS))


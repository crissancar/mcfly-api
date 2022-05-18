.PHONY = build clean default deps test start_database start-mcfly-backend test

# Shell to use for running scripts
SHELL := $(shell which bash)
IMAGE_NAME := mcfly/backend
SERVICE_NAME := mcfly-backend
MCFLY_APP_NAME := mcfly

default: build

# Build image
build:
	docker build -t $(IMAGE_NAME):dev .

# Run tests
test: build
	docker-compose run --rm $(SERVICE_NAME) bash -c 'npm run prebuild && npm run build && npm run test'

# Start mcfly backend app
start-mcfly-backend: build
	docker-compose up $(MCFLY_APP_NAME)-backend && docker-compose down

# Clean containers
clean:
	docker-compose down --rmi local --volumes --remove-orphans

# Start databases containers in background
start_database:
	docker-compose up -d mongo
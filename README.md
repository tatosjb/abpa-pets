# README

## Server
Services will be started:

* Puma;

## Setup Docker

You need to have docker installed (Tested with version 17.05 of Docker).

        $ docker-compose build
        $ docker-compose up

### Tests

        $ RAILS_ENV=test docker-compose run --rm web rspec

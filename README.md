# README

## Server
Services will be started:

* Puma;

## Setup Docker

You need to have docker installed (Tested with version 17.05 of Docker).

        $ docker-compose build
        $ docker-compose up

### Update CEST
This step is for update the CEST, according of the "Convênios de ICMS" from the government page publication.

Download the updated csv CEST file.
Upload it to portal.

Go to heroku bash , on https://dashboard.heroku.com/apps/isa-ibpt?web-console=isa-ibpt

Put the command on the input rake IsaErp:import_ibpt url='**updated csv file download url from portal**', changing the download url to the copied url from portal.

### Tests

        $ RAILS_ENV=test docker-compose run --rm web rspec

FROM wanderms25/metrus-front

ENV app /sga

WORKDIR $app

VOLUME /app/node_modules

ADD . $app

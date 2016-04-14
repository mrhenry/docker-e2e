FROM node:5

ADD package.json /package.json
RUN npm install --save-dev \
  protractor \
  protractor-cucumber-framework \
  mocha \
  chai \
  chai-as-promised \
  cucumber \
  cucumber-chai-wd

ENV PATH=/node_modules/.bin:$PATH
ADD config  /config
ADD support /support
ADD bin/*   /bin

ENTRYPOINT ["/bin/bash", "-c"]

FROM node:9

# Cleanup yarn
RUN rm /usr/local/bin/yarn && rm /usr/local/bin/yarnpkg
RUN rm -rf /opt/yarn
# Install yarn
RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

ADD yarn.lock /yarn.lock
ADD package.json /package.json
ADD .yarnrc /.yarnrc

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/docker/docker-run.sh"]
CMD ["start"]
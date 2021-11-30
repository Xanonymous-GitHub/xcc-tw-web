FROM node:alpine

ARG PORT=5000
ARG REPO=https://github.com/Xanonymous-GitHub/xcc-tw-web.git

WORKDIR /homepage

RUN apk update \
    && apk add git jq \
    && git clone "$REPO" /homepage \
    && rm -rf /homepage/.git/* \
    && yarn \
    && yarn build \
    && rm -rf node_modules

EXPOSE $PORT
ENV PORT=$PORT
CMD ["node", ".output/server/index.mjs"]

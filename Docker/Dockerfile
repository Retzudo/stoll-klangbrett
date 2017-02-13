FROM alpine:edge
RUN apk add --no-cache wget git ca-certificates
RUN wget "https://caddyserver.com/download/build?os=linux&arch=amd64&features=git" -O caddy.tar.gz
RUN tar xf caddy.tar.gz && rm caddy.tar.gz && cp caddy /usr/bin/caddy
ENTRYPOINT ["caddy"]
EXPOSE 443

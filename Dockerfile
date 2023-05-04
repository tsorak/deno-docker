FROM denoland/deno:1.33.1

EXPOSE 8080

WORKDIR /app
RUN chown -R deno:deno /app

USER deno

COPY . .

RUN deno cache main.ts

CMD ["task", "start"]

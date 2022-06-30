# backend

```bash
npm i -g typeorm
```

```bash
docker run --name postgres \
    -p 5432:5432 \
    -e POSTGRES_DB=q-and-a \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -d postgres

docker stop postgres
docker rm postgres
```
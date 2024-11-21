# NodeJS App in Docker

- Create Docker Image

```bash
  docker build -t node-express-app:latest .
```

- Test image locally

```bash
   docker run -d --name simple-nodejs -p 3000:3200 -d node-express-app:latest
```

- Tag properly our image

```bash
  docker tag node-express-app andriizilnyk/simple-express-app:latest
```

- Login into docker hub and push

```bash
  docker push andriizilnyk/simple-express-app:latest
```

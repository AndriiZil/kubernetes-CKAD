# Secrets

- Anyone able to create pods/deployments in the same namespace using secrets
- Secrets are not Encrypted/. Only encoded

```bash
  kubectl create secret generic
    <secret-name> --from-literal=<key>=<value>

    app-secret --from-literal=DB_HOST=mysql
```

## Encode Secrets

```bash
  echo -n "mysql" | base64

  bXlzcWw=
```

```bash
  echo -n "root" | base64

  cm9vdA==
```

```bash
  echo -n "password" | base64

  cGFzc3dvcmQ=
```

## Get Secrets

```bash
  kubectl get secrets
```

## Describe Secrets

```bash
  kubectl describe secrets
```

## Secrets decoding

```bash
  echo -n "cGFzc3dvcmQ=" | base64 --decode

  password%
```

## Create Secrets

```bash
  k create -f pod-definition.yaml

  k create -f secret-data.yaml
```

- Another way

```bash
   k create secret generic db-secret --from-literal=DB_Host=sql01 --from-literal=DB_User=root --from-literal=DB_Password=password123

   k describe secret db-secret
```

# Secrets

- Anyone able to create pods/deployments in the same namespace using secrets

```bash
  kubectl create secret generic
    <secret-name> --from-literal=<key>=<value>

    app-secret --from-literal=DB_HOST=mysql
```

- Get Secrets

```bash
  kubectl get secrets
```

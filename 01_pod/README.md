# YAML

- `pod-definition.yaml`

```
  apiVersion:
  kind:
  metadata:

  spec:
```

- Create a Pod

```bash
   kubectl create -f pod-definition.yaml

   kubectl delete -f pod-definition.yaml
```

- Create NGINX Pod

```bash
   kubectl run nginx --image=nginx

   kubectl describe pod nginx

   kubectl get pods -o wide
```

- Create Pod

```bash
  kubectl run redis --image=redis123 --dry-run=client -o yaml > redis.yaml

  kubectl create -f redis.yaml
```

- Output

```bash
  NAME    READY   STATUS         RESTARTS   AGE
  nginx   1/1     Running        0          11m
  redis   0/1     ErrImagePull   0          14s
```

- Exec into the Pod

```bash
  kubectl exec -it <pod-name> -- /bin/bash

  kubectl exec -it <pod-name> -- /bin/sh
```

- Exec with Namespace

```bash
  kubectl exec -it <pod-name> -n <namespace> -- /bin/bash
```

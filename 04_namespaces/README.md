# Namespaces

- Pow without namespace will be created in `default` namespace.

### Default Namespaces created by kubernetes

- `kube-system`
- `kube-public`
- `default`

```bash
  kubectl get namespaces

  OR

  kubectl get ns

  get pods -n kubernetes-dashboard
```

- Apply new Namespace

```bash
  kubectl apply -f namespace.yaml

  OR

  kubectl create namespace <my-namespace>
```

- Create a Pod in the specific workspace

```bash
  kubectl apply -f pod.yaml

  kubectl get pods -n course-test
```

- All Pods in all Namespaces

```bash
  kubectl get pods --all-namespaces
```

## Namespace communication

- Inside the namespace

```bash
  Services = web-pod, db-service, web-deployment

  mysql.connect("db-service")
```

- Outside namespace - different namespace

```bash
   mysql.connect("db-service.dev.svc.cluster.local")

   SO

   mysql.connect("<Service Name>.<Namespace>.<Service>.<Domain>")
```

### Switching between namespaces

```bash
  kubectl config set-context $(kubectl config current-context) --namespace=dev
```

### Resource quota

```bash
  kubectl create -f compute-quota.yaml
```

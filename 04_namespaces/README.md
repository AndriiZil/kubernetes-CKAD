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

### Practice

- Create NGINX Pod

```bash
  kubectl run nginx-pod --image=nginx:alpine
```

- Create Redis Pod

```bash
  kubectl run redis --image=redis:alpine --labels="tier=db"
```

- Service

```bash
  kubectl expose pod redis --port 6379 --name redis-service

  kubectl get svc redis-service

  kubectl describe svc redis-service
```

- Create Deployment

```bash
  kubectl create deployment webapp --image=andriizilnyk/simple-express-app --replicas=3
```

- Create NGINX Pod and expose it

```bash
  kubectl run custom-enginx --image=nginx --port=8080
```

- Create new namespace dev-ns

```bash
  kubectl create namespace dev-ns
```

- Create new deployment called redis-deploy in dev-ns namespace

```bash
  kubectl create deployment redis-deploy --image=redis --replicas=2 -n dev-ns
```

- Create httpd

```bash
  kubectl run httpd --image=httpd:alpine --port=80 --expose=true
```

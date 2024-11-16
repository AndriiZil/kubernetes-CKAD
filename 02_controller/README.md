# Replication

```bash
  kubectl create -f rc-definition.yaml
```

- Replicaset

```bash
  selector:
    matchLabels:
      tier: front-end 
```

```bash
  metadata:
    name: myapp-pod
    labels:
    tier: front-end
```

- Update replicas
```bash
  kubectl get replicaset
  
  kubectl create -f replicaset-definition.yaml
  
  kubectl describe replicaset myapp-replicaset
  
  kubectl replace -f replicaset-definition.yaml
  
  kubectl scale --replicas=6 -f replicaset-definition.yaml
```

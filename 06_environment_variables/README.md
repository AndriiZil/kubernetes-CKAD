# Environment Variables

## ConfigMaps

- List

```bash
  kubectl get configmaps

  kubectl get cm

  kubectl describe cm app-config
```

```bash
  kubectl create configmap
    <config-name> --from-literal=<key>=<value>

    app-config --from-literal=APP_COLOR=blue
```

```bash
  kubectl create configmap
    <config-name> --from-file=<path-to-file>

    app-config --from-file=app_config_properties
```

```bash
  kubectl apply -f config-map.yaml
```

- Check ENV

```bash
  kubectl exec -it simple-pod -- printenv
```

# Deployment

- `-o json`
- `-o name`
- `-o wide`
- `-o yaml`

- Example

```bash
  kubectl create namespace test-123 --dry-run -o json

   {
    "kind": "Namespace",
    "apiVersion": "v1",
    "metadata": {
        "name": "test-123",
        "creationTimestamp": null
    },
    "spec": {},
    "status": {}
  }
```

- Example 2

```bash
  kubectl create namespace test-123 --dry-run -o yaml

  apiVersion: v1
  kind: Namespace
  metadata:
    creationTimestamp: null
    name: test-123
  spec: {}
  status: {}
```

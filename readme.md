# Fn(io)

**Functio** is a functions and automation platform written in JavaScript.

### Testing

You can test Functio via `docker`/`podman` with the arguments: `run --rm --name fnio -it -p 8069:8069 ghcr.io/thedevtop/functio:main`.

### Example: Module

```javascript

exports.Name = "hello";
exports.Func = (...args) => `Hello, ${args[0]}!`; 

```

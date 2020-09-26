# Basic STL Generator

Util functions that generate ASCII solid strings.

![img2css](./readme.png)

## Getting Started

```
import { STLCube } from "basic-stl-generator";

console.log(`
	${STLCube(0,0,0)}
	${STLCube(1,1,1)}
	${STLCube(2,2,2)}
`)
```

#### Exports

`STLCube(x, y, z)`

Returns a CUBE STL source for a cube using 12 triangular faces.

## More info.

- [STLA Files - ASCII stereolithography files](https://people.sc.fsu.edu/~jburkardt/data/stla/stla.html).

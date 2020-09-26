// utils
function n(number) {
  return Number(number).toFixed(1);
}

export function STLCube(x = 0, y = 0, z = 0) {
  return `
solid BASICSTLCUBE${x}Y${y}Z${z}
  facet normal  0.0   0.0  -1.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
    endloop
  endfacet
  facet normal  0.0   0.0  -1.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
    endloop
  endfacet
  facet normal -1.0   0.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
    endloop
  endfacet
  facet normal -1.0   0.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0   1.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
    endloop
  endfacet
  facet normal  0.0   1.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  1.0   0.0   0.0
    outer loop
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  1.0   0.0   0.0
    outer loop
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  -1.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  -1.0   0.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 0.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0   0.0   1.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0   0.0   1.0
    outer loop
      vertex    ${n(x + 0.0)}   ${n(y + 0.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 1.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
      vertex    ${n(x + 0.0)}   ${n(y + 1.0)}   ${n(z + 1.0)}
    endloop
  endfacet
endsolid BASICSTLCUBE${x}Y${y}Z${z}
`;
}

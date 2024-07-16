'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, Card } from '@mui/material';

import Circle from '@/images/circle.png';
import Square from '@/images/square.png';
import Triangle from '@/images/triangle.png';
import Tetrahedron from '@/images/tetrahedron.png';
import Sphere from '@/images/sphere.png';
import Cube from '@/images/cube.png';
import Cylinder from '@/images/cylinder.png';
import Cone from '@/images/cone.png';
import TriangularPrism from '@/images/triangular_prism.png';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ShapeButton = ({ shape, currentShape, onClick, icon, label }) => (
  <Button
    variant={currentShape === shape ? 'contained' : 'outlined'}
    onClick={() => onClick(shape)}
  >
    <Box
      display="flex"
      gap="0.25rem"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Image
        src={icon}
        alt={label} 
        width={20} 
        height={20} 
        style={
          {
            filter: currentShape === shape ? 'invert(0)' : 'invert(0.3)'
          }
        } 
      />
      {label}
    </Box>
  </Button>
);

const ShapeSelector = ({ shapes, currentShapes, setShape }) => (
  <Box
    display="flex"
    gap="0.5rem"
  >
    {shapes.map((shape, index) => (
      <Box 
        key={index} 
        display="flex" 
        gap="0.25rem" 
        flexDirection="column"
      >
        {shape.options.map((option, i) => (
          <ShapeButton
            key={i}
            shape={option.value}
            currentShape={currentShapes[index]}
            onClick={(value) => setShape(index, value)}
            icon={option.icon}
            label={option.label}
          />
        ))}
      </Box>
    ))}
  </Box>
);

export default function Home() {
  const [insideShapes, setInsideShapes] = useState(['c', 't', 's']);
  const [outsideShapes, setOutsideShapes] = useState(['cy', 'py', 'cy']);

  useEffect(() => {
    console.log('Inside Shapes:', insideShapes);
    console.log('Outside Shapes:', outsideShapes);
  }, [insideShapes, outsideShapes]);

  const handleShapeChange = (setter) => (index, value) => {
    setter((prev) => prev.map((shape, i) => (i === index ? value : shape)));
  };

  const insideShapeOptions = [
    { value: 'c', label: 'Circle', icon: Circle },
    { value: 't', label: 'Triangle', icon: Triangle },
    { value: 's', label: 'Square', icon: Square },
  ];

  const outsideShapeOptions = [
    { value: 'sp', label: 'Sphere', icon: Sphere },
    { value: 'cy', label: 'Cylinder', icon: Cylinder },
    { value: 'co', label: 'Cone', icon: Cone },
    { value: 'cu', label: 'Cube', icon: Cube },
    { value: 'pr', label: 'Prism', icon: TriangularPrism },
    { value: 'py', label: 'Pyramid', icon: Tetrahedron },
  ];

  return (
    <Container maxWidth="xl">
      <Header />
      <Box 
        sx={
          {
            my: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }
        }
      >
        <Typography 
          variant="h3" 
          component="h1" 
          sx={
            { 
              mt: 5, 
              mb: 1 
            }
          }
        >
          Outside Solver
        </Typography>
        <Card 
          sx={
            { 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.1rem', 
              alignItems: 'center', 
              minWidth: '350px' 
            }
          }
        >
          <Typography 
            variant="h5" 
            component="h1" 
            sx={{ my: 1 }}
          >
            Input Inside Shapes
          </Typography>
          <ShapeSelector 
            shapes={Array(3).fill({ options: insideShapeOptions })} 
            currentShapes={insideShapes} 
            setShape={handleShapeChange(setInsideShapes)} 
          />
          <Typography 
            variant="h5" 
            component="h1" 
            sx={{ my: 1 }}
          >
            Input Outside Shapes
          </Typography>
          <ShapeSelector 
            shapes={Array(3).fill({ options: outsideShapeOptions })} 
            currentShapes={outsideShapes} 
            setShape={handleShapeChange(setOutsideShapes)} 
          />
          <Typography 
            variant="h5" 
            sx={{ my: 1 }}
          >
            Swap Order
          </Typography>
          <Typography 
            variant="h5">
            {calculateResult(...insideShapes, ...outsideShapes).map((instruction, index) => (
              <div key={index}>
                {instruction}
              </div>
            ))}
          </Typography>
        </Card>
        <Footer />
      </Box>
    </Container>
  );
}

function validFirstInput(input) {
  let trimmedInput = input.map(e => e.trim().slice(0, 1));
  if (trimmedInput.length !== 2 && trimmedInput.length !== 3) {
    throw new Error("Invalid input length");
  }
  if (trimmedInput.length === 2) {
    for (let symbol of ["c", "s", "t"]) {
      if (!trimmedInput.includes(symbol)) {
        trimmedInput.push(symbol);
        break;
      }
    }
  }
  return trimmedInput;
}

function validSecondInput(input) {
  const validSymbols = ["sp", "cy", "co", "cu", "pr", "py"];
  let trimmedInput = input.map(e => e.trim().slice(0, 2));
  for (let symbol of trimmedInput) {
    if (!validSymbols.includes(symbol)) {
      throw new Error("Invalid symbol");
    }
  }
  return trimmedInput;
}

function swap(shapes, index1, index2, shape1, shape2) {
  if (!shapes[index1].includes(shape1) || !shapes[index2].includes(shape2) || shape1 === shape2 || index1 === index2) {
    throw new Error("Invalid swap parameters");
  }
  shapes[index1] = shapes[index1].filter((e, i, arr) => e !== shape1 || i !== arr.indexOf(shape1));
  shapes[index1].push(shape2);
  shapes[index2] = shapes[index2].filter((e, i, arr) => e !== shape2 || i !== arr.indexOf(shape2));
  shapes[index2].push(shape1);
  return shapes;
}

function generateSuccessors(state) {
  const swaps = [
    ["c", "t"], ["c", "s"], ["t", "c"], ["s", "c"], ["s", "t"], ["t", "s"]
  ];
  const positions = ["Left", "Mid", "Right"];
  const shapes = { s: "Square", c: "Circle", t: "Triangle" };

  let successors = [];
  let descriptions = [];

  for (let [index1, index2] of [[0, 1], [0, 2], [1, 2]]) {
    for (let [shape1, shape2] of swaps) {
      try {
        let newState = swap(JSON.parse(JSON.stringify(state)), index1, index2, shape1, shape2);
        let description = `${positions[index1]} ${shapes[shape1]} ↔ ${positions[index2]} ${shapes[shape2]}`;
        successors.push(newState);
        descriptions.push(description);
      } catch (error) {
        continue;
      }
    }
  }
  return [successors, descriptions];
}

function nodeSuccess(node1, node2) {
  if (node1.length !== node2.length) return false;
  for (let i = 0; i < node1.length; i++) {
    if (!areSetsEqual(new Set(node1[i]), new Set(node2[i]))) {
      return false;
    }
  }
  return true;
}

function areSetsEqual(set1, set2) {
  if (set1.size !== set2.size) return false;
  for (let elem of set1) {
    if (!set2.has(elem)) return false;
  }
  return true;
}

function generateSwaps(initial, goal) {
  function bfs(initialState, goalState) {
    let queue = [[initialState, []]];
    let visited = new Set();

    while (queue.length > 0) {
      let [currentState, path] = queue.shift();
      if (nodeSuccess(currentState, goalState)) return [currentState, path];
      let serializedState = JSON.stringify(currentState.map(arr => arr.join("")));
      if (visited.has(serializedState)) continue;
      visited.add(serializedState);

      let [successors, descriptions] = generateSuccessors(currentState);
      successors.forEach((state, index) => {
        queue.push([state, path.concat([descriptions[index]])]);
      });
    }
    return [null, []];
  }

  let [resultNode, resultInstructions] = bfs(initial, goal);
  return [resultNode, resultInstructions];
}

function createOrder(innerShapes, outerShapes) {
  const shapeMap = {
    sp: ["c", "c"], cy: ["c", "s"], co: ["c", "t"], cu: ["s", "s"],
    pr: ["s", "t"], py: ["t", "t"]
  };
  let initialShapes = outerShapes.map(symbol => shapeMap[symbol]);
  if (initialShapes.length === 2) {
    let shapeCounts = { c: 0, s: 0, t: 0 };
    initialShapes.forEach(pair => {
      let pairString = Array.isArray(pair) ? pair.join("") : pair;
      ["c", "s", "t"].forEach(shape => {
        shapeCounts[shape] += (pairString.match(new RegExp(shape, "g")) || []).length;
      });
    });
    let missingShapes = [];
    Object.keys(shapeCounts).forEach(shape => {
      for (let i = 0; i < 2 - shapeCounts[shape]; i++) {
        missingShapes.push(shape);
      }
    });
    initialShapes.push(missingShapes);
  }

  let targetShapes = innerShapes.map(shape => {
    switch (shape) {
      case "c": return ["s", "t"];
      case "s": return ["c", "t"];
      case "t": return ["c", "s"];
      default: throw new Error("Invalid shape");
    }
  });

  let swaps = generateSwaps(initialShapes, targetShapes);
  if (swaps[0] === null) {
    return ["Invalid set of shapes!"];
  }
  else if (swaps[1].length === 0) {
    return ["Shapes are solved!"];
  }
  else {
    return swaps[1];
  }
}

function calculateResult(Inside1, Inside2, Inside3, Outside1, Outside2, Outside3) {
  const shapeMapping = {
    circleShape: "c", triangleShape: "t", squareShape: "s", sphereShape: "sp",
    pyramidShape: "py", cubeShape: "cu", coneShape: "co", cylinderShape: "cy", prismShape: "pr"
  };

  let innerShapes = [Inside1, Inside2, Inside3];
  innerShapes = validFirstInput(innerShapes);

  let outerShapes = [Outside1, Outside2, Outside3];
  outerShapes = validSecondInput(outerShapes);

  let result = createOrder(innerShapes, outerShapes);
  return result;
}
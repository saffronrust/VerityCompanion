'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Circle from '@/images/circle.png';
import Square from '@/images/square.png';
import Triangle from '@/images/triangle.png';

import Tetrahedron from '@/images/tetrahedron.png';
import Sphere from '@/images/sphere.png';
import Cube from '@/images/cube.png';
import Cylinder from '@/images/cylinder.png';
import Cone from '@/images/cone.png';
import TriangularPrism from '@/images/triangular_prism.png';

import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

export default function Home() {

  const [Inside1, setInside1] = useState("c")
  const [Inside2, setInside2] = useState("t")
  const [Inside3, setInside3] = useState("s")

  const [Outside1, setOutside1] = useState("cy")
  const [Outside2, setOutside2] = useState("py")
  const [Outside3, setOutside3] = useState("cy")

  const [InsideArray, setInsideArray] = useState([Inside1, Inside2, Inside3])


  useEffect(() => {
    console.log("Inside1 is ", Inside1)
    console.log("Inside2 is ", Inside2)
    console.log("Inside3 is ", Inside3)
    console.log("Outside1 is ", Outside1)
    console.log("Outside2 is ", Outside2)
    console.log("Outside3 is ", Outside3)
  }, [Inside1, Inside2, Inside3, Outside1, Outside2, Outside3]);

  return (
    <Container maxWidth = "xl">
      <Header />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ my: 5 }}>
          Verity Solver
        </Typography>

        <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
          minWidth: '350px',
        }}
        >
          {/* this is for inside shape input */}
          <Typography variant="h5" component="h1" sx={{ my: 2 }}>
            Input Inside Shapes
          </Typography>
          <Box display="flex" gap="0.5rem">
            {/* start of first inside column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={1}
                variant= {Inside1 === "c" ? "contained" : "outlined"}
                onClick={() => {setInside1("c")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Circle}
                    alt="Circle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside1 === "c" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Circle
                </Box>
              </Button>
              <Button
                key={2}
                variant= {Inside1 === "t" ? "contained" : "outlined"}
                onClick={() => {setInside1("t")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Triangle}
                    alt="Triangle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside1 === "t" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Triangle
                </Box>
              </Button>
              <Button
                key={3}
                variant= {Inside1 === "s" ? "contained" : "outlined"}
                onClick={() => {setInside1("s")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Square}
                    alt="Square"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside1 === "s" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Square
                </Box>
              </Button>
            </Box>
            {/* start of second inside column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={4}
                variant= {Inside2 === "c" ? "contained" : "outlined"}
                onClick={() => {setInside2("c")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Circle}
                    alt="Circle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside2 === "c" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Circle
                </Box>
              </Button>
              <Button
                key={5}
                variant= {Inside2 === "t" ? "contained" : "outlined"}
                onClick={() => {setInside2("t")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Triangle}
                    alt="Triangle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside2 === "t" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Triangle
                </Box>
              </Button>
              <Button
                key={6}
                variant= {Inside2 === "s" ? "contained" : "outlined"}
                onClick={() => {setInside2("s")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Square}
                    alt="Square"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside2 === "s" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Square
                </Box>
              </Button>
            </Box>
            {/* start of third inside column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={7}
                variant= {Inside3 === "c" ? "contained" : "outlined"}
                onClick={() => {setInside3("c")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Circle}
                    alt="Circle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside3 === "c" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Circle
                </Box>
              </Button>
              <Button
                key={8}
                variant= {Inside3 === "t" ? "contained" : "outlined"}
                onClick={() => {setInside3("t")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Triangle}
                    alt="Triangle"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside3 === "t" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Triangle
                </Box>
              </Button>
              <Button
                key={9}
                variant= {Inside3 === "s" ? "contained" : "outlined"}
                onClick={() => {setInside3("s")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Square}
                    alt="Square"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Inside3 === "s" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Square
                </Box>
              </Button>
            </Box>
          </Box>

          <Typography variant="h5" component="h1" sx={{ my: 2 }}>
            Input Outside Shapes
          </Typography>

          <Box display="flex" gap="0.5rem">
            {/* start of first outside column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={10}
                variant= {Outside1 === "sp" ? "contained" : "outlined"}
                onClick={() => {setOutside1("sp")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Sphere}
                    alt="Sphere"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "sp" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Sphere
                </Box>
              </Button>
              <Button
                key={11}
                variant= {Outside1 === "cu" ? "contained" : "outlined"}
                onClick={() => {setOutside1("cu")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cube}
                    alt="Cube"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "cu" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cube
                </Box>
              </Button>
              <Button
                key={12}
                variant= {Outside1 === "py" ? "contained" : "outlined"}
                onClick={() => {setOutside1("py")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Tetrahedron}
                    alt="Tetrahedron"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "py" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Pyramid
                </Box>
              </Button>
              <Button
                key={13}
                variant= {Outside1 === "cy" ? "contained" : "outlined"}
                onClick={() => {setOutside1("cy")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cylinder}
                    alt="Cylinder"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "cy" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cylinder
                </Box>
              </Button>
              <Button
                key={14}
                variant= {Outside1 === "co" ? "contained" : "outlined"}
                onClick={() => {setOutside1("co")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cone}
                    alt="Cone"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "co" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cone
                </Box>
              </Button>
              <Button
                key={15}
                variant= {Outside1 === "pr" ? "contained" : "outlined"}
                onClick={() => {setOutside1("pr")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={TriangularPrism}
                    alt="TriangularPrism"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside1 === "pr" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Prism
                </Box>
              </Button>
            </Box>
            {/* start of second column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={16}
                variant= {Outside2 === "sp" ? "contained" : "outlined"}
                onClick={() => {setOutside2("sp")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Sphere}
                    alt="Sphere"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "sp" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Sphere
                </Box>
              </Button>
              <Button
                key={17}
                variant= {Outside2 === "cu" ? "contained" : "outlined"}
                onClick={() => {setOutside2("cu")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cube}
                    alt="Cube"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "cu" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cube
                </Box>
              </Button>
              <Button
                key={18}
                variant= {Outside2 === "py" ? "contained" : "outlined"}
                onClick={() => {setOutside2("py")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Tetrahedron}
                    alt="Tetrahedron"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "py" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Pyramid
                </Box>
              </Button>
              <Button
                key={19}
                variant= {Outside2 === "cy" ? "contained" : "outlined"}
                onClick={() => {setOutside2("cy")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cylinder}
                    alt="Cylinder"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "cy" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cylinder
                </Box>
              </Button>
              <Button
                key={20}
                variant= {Outside2 === "co" ? "contained" : "outlined"}
                onClick={() => {setOutside2("co")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cone}
                    alt="Cone"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "co" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cone
                </Box>
              </Button>
              <Button
                key={21}
                variant= {Outside2 === "pr" ? "contained" : "outlined"}
                onClick={() => {setOutside2("pr")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={TriangularPrism}
                    alt="TriangularPrism"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside2 === "pr" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Prism
                </Box>
              </Button>
            </Box>
            {/* start of third column */}
            <Box display="flex" gap="0.25rem" flexDirection="column">
              <Button
                key={22}
                variant= {Outside3 === "sp" ? "contained" : "outlined"}
                onClick={() => {setOutside3("sp")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Sphere}
                    alt="Sphere"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "sp" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Sphere
                </Box>
              </Button>
              <Button
                key={23}
                variant= {Outside3 === "cu" ? "contained" : "outlined"}
                onClick={() => {setOutside3("cu")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cube}
                    alt="Cube"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "cu" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cube
                </Box>
              </Button>
              <Button
                key={24}
                variant= {Outside3 === "py" ? "contained" : "outlined"}
                onClick={() => {setOutside3("py")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Tetrahedron}
                    alt="Tetrahedron"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "py" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Pyramid
                </Box>
              </Button>
              <Button
                key={25}
                variant= {Outside3 === "cy" ? "contained" : "outlined"}
                onClick={() => {setOutside3("cy")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cylinder}
                    alt="Cylinder"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "cy" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cylinder
                </Box>
              </Button>
              <Button
                key={26}
                variant= {Outside3 === "co" ? "contained" : "outlined"}
                onClick={() => {setOutside3("co")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={Cone}
                    alt="Cone"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "co" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Cone
                </Box>
              </Button>
              <Button
                key={27}
                variant= {Outside3 === "pr" ? "contained" : "outlined"}
                onClick={() => {setOutside3("pr")}}
              >
                <Box
                  display="flex"
                  gap="0.25rem"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src={TriangularPrism}
                    alt="TriangularPrism"
                    width={50}
                    height={50}
                    style={
                      {
                        filter: Outside3 === "pr" ? 'invert(0)' : 'invert(0.3)',
                      }
                    }
                  />
                  Prism
                </Box>
              </Button>
            </Box>
          </Box>


        <Typography variant="h5" component="h1" sx={{ my: 2 }}>
          Swap Order
        </Typography>
        <Typography variant="h5" component="h1" sx={{ my: 2 }}>
          {calculateResult(Inside1, Inside2, Inside3, Outside1, Outside2, Outside3).map((instruction, index) => {
            return (
              <div key={index}>
                {index + 1}. {instruction}
              </div>
            )
          }
          )}
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
    // if (!(trimmedInput.includes("t") && trimmedInput.includes("c") && trimmedInput.includes("s"))) {
    //     throw new Error("Invalid symbols");
    // }
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
    const positions = ["LEFT", "MID", "RIGHT"];
    const shapes = { s: "SQUARE", c: "CIRCLE", t: "TRIANGLE" };

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
    console.log("RESULT NODE IS:", resultNode);
    console.log("RESULT INSTRUCTIONS ARE:", resultInstructions);
    return resultInstructions;
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
    console.log("SWAPS ARE:", swaps);
    return swaps
}

function calculateResult(Inside1, Inside2, Inside3, Outside1, Outside2, Outside3) {
    const shapeMapping = {
        circleShape: "c", triangleShape: "t", squareShape: "s", sphereShape: "sp",
        pyramidShape: "py", cubeShape: "cu", coneShape: "co", cylinderShape: "cy", prismShape: "pr"
    };

    let innerShapes = [Inside1, Inside2, Inside3];
    innerShapes = validFirstInput(innerShapes);
    console.log("INSIDE SHAPES ARE:", innerShapes);

    let outerShapes = [Outside1, Outside2, Outside3];
    outerShapes = validSecondInput(outerShapes);
    console.log("OUTSIDE SHAPES ARE:", outerShapes);

    console.log("SWAPS ARE:");
    let result = createOrder(innerShapes, outerShapes);
    console.log("RESULT IS:", result);
    return result;
    console.log("====================");
}
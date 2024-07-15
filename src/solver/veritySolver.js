let is3Dduplicate = false;

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
    if (!(trimmedInput.includes("t") && trimmedInput.includes("c") && trimmedInput.includes("s"))) {
        throw new Error("Invalid symbols");
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
    let targetShapes = outerShapes.map(symbol => shapeMap[symbol]);
    if (targetShapes.length === 2) {
        let shapeCounts = { c: 0, s: 0, t: 0 };
        targetShapes.forEach(pair => {
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
        targetShapes.push(missingShapes);
    }

    let initialShapes = innerShapes.map(shape => {
        switch (shape) {
            case "c": return ["s", "t"];
            case "s": return ["c", "t"];
            case "t": return ["c", "s"];
            default: throw new Error("Invalid shape");
        }
    });

    let swaps = generateSwaps(targetShapes, initialShapes);
    console.log("SWAPS ARE:", swaps);
}

function calculateResult() {
    const shapeMapping = {
        circleShape: "c", triangleShape: "t", squareShape: "s", sphereShape: "sp",
        pyramidShape: "py", cubeShape: "cu", coneShape: "co", cylinderShape: "cy", prismShape: "pr"
    };

    let innerShapes = ["t", "c", "s"];
    innerShapes = validFirstInput(innerShapes);
    console.log("INSIDE SHAPES ARE:", innerShapes);

    let outerShapes = ["py", "cu", "sp"];
    outerShapes = validSecondInput(outerShapes);
    console.log("OUTSIDE SHAPES ARE:", outerShapes);

    console.log("SWAPS ARE:");
    createOrder(innerShapes, outerShapes);
    console.log("====================");
}

calculateResult();
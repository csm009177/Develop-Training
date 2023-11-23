
import fs from 'fs';

import diffLogic from "./develop-training-13.js";

// path
const inputJSONPath  = './inputJSONPath.json';
const outputJSONPath   = './outputJSONPath.json';

// controller
const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);
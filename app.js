
import fs from 'fs';

import diffLogic from "./develop-training-13.js";

// path
const filePathOperator  = './operator.json';
const filePathOperand   = './operand.json';

// controller
const resultObject = diffLogic(filePathOperator, filePathOperand);
console.log(resultObject);
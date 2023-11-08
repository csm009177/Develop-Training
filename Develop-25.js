const workVariable = {
  first : '1',
  second : '2.5',
};

function convertToIntegers (obj) {
  const result = {};
  
  for(const key in obj) {
    try {
      const valueAsInteger = parseInt(obj[key], 10);
      if (valueAsInteger.toString() !== obj[key]) {
        throw new Error(`${obj[key]}은(는) 정수로 정확하게 변환될 수 없습니다`);
      }
      result[key] = valueAsInteger;
    } catch (error) {
      console.log(`"${key}" 속성 처리 중 오류 발생 : ${error.message}`);
    }
  }
  return result;
}

const convertedValues = convertToIntegers(workVariable);
console.log(convertedValues)
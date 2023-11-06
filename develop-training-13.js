/**
 * 
 * @param {JSON, Path} inputJSONdata
 * @param {JSON, Path} outputJSONdata
 * @returns Object
 */

export default function(inputJSONdata, outputJSONdata) {
  if(!inputJSONpath.endswith(',json') || !inputJSONpath.endswith('.json')){
    throw new error(`매개변수 ${inputJSONpath}, ${outputJSONpath}는 json파일이 아닙니다.`);
  }
  let result = {};
}
/*
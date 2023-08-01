let csvToJson = require('convert-csv-to-json');

let fileInputName = 'myInputFile.csv';
let fileOutputName = 'myOutputFile.json';

csvToJson
  .fieldDelimiter(',')
  .supportQuotedField(true)
  .generateJsonFileFromCsv(fileInputName, fileOutputName);

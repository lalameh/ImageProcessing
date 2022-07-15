/*
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

  IOhandler.unzip(zipFilePath, pathUnzipped)
  .then(() => IOhandler.readDir(pathUnzipped))
  .then((files) => {
    console.log(files);
    files.forEach(file => {
      console.log(file);
      IOhandler.grayScale(`${pathUnzipped}/${file}`, `${pathProcessed}/${file}`);
    })
  })
  .catch(err => console.log(err)); 

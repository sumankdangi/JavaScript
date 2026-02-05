// Importing Node File System Module (the promises version)
import { log } from 'node:console';
import fs from 'node:fs/promises'

// async function loadData() {
//    try{
//       const data = await fs.readFile('./data.json','utf-8'); 
//       console.log('File read 1');
//       await fs.readFile('./data.json','utf-8');
//       console.log('File Read 2');
//       await fs.readFile('./data.json','utf-8');
//       console.log('File Read 3');
//       const dataObj = JSON.parse(data);
//       console.log(dataObj);
//       console.log("Complete");
//    }
//    catch (err){
//       console.log("Could not load and parse file");
//       throw err;
//    }
   
// }

// loadData().then(()=> console.log("Promises Completed"));

try{
      const data = await fs.readFile('./data.json','utf-8'); 
      console.log('File read 1');
      await fs.readFile('./data.json','utf-8');
      console.log('File Read 2');
      await fs.readFile('./data.json','utf-8');
      console.log('File Read 3');
      const dataObj = JSON.parse(data);
      console.log(dataObj);
      console.log("Complete");
   }
   catch (err){
      console.log("Could not load and parse file");
      throw err;
   }
   
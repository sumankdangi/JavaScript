// Importing Node File System Module (the promise version)
import fs from "node:fs/promises";

// Importing Node File System Module (the callback version)
import fsc from "node:fs";

fs.readFile('./data.json','utf8')
    .then((data)=>{
       const dataObj=JSON.parse(data);
       console.log('File Data:',dataObj);
       console.log('File Read Successfully');
    })
    .then(()=>readFile('data.json'))
    .then(data=>console.log(data))
    .catch((err)=>{
        console.log('Error:',err.message);
    });    



// Creating a custom promise with the callback API
const readFile = async(fileName)=>{
    return new Promise((resolve,reject)=>{
        fsc.readFile('data.json','utf8',(err,data)=>{
            if(err){
                reject(err);
            } else {
                resolve(data);  
            }
        });
    });
}  
// Importing NOde  File System Module (the callback version)
import fs from "node:fs";
fs.readFile('./data.json','utf8',(err,data)=>{
    if(err){
      console.log('Error Reading File');
        throw err;
    }
    try{
        const jsonData=JSON.parse(data);
        console.log('File Data:',jsonData);
        console.log('File Read Successfully');
    }catch(err){
        console.log('Cannot Parse JSON FFile:',err.message);
        
    }

});
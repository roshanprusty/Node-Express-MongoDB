import fs from "fs";
const bioData ={
    name:"roshan",
    age:22,
    degree:"Btech"
}


const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData);
// console.log(jsonData);
// console.log(objData);

fs.writeFile("json1.json", jsonData,(err)=>{
    if(err){
        console.log(err);
        return;
    } 
    console.log("done");
})

fs.readFile("json1.json",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }else{
        const objData = JSON.parse(data);
        console.log(data.toString());
        console.log(objData);
    }
})
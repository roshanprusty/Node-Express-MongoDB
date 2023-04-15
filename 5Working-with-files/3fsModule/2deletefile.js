import fs from 'fs';

fs.writeFileSync('myfile3.txt',"or kese ho bhai jaan");
console.log("file created");

// //deleting the file in sync way!!
// fs.unlinkSync('myfile3.txt');
// console.log("file succesfully deleted");

//sometimes we try to delete that file which is not even exist.
// try{
//     fs.unlinkSync("myfile4.txt");
// }catch{
//     console.log("file not exist");
// }

fs.unlink("myfile3.txt",function(err){
    //here any path you can give absolute or relative your wish.
    if(err){
        console.log("error ",err);
        return;
    }
    console.log(("file deleted successfully by async way"));
});
console.log("~async~")
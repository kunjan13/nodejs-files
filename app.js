var fs = require('fs');

//sync means blocking code, it won't move further unless readme.txt is read completely
//utf-8 is for when file is read it is read in binary string so we have to ask it convert it to utf-8
var readMeFileData = fs.readFileSync('readme.txt', 'utf8');

//console.log(readMeFileData);

//used to create file, if run again it will overwrite
//fs.writeFileSync('cloneof-readme.txt', readMeFileData);

//now we go with async opertaion which is non-blocking
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writemeasync.txt', data);
});

// this will be printed first as above is async
console.log('Test');

//how to delete the file
//fs.unlink('writemeasync.txt');

// create or remove directories
//fs.mkdirSync('stuff');

fs.rmdirSync('stuff');
//you have to delete all files from stuff folder
// fs.rmdir('stuff')
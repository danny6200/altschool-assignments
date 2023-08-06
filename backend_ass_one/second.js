const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'Students');
const fileName = 'user.js';
const filePath = path.join(folderPath, fileName);
const fileContent = 'This is a JavaScript file';
const oldPath = folderPath;
const newPath = path.join(__dirname, 'Names');
const newFilePath = newPath + '\\' + fileName;
const myName = {Name:'Daniel Okoro'};
const personalInfo = {...myName, age: 25, phone_number: '09038576560', Country: 'Nigeria'};
const oldFilePath = path.join(newPath, fileName)
const newerFilePath = path.join(newPath, 'daniel_okoro.js');


//Create the newDirectory asynchronously
fs.mkdir(folderPath, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`${path.basename(folderPath)} folder was successfully created`);
    }
});


//Create a new file within the new directory
fs.writeFile(filePath, fileContent, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`${fileName} was successfully created`);
    }
});

//Rename old path
fs.rename(oldPath, newPath, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully updated Students to Names");
    }
});

//Add my name as content to "users.js"
fs.writeFile(newFilePath, JSON.stringify(myName), (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`Name was successfully added to ${fileName}`);
    }
});

//Add other personal info
fs.writeFile(newFilePath, JSON.stringify(personalInfo), (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`Personal info was successfully added to ${fileName}`);
    }
});

//Rename user.js
fs.rename(oldFilePath, newerFilePath, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully updated user.js to daniel_okoro.js");
    }
});

//Read the contents of "daniel_okoro.js"
fs.readFile(newerFilePath, 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

//Delete file "daniel_okoro.js"
fs.rm(newerFilePath, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`${path.basename(newerFilePath)} was removed successfully`);
    }
});

//Delete folder "Names"
fs.rmdir(newPath, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`${path.basename(newPath)} was removed successfully`);
    }
});
const fs = require('fs');
const path = require('path');

const folderPath = path.resolve('./Students');
const fileName = 'user.js';
const filePath = folderPath + '\\' + fileName;
const fileContent = 'This is a JavaScript file';
const oldPath = folderPath;
const newPath = path.resolve('./Names');
const newFilePath = newPath + '\\' + fileName;
const myName = "My name is Daniel Okoro\n";
const personalInfo = "I am two decades and a half old.\nI identify as male and I am a Nigerian.\nIf you want to connect with me, you can call my line - 09038576560. Bye!";
const oldFilePath = path.resolve('./Names/user.js')
const newerFilePath = path.resolve('./Names/daniel_okoro.js');


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
fs.writeFile(newFilePath, myName, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`Name was successfully added to ${fileName}`);
    }
});

//Add other personal info
fs.appendFile(newFilePath, personalInfo, (err) => {
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
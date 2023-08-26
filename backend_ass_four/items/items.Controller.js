const express = require("express")
const fsPromises = require("fs").promises
const path = require("path")

const dbDirName = path.dirname(__dirname)
const itemsDbPath = path.join(dbDirName, "db", "items.json")

const getAllItems = async (req, res) => {
    try {
        // console.log(itemsDbPath)
        items = await fsPromises.readFile(itemsDbPath)
        itemsObj = JSON.parse(items)
        itemsDuplicate = itemsObj
        query = req.query
        if(query.size){
            filteredItems = itemsDuplicate.filter((item) => item.size.includes(query.size))
            res.status(200).json(filteredItems)
        } else {
            res.status(200).json(itemsObj)
        }
    } catch (error) {
        res.status(500).json({
            "data": "null",
            "error": "Internal Server Error"
        })
    }
}

const getOneItem = async (req, res) => {
    try {
        itemId = req.params.id
        items = await fsPromises.readFile(itemsDbPath)
        itemsObj = JSON.parse(items)
        reqItem = itemsObj.find((item) => item.id === parseInt(itemId))
        if(!reqItem){
            return res.status(404).json({
                "data": "null",
                "error": "not found"
            })
        }
        return res.status(200).json(reqItem)
    } catch (error) {
        res.status(500).json({
            "data": "null",
            "error": "Internal Server Error"
        })
    }
}

const addItem = async (req, res) => {
    try {
        newItem = req.body
        items = await fsPromises.readFile(itemsDbPath)
        itemsObj = JSON.parse(items)
        //Handles first item
        if(!Object.keys(itemsObj).length){
           newItemId = 1
        } else {
            newItemId = itemsObj[itemsObj.length - 1].id + 1
        }
        newItem.id = newItemId
        itemsObj.push(newItem)
        allItems  = JSON.stringify(itemsObj)
        await fsPromises.writeFile(itemsDbPath, allItems)
        return res.status(201).json({
            "data": itemsObj,
            "error": "null"
        })
    } catch (error) {
        //Catches all error related to reading and writing file
        return res.status(500).json({
            "data": "null",
            "error": "Internal Server Error"
        })
    }
}

const updateOneItem = async (req, res) => {
    try {
        updateDetails = req.body
        updateItemId = req.params.id
        items = await fsPromises.readFile(itemsDbPath)
        itemsObj = JSON.parse(items)
        updateIndex = itemsObj.findIndex((item) => item.id === parseInt(updateItemId))
        if(updateIndex == -1){
            return res.status(404).json({
                "data": "null",
                "error": "Resource Not Found"
            })
        }
        updateItem = itemsObj[updateIndex]
        updatedItem = {...updateItem, ...updateDetails}
        itemsObj[updateIndex] = updatedItem
        updatedItemList = JSON.stringify(itemsObj)
        await fsPromises.writeFile(itemsDbPath, updatedItemList)
        res.status(200).json({
            "data": itemsObj,
            "error": "null"
        })
    } catch (error) {
        return res.status(500).json({
            "data": "null",
            "error": "Internal Server Error"
        })
    }
}

const deleteItem = async (req, res) => {
    try {
        deleteItemId = req.params.id
        items = await fsPromises.readFile(itemsDbPath)
        itemsObj = JSON.parse(items)
        deleteIndex = itemsObj.findIndex((item) => item.id === parseInt(deleteItemId))
        
        //Catches "resource not found" error
        if(deleteIndex == -1){
            return res.status(404).json({
                "data": "null",
                "error": "Resource Not Found"
            })
        }
        itemsObj.splice(deleteIndex, 1)
        allItems = JSON.stringify(itemsObj)
        await fsPromises.writeFile(itemsDbPath, allItems)
        res.status(200).json({
            "data": itemsObj,
            "error": "null"
        })
    } catch (error) {
        //Catches "read/write" error
        return res.status(500).json({
            "data": "null",
            "error": "Internal Server Error"
        }) 
    }

}

module.exports = {
    getAllItems,
    getOneItem,
    addItem,
    updateOneItem,
    deleteItem
}
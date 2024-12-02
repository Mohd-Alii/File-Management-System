const fs=require('fs')
const path=require('path')
//Creating File 
const createFile=(fileName, content)=>{
    fs.writeFile(fileName, content, (err)=>{
        if(err){
            console.error(`Error creating file: ${err.message}`)
        }else{
            console.log(`File "${fileName} created successfully`)
        }
    })
}
//Read File
const readFile=(fileName)=>{
    fs.readFile(fileName, 'utf-8', (err, data)=>{
        if(err){
            console.error(`Error reading file: ${err.message}`)
        }else{
            console.log(`File Content: \n${data}`)
        }
    })
}
const renameFile=(oldName, newName)=>{
    fs.rename(oldName, newName, (err)=>{
        if(err){
            console.error(`Error renaming file: ${err.message}`)
        }else{
            console.log(`File renamed from ${oldName} to ${newName}`)
        }
    })
}
const deleteFiles=(fileName)=>{
    fs.unlink(fileName, (err)=>{
        if(err){
            console.error(`Error deleting file: ${err.message}`)
        }else{
            console.log(`File ${fileName} deleted successfully`)
        }
    })
}
const listFiles=(directory='./')=>{
    fs.readdir(directory, (err, files)=>{
        if(err){
            console.error(`Error listing files: ${err.message}`)
        }else{
            console.log(`Files in directory`)
            files.forEach((file)=>{
                console.log(file)
            })
        }
    })
}
//Export the functions
module.exports={createFile, readFile, deleteFiles, listFiles}
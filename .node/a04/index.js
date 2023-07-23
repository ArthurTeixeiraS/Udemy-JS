const fs = require('fs').promises
const { read } = require('fs')
const path = require('path')
/* fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e => console.log(e)) */
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}
async function walk(files, rootDir){
    for(let file of files){
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)
    if (stats.isDirectory()){
        readdir(fileFullPath)
        continue;
    }
    if (/\.git/g.test(fileFullPath)) continue
    if (/node_modules/g.test(fileFullPath)) continue
    if(!/\.js$/g.test(fileFullPath)) continue
    console.log(fileFullPath)
}
}

readdir('F:/Arthur/Projetos/UdemyJS/JS/')
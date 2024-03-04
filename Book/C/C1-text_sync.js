const fs =  require('fs')

for(let i = 1; i <= 5; i++){

    let file = `sync-text${i}.txt`;
    let out = fs.writeFileSync(file, 'hello Node.js');
    console.log(out)
    
}
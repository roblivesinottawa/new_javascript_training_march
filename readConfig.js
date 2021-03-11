async function readConfig() {
    try {
        let content = await readFile('config.json')
        let obj = JSON.parse(content.toString())
        console.log(obj)
    } catch (error) {
        console.log(`An error occurred ${error}`)
        
    }
}

let readconf = readConfig()
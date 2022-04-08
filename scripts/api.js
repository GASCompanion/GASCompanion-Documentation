const fs = require("fs-extra")
const path = require("path")
const rimraf = require("rimraf")
const klaw = require("klaw")
const through2 = require('through2')

const API_FOLDER = "src/GASCompanionAPI_v5"
const HOST_PROJECT = `E:\\Projects\\GASComp_Projects\\GASCompanionDemo 5.0`
const generatedXmlDir = path.join(HOST_PROJECT, "Intermediate/KantanDocGen/GASCompanionDemo")

if (!fs.existsSync(generatedXmlDir)) {
    console.error(`Directory doesn't exist: ${generatedXmlDir}`)
    return process.exit(1)
}

const excludeDirFilter = through2.obj(function (item, enc, next) {
    if (!item.stats.isDirectory()) this.push(item)
    next()
})

const removeCdata = async (dir) => {
    console.log("Removing CDATA in xml files in", dir);

    // for await (const file of klaw(dir)) {
    for await (const file of klaw(dir)) {
        const filepath = file.path
        const isDirectory = file.stats.isDirectory()
        if (isDirectory) {
            continue;
        }

        const ext = path.extname(filepath)
        if (ext !== ".xml") {
            continue;
        }

        const basename = path.basename(filepath)
        const dirname = path.relative(dir, filepath)
        const content = await fs.readFile(filepath, "utf8")
        const newContent = content.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "");

        await fs.writeFile(filepath, newContent)
    }
}

const run = async () => {
    const docsDir = path.join(__dirname, "..", API_FOLDER)

    // rm
    console.log("Remove dir", docsDir)
    await fs.remove(docsDir)

    // copy
    await fs.copy(generatedXmlDir, docsDir)

    // replace cdata
    await removeCdata(docsDir)
}

run()
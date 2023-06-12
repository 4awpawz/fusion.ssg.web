import fs from "fs";
import chalk from "chalk";
import { dirname, join, normalize, parse } from "path";
import { fileURLToPath } from 'url';
import browsersync from "browser-sync";

const bs = browsersync.create();

// __dirName...

// This is a polyfill for  __dirname, which isn't supported when using esmodules.
function fileDirName(meta) {
    const __filename = fileURLToPath(meta.url);
    const __dirname = dirname(__filename);
    return __dirname;
}
const __dirname = fileDirName(import.meta);

// Command arguments...

// Server strategy.
const args = process.argv.length > 2 ? process.argv.slice(2) : [];
const serverStrategy = args.includes("release") ? "release" : "development";
console.log(chalk.black.bgWhiteBright("browser-sync server strategy:", serverStrategy));

// Path to the user config file.
let pathToUserConfig = "";
for (const arg of args) {
    if (arg.startsWith("config=")) {
        const pathParts = arg.split("=");
        pathToUserConfig = pathParts.length === 2 && join(__dirname, pathParts[1]);
        const ext = parse(pathToUserConfig).ext;
        if (ext !== ".json") {
            console.log(chalk.red(`Error: ignoring file ${pathToUserConfig} - expected file type of JSON but found ${ext}.`));
            pathToUserConfig = "";
            break;
        }
        if (!fs.existsSync(pathToUserConfig)) {
            console.log(chalk.red(`Error: file ${pathParts[1]} does not exist!`));
            pathToUserConfig = "";
            break;
        }
        pathToUserConfig && console.log(chalk.black.bgWhiteBright("browser-sync config:", pathToUserConfig));
        break;
    }
}

// baseURL...

let baseURL = "";
if (serverStrategy === "release") {
    const fusion_json = JSON.parse(fs.readFileSync(join(__dirname, "fusion.json")));
    baseURL = Object.hasOwn(fusion_json, "baseURL") ? fusion_json.baseURL : "";
}

// 404...

function _404() {
    try {
        const pathTo404html = join(__dirname, "build", baseURL, "404.html");
        return fs.readFileSync(pathTo404html);
    } catch (error) {
        console.log(chalk.yellowBright("Warning: this site is missing a 404.html doc - using default 404.html."));
        return "<html style=\"height: 100%;\"><body style=\"height: 100%; background-color: red;\"><div style=\"width: 100%; height: 100%; display: table; text-align: center;\"><div style=\"display: table-cell; vertical-align: middle;\"><p style=\"font-size: 4rem; color: white; margin-top: 0; font-weight: bold;\">Page Not Found!</p><p style=\"font-size: 2rem; color: black; margin-bottom: 0;\">Please create your own 404.html page for your project.</p></div></div></body></html>";
    }
}

// Options...

const defaultOptions = {
    server: "build",
    files: "build/**",
    watch: true
};
let configOptions = pathToUserConfig !== "" && fs.existsSync(pathToUserConfig) && { ...defaultOptions, ...JSON.parse(fs.readFileSync(pathToUserConfig)) } || defaultOptions;
// If thee's a baseURL the site should be served from build/baseURL.
if (baseURL !== "") defaultOptions.startPath = normalize(`${baseURL}`);
console.log(chalk.black.bgWhiteBright("browser-sync configuration options:"), configOptions);

// Start the server...

bs.init(configOptions, (err, bs) => {
    bs.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.write(_404());
        res.end();
    });
});

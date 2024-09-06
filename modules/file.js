
import fs from "fs";
import path from "path";

export const loadFile = async (relative) => {
    try {
        let bufferData = fs.readFileSync(path.join(import.meta.dirname, relative));
        let stData = bufferData.toString();
        let data = JSON.parse(stData);
        return data;
    } catch (e) {
        console.log("No file found", relative);
        return {}
    }
}

export const saveFile = async (relative, data) => {

    fs.writeFileSync(
        path.join(import.meta.dirname, relative),
        JSON.stringify(data, null, 2)
    );
}
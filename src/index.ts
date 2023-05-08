import fs from "fs";
import path from "path";

export class csvForJson {
    openFileCSV(pathFile: string, trimFile?: boolean, titleFile?: boolean) {
        let id: number;
        let file: string;
        let valueTitle: string[];
        let valueFile, value: string[];
        let valueObj: { [k: string]: string };
        let returnFile = [];
        try {
            file = fs.readFileSync(path.resolve(__dirname, pathFile), "utf8");
            valueFile = file.split(/\n/)
            for (let i = 0; i < valueFile.length; i++) {
                id = i
                value = trimFile
                    ? valueFile[i].split(',').map(k => k.trim())
                    : valueFile[i].split(',').map(k => k)
                valueTitle = valueFile[0].split(',');
                valueObj = Object.fromEntries(value.map((t, i) => [valueTitle[i], t]))
                returnFile.push({
                    "id": id, "value": titleFile ? valueObj : value
                })
            }
            return returnFile;
        } catch (e) {
            console.log(e)
        }
    }
} 
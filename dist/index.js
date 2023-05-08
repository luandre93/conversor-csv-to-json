"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvForJson = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class csvForJson {
    openFileCSV(pathFile, trimFile, titleFile) {
        let id;
        let file;
        let valueTitle;
        let valueFile, value;
        let valueObj;
        let returnFile = [];
        try {
            file = fs_1.default.readFileSync(path_1.default.resolve(__dirname, pathFile), "utf8");
            valueFile = file.split(/\n/);
            for (let i = 0; i < valueFile.length; i++) {
                id = i;
                value = trimFile
                    ? valueFile[i].split(',').map(k => k.trim())
                    : valueFile[i].split(',').map(k => k);
                valueTitle = valueFile[0].split(',');
                valueObj = Object.fromEntries(value.map((t, i) => [valueTitle[i], t]));
                returnFile.push({
                    "id": id, "value": titleFile ? valueObj : value
                });
            }
            return returnFile;
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.csvForJson = csvForJson;
console.log(new csvForJson().openFileCSV('./teste.csv', true, true));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQVF4QixNQUFhLFVBQVU7SUFDbkIsV0FBVyxDQUFDLFFBQWdCLEVBQUUsUUFBa0IsRUFBRSxTQUFtQjtRQUNqRSxJQUFJLEVBQVUsQ0FBQztRQUNmLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksVUFBb0IsQ0FBQztRQUN6QixJQUFJLFNBQVMsRUFBRSxLQUFlLENBQUM7UUFDL0IsSUFBSSxRQUFpQyxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0EsSUFBSSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ04sS0FBSyxHQUFHLFFBQVE7b0JBQ1osQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM1QyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDekMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RFLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ1osSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7aUJBQ2xELENBQUMsQ0FBQTthQUNMO1lBQ0QsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDakI7SUFDTCxDQUFDO0NBQ0o7QUEzQkQsZ0NBMkJDO0FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUEifQ==
import { csvForJson } from "../src/index"

let csvObj = new csvForJson()

describe('Teste da função openFileCSV()', () => {
    it('Testando função openFileCSV()', () => {
        let returnFileCSV: string[] | undefined = csvObj.openFileCSV('../dist/teste.csv', true, true);
        expect(returnFileCSV).toEqual('teste,teste,teste')
    });
})


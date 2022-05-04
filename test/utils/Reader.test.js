const fs = require ("fs");
const Reader = require("./../../lib/utils/Reader");

describe("test for reader ", () => {
    test("Read json file", () => {
        const Reader1  = Reader.readJsonFile("explorers.json");
        const rawdata = fs.readFileSync("explorers.json"); 
        expect(Reader1).toEqual(JSON.parse(rawdata));
    });

});
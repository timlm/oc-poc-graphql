const fs = require("fs");
const util = require("util");
const read_file = util.promisify(fs.readFile);
const data_path = `${__dirname}/data/articles.json` ;

const selectArticle = async (id: number) => {
    try {
        const result = JSON.parse(await (read_file(data_path)));
        return result.find((r: any) => r.id === id);
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default selectArticle;

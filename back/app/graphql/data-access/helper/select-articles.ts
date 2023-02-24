const fs = require("fs");
const util = require("util");
const read_file = util.promisify(fs.readFile);
const data_path = `${__dirname}/data/articles.json` ;

const selectArticles = async (params: any) => {
    console.log(params);
    const { type, price } = params;
    try {
        let result = JSON.parse(await (read_file(data_path)));
        if (type) {
            result = result.filter((r: any) => r.type === type);
        }
        if (price) {
            result = result.filter((r: any) => r.price === price);
        }
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default selectArticles;

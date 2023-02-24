const fs = require("fs");
const util = require("util");
const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = `${__dirname}/data/articles.json` ;

const insertArticle = async (newArticle: any) => {
    try {
        const articles = JSON.parse(await (read_file(data_path)));
        const articlesIdList = articles.map((value: any) => value.id);
        newArticle.id = Math.max(...articlesIdList) + 1;
        const newArticlesArray = articles.concat(newArticle);
        await write_file(data_path, JSON.stringify(newArticlesArray, null, 4));
        return newArticle
    } catch (e) {
        console.error(e);
        throw new Error("Insert article Failed");
    }
};

export default insertArticle;

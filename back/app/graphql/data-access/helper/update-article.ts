const fs = require("fs");
const util = require("util");
const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = `${__dirname}/data/articles.json` ;

const updateArticle = async (id: number, article: any) => {
    try {
        const articles = JSON.parse(await (read_file(data_path)));
        const articleFounded = articles.findIndex((articleFound: any) => articleFound.id === id);
        articles[articleFounded] = { ...articles[articleFounded], ...article};
        await write_file(data_path, JSON.stringify(articles, null, 4));
        return articles[articleFounded]
    } catch (e) {
        console.error(e);
        throw new Error("Insert article Failed");
    }
};

export default updateArticle;

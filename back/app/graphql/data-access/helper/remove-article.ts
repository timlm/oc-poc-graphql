const fs = require("fs");
const util = require("util");
const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = `${__dirname}/data/articles.json` ;

const removeArticle = async (id: number) => {
    try {
        if (!id) {
            return {
                "message": "Insert article, mandatory attributes are id"
            }
        }

        const articles = JSON.parse(await (read_file(data_path)));
        const found_article = articles.findIndex((articleFound: any) => articleFound.id === id);
        if (found_article !== -1) {
            articles.splice(found_article, 1);
            await write_file(data_path, JSON.stringify(articles, null, 4));
            return {
                "message": "Remove article Sucessfull"
            }
        } else {
            return {"message": "article_DOES_NOT_EXIST"};
        }

    } catch (e) {
        console.error(e);
        throw new Error("DELETE_article_FAILED");
    }
};

export default removeArticle;

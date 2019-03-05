const fs = require('fs');
const path = require('path')
const uuid = require('uuid4');
const isUUID = require('is-uuid');

var books = JSON.parse(fs.readFileSync('./books.json'));

fs.readdir('./data', (err, files) => {
    files.forEach(file => {
        var fileData = path.parse(file);

        if (!isUUID.v4(fileData.name)) {
            var book = {
                title: fileData.name,
                filename: uuid(),
                authors: [],
                categories: [],
                shortDescription: '',
                longDescription: '',
                extension: fileData.ext,
                thumbnailUrl: '',
            };

            books.push(book);
            fs.renameSync(__dirname + "/data/" + file, __dirname + "/data/" + book.filename);
        }
    });

    fs.writeFileSync('books.json', JSON.stringify(books));
})
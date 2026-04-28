const fs = require('fs');

fs.writeFile("second.txt", "hellow fiaz kaisy hoo", (err) => {
    if (err) return console.log(err);

    console.log("file has been created");

    fs.readFile("second.txt", "utf-8", (err, data) => {
        if (err) return console.log(err);

        console.log(data);

        let newData = data.replace("hellow fiaz kaisy hoo", "hey dear");

        fs.writeFile("second.txt", newData, (err) => {
            if (err) return console.log(err);

            console.log("file has been updated");
        });
    });
});
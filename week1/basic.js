const fs = require('fs');

fs.writeFile('First.txt', 'Hello How Are You', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File has been saved!');

    fs.readFile('First.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);

        let newdata = data.replace('Hello How Are You', 'Hi');

        fs.writeFile('First.txt', newdata, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File has been updated!');
            }
        });
    });
});
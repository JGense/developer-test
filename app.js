const functions = require('./functions');

const option = process.argv.pop().replace('--','').split('=');

const usage = (errorText) => {
    const usageText = `
        ${errorText}

        Usage:
            node app.js <option>
        
        option can be:
            --filter=myfilter       Used to find people with an animal whose name contains the filter
            --count                 Used to count the number of people in each country and the number of animals in each person               
    `;
    console.log(usageText);
};

const main = () => {
    switch (option.shift()) {
        case 'count':
            console.dir(
                functions.count(),
                {depth: null}
            );
            break;
        case 'filter':
            console.dir(
                functions.filter(option.pop()),
                {depth: null}
            );
            break;
        default:
            usage('Invalid option');
            break;
    };
};

main();
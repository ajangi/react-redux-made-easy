'use strict'
const inquirer  = require('./inquirer');
const dir  = require('./dir');
const chalk  = require('chalk');

module.exports = {
    handle : async () => {
        let data;
        data = await inquirer.getRestReduxData();
        dir.handleDirectories()
        // check directories and create if not exists
        // check files and create if not exists
    }
}
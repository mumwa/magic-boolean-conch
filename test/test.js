'use strict';

const conch = require('../dist/index');

const test = conch.ask('I\'m Okay?')

if (test == true || test == false || test == undefined || test == 'true' || test == 'false') {
    console.log('!-----test passed-----!');
} else {
    console.log('!-----test failed-----!');
}
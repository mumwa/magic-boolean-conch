# magic-boolean-conch
magic-boolean-conch return random boolean or undefined. You can ask anything.

# Install
~~~
npm install magic-boolean-conch
~~~

# Usage
~~~javascript
const { Conch } = require('magic-boolean-conch');
const conch = new Conch;

console.log(conch.ask("Am I okay?"));
console.log(conch.ask(1234));
console.log(conch.ask(undefined));
console.log(conch.ask(null));
console.log(conch.ask(conch));
~~~

# Dependencies
Nothing

# License
MIT

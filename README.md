# inquire-js-tutorial

## To run project
```
node index.js
```



## New Inquirer Project setup guid. 

```
// create package.json
npm init --y

// add inquirer dependency
npm install inquirer

// create index.js
touch index.js

```

## Create questions

```
// input questions
{
        type: 'input',
        name: 'name',
        message: 'your name?',
        default : 'don'
}

// with a filter and a validate function
{
        type: 'input',
        name: 'age',
        message: 'your age?',
        validate: function (value) { 
            var valid = value && !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number
}


// with a default value
{
        type: 'input',
        name: 'username',
        message: 'your user name?',
        default : 'don-l'
}

// password
{
        type: 'password',
        name: 'password',
        message: 'your password?',
        mask: '*',
        validate: function (value) { 
            var valid = value && /[0-9]/ig.test(value) && /[a-z]/ig.test(value)
            return valid || 'Please enter a password, number and a letter required';
        }
}

// list type
{
        type: 'list',
        name: 'level',
        message: 'What level are you in?',
        choices: ['1', '2', '3'],
}
```
## run inquirer

```

inquirer.prompt(questions).then(answers => {
    console.log('\nAnswers:');
    console.log(JSON.stringify(answers, null, ' -- '));
});

```


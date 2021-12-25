# React Project From Scratch

## 1. Initialize package.json file
```
npm init -y
```

## 2. Initialize Git repo locally
```
git init
```

## 3. Create .giconfig file 
```
[alias]
    cmp = "!f() { git add -A && git commit -m \"$@\" && git push; }; f"
```
## 4. Create public and src folder
*Create index.html file in public folder*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>React Ecosystem</title>
</head>
<body>
    <div id="root"></div>
    <noscript>
        Please enable JavaScript to view this site.
    </noscript>
    <script src="../dist/bundle.js"></script>
</body>
</html>
```
## 5. Add support for jsx
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

## 6. Create babelrc file in root directory
```
.babelrc

// contents of babelrc file

{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
## 7. Create files in src folder
* App.js
* App.css
* Index.js

*App.js*
```
import React from 'react'
import './App.css'

const App = () => (
    <div className="App">
        <h1>Hello, World</h1>
    </div>
)

export default App
```

*App.css*
```
.App {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color:#222;
}
```

*Index.js*
```
import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

ReactDom.render(<App />, document.getElementById('root'))
```

## 8. Install React
```
npm i react react-dom
```

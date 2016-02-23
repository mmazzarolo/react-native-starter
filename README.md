<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/mmazzarolo/react-native-starter/master/src/assets/images/logo.png" width="520">  
</p>

<br />
<br />
<br />

# What's React-Native Starter? (Work in progess)
React-Native Starter is a boilerplate for a React-Native with the following goals in mind:
- Clear and easy way to handle an authentication flow
- Redux + ImmutableJS for managing all the app states (and the routing too)
- [React-native-router-flux](https://github.com/aksonov/react-native-router-flux) as router implementation (and maybe navigator-experimental too in the future)
- Code splitted in many small generic components
- A way to handle many common React-Native problem (i.e.: keyboard overlapping TextInput)
- Clean look for both iOS and Android
- [ES6+ syntax](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) in every module, following [AirBnB coding style](https://github.com/airbnb/javascript)
- Await/Async for asynchronous tasks
- Configurable colors/dimensions/strings

# React-Native tips

# React-Native resources
### React-Native news
- [Medium](https://medium.com/tag/react-native/latest)   
- [Reactnative.com](http://www.reactnative.com/)
- [Twitter](https://twitter.com/hashtag/reactnative)  

### Interesting links
- [Discussion/fixes about the android slow transitions](https://github.com/facebook/react-native/issues/3049)
- [Some interesting stuff about stateless components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.shdm8klow)
- [A better file structure for React/Redux](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)
- [Components, components, components](https://js.coach/react-native)
- [React Native’s LayoutAnimation is Awesome](https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e?source=tags---)
- [Some tips on code styling](https://medium.com/the-exponent-log/coding-apps-with-react-native-at-exponent-7a5922da27bf#.q974ztlmb)
- [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)

### My linting preferences
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)   
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)


**package.json** devDependencies:
```
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "eslint": "^1.10.3",
    "eslint-config-airbnb": "^5.0.0",
    "eslint-plugin-react": "^3.11.3"
  }
```

**.eslintrc**
```
{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [],
  "rules": {
    "arrow-body-style": [1, "as-needed"],
    "comma-dangle": 0,
    "default-case": 0,
    "prefer-template": 1,
    "no-use-before-define": 0,
    "no-unused-vars": 1,
    "new-cap": 0,
    "no-console": 0,
    "key-spacing": 1,
    "jsx-quotes": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-bind": 1,
    "react/wrap-multilines": 1,
    "semi": [2, "never"],
    "strict": 0
  }
}
```

### React-Native news 
- [Medium](https://medium.com/tag/react-native/latest)   
- [Reactnative.com](http://www.reactnative.com/)
- [Twitter](https://twitter.com/hashtag/reactnative)  

### Interesting links
- [The famouse Movies example app](http://www.toptal.com/react/tips-and-practices): It is a good example, even if it's a bit outdated.
- [An in depth tutorial for iOS](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript)
- [React.js Best Practices and Tips by Toptal Developers](http://www.toptal.com/react/tips-and-practices)
- [Official Facebook repo of css-layout](https://github.com/facebook/css-layout): Some essential info about react-css styling
- [Discussion/fixes about the android slow transitions](https://github.com/facebook/react-native/issues/3049)
- [Some interesting stuff about stateless components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.shdm8klow)
- [A better file structure for React/Redux](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)
- [Components, components, components](https://js.coach/react-native)
- [React Native’s LayoutAnimation is Awesome](https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e?source=tags---)
- [Some tips on code styling](https://medium.com/the-exponent-log/coding-apps-with-react-native-at-exponent-7a5922da27bf#.q974ztlmb)
- [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)  
- 

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

Yes, i hate semicolons.

Still waiting for [a simple way to enable stage 0 proposal](https://github.com/yannickcr/eslint-plugin-react/issues/43) and [whitelist es7 statics without problems](http://stackoverflow.com/questions/33615537/using-es7-static-proptypes-with-react-native)

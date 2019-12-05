# ts-npm-boilerplate

Typescript npm boileplate

## Install

```
yarn
```


## Test

``` 
yarn test
```

## CI/CD

See [Github actions](https://help.github.com/en/actions)

* [Build on push to feature branch](./github/workflows/build.yml)
* [Build & publish npm](./github/workflows/npmpublish.yml)

### NPN Publish Setup 
 In order to publish packages to npmjs.org or to Github Registry you should add npm_token and/or github_token in `Settings -> Secrets` of the current project

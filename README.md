# Input Validator Lib

_an example library for a [JavaScript January](https://www.javascriptjanuary.com/) article_

## INSTALLATION

_If this were actually published to npm_, you could install this library by running:

```sh
$ npm install input-validator-lib
```

## UP & RUNNING

To install dependencies with Yarn, run:

```sh
$ yarn install
```

or to install with npm, run:

```sh
$ npm install
```

## LOCAL DEVELOPMENT

### LINTING

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

### TESTING

To run the tests once:

```
$ Yarn test
```

To run the watch script (for only relevant test files)

```
$ yarn test:watch
```

To run the watch script (for all test files)

```
$ yarn test:watchAll
```

To view the coverage report:

```
$ yarn test:coverage:report
```

### REVIEW

If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ yarn review
```

### BUILD

_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:

```
$ yarn build
```

Run the watch script:

```
$ yarn build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## CONTRIBUTING

I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/input-validator-lib/blob/master/.github/CONTRIBUTING.md).

## LICENSE

[MIT](https://github.com/alanbsmith/input-validator-lib/blob/master/LICENSE)

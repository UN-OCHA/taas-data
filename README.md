# taas-data

UN-OCHA Taxonomy As A Service: Data Exports.

These are the results of running the code in the [TaaS repository](https://github.com/UN-OCHA/taas).

Visit http://vocabulary.unocha.org/ to see what exports are available, their sources, and further information.

## Updating this repo

- For updates to the `json` and `sheets` directories, please use our [automated jenkins workflow](docs/workflow.md).
- For all other files, send us a pull-request!

## Updating / Adding Vocabularies

See [How to add a new / edit an existing vocabulary on the OCHA Vocabularies website](how-to.md)

## Running Jekyll site locally

### Requirements

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](https://bundler.io/)
* [Node](https://nodejs.org/)
* [Jekyll](https://jekyllrb.com)
* [Gulp.js](https://gulpjs.com/)

### Installing

```
# ruby & gems
bundle install

# node.js & modules
nvm use
npm install
```

We require Node.js 8+ and have supplied an `.nvmrc` if you use [Node Version Manager](https://github.com/creationix/nvm)


### Running

One command lets you watch for changes to Jekyll, Sass, and JS, plus run BrowserSync for cross-platform development:

```
gulp dev
```

By default the site is at http://localhost:4000/

### Deploying

1. Compile the front end resources. We run a series of commands found in the `.bin/deploy.sh` script. Invoke the script using this command from `npm`:

```
npm run deploy
```

2. Commit your changes, including the minified css files.

3. Push to the master branch.

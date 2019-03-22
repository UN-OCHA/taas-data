# UN-OCHA Taxonomy As A Service: Data Exports

These are the results of running the code in the [TaaS repository](https://github.com/UN-OCHA/taas).

Visit https://vocabulary.unocha.org/ to see what exports are available, their sources, and further information.

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

```sh
# ruby & gems
bundle install

# node.js & modules
nvm use
npm install
```

We require Node.js 8+ and have supplied an `.nvmrc` if you use [Node Version Manager](https://github.com/creationix/nvm)


### Local development

One command lets you watch for changes to Jekyll, Sass, and JS, plus run BrowserSync for cross-platform development:

```sh
gulp dev
```

By default the site is at http://localhost:4000/

If you'd like to see a task listing, run the following command:

```sh
gulp --tasks
```

### Rebuilding Modernizr

Occasionally Modernizr might need to be updated. There is also a command for that. Just run it and commit the result:

```
gulp modernizr
```

If the command fails to execute ([known bug](https://github.com/rejas/gulp-modernizr/issues/39)) either ask another teammate or manually copy the build URL from the existing Modernizr, visit the URL, and generate a new build, replacing the contents of the existing file.

### Deploying

1. Compile the front end resources. We run a series of commands found in the `.bin/deploy.sh` script. Invoke the script using this command from `npm`:

```sh
npm run deploy
```

2. Commit your changes, including the minified css files.

3. Push to the master branch.

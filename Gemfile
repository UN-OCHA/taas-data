source "https://rubygems.org"
ruby '2.4.4'

# don't install newer than 1.9.18
# fixed in 1.9.22+ as of feb 2018.
# @see https://github.com/ffi/ffi/issues/608
gem 'ffi', '>= 1.9.24'

# We're publishing to GitHub Pages. The lockfile should match the version found
# at the official GitHub Pages dependencies.
#
# @see https://pages.github.com/versions/
gem "github-pages", group: :jekyll_plugins

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

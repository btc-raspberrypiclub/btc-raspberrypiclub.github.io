# Startup

## Install ruby

Check your version of Ruby:

```sh
ruby -v
```

If the command succeeds, then you can skip to the next step ([Setup Jekyll](#setup-jekyll))f it throws an error, then you need to install ruby.

Go to [rubyinstaller.org](https://rubyinstaller.org) (for Windows) and download the installer. (Probably version `Ruby+Devkit3.2.X`)

Run the installer.

Use all default settings.

## Setup Jekyll

Install bundler and Jekyll

```sh
gem install bundler jekyll
```

Ensure that all packages are installed before running the server:

```sh
bundle install
```

Run the server:

```sh
bundle exec jekyll serve
```

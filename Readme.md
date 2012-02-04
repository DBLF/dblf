# DBLF

This is a character generator for the d100 role playing system, built
using Backbone.

## Local install

        gem install bundler
        bundle

## Tests

Tests for the application are written in RSpec and Jasmine. In order
run them after installing the application, execute the following
commands:

        ## prefix with `bundle exec` if necessary
        rspec
        rake jasmine:ci

While developing, guard can be used to autotest on update. In order to
set up your system:

        ## Replace with your packaging system of choice
        brew install qt

To run guard, simply type the following:

        guard
        ## or
        bundle exec guard


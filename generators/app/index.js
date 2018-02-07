'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const paramCase = require('param-case');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      'Welcome to the ' + chalk.red('NetSuite SCA Module') + ' generator!'
    );

    const prompts = [
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true
      // },
      {
        type: 'string',
        name: 'modulePrefix',
        message: 'Module prefix: (ec for example)',
        default: ''
      },
      {
        type: 'string',
        name: 'moduleName',
        message: 'Module name:',
        default: 'Module'
      },
      {
        type: 'string',
        name: 'moduleVersion',
        message: 'Module version:',
        default: '1.0.0'
      },
      {
        type: 'confirm',
        name: 'generateModel',
        message: 'Would you like to generate example Backbone.Model?',
        default: true
      },
      {
        type: 'confirm',
        name: 'generateCollection',
        message: 'Would you like to generate example Backbone.Collection?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    var moduleFolderName = this.props.modulePrefix + this.props.moduleName + '@' + this.props.moduleVersion

    this.fs.copy(
      this.templatePath('ns.package.json'),
      this.destinationPath('ns.package.json')
    );

    this.fs.copyTpl(
      this.templatePath('module_template.js'),
      this.destinationPath( moduleFolderName + '/JavaScript/' + this.props.moduleName + '.js'),
      { moduleName: this.props.moduleName }
    );

    this.fs.copyTpl(
      this.templatePath('router_template.Router.js'),
      this.destinationPath( moduleFolderName + '/JavaScript/' + this.props.moduleName + '.Router.js'),
      { moduleName: this.props.moduleName }
    );

    this.fs.copyTpl(
      this.templatePath('view_template.View.js'),
      this.destinationPath( moduleFolderName + '/JavaScript/' + this.props.moduleName + '.View.js'),
      { moduleName: this.props.moduleName }
    );

    this.fs.copyTpl(
      this.templatePath('template.tpl'),
      this.destinationPath( moduleFolderName + '/Templates/' + paramCase(this.props.moduleName) + '.tpl'),
      { title: this.props.moduleName }
    );
  }

  install() {
    // this.installDependencies();
  }
};

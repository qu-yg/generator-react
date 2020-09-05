const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    promting(){
        return this.prompt(
            [{
                type:'input',
                name: 'name',
                message:'your project name',
                default: this.appname
            },{
                type:'input',
                name:'projectdes',
                message:'please input the project description'
            }
        ]
        ).then(answer => {
            this.answer = answer
        })
    } 

    writing (){
        const templates = [
            '.gitignore',
            'package.json',
            'README.md',
            'yarn.lock',
            'public/favicon.ico',
            'public/index.html',
            'public/logo192.png',
            'public/logo512.png',
            'public/manifest.json',
            'public/robots.txt',
            'src/App.css',
            'src/App.js',
            'src/App.test.js',
            'src/index.css',
            'src/index.js',
            'src/logo.svg',
            'src/serviceWorker.js',
            'src/setupTests.js'
        ]

        templates.forEach(item => {
            this.fs.copyTpl(
            this.templatePath(item),
            this.destinationPath(item),
            this.answer
            )
            
        })
    } 
  
}
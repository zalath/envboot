# EnvBoot

- a tool for bootup my work environment.
- electron,electorn-forge used.

## install
- run
    - npm install
    - npm start
- build
    - electron-forge make

## configuration
- config file's path is set in /c.json, change it to suit your needs.
- config file's format is like:
```
{
    "starter":{
        "1":{
            "name":"edou",
            "path":"d:/code/project-2"
        },
        "2":"",
        "3":{
            "name":"bsl_union",
            "path":"d:/code/bsl_union"
        },
        "4":{
            "name":"bsl_open",
            "path":"d:/code/bsl_open"
        },
        "5":{
            "name":"bsl_open_port",
            "path":"d:/code/bsl_open_port"
        },
        "106":"",
        "107":{
            "name":"esend_master",
            "path":"d:/code/esend_master"
        },
        "108":{
            "name":"esend_php",
            "path":"d:/code/esend_php"
        },
        "109":{
            "name":"esend_vue",
            "path":"d:/code/esend_vue"
        },
        "400":"",
        "401":{
            "name":"nest",
            "path":"d:/code/aria/e"
        },
        "500":"",
        "501":{
            "name":"basic",
            "path":"d:/code/basic"
        },
        "790":"",
        "791":{
            "name":"oma",
            "path":"d:/code/oma"
        },
        "792":{
            "name":"path.",
            "path":"f:/Paths.txt"
        },
        "793":{
            "name":"me",
            "path":"d:/code/aria/c"
        },
        "799":"",
        "800":{
            "name":"doc",
            "path":"F:/desktop/doc"
        }

    },
    "menu":{
        "1":{
            "name":"starter",
            "id":"starter"
        },
        "2":{
            "name":"pm",
            "id":"pm"
        },
        "3":{
            "name":"tm",
            "id":"tm"
        }
    },
    "boot":{
        "navicat":"C:/Progra...icat.exe",
        "filezilla":"C:/Pr...ient/filezilla.exe",
        "chrome":"C:/Users/z....tion/chrome.exe"
    },
    "url":{
        "pm":"https://google.com",
        "tm":"https://stackoverflow.com/"
    }
}
```
- explain:
```
{
    "starter":{//some project names and path for vscode to open
        "1":{
            "name":"edou",
            "path":"d:/code/project-2"
        },
        "2":"",//empty for adding an empty line to list
        "3":{
            "name":"bsl_union",
            "path":"d:/code/bsl_union"
        }
    },
    "menu":{//menu on the left bottom, this can only change the name, if you want to change the id, you have to change the id in the html file.
        "1":{
            "name":"starter",
            "id":"starter"
        },
        "2":{
            "name":"pm",
            "id":"pm"
        },
        "3":{
            "name":"tm",
            "id":"tm"
        }
    },
    "boot":{// some programe to start, if you want to add more, you need to change the source code in index.js on line 102
        "navicat":"C:/P....at Premium 12/navicat.exe",
        "filezilla":"C:/P....P Client/filezilla.exe",
        "chrome":"C:/Use...ication/chrome.exe"
    },
    "url":{
        "pm":"any url start from http, effect the menu 2 above. Read the source code if you want to change",
        "tm":"any url start from http, effect the menu 3 above. Read the source code if you want to change"
    }
}
```

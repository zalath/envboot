# EnvBoot

- a tool for bootup my work environment.
- electron,electorn-forge used.

## install
- run
    - npm install
    - npm start
- build
    - electron-forge make
## view
![envboot](http://tm.99-k.com/envboot.jpg "envboot")

## next
- config page

## tag
- for child window is not stable in electron, I decide abonden this part and the right side of this app.
- change style to battle menu and provide extra minimal style

# end this project and start a new one

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
            "name":"pm",
            "id":"pm",
            "url":"http://pm.site.of.yours",
            "rotate:5
        },
        "2":{
            "name":"tm",
            "id":"tm",
            "url":"http://site.of.yours.too",
            "rotate":7
        }
    },
    "boot":{
        "1":"C:/Progra...icat.exe",
        "2":"C:/Pr...ient/filezilla.exe",
        "3":"C:/Users/z....tion/chrome.exe"
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
    "menu":{//menu at middle loaded from here.
        "1":{
            "name":"starter",
            "id":"starter",
            "url":"http://site.of.yours",//any url, will add a iframe to load this on the right side
            "rotate":5//the degree this menu buttom rotates,only provide [5,7,10,15,-5,-7,-10,-15] to pick from
        },
        "2":{
            "name":"pm",
            "id":"pm",
            "url":"http://site.of.yours.too",
            "rotate":7
        }
    },
    "boot":{// some programe to start, if you want more, just follow the number and addin
        "1":"C:/P....at Premium 12/navicat.exe",
        "2":"C:/P....P Client/filezilla.exe",
        "3":"C:/Use...ication/chrome.exe"
    }
}
```

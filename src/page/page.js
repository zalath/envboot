const { BrowserWindow,BrowserView, ipcMain } = require("electron");
const winConf = require('../winConf')

class confjs{

}
confjs.init=function(url,id){
    let cwin;
    cwin = new BrowserWindow(winConf.conf)

    const view = new BrowserView()
    cwin.setBrowserView(view)
    view.setBounds({ x: 10, y: 10, width: 1000, height: 1000 })
    view.webContents.loadURL(url)
    // cwin.setMenu(null)
    // cwin.loadURL(`file://${__dirname}/page.html`)
    cwin.webContents.once('ready-to-show',()=>{
        cwin.show()
        // cwin.webContents.send('initd',{'id':id,'url':url})
    })
    // cwin.webContents.openDevTools();
    return cwin
}
module.exports =  confjs;

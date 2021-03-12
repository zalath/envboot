const { app, BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain;
const exec = require('child_process').exec;
const cpu = require('cpu-stat');
const os = require('os');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 2000,
    height: 1200,
    frame:false,
    transparent:true,
    webPreferences:{
      // devTools:false,
      nodeIntegration:true,
      contextIsolation: false,
    }
  });

  mainWindow.webContents.once('dom-ready',()=>{
    data = getconf(init_main);
  });
  
  
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // mainWindow = null;
  });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
ipc.on('openproject',function(event,args){
  exec('code '+args['path'],{});
});
ipc.on('openpath',function(event,args){
  var path = args['path'];
  path = path.replace(/\//g,'\\');
  exec('explorer '+ path,{});
});
ipc.on('closeapp',function(event,args){
  app.quit();
})
ipc.on('boot',function(event,args){
  data = getconf(init_boot);
})

var confdata;
function getconf(func){
  var path = __dirname + '/../c.json';
  var fs = require('fs');
  var confpath = '';
  fs.readFile(path,'utf8',function(err,data){
    if(err) return console.log(err);
    else{
      data = JSON.parse(data);
      confpath = data.confpath;
      fs.readFile(confpath,'utf8',function(err,data){
        if(err) return console.log(err);
        else{
          confdata = JSON.parse(data);
          func();
        }
      });
    }
  });
}
function init_main(){
  mainWindow.webContents.send('initd',confdata);
}
function init_boot(){
  var list = confdata['boot'];
  var i = 1;
  while(typeof(list[i]) != 'undefined'){
    if(list[i].indexOf('/')>0){
      exec('"'+list[i]+'"');
    }else{
      exec(list[i]);
    }
    i++;
  }
}
setInterval(() => {readbit()}, 1000);
function readbit(){
  cpu.usagePercent(usagePercent);
  mainWindow.webContents.send('addmemdata',(os.totalmem()-os.freemem())*100/os.totalmem())
  // read disk usage
  // read network usage
}
function usagePercent(msg,rate,diffsecond){
  if(msg == null){
    mainWindow.webContents.send('addcpudata',rate);
  }
}
ipc.on('readt',function(event,args){
  // console.log('os.freemem'+os.freemem())
})
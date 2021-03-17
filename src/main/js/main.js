window.$ = window.jQuery = require('./static/jquery-3.4.1.min.js');
const ipc = require('electron').ipcRenderer;
window.echarts = require('./static/echarts.js')
// import * as echarts from 'echarts';
function openproject(pname){
  ipc.send('openproject',{path:pname});
}
function openpath(pname){
  ipc.send('openpath',{path:pname});
}
function closeapp(){
  ipc.send('closeapp',{});
}
//init data
ipc.on('initd',function(event,jda){
  //init project list
  var bodyele = $('.st')[0];
  var body = jda.starter;
  for(let d in body){
    if(body[d] == ''){
      bodyele = add_bar(bodyele);
    }else{
      var b = document.createElement('div');
      b.className = 'btn hlb';
      b.setAttribute('onclick',"openproject('"+body[d].path+"');")
      b.setAttribute('oncontextmenu',"openpath('"+body[d].path+"');")
      b.innerText = body[d].name;
      bodyele.appendChild(b);
    }
  };
  //init menu
  var menu = jda.menu;
  var menuele = $('#menu')[0];
  var iframeele = $('#iframes')[0];
  for(let d in menu){
    var li = document.createElement('li');
    li.setAttribute('onclick',"hi('"+menu[d]['id']+"');");
    li.innerText = menu[d]['name'];
    li.className="mbtn hlb mr r"+menu[d]['rotate'];
    menuele.appendChild(li);
    
    $('iframe.showw').removeClass('showw');
    var ifm = document.createElement('iframe');
    ifm.setAttribute('id',menu[d]['id']+'w');
    ifm.setAttribute('src',menu[d]['url']);
    console.log(menu);
    console.log(d);
    ifm.className='face fr showw';
    iframeele.appendChild(ifm);
  }
  var li = document.createElement('li');
  li.setAttribute('onclick',"hi('');");
  li.innerText = 'close';
  li.className="mbtn hlb mr r7";
  menuele.appendChild(li);
  //for test
  var li = document.createElement('li');
  li.setAttribute('onclick',"readt();");
  li.innerText = 'test';
  li.className="mbtn hlb mr r-15";
  menuele.appendChild(li);
  init_hlight();
});
//switch display
function hi(id){//hightlight
  $('.fr').removeClass('showw');
  $('.fr').addClass('hidew');
  if(id != ''){
    setTimeout(() => {
      $('.face-r').addClass('showw');
      $('.face-b').addClass('showw');
      $('#'+id+'w').addClass('showw');
    },100);
  }
}
function toggle(id){
  $('.starter').removeClass('showst');
  $('.starter').addClass('hidest');
  if(id!=''){
    setTimeout(() => {
      $('.st-shadow-b').addClass('showst')  
      $('.st-shadow-r').addClass('showst')
      $('.'+id).addClass('showst');
    }, 100);
  }
}
//add an empty line to the list
function add_bar(body){
  var b = document.createElement('br');
  b.style.clear = 'both';
  var b1 = document.createElement('br');
  b1.style.clear = 'both';
  body.appendChild(b);
  body.appendChild(b1);
  return body;
}
//start basic work environment
function boot(){
  ipc.send('boot',{});
}
function readt(){
  ipc.send('readt',{});
}
function reload(){
  var e = $('iframe.showw')[0];
  e.src = e.src;
}
function tobrowser(){
  var e = $('iframe.showw')[0];
  ipc.send('tobrowser',e.src);
}
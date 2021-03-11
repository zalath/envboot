window.$ = window.jQuery = require('./jquery-3.4.1.min.js');
    const ipc = require('electron').ipcRenderer;
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
          b.className = 'btn';
          b.setAttribute('onclick',"openproject('"+body[d].path+"');")
          b.setAttribute('oncontextmenu',"openpath('"+body[d].path+"');")
          b.innerText = body[d].name;
          bodyele.appendChild(b);
        }
      };
      //init menu
      // var menu = jda.menu;
      // var menuele = $('#menu')[0];
      // for(let d in menu){
        // var li = document.createElement('li');
        // li.setAttribute('onclick',"hi('"+menu[d]['id']+"w');");
        // li.innerText = menu[d]['name'];
        // li.className="mbtn gy";
        // menuele.appendChild(li);
      // }
      //pm N tm init
      var url = jda.url;
      var pmele = document.getElementById('pmw');
      var tmele = document.getElementById('tmw');
      var taskele = document.getElementById('taskw');
      pmele.setAttribute('src',url.pm);
      tmele.setAttribute('src',url.tm);
      taskele.setAttribute('src',url.task);
    });
    //switch display
    function hi(id){//hightlight
      $('.fr').removeClass('showw');
      $('.fr').addClass('hidew');
      if(id != ''){
        $('.face-r').addClass('showw');
        $('.face-b').addClass('showw');
        $('#'+id+'w').addClass('showw');
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
    function toggle(id){
      var ele = $('.'+id);
      var eler = $('.'+id+'-shadow-r');
      var eleb = $('.'+id+'-shadow-b');
      if(ele.hasClass('showst')){
        setTimeout(() => {
          eleb.addClass('hidest');  
          eleb.removeClass('showst');
        }, 70);
        setTimeout(() => {
          eler.addClass('hidest');  
          eler.removeClass('showst');
        }, 35);
        setTimeout(() => {
          ele.addClass('hidest');  
          ele.removeClass('showst');
        }, 0);
      }else{
        setTimeout(() => {
          ele.addClass('showst');
          ele.removeClass('hidest');
        }, 70);
        setTimeout(() => {
          eler.addClass('showst');
          eler.removeClass('hidest');
        }, 35);
        setTimeout(() => {
          eleb.addClass('showst');
          eleb.removeClass('hidest');
        }, 0);
      }
    }
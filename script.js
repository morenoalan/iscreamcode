function Save(){
    console.log('Save button');
}

function Clear(){
    console.log('Clear button');
}

function View(){
    console.log('View button');
}

var screen = document.body;
function Coordinates(e){
    console.log('entrou');
    let offset = screen.getBoundingClientRect();
    let x = e.clientX - offset.left.toFixed();
    let y = e.clientY - offset.top.toFixed();
    console.log(x + ', ' + y);
}

var elementDragging = '';
function DraggingBar(element){
    elementDragging = element.id;
    console.log(elementDragging +' is dragging');
    window.addEventListener('mousemove', function(e) {
        var mouse = {
            page: {
                x: e.pageX,
                y: e.pageY
            },
            client: {
                x: e.clientX,
                y: e.clientY
            }
        };
        console.log(mouse['page'].x + ', ' + mouse['page'].y);
    });
    /*
    let x = element.clientX - offset.left.toFixed();
    let y = element.clientY - offset.top.toFixed();
    console.log(x + ', ' + y);
    */
}

var barJs = document.getElementById('bar-js');
//screen.onmousedown = DraggingBar('barJs');

function NoDraggingBar(){
    console.log(elementDragging + ' is no more dragging');
    elementDragging = '';
}

function BoxSettings(element){
    console.log(element.innerText +' button');
}

function TapEnter(element){
    if(document.getElementById('prompt-input').value != ''){
        let newTagLi = document.createElement('li');
        let newTagP = '<p>'+document.getElementById('prompt-input').value+'</p>';
        newTagLi.innerHTML = newTagP;
        let promptLi = document.getElementById('prompt-li');
        document.getElementById('prompt').insertBefore(newTagLi, promptLi);
        document.getElementById('prompt-input').value = '';
        document.getElementById('prompt-input').focus();
        let x = 0;
        let y = document.getElementById('prompt').scrollHeight;
        document.getElementById('prompt').scrollTo(x,y);
    }
}

document.addEventListener('keydown', function onEvent(event){
    if(event.ctrlKey && event.key === 'z'){
        console.log('Ctrl + z');
        return;
    }else if(event.ctrlKey && event.key === 'Enter'){
        console.log('Ctrl + Enter');
        return;
    }else if (event.key === 'Enter'){
        event.preventDefault();
        if(document.activeElement === document.getElementById('box-html')){
            console.log('html-box');
        }else if(document.activeElement === document.getElementById('box-css')){
            console.log('html-css');
        }else if(document.activeElement === document.getElementById('box-js')){
            console.log('html-js');
        }else if(document.activeElement === document.getElementById('console-input')){
            console.log('console-input');
        }
        //TapEnter();
        return;
    }
});

function autoHeight(element) {
    element.style.height = '1px';
    element.style.height = element.scrollHeight + 'px';
}

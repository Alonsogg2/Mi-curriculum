var estadoViewMy, estadoViewData, estadoViewAbilities=false;

function viewMy(){
    var article=document.getElementById("titulo1");
    if(estadoViewMy==true){
    article.style.display='none';
    estadoViewMy=false;
    }else{
    estadoViewMy=true;
    article.style.display='block';
}
}

function viewData(){
    var article=document.getElementById("titulo2");
    if(estadoViewData==true){
    article.style.display='none';
    estadoViewData=false;
    }else{
    estadoViewData=true;
    article.style.display='grid';
}
}


function viewAbilities(){
    var article=document.getElementById("titulo3");
    if(estadoViewAbilities==true){
    article.style.display='none';
    estadoViewAbilities=false;
    }else{
    estadoViewAbilities=true;
    article.style.display='grid';
}
}

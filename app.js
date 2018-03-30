window.onload = function(){
    var dirt = document.getElementsByClassName('dirt');
    var sound = document.getElementById('seeingSounds');
    var grid = document.getElementById('dirt-box');
    for(let i = 0; i < dirt.length; i++){
        dirt[i].addEventListener('click', function(){
            if(dirt[i].innerHTML){
                sound.play()
               dirt[i].innerHTML = "";
            } else {
                console.log('Nothing is here');
                )
            }
        })
    }


}

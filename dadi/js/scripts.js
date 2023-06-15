const myButton = document.querySelector ('button');
myButton.addEventListener('click',function(){
    let user = document.querySelector('.user')
    //console.log(user)
    let pc = document.querySelector('.pc')
    //console.log(pc)
    let result = document.querySelector('.result')
    //console.log(result)

    //generazione numeri random 
    let randomUser = Math.floor(Math.random() * 6) + 1;
    //console.log('numero random user',randomUser);
    user.innerHTML = (randomUser);

    let randomPc = Math.floor(Math.random() * 6) + 1;
    //console.log('numero random pc',randomPc);
    pc.innerHTML = (randomPc);

    if(randomUser>randomPc){
        result.innerHTML='Hai vinto'
    }else if (randomUser<randomPc){
        result.innerHTML='Hai perso'
    }else{
        result.innerHTML='Pareggio'
    }

});
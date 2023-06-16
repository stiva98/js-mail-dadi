const myButton = document.querySelector ('button');
myButton.addEventListener('click',function(){
    const user = document.querySelector('.user')
    //console.log(user)
    const pc = document.querySelector('.pc')
    //console.log(pc)
    const result = document.querySelector('.result')
    //console.log(result)

    //generazione numeri random 
    const randomUser = Math.floor(Math.random() * 6) + 1;
    //console.log('numero random user',randomUser);
    user.innerHTML = (randomUser);

    const randomPc = Math.floor(Math.random() * 6) + 1;
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
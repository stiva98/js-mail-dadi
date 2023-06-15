const email = document.getElementById('email');
const myArray = ['samuele@gmail.com', 'stivaletti@gmail.com', 'pincopallino@gmail.com', 'pallino@gmail.com'];
//console.log(myArray)

const myButton = document.querySelector('button'); 
myButton.addEventListener('click',function(){
    const emailval = email.value;
    let flag = 0;
    for (let i = 0; i<myArray.length; i++) {
        
        if(emailval == myArray[i]) {
            flag = 1;
        }
    }

    if(flag == 1) {
        //console.log('Puoi accedere')
        alert('email valida')
    }else {
        //console.log('Non puoi accedere')
        alert('email non valida')
    }
    
});


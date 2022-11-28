let pass = document.querySelector('.icon');
pass.addEventListener('click',()=>{
    let input = document.querySelector('.pass');
    if (pass.classList.contains('bi-eye-slash-fill')){
        pass.classList.remove('bi-eye-slash-fill');
        pass.classList.add('bi-eye-fill');  
        input.type = 'text';
    }else{
        pass.classList.add('bi-eye-slash-fill');
        pass.classList.remove('bi-eye-fill');
        input.type = 'password';
    }   
});
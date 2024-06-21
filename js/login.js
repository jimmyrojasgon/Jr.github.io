
  const email = document.getElementById("email")
  const pass = document.getElementById("pass")
  const parrafo = document.getElementById('warnings')
  const form = document.getElementById('formulario')
    
    form.addEventListener('button', e=>{
      e.preventDefault();
      let warnings = " "
      let entrar = false
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      parrafo.innerHTML = " "
      console.log(regexEmail.test(email.value))
      if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>' 
        entrar = true
      }
      if(pass.value.length <8){
        warnings += 'La contraseña no es valido <br>'
        entrar = true
      }
      if(entrar){
        parrafo.innerHTML = warnings
      }

    })
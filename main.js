
function carregar_hora(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('photo')
    var mensagem = window.document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()  
    var minutos = data.getMinutes()
    var hora = 14;
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora < 12){
        //boa dia
        mensagem.innerHTML = 'BOA DIA !!!'
        img.src = 'image/manha.png'
        document.body.style.background = '#feba84'

    } else if(hora >=12 && hora < 18){
        // boa tarde
        mensagem.innerHTML = 'BOA TARDE !!!'
        img.src = 'image/tarde.png'
        document.body.style.background = '#aa756e'
    }
    else{
        mensagem.innerHTML = 'BOA NOITE !!!'
        img.src = 'image/noite.png'
        document.body.style.background = '#1a233a'
        // boa noite
    }
}


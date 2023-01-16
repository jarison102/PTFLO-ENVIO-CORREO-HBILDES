function EnviarCorreo (){
const data = new Formdata();
data.append('name'),document.getElementById('nombre');
data.append('email'),document.getElementById('correo');
data.append('motive'),document.getElementById('asunto');
data.append('message'),document.getElementById('mensaje');
data.append('destination','jarimices@gmail.com')
axios.post('https://jhoncamargo.000webhostapp.com/controller/correo.php',data).then((resp)=>{
    if(resp.data.success){
        return alert ("Formulario Enviado Con exito")
    }
     alert ("Formulario No enviado")
});
}

    
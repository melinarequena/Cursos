const formularios = document.querySelectorAll(".formularioAjax");

function enviar_formulario_ajax(e){
    e.preventDefault(); //al enviar no se redirecciona al cargarphp

    let enviar = confirm('Desea enviar el formulario?');

    if(enviar){
        let data = new FormData(this);
        let method = this.getAttribute('method');
        let action = this.getAttribute('action');

        let encabezados = new Headers();

        let config={
            method: method,
            headers: encabezados,
            mode: 'cors',
            cache: 'no-cache',
            body: data
        };

        fetch(action, config)
        .then(respuesta => respuesta.text()) //recibimos promesa
        .then(respuesta => { //segunda promesa en donde msotramos resuesta
            alert(respuesta)})
    }

}

formularios.forEach(formularios => {
    formularios.addEventListener("submit", enviar_formulario_ajax);
});
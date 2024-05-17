const c_nombre = document.getElementById("nombre")
const c_apellido = document.getElementById("apellido")
const c_valoracion = document.getElementById("valoracion")
const c_review = document.getElementById("review")
const c_form = document.getElementById("form")
const texto_done = document.getElementById("done")
const texto_warn = document.getElementById("warnings")

c_form.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let done = "Formulario enviado correctamente"
        let entrar = false
        texto_warn.innerHTML = ""
        texto_done.innerHTML = ""
        if(c_nombre.value.length < 3 && c_nombre.value.length > 0)
            {
                warnings += `El nombre debe de tener al menos 3 caracteres<br>`
                entrar = true
            }
        if(c_nombre.value == 0)
            {
                warnings += `Tiene que ingresar su nombre <br>`
                enter = true
            }
        if(c_apellido.value.length < 3 && c_apellido.value.length > 0)
            {
                warnings += `El apelldio debe de tener al menos 3 caracteres<br>`
                entrar = true
            }
        if(c_apellido.value.length == 0)
            {
                warnings += `Tiene que ingresar su apellido<br>`
            }
        if(c_valoracion.value == "Seleccione una opción")
            {
                warnings += `Tiene que elegir una opción para poder valorar<br>`
                entrar = true
            }
        if(entrar)
            {
                texto_warn.innerHTML = warnings
            }
        else
            {
                texto_done.innerHTML = done
            }
    })
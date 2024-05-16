function CargarPlatos()
{
    let url='http://localhost:3300/Menu';

    fetch(url)
    .then(response => response.json())
    .then(data => MostrarPlatos(data))
    .catch(error => console.log(error))

    const MostrarPlatos=(data)=>
        {
            console.log(data)
            let text_id=""
            let text_nombre=""
            let text_precio=""
            let text_imagen=""
            
            for(var i=0; i<data.length; i++)
                {
                    text_id+=`<tr>
                              <td><i class="fa-solid fa-hashtag"></i>${data[i].id}</td>
                              </tr>`
                    document.getElementById("Id"+i).innerHTML=text_id;

                    text_id=""
                }

            for(var i=0; i<data.length; i++)
                {
                    text_nombre+=`<tr>
                                  <td>${data[i].nombre}</td>
                                  </tr>`
                    document.getElementById("Nombre"+i).innerHTML=text_nombre;

                    text_nombre=""
                }

            for(var i=0; i<data.length; i++)
                {
                    text_precio+=`<tr>
                                 <td><i class="fa-regular fa-dollar-sign"></i> ${data[i].precio}</td>
                                 </tr>`
                    document.getElementById("Precio"+i).innerHTML=text_precio;

                    text_precio=""
                }

            for(var i=0; i<data.length; i++)
                {
                    text_imagen+=`<tr>
                                  <td>${data[i].imagen}</td>
                                  </tr>`
                    document.getElementById("Imagen"+i).innerHTML=text_imagen;

                    text_imagen=""
                }             
        }
}

function CargarBebidas()
{
    let text_id=""
    let text_nombre=""
    let text_tipo=""
    let text_imagen=""
    let contador=0

    for(var j=0; j<9; j++)
        {   
            let url="https://www.thecocktaildb.com/api/json/v1/1/random.php";
            fetch(url)
            .then(response => response.json())
            .then(data => MostrarBebidas(data))
            .catch(error => console.log(error))
            const MostrarBebidas=(data)=>
                {
                    console.log(data.drinks[0])
                    let MyBebida = data.drinks[0];

                    console.log(MyBebida.idDrink)
                    console.log(MyBebida.strDrink)
                    console.log(MyBebida.strCategory)
                    console.log(MyBebida.strDrinkThumb)

                    
                    text_id+=`<tr>
                            <td><i class="fa-solid fa-hashtag"></i>${MyBebida.idDrink}</td>
                            </tr>`
                    document.getElementById("Id"+contador).innerHTML=text_id;
                    text_id=""

                    text_nombre+=`<tr>
                                <td>${MyBebida.strDrink}</td>
                                </tr>`
                    document.getElementById("Nombre"+contador).innerHTML=text_nombre;
                    text_nombre=""

                    text_tipo+=`<tr>
                                <td>Tipo : ${MyBebida.strCategory}</td>
                                </tr>`
                    document.getElementById("Precio"+contador).innerHTML=text_tipo;
                    text_tipo=""

                    text_imagen+=`<tr>
                                <td><img src="${MyBebida.strDrinkThumb}"></td>
                                </tr>`
                    document.getElementById("Imagen"+contador).innerHTML=text_imagen;
                    text_imagen=""

                    contador = contador + 1                       
                }
        }
}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max-min)+min);
}

function CargarTodo()
{
    contador= 0
    for(var i=0; i<9; i++)
        {
            v_random = Math.floor(Math.random() * 2);
            j = Math.floor(Math.random() * 9);
            if(v_random == 0)
                {
                    let text_id=""
                    let text_nombre=""
                    let text_tipo=""
                    let text_imagen=""
             
                    let url="https://www.thecocktaildb.com/api/json/v1/1/random.php";
                    fetch(url)
                    .then(response => response.json())
                    .then(data => MostrarBebidas(data))
                    .catch(error => console.log(error))
                    const MostrarBebidas=(data)=>
                        {
                            console.log(data.drinks[0])
                            let MyBebida = data.drinks[0];

                            console.log(MyBebida.idDrink)
                            console.log(MyBebida.strDrink)
                            console.log(MyBebida.strCategory)
                            console.log(MyBebida.strDrinkThumb)

                                    
                            text_id+=`<tr>
                                    <td><i class="fa-solid fa-hashtag"></i>${MyBebida.idDrink}</td>
                                            </tr>`
                            document.getElementById("Id"+contador).innerHTML=text_id;
                            text_id=""

                            text_nombre+=`<tr>
                                        <td>${MyBebida.strDrink}</td>
                                        </tr>`
                            document.getElementById("Nombre"+contador).innerHTML=text_nombre;
                            text_nombre=""

                            text_tipo+=`<tr>
                                        <td>Tipo : ${MyBebida.strCategory}</td>
                                        </tr>`
                            document.getElementById("Precio"+contador).innerHTML=text_tipo;
                            text_tipo=""

                            text_imagen+=`<tr>
                                        <td><img src="${MyBebida.strDrinkThumb}"></td>
                                        </tr>`
                            document.getElementById("Imagen"+contador).innerHTML=text_imagen;
                            text_imagen=""
                            
                            contador = contador + 1  
                        }
                }
            if(v_random == 1)
                {
                    let text_id=""
                    let text_nombre=""
                    let text_precio=""
                    let text_imagen=""

                    let url='http://localhost:3300/Menu';
                    fetch(url)
                    .then(response => response.json())
                    .then(data => MostrarPlatos(data))
                    .catch(error => console.log(error))
                    const MostrarPlatos=(data)=>
                        {
                            console.log(data)
                            
                            text_id+=`<tr>
                                    <td><i class="fa-solid fa-hashtag"></i>${data[j].id}</td>
                                    </tr>`
                            document.getElementById("Id"+contador).innerHTML=text_id;

                            text_id=""

                            text_nombre+=`<tr>
                                        <td>${data[j].nombre}</td>
                                        </tr>`
                            document.getElementById("Nombre"+contador).innerHTML=text_nombre;

                            text_nombre=""
                                
                            text_precio+=`<tr>
                                        <td><i class="fa-regular fa-dollar-sign"></i> ${data[j].precio}</td>
                                        </tr>`
                            document.getElementById("Precio"+contador).innerHTML=text_precio;

                            text_precio=""
                            
                            text_imagen+=`<tr>
                                        <td>${data[j].imagen}</td>
                                        </tr>`
                            document.getElementById("Imagen"+contador).innerHTML=text_imagen;

                            text_imagen=""     
                                
                            contador = contador + 1  
                            j = Math.floor(Math.random() * 9);                  
                        }
                        
                }
                
            
        }
}

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    var cuerpo = valor.slice(0,-1);
    var dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    var suma = 0;
    var multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(var i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        var index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    var dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 11)?0:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
    return true;
}


function mostrarContrasena() {
    var passwordInput = document.getElementById("password");
    var icon = document.querySelector("show-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-regular fa-eye");
        icon.classList.add("fa-regular fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-regular fa-eye-slash");
        icon.classList.add("fa-regular fa-eye");
    }
}




const formulario = document.getElementById("formLogin");

const mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", async (e) => {

    e.preventDefault();


    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;



    try {


        const respuesta = await fetch("/api/usuarios/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                usuario,
                password

            })

        });



        const datos = await respuesta.json();



        if (respuesta.ok) {


            mensaje.textContent = "Login correcto. Redirigiendo...";


            setTimeout(() => {

                window.location.href = "admin.html";

            }, 1000);



        } else {


            mensaje.textContent = datos.mensaje;


        }



    } catch(error) {


        console.error(error);

        mensaje.textContent = "Error al conectar con el servidor";


    }


});
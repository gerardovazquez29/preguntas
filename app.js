
        let tiempoTerminado;
        let tiempoRestante;

     
       function comenzarCuentaRegresiva() {
        tiempoTerminado = setTimeout(tiempoCumplido, 30000);
        tiempoRestante = setInterval(tiempoFaltante, 1000);

        document.getElementById("cuentaRegresiva").textContent = 30;
        //inicia el tiempo
       }

       function tiempoFaltante() {
            let tiempo = document.getElementById("cuentaRegresiva").textContent;

            if (tiempo > 0) {
                tiempo--;
                document.getElementById("cuentaRegresiva").textContent = tiempo;
                //muestra el tiempo restante
            }
       }
       function tiempoCumplido() {
            clearInterval(tiempoRestante);
            document.getElementById("cuentaRegresiva").textContent = 0;
            document.getElementById("audioFinal").play();
            alert("Game Over: Se acabo el tiempo");
            //detiene el tiempo y muestra un mensaje y un sonido
       }

       function finalizado() {
            clearInterval(tiempoRestante);
            clearTimeout(tiempoTerminado);
            //detiene el tiempo

            let fecha = new Date();
            //obtiene fecha y hora actual

            let respuesta1 = document.getElementById("respuesta1").value;
            let respuesta2 = document.getElementById("respuesta2").value;
            let respuesta3 = document.getElementById("respuesta3").value;
            let respuesta4 = document.getElementById("respuesta4").value;
            let respuesta5 = document.getElementById("respuesta5").value;
            //obtiene los valores de los elementos de entrada por sus ID


            //Construye un mensajecon la fecha y las respuestas
            let mensaje = fecha.toLocaleDateString("es-ES") + "\n" +
                            "1. " + respuesta1 + "\n" +
                            "2. " + respuesta2 + "\n" +
                            "3. " + respuesta3 + "\n" +
                            "4. " + respuesta4 + "\n" +
                            "5. " + respuesta5 ;

            alert(mensaje);
       }

       function volverAIntentar() {
            location.reload();
            //recarga la pagina
       }
       
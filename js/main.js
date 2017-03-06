function validateForm(){

	 var nombre = document.getElementById("name").value;
	 var apellido = document.getElementById("lastname").value;
	 var correo = document.getElementById("input-email").value;
	 var contraseña = document.getElementById("input-password").value;
	 var bici = document.getElementsByTagName("select")[0].value;

//Validación nombre y apellido
	 var az = /^[a-zA-Z]+$/;
			 if (nombre, apellido, correo, contraseña == ""){
					 alert("Campo obligatorio");
			 }
			 else if (nombre.charAt(0) == nombre.charAt(0).toLowerCase() || apellido.charAt(0) == apellido.charAt(0).toLowerCase()){
			 		 alert("La primera letra de tu nombre o apellido debe ser Mayúscula");
			 }
			 else if (!az.test(nombre) || !az.test(apellido)){
					 alert("Ingrese sólo letras");
			 }

//Validación email
	 var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!expr.test(correo) ){
				 	alert("La dirección de correo " + correo + "es inválida");
		 	 }

//Validación password
		 	if(contraseña == "123456" || contraseña =="password" || contraseña == "098754"){
			 		alert("Por favor ingrese otra contraseña");
		 	}
		 	else if(contraseña.length < 5){
			 		alert("Contraseña al menos de 6 caracteres");
		 	}

//validación selecciona bici
	 		if ( bici == 0){
			 		alert("Selecciona tu tipo de bici");
	 		}
}

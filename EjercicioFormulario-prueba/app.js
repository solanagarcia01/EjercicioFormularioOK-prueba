const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	dni: /^\d{8,9}$/, // 8 a 9 números.
	edad: /^(1[8-9]|[2-9][0-9]|100)$/,
	fecha: /^(19\d\d|20[0-2]\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // Formato de fecha YYYY-MM-DD
	domicilio: /^[a-zA-Z0-9\- ]{5,40}$/, // Letras, numeros

}

const campos = {
	nombre: false,
    apellido: false,
	password: false,
	dni: false,
	edad: false,
	domicilio: false,
	fecha: false,
	sexo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
		case "edad":
			validarCampo(expresiones.edad, e.target, 'edad');
		break;
		case "fecha":
			validarFechaNacimiento(expresiones.fecha, e.target, 'fecha');
			validarFechaNacimiento(e.target);
		break;
		case "domicilio":
			validarCampo(expresiones.domicilio, e.target, 'domicilio');
		break;
		case "sexo":
            validarSexo();
        break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

const validarFechaNacimiento = (input) => {
	const fechaNacimiento = new Date(input.value);
	const hoy = new Date();
	const edad = Math.floor((hoy - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000));
  
	if (isNaN(fechaNacimiento.getTime())) {
	  // No es una fecha válida
	  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-incorrecto');
	  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-correcto');
	  document.querySelector(`#grupo__fecha i`).classList.add('fa-times-circle');
	  document.querySelector(`#grupo__fecha i`).classList.remove('fa-check-circle');
	  document.querySelector(`#grupo__fecha .formulario__input-error`).classList.add('formulario__input-error-activo');
	  campos.fecha = false;
	} else if (edad < 18 || edad > 100) {
	  // La edad está fuera del rango
	  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-incorrecto');
	  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-correcto');
	  document.querySelector(`#grupo__fecha i`).classList.add('fa-times-circle');
	  document.querySelector(`#grupo__fecha i`).classList.remove('fa-check-circle');
	  document.querySelector(`#grupo__fecha .formulario__input-error`).classList.add('formulario__input-error-activo');
	  campos.fecha = false;
	} else {
	  // La fecha es válida y la edad está en el rango
	  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-incorrecto');
	  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-correcto');
	  document.querySelector(`#grupo__fecha i`).classList.add('fa-check-circle');
	  document.querySelector(`#grupo__fecha i`).classList.remove('fa-times-circle');
	  document.querySelector(`#grupo__fecha .formulario__input-error`).classList.remove('formulario__input-error-activo');
	  campos.fecha = true;
	}
  };


  // Función para validar el campo de sexo (radio button)
  const validarSexo = () => {
    const sexoRadios = document.querySelectorAll('input[name="sexo"]');
    let seleccionado = false;

    sexoRadios.forEach(radio => {
        if (radio.checked) {
            seleccionado = true;
        }
    });

    if (seleccionado) {
        document.getElementById(`grupo__sexo`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__sexo`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__sexo .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['sexo'] = true;
    } else {
        document.getElementById(`grupo__sexo`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__sexo`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__sexo .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['sexo'] = false;
    }
}
  
  inputs.forEach((input) => {
	  input.addEventListener('keyup', validarFormulario);
	  input.addEventListener('blur', validarFormulario);
  });

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.apellido && campos.nombre && campos.dni && campos.grado && campos.fecha && campos.domicilio && sexo.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});


// Envio de Datos a controller.php

$('#Enviar').click(function(){

	$.post('controller.php',
	{
		nom:$('#nombre').val(),
		apellido:$('#apellido').val(),
		dni:$('#dni').val(),
		grado:$('#grado').val(),
		edad:$('#edad').val(),
		fecha:$('#fecha').val(),
		domicilio:$('#domicilio').val(),
		sexo:$('#sexo').val(),
	},
	


	
	
	)

}

)

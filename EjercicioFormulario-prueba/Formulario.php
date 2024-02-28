<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>

    <header>
        <img class="Logo" src="https://www.cge.mil.ar/cge2020/wp-content/uploads/2020/04/Mesa-de-trabajo-1@3x.png" alt="Logo">
        <ul class="nav nav-underline">
            <li class="nav-item">
                <a class="nav-link active" href="Grados.html" onclick="mostrarSeccion('Grados'); return false;">Grados</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ingreso"  aria-current="page" href="Ingreso.html" onclick="mostrarSeccion('Ingreso'); return false;">Ingreso</a>
            </li>
            <li class="nav-item">
                <a class="nav-link formulario" href="Formulario.html" onclick="mostrarSeccion('Formulario'); return false;">Formulario</a>
            </li>
        </ul>
    </header>


            <form action="" class="formulario" id="formulario">

                 <!-- Grupo: Nombre -->
                 <div class="formulario__grupo" id="grupo__nombre">
                    <label for="nombre" class="formulario__label">Nombre</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="nombre" id="nombre">
                        <!-- Icono para validar estado -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El nombre debe ser de al menos 4 caracteres.</p>
                </div>

                <!-- Grupo: Apellido -->
                <div class="formulario__grupo" id="grupo__apellido">
                    <label for="apellido" class="formulario__label">Apellido</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="apellido" id="apellido">
                        <!-- Icono -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El apellido debe ser de al menos 4 caracteres.</p>
                </div>

                 <!-- Grupo: DNI -->
                 <div class="formulario__grupo" id="grupo__dni">
                    <label for="dni" class="formulario__label">DNI</label>
                    <div class="formulario__grupo-input">
                        <input type="dni" class="formulario__input" name="dni" id="dni">
                        <!-- Icono -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El DNI solo puede contener entre 8 y 9 números. </p>
                </div>

    
                 <!-- Grupo: Grado -->
                 <div class="formulario__grupo" id="grupo__grado">
                    <label for="grado" class="formulario__label">Grado</label>
                        <div class="formulario__select">
                            <select name="grado" id="grado">
                            <option value="teniente_general">Teniente General</option>
                            <option value="general_division">General de División</option>
                            <option value="general_brigada">General de Brigada</option>
                            <option value="coronel_mayor">Coronel Mayor</option>
                            <option value="coronel">Coronel</option>
                            <option value="teniente_coronel">Teniente Coronel</option>
                            <option value="mayor">Mayor</option>
                            <option value="capitan">Capitan</option>
                            <option value="teniente_primero">Teniente Primero</option>
                            <option value="teniente">Teniente</option>
                            <option value="subteniente">Subteniente</option>
                            <option value="suboficial_mayor">Suboficial Mayor</option>
                            <option value="suboficial_principal">Suboficial Principal</option>
                            <option value="sargento_ayudante">Sargento Ayudante</option>
                            <option value="sargento_principal">Sargento Primero</option>
                            <option value="sargento">Sargento</option>
                            <option value="cabo_primero">Cabo Primero</option>
                            <option value="cabo">Cabo</option>
                            <option value="voluntario_primera">Voluntario de Primera</option>
                            <option value="voluntario_segunda">Voluntario de Segunda</option>
                            </select>
                            <!-- Icono -->
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El apellido debe ser de al menos 4 caracteres.</p>
                </div>

                <!-- Grupo: Edad -->
                <div class="formulario__grupo" id="grupo__edad">
                    <label for="edad" class="formulario__label">Edad</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="edad" id="edad">
                        <!-- Icono -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La edad solo puede contener numeros entre 18 y 100.</p>
                </div>

                <!-- Grupo: Fecha de Nacimiento -->
                <div class="formulario__grupo" id="grupo__fecha">
                    <label for="fecha" class="formulario__label">Fecha de Nacimiento</label>
                    <div class="formulario__grupo-input">
                        <input type="date" class="formulario__input" name="fecha" id="fecha">
                        <!-- Icono -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error"> Debes ser mayor de 18 años y menor de 100.</p>
                </div>
                

                 <!-- Grupo: Domicilio -->
                 <div class="formulario__grupo" id="grupo__domicilio">
                    <label for="domicilio" class="formulario__label">Domicilio</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="domicilio" id="domicilio">
                        <!-- Icono -->
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El apellido debe ser de al menos 4 caracteres.</p>
                </div>
    
                <!-- Grupo: Sexo -->
                <div class="formulario__grupo" id="grupo__terminos">
                    <label for="sexo_femenino" class="formulario__label">Sexo</label>
                    <div class="formulario__grupo-radio">
                        <!-- Opción Femenino -->
                        <input type="radio" name="sexo" id="sexo_femenino">
                        <label for="sexo_femenino">Femenino</label>
                        
                        <!-- Opción Masculino -->
                        <input type="radio" name="sexo" id="sexo_masculino">
                        <label for="sexo_masculino">Masculino</label>
                    </div>
                </div>
    
                <div class="formulario__mensaje" id="formulario__mensaje">
                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                </div>
    
                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <button type="submit" class="formulario__btn">Enviar</button>
                    <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
                </div>
            </form>
        </main>
        
        <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

        <script src="app.js"> </script>

        
        
    </body>

</html>

        
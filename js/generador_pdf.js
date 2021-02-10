

function formato_a_pdf(){

    var doc = new jsPDF();
    var nombre_solicitante = document.getElementById('nombre_solicitante').value;
    var empresa_cargo = document.getElementById('empresa_cargo').value;
    var telefono = document.getElementById('telefono').value.toString();
    var observaciones = document.getElementById('observaciones').value;
    var data_plataforma_1 = document.getElementById('plataforma_1').value;
    var data_perfiles_1 = document.getElementById('perfiles_1').value;
    var data_plataforma_2 = document.getElementById('plataforma_2').value;
    var data_perfiles_2 = document.getElementById('perfiles_2').value;
    var data_plataforma_3 = document.getElementById('plataforma_3').value;
    var data_perfiles_3 = document.getElementById('perfiles_3').value;
    var data_plataforma_4 = document.getElementById('plataforma_4').value;
    var data_perfiles_4 = document.getElementById('perfiles_4').value;
    var data_plataforma_5 = document.getElementById('plataforma_5').value;
    var data_perfiles_5 = document.getElementById('perfiles_5').value;
    var data_plataforma_6 = document.getElementById('plataforma_6').value;
    var data_perfiles_6 = document.getElementById('perfiles_6').value;
    var periodo_uso_vpn = document.getElementById('periodo_uso_vpn').value;
    var tipo_acceso_vpn = document.getElementById('tipo_acceso_vpn').value;
    var destino_vpn = document.getElementById('destino_vpn').value;
    var servicio_vpn = document.getElementById('servicio_vpn').value;
    var autorizado = document.getElementById("autorizados").value;
    var cedula_autorizado = document.getElementById("cedula_autorizado").value;
    var cargo_autorizado = document.getElementById("cargos_etb_autorizado").value;
    var supervisor = document.getElementById("supervisor").value;
    var cedula_supervisor = document.getElementById("cedula_supervisor").value;
    var cargo_supervisor = document.getElementById("cargos_etb_supervisor").value;
    var contrato = document.getElementById("contrato").value;
    var vicepesidencia = document.getElementById("vicepresidencia").value;
    var grupo_area = document.getElementById('grupo_area').value;

    // Optional - set properties on the document
    doc.setProperties({
        title: 'Gestion de Usuarios Acceso a plataformas 05.1-05.1.2-F-021-v.11',
        subject: 'Formato WEB',
        author: 'David Castro G. - Mesa Gestión de Servicios, DASC',
        keywords: 'formato, acceso a plataformas, MGS, ETB',
        creator: 'MGS'
    });

    //var logo = 'data:image/jpeg;base64,'+ Base64.encode('img/etb_logo.jpg');
    //logo.src = path.resolve('img/etb_logo.jpg');

    //pos x ,pox y, ancho, largo/alto
    doc.rect(20, 20, 170, 260)//Rectangulo principal

    // /*/*/*/*/*/*/*/*/Encabezado */*/*/*/*/*/*/*/*/*/*/*/*
    doc.setFontSize(6);
    doc.text('Formato',105, 22, 'center');
    doc.setFontType('bold');
    doc.text(32, 22, 'Código');
    doc.line(160, 20, 160 ,30);//Linea vertical imagen etb
    doc.line(20,22.5,160,22.5);
    doc.text('Gestión de Usuarios para Acceso a Plataformas', 105, 27, 'center');
    //doc.addImage(imgData, 'JPEG', 165, 22, 8, 5);
    doc.line(50,20,50 ,30);//Linea vertical
    
    doc.text(25, 24.5, '05.1-05.1.2-F-021-v.11');
    doc.line(20,25,50,25);
    doc.text(27, 27, 'Fecha de Emisión');
    doc.line(20,27.5,50,27.5);
    doc.text(24, 29.5, '18');
    doc.text(34, 29.5, '01');
    doc.text(42.5, 29.5, '2020');
    doc.line(30, 27.5, 30 ,30);//Linea vertical día
    doc.line(40, 27.5, 40 ,30);//Linea vertical mes
    doc.line(20,30,190,30);

    doc.setFontType('normal');
    doc.setFontSize(4);
    doc.line(77.5, 30, 77.5 ,53);//Linea vertical Elaborado por
    doc.text(20.5, 32, 'Elaborado por:');
    doc.text(20.5, 34, 'Dirección Aseguramiento Servicios Corporativos');
    doc.text(20.5, 36, '_Andres Julian Romero Romero - Mesa Gestión Acceso');
    doc.text(20.5, 40, 'Dirección Aseguramiento Servicios Corporativos');
    doc.text(20.5, 42, '_Marcy Nayibe Motta Gil – Gerente Proyectos II Aseguramiento - Colvatel');
    doc.line(132.5, 30, 132.5 ,53);//Linea vertical Revisado Por
    doc.text(78, 32, 'Revisado por:');
    doc.text(78, 34, 'Dirección Aseguramiento Servicios Corporativos');
    doc.text(78, 36, '_Jaime Enrique Cortes Calvache - Director');
    doc.text(78, 38, '_William Gaona Díaz – Profesional Especializado II');
    doc.text(78, 41, 'Dirección Gestión Plataformas de Red');
    doc.text(78, 43, 'Omar Orlando Guevara Guevara- Director (E)');
    doc.text(78, 45, 'Jenny Elizabeth Caipe Balcázar – Profesional Especializado II');
    doc.text(78, 48, 'Dirección Administración de Red');
    doc.text(78, 50, '_Rubén Velásquez Castañeda - Director');
    doc.text(78, 52, '_Luis Eduardo Muñoz Romero - Profesional Especializado II');
    //Aprobado Por
    doc.text(133, 32, 'Aprobado por:');
    doc.text(133, 34, 'Vicepresidencia Operaciones');
    doc.text(133, 36, 'Gerencia Servicios Corporativos');
    doc.text(133, 38, '_William Reinaldo Cabrera Velásquez - Gerente');
    doc.text(133, 41, 'Vicepresidencia Infraestructura');
    doc.text(133, 43, 'Gerencia Administración de Red');
    doc.text(133, 45, '_Oscar Fernando Restrepo Cespedes - Gerente (E)');
    doc.text(133, 48, 'Dirección Planeación y Control Operacional');
    doc.text(133, 50, '_Jorge Eliecer Angulo Munera - Director');

    //Datos Solicitante
    doc.setFontSize(6);
    doc.setDrawColor(0);
    doc.setFillColor(155,194,230);//Color azul palido  
    doc.rect(20, 53, 170, 3, 'FD');
    doc.setFontType('bold');
    doc.text('DATOS SOLICITANTE', 105, 55.5, 'center');

    doc.setFontType('normal');
    doc.text(22, 62, 'Fecha Solicitud');
    doc.text(39.5, 59.5, 'DD');
    doc.text(48, 59.5, 'MM');
    doc.text(55.5, 59.5, 'AAAA');
    doc.text(40, 62, dia.toString());
    doc.text(48.5, 62, mes.toString());
    doc.text(56, 62, ano.toString());
    doc.line(45, 57, 45 ,62.5);
    doc.line(54, 57, 54 ,62.5);
    doc.line(37,59.5,62,59.5);
    doc.rect(37, 57, 25, 5.5);//Recuadro Fecha
    doc.rect(92, 59, 92, 3.5);//Recuadro nombre
    doc.text(80, 61.5, 'Nombre');
    doc.text( nombre_solicitante, 137.5, 61.5, 'center' );
    doc.rect(40, 65, 95, 3.5);//Recuadro Empresa/Cargo
    doc.text(22, 67.5, 'Empresa / Cargo');
    doc.text( empresa_cargo, 87.5, 67.5, 'center' );
    doc.rect(158, 65, 26, 3.5);//Recuadro telefono
    doc.text(145, 67.5, 'Teléfono');
    doc.text( telefono, 171, 67.5, 'center' );

    // Asunto y Observaciones
    doc.setDrawColor(0);
    doc.setFillColor(155,194,230);//Color azul palido  
    doc.rect(20, 70, 170, 3, 'FD');
    doc.setFontType('bold');
    doc.text('GESTION DE USUARIOS PARA ACCESO A PLATAFORMAS', 105, 72.5, 'center');
    doc.setFontType('normal');
    doc.text(22, 77, 'Asunto:');

    
    doc.text(52, 77, 'Crear');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'crear'){
        doc.rect(58, 75.5, 1.5, 1.5,'F');//Check crear Seleccionado
    }else{
        doc.rect(58, 75.5, 1.5, 1.5);//
    }

    doc.text(72, 77, 'Bloquear');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'bloquear'){
        doc.rect(81, 75.5, 1.5, 1.5,'F');//Check Bloquear
    }else{
        doc.rect(81, 75.5, 1.5, 1.5);
    }

    doc.text(96, 77, 'Modificar');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'modificar'){
        doc.rect(105, 75.5, 1.5, 1.5,'F');//Check Modificar Seleccionado
    }else{
        doc.rect(105, 75.5, 1.5, 1.5);
    }

    doc.text(120, 77, 'Desvincular');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'desvincular'){
        doc.rect(132, 75.5, 1.5, 1.5,'F');//Check Desvincular seleccionado
    }else{
        doc.rect(132, 75.5, 1.5, 1.5);
    }

    doc.text(146, 77, 'Renovar');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'renovar'){
        doc.rect(155, 75.5, 1.5, 1.5,'F');//Check Renovar seleccionado
    }else{ 
        doc.rect(155, 75.5, 1.5, 1.5);
    }

    doc.text(174, 77, 'Eliminar');
    if($('input:radio[name=tipo_solicitud]:checked').val() == 'eliminar'){
        doc.rect(182, 75.5, 1.5, 1.5,'F');//Check Eliminar seleccionado
    }else{
        doc.rect(182, 75.5, 1.5, 1.5);
    }

    doc.text(22, 83.5, 'Seleccione el tipo de ID:');
    doc.setDrawColor(0);
    doc.setFillColor(236,238,241);//Color gris
    doc.rect(64, 81, 18, 4, 'F');//Botón ID  Usuario
    doc.rect(110, 81, 18, 4, 'F');//Botón ID  Compartido
    doc.rect(155, 81, 18, 4, 'F');//Botón ID  Servicio
    doc.setFontSize(4);
    doc.text(69, 83.5, 'ID_USUARIO');
    doc.text(113, 83.5, 'ID_COMPARTIDO');
    doc.text(160, 83.5, 'ID_SERVICIO');

    doc.setFontSize(6);
    doc.text(22, 89, 'Si el ID_USUARIO es requerido con altos privilegios (permite eliminar o modificar la información de otros usuarios, del sistema o aplicación) se debe contar con las aprobaciones\rprevias del líder del grupo y administrador responsable de la custodia del activo de soporte');
    doc.text(22, 96, 'Observaciones de la Solicitud o Justificación:');
    doc.line(65,96.5,187,96.5);
    doc.text(65, 96, observaciones);

    // Aceptación de Responsabilidades
    doc.setDrawColor(0);
    doc.setFillColor(155,194,230);//Color azul palido
    doc.rect(20, 99, 170, 3, 'FD');
    doc.setFontType('bold');
    doc.text('ACEPTACIÓN DE RESPONSABILIDAD ID DE USUARIO', 105, 101.5, 'center');
    doc.setFontSize(4);
    doc.setFontType('normal');
    doc.text(21, 104, 'Por medio del presente documento se dan a conocer las responsabilidades y obligaciones que se adquieren al recibir el ID de usuario (sin o con altos privilegios) de acceso a la herramienta solicitada administrada por la Gerencia Administración Red Central:');

    doc.text(21, 106, '* Declaro conocer la responsabilidad que se me otorga, al recibir el permiso de acceso a la herramienta solicitada, facultad que me fue conferida única y exclusivamente, para cumplir las funciones asignadas a mi rol.');

    doc.text(21, 108, '* Me obligo a utilizar este privilegio solamente mientras esta autorización esté vigente.');

    doc.text(21, 110, '* Comprendo que no debo utilizar el privilegio que me fue concedido en algo que no entienda, y / o que no esté de acuerdo o que sea irregular');

    doc.text(21, 112, '* Garantizo que por ningún motivo otro trabajador de ETB , sin importar su nivel jerárquico, me pueda persuadir en emplear mi privilegio en algo contra mi voluntad en oposición con lo procedente.');

    doc.text(21, 114, '* Conozco que la información que está alojada en la herramienta tiene un nivel de confidencialidad. La Información: (a) no debe ser usada en provecho personal o de un tercero, por sí mismo o por interpuesta persona; (b) ser protegida de forma diligente según sus \rcriterios de confidencialidad,  y ésta no podrá ser revelarla a terceros, salvo que medie una orden de autoridad competente o sea de uso público; (c) no ser utilizada en detrimento de ETB S.A. E.S.P. ');

    doc.text(21, 119, 'EL TRABAJADOR o CONTRATISTA se obliga a dar estricto cumplimiento a las disposiciones y reglamentos de origen legal o institucional y que se expidan en materia de confidencialidad, secreto industrial y secreto comercial, so pena de la imposición de las sanciones \rcontractuales y legales del orden laboral, disciplinario, fiscal, penal, civil y pecuniario a que hubiere lugar. ');

    doc.text(21, 123, '*  Comprendo que toda acción que implique la modificación en la configuración de la plataforma debe realizarse bajo los procedimientos documentados aprobados los cuales conozco.');

    doc.text(21, 126, 'Tener en cuenta:');

    doc.text(21, 128, 'a. Si cualquier otra persona aprende su contraseña, esta persona puede asumir su identidad. Cualquier acción que este intruso realice es atribuida a usted de acuerdo con la información del log del sistema de seguridad.');

    doc.text(21, 130, 'b.  Para su propia protección y del sistema, debe cumplir las siguientes normas:');

    doc.text(23, 132, '* Nunca de a conocer su clave de usuario a nadie, tampoco la escriba');

    doc.text(23, 134, '* Si usted cree que alguien ha descubierto su contraseña, notifique a su servicio de soporte técnico de ETB, quienes lo inactivarán inmediatamente. Para su próximo ingreso al sistema, usted tendrá que cambiar su contraseña de acuerdo a los procedimientos \restablecidos.');

    doc.text(23, 138, '* No permita que alguien acceda a la plataforma bajo su identidad (esto es, ingresar con su usuario y contraseña).');

    doc.setFontSize(5);
    doc.text(38, 142, 'Acepto y entiendo que la no atención de lo consignado en este formato puede ser considerado un incumplimiento de los deberes y obligaciones del trabajador o contratista.');
    doc.line(37,142.5,173,142.5);

 

    // Acceso Plataforma
    doc.setFontSize(6);
    doc.setDrawColor(0);
    doc.setFillColor(155,194,230);//Color azul palido  
    doc.rect(20, 144, 170, 3, 'FD');
    doc.setFontType('bold');
    doc.text('ACCESO PLATAFORMA', 105, 146.5, 'center');

    doc.setFontType('normal');
    doc.line(20,153,190,153);
    doc.text( 'Seleccionar la plataforma y perfil donde requiere el acceso (si el acceso es requerido para más de una plataforma utilice los otros campos) :', 105, 151, 'center' );

    if(document.getElementById('plataforma_1').value == ""){
        data_plataforma_1 = "";
    }else{
        data_plataforma_1 = plataformas[data_plataforma_1];
    }

    if(document.getElementById('plataforma_2').value == ""){
        data_plataforma_2 = "";
    }else{
        data_plataforma_2 = plataformas[data_plataforma_2];
    }

    if(document.getElementById('plataforma_3').value == ""){
        data_plataforma_3 = "";
    }else{
        data_plataforma_3 = plataformas[data_plataforma_3];
    }

    if(document.getElementById('plataforma_4').value == ""){
        data_plataforma_4 = "";
    }else{
        data_plataforma_4 = plataformas[data_plataforma_4];
    }

    if(document.getElementById('plataforma_5').value == ""){
        data_plataforma_5 = "";
    }else{
        data_plataforma_5 = plataformas[data_plataforma_5];
    }

    if(document.getElementById('plataforma_6').value == ""){
        data_plataforma_6 = "";
    }else{
        data_plataforma_6 = plataformas[data_plataforma_6];
    }

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 156, 150, 13);//Recuadro Plataforma 1
    doc.rect(30, 156, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 162.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 158, 'center');
    doc.text('PERFIL', 105, 164.5, 'center');
    doc.text(data_plataforma_2, 105, 161.5, 'center');
    doc.text(data_perfiles_1, 105, 168, 'center');
    

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 176, 150, 13);//Recuadro Plataforma 2
    doc.rect(30, 176, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 182.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 178, 'center');
    doc.text('PERFIL', 105, 184.5, 'center');
    doc.text(data_plataforma_2, 105, 181.5, 'center');
    doc.text(data_perfiles_2, 105, 188, 'center');

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 196, 150, 13);//Recuadro Plataforma 3
    doc.rect(30, 196, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 202.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 198, 'center');
    doc.text('PERFIL', 105, 204.5, 'center');
    doc.text(data_plataforma_3, 105, 201.5, 'center');
    doc.text(data_perfiles_3, 105, 208, 'center');

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 216, 150, 13);//Recuadro Plataforma 4
    doc.rect(30, 216, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 222.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 218, 'center');
    doc.text('PERFIL', 105, 224.5, 'center');
    doc.text(data_plataforma_4, 105, 221.5, 'center');
    doc.text(data_perfiles_4, 105, 228, 'center');

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 236, 150, 13);//Recuadro Plataforma 5
    doc.rect(30, 236, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 242.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 238, 'center');
    doc.text('PERFIL', 105, 244.5, 'center');
    doc.text(data_plataforma_5, 105, 241.5, 'center');
    doc.text(data_perfiles_5, 105, 248, 'center');

    doc.setFillColor(174,170,170);//Color gris
    doc.rect(30, 256, 150, 13);//Recuadro Plataforma 2
    doc.rect(30, 256, 150, 3, 'FD');//Titulo plataforma
    doc.rect(30, 262.5, 150, 3, 'FD');//Titulo Perfil
    doc.text('PLATAFORMA', 105, 258, 'center');
    doc.text('PERFIL', 105, 264.5, 'center');
    doc.text(data_plataforma_6, 105, 261.5, 'center');
    doc.text(data_perfiles_6, 105, 268, 'center');

    doc.setFontSize(5);
    doc.setFontType('italic');
    doc.text(20, 290, '“Una vez impreso este documento, se considerará documento no controlado”');
    doc.text(185, 290, 'Pág. 1');

    /////* /*/*/*/*/*/*/*/*/*/ PAGINA 2 /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
    doc.addPage();
    doc.rect(20, 20, 170, 260)//Rectangulo principal

        // /*/*/*/*/*/*/*/*/Encabezado */*/*/*/*/*/*/*/*/*/*/*/*
        doc.setFontType('normal');
        doc.setFontSize(6);
        doc.text('Formato',105, 22, 'center');
        doc.setFontType('bold');
        doc.text(32, 22, 'Código');
        doc.line(160, 20, 160 ,30);//Linea vertical imagen etb
        doc.line(20,22.5,160,22.5);
        doc.line(20,53,190,53);
        doc.text('Gestión de Usuarios para Acceso a Plataformas', 105, 27, 'center');
        //doc.addImage(imgData, 'JPEG', 165, 22, 8, 5);
        doc.line(50,20,50 ,30);//Linea vertical
        doc.text(25, 24.5, '05.1-05.1.2-F-021-v.11');
        doc.line(20,25,50,25);
        doc.text(27, 27, 'Fecha de Emisión');
        doc.line(20,27.5,50,27.5);
        doc.text(24, 29.5, '18');
        doc.text(34, 29.5, '01');
        doc.text(42.5, 29.5, '2020');
        doc.line(30, 27.5, 30 ,30);//Linea vertical día
        doc.line(40, 27.5, 40 ,30);//Linea vertical mes
        doc.line(20,30,190,30);
    
        doc.setFontType('normal');
        doc.setFontSize(4);
        doc.line(77.5, 30, 77.5 ,53);//Linea vertical Elaborado por
        doc.text(20.5, 32, 'Elaborado por:');
        doc.text(20.5, 34, 'Dirección Aseguramiento Servicios Corporativos');
        doc.text(20.5, 36, '_Andres Julian Romero Romero - Mesa Gestión Acceso');
        doc.text(20.5, 40, 'Dirección Aseguramiento Servicios Corporativos');
        doc.text(20.5, 42, '_Marcy Nayibe Motta Gil – Gerente Proyectos II Aseguramiento - Colvatel');
        doc.line(132.5, 30, 132.5 ,53);//Linea vertical Revisado Por
        doc.text(78, 32, 'Revisado por:');
        doc.text(78, 34, 'Dirección Aseguramiento Servicios Corporativos');
        doc.text(78, 36, '_Jaime Enrique Cortes Calvache - Director');
        doc.text(78, 38, '_William Gaona Díaz – Profesional Especializado II');
        doc.text(78, 41, 'Dirección Gestión Plataformas de Red');
        doc.text(78, 43, 'Omar Orlando Guevara Guevara- Director (E)');
        doc.text(78, 45, 'Jenny Elizabeth Caipe Balcázar – Profesional Especializado II');
        doc.text(78, 48, 'Dirección Administración de Red');
        doc.text(78, 50, '_Rubén Velásquez Castañeda - Director');
        doc.text(78, 52, '_Luis Eduardo Muñoz Romero - Profesional Especializado II');
        //Aprobado Por
        doc.text(133, 32, 'Aprobado por:');
        doc.text(133, 34, 'Vicepresidencia Operaciones');
        doc.text(133, 36, 'Gerencia Servicios Corporativos');
        doc.text(133, 38, '_William Reinaldo Cabrera Velásquez - Gerente');
        doc.text(133, 41, 'Vicepresidencia Infraestructura');
        doc.text(133, 43, 'Gerencia Administración de Red');
        doc.text(133, 45, '_Oscar Fernando Restrepo Cespedes - Gerente (E)');
        doc.text(133, 48, 'Dirección Planeación y Control Operacional');
        doc.text(133, 50, '_Jorge Eliecer Angulo Munera - Director');

        //Acceso VPN
        
        doc.setFontSize(6);
        doc.setDrawColor(0);
        doc.setFillColor(155,194,230);//Color azul palido
        doc.rect(30, 55, 150, 27);//Recuadro principal VPN 
        doc.rect(30, 55, 150, 3, 'FD');
        doc.setFontType('bold');
        doc.text('ACCESO VPN', 105, 57.5, 'center');
        doc.setFillColor(174,170,170);//Color gris
        doc.rect(30, 58, 150, 3, 'FD');
        doc.rect(30, 64, 150, 3, 'FD');
        doc.rect(30, 70, 150, 3, 'FD');
        doc.rect(30, 76, 150, 3, 'FD');
        doc.text('PERIODO USO DE ACCESO', 105, 60.5, 'center');
        doc.text('TIPO DE ACCESO (INTERNO/EXTERNO) - GRUPO DE ACCESO SI SE CONOCE', 105, 66.5, 'center');
        doc.text('DESTINO (Dirección IP / Rango / Red )', 105, 72.5, 'center');
        doc.text('SERVICIO/ N° de PUERTO / TIPO DE PUERTO (TCP/UDP)', 105, 78.5, 'center');

        doc.setFontType('normal');
        doc.text(periodo_uso_vpn, 105, 63.5, 'center');//PERODO DE USO
        doc.text(tipo_acceso_vpn, 105, 69.5, 'center');//TIPO DE ACCESO
        doc.text(destino_vpn, 105, 75.5, 'center');//DESTINO
        doc.text(servicio_vpn, 105, 81.5, 'center');//SERVICIO

        //SOLICITUDES TDM Y NGN
        var tecnologias_axe = ['AC05','CE06','CE12','CH12','CO04','CO09','CO14','KE04','MU05','MU08','NO05','NO07','SF00','TW05'];
        var tecnologias_ewsd = ['AC02','AU05','BA04','BC01','BS06','CE01','CE04','CH01','CO05','CR01','CU01','ETBBO','ETBCL','FO01','HO01','KE06','MU06','NI04','NO03','OL05','PA01','RI06','SA03','SB04','SC03','SF01','SH06','SI06','SJ02','SU03','TI01','TO04']
        var tecnologias_ngn = ['Correo de Voz', 'Grabadora Chicó', 'Grabadora Centro','HSS - Bogotá','HSS - Cali','IMS Bogotá','IMS Cali','IVR Interno','IVR Call Center','MARCAM','MSOFT Bogotá',
        'MSOFT Cali', 'NET NET CENTRAL','PREPAGO','RED INTELIGENTE','SAS','SATIP','SBC ORACLE','SBC HUAWEI','SLB Bogotá','SG7000 Centro','SG7000 Chico','SPG Bogotá','SPG Cali','SRP',
        'Sonda OCOM Palladion','SX3000 ATCA Bogotá','SX3000 ATCA Cali','Tarificador','UMG Autopista','UMG Cali Fijas','UMG Cali Móviles','UMG Centro','UMG Chicó','UMG Cuni','UMG Muzú',
        'UMG Normandía','UMG - NGN','UMG San Fernando','VASCLOUD'];
        var z=0;
        var k=0;
        var c=0;
        doc.setFontType('bold');
        doc.text(22.5, 88, 'Para solicitudes TDM:');
        doc.text('Tecnología AXE:', 37.5, 92, 'center');
        doc.text('Tecnología EWSD:', 82, 92, 'center');
        doc.line(22.5,94,105,94);//linea horizontal
        doc.line(50.5,89,50.5,122);//linea vertical divisoria tecnologias
        doc.rect(22.5, 89, 82.5, 33);//Recuadro principal tecnologías TDM
        doc.text(107, 88, 'Para solicitudes NGN:');
        doc.rect(107, 89, 80.5, 40);//Recuadro principal tecnologías NGN

        doc.setFontSize(5);
        doc.setFontType('normal');

        if($("#plataforma_1").val()==163 || $("#plataforma_2").val()==163 || $("#plataforma_3").val()==163 || $("#plataforma_4").val()==163 ||$("#plataforma_5").val()==163 || $("#plataforma_6").val()==163){
            let checks_tdm_axe = [];
            //Se obtienen los checks de las tecnologias AXE Seleccionadas
            $("input:checkbox[name=tdm_axe]:checked").each(function(){
                checks_tdm_axe.push(this.value);
            });
            //console.log(checks_tdm_axe);
            //Check Box AXE
            for(x=24;x<51;x++){
                for(y=95;y<119;y++){
                    if(z==14){
                        //debido a que no es una matriz cuadrada
                    }else{
                        if(checks_tdm_axe.indexOf(tecnologias_axe[z])>=0){
                            doc.rect(x, y, 1.5, 1.5,'F');
                        }else{
                            doc.rect(x, y, 1.5, 1.5);
                        }
                        doc.text(x+2, y+1.5, tecnologias_axe[z]);
                        y=y+4;
                        z=z+1;
                    }
                }
                x=x+8;
            }

            let checks_tdm_ewsd = [];
            //Se obtienen los checks de las tecnologias EWSD Seleccionadas
            $("input:checkbox[name=tdm_ewsd]:checked").each(function(){
                checks_tdm_ewsd.push(this.value);
            });
            //console.log(checks_tdm_ewsd);
            //Check Box EWSD
            for(x=52;x<106;x++){
                for(y=95;y<119;y++){
                    if(checks_tdm_ewsd.indexOf(tecnologias_ewsd[k])>=0){
                        doc.rect(x, y, 1.5, 1.5,'F');
                    }else{
                        doc.rect(x, y, 1.5, 1.5);
                    }
                    doc.text(x+2, y+1.5, tecnologias_ewsd[k]);
                    y=y+4;
                    k=k+1;
                }
                x=x+8;
            }
            if(checks_tdm_ewsd.indexOf(tecnologias_ewsd[30])>=0){
                doc.rect(67.5, 119, 1.5, 1.5,'F');//TI01
            }else{
                doc.rect(67.5, 119, 1.5, 1.5);//TI01
            }
            doc.text(69.5, 120.5, tecnologias_ewsd[30]);

            if(checks_tdm_ewsd.indexOf(tecnologias_ewsd[31])>=0){
                doc.rect(85.5, 119, 1.5, 1.5,'F');//TO04
            }else{
                doc.rect(85.5, 119, 1.5, 1.5);//TO04
            }
            doc.text(87.5, 120.5, tecnologias_ewsd[31]);
        }

        if($("#plataforma_1").val()==112 || $("#plataforma_2").val()==112 || $("#plataforma_3").val()==112 || $("#plataforma_4").val()==112 ||$("#plataforma_5").val()==112 || $("#plataforma_6").val()==112){
            let checks_ngn = [];
            $("input:checkbox[name=ngn]:checked").each(function(){
                checks_ngn.push(this.value);
            });
            //Checks Box NGN
            for(x=108;x<170;x++){
                for(y=90;y<130;y++){
                    if(checks_ngn.indexOf(tecnologias_ngn[c])>=0){
                        doc.rect(x, y, 1.5, 1.5,'F');
                    }else{
                        doc.rect(x, y, 1.5, 1.5);
                    }
                    doc.text(x+2, y+1.5, tecnologias_ngn[c]);
                    y=y+3;
                    c=c+1;
                }
                if(x==108){
                    x=x+17;
                }
                if(x==126){
                    x=x+19;
                }
                if(x==146){
                    x=x+22;
                }
                
            }
        }
        
        // relacion de usuarios
        doc.setFontSize(6);
        doc.setDrawColor(0);
        doc.setFillColor(155,194,230);//Color azul palido  
        doc.rect(20, 133, 170, 3, 'FD');
        doc.setFontType('bold');
        doc.text("RELACION DE ID's DE USUARIOS ACCESO PLATAFORMA o VPN", 105, 135.5, 'center');
        doc.text(23, 140.5, 'ÁREA / GRUPO FUNCIONAL*:');
        doc.text(54, 140.5, grupo_area);
        doc.text(106, 140.5, 'VICEPRESIDENCIA*:');
        doc.text(128, 140.5, vicepesidencia);
        doc.setFontType('normal');

        doc.rect(22.5, 138, 165, 3);//AREA Vicepresidencia
        doc.line(105,138,105,142);//linea vertical divisoria area - vicepesidencia
        doc.line(27,141,27,234);//linea vertical Consecutivo
        doc.line(66,141,66,234);//linea vertical Lider
        doc.line(107,141,107,234);//linea vertical Nombre usuario
        doc.line(120,141,120,234);//linea vertical Cedula
        doc.line(130,141,130,234);//linea vertical usuario
        doc.line(165,141,165,234);//linea vertical correo
        doc.setDrawColor(0);
        doc.setFillColor(155,194,230);//Color azul palido  
        doc.rect(22.5, 141, 165, 3, 'FD');//Encabezado
        doc.text('No.', 25, 143.5,'center');
        var f=0;

        let nombres_lideres=[];
        let nombres_usuarios=[];
        let cedulas_usuarios=[];
        let usuarios=[];
        let correos_usuarios=[];
        $("input[name=nombre_lider]").each(function(){
            nombres_lideres.push(this.value);//Se obtienen todos los nombres de los lideres
        });
        $("input[name=nombre_usuario]").each(function(){
            nombres_usuarios.push(this.value);//Se obtienen todos los nombre de los usuarios
        });

        $("input[name=cedula_usuario]").each(function(){
            cedulas_usuarios.push(this.value);//Se obtienen todas las cedulas de los usuarios
        });

        $("input[name=usuario]").each(function(){
            usuarios.push(this.value);//Se obtienen todos los usuarios
        });

        $("input[name=correo_usuario]").each(function(){
            correos_usuarios.push(this.value);//Se obtienen todos los correos de los usuarios
        });
        //Creando la tabla
        for(var y=144; y<234;y++){
            f=f+1;
            doc.rect(22.5, y, 165, 3);
            doc.text((f).toString(), 25, y+2.5, 'center');//Consecutivo
            y=y+2;
        }
        //Rellenando la tabla
        pos_y = 146.5;
        for(var i=0;i<document.getElementById('cont_user').value;i++){
            doc.text(nombres_lideres[i], 46, pos_y, 'center');//
            doc.text(nombres_usuarios[i], 84, pos_y, 'center');//
            doc.text(cedulas_usuarios[i], 113.5, pos_y, 'center');//
            doc.text(usuarios[i], 125, pos_y, 'center');//
            doc.text(correos_usuarios[i], 148, pos_y, 'center');//
            pos_y = pos_y + 3;
        }

        doc.rect(22.5, 234, 165, 3);//Recuadro total Usuarios
        doc.text(23, 236.5, 'TOTAL USUARIOS SOLICITADOS: '+document.getElementById('cont_user').value);

        doc.setDrawColor(0);
        doc.setFillColor(155,194,230);//Color azul palido  
        doc.rect(20, 244, 170, 3, 'FD');
        doc.setFontType('bold');
        doc.text("FIRMAS AUTORIZADORAS - APROBADORAS", 105, 246.5, 'center');

        doc.text(23, 241, 'NOTA: Los campos con * son obligatorios');
        doc.rect(22.5, 250, 78, 26);//Recuadro AUTORIZADO
        doc.setFontType('normal');
        doc.text("DATOS GERENTE, DIRECTOR o AUTORIZADO ETB - AUTORIZACIÓN", 59, 252, 'center');
        doc.text("(Aplica para funcionarios ETB o contratistas)", 59, 254, 'center');
        doc.text(25, 258, 'Firma:');
        doc.text(25, 262, 'Nombre:');
        
        if(autorizado != ""){
            autorizado = autorizados[autorizados.indexOf(autorizado)-1];//autorizado="";
        }
        doc.text(autorizado, 64, 262, 'center');
        doc.text(25, 266, 'Cargo:');

        if(cargo_autorizado != ""){
            cargo_autorizado = cargos[parseInt(cargo_autorizado)];
        }
        doc.text(cargo_autorizado, 64, 266, 'center');
        doc.text(25, 270, 'C.C.:');
        doc.text(cedula_autorizado, 64, 270, 'center');
        //doc.text(25, 274, 'Contrato');

        doc.rect(110, 250, 78, 26);//Recuadro SUPERVISOR CONTRATO
        doc.text("DATOS DE SUPERVISOR ADMINISTRATIVO CONTRATO - APROBACIÓN", 149, 252, 'center');
        doc.text("(Aplica para usuarios no funcionarios ETB)", 149, 254, 'center');
        doc.text(112, 258, 'Firma:');
        doc.text(112, 262, 'Nombre:');
        doc.text(supervisor, 156, 262, 'center');
        doc.text(112, 266, 'Cargo:');
        if(cargo_supervisor != ""){
            cargo_supervisor = cargos[parseInt(cargo_supervisor)];
        }
        doc.text(cargo_supervisor, 156, 266, 'center');
        doc.text(112, 270, 'C.C.:');
        doc.text(cedula_supervisor.toString(), 156, 270, 'center');
        doc.text(112, 274, 'Contrato No.:');
        doc.text(contrato, 156, 274, 'center');
        
        doc.setFontSize(5);
        doc.text("Señor Director o Supervisor: Comunique cuando el funcionario que hace uso de este derecho ha dejado de ejecutar sus funciones y solicite su desvinculación.", 105, 279, 'center');

        //Pie de Pagina 
        
        doc.setFontType('italic');
        doc.text(20, 290, '“Una vez impreso este documento, se considerará documento no controlado”');
        doc.text(185, 290, 'Pág. 2');
   
    doc.save('05.1-05.1.2-F-021-v.11 Formato Gestión de Acceso.pdf');

}




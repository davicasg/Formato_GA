

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
    doc.rect(58, 75.5, 1.5, 1.5);//Check Crear

    doc.text(72, 77, 'Bloquear');
    doc.rect(81, 75.5, 1.5, 1.5);//Check Blouear

    doc.text(96, 77, 'Modificar');
    doc.rect(105, 75.5, 1.5, 1.5);//Check Modificar

    doc.text(120, 77, 'Desvincular');
    doc.rect(132, 75.5, 1.5, 1.5);//Check Desvincular

    doc.text(146, 77, 'Renovar');
    doc.rect(155, 75.5, 1.5, 1.5);//Check Renovar

    doc.text(174, 77, 'Eliminar');
    doc.rect(182, 75.5, 1.5, 1.5);//Check Eliminar

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
        doc.rect(30, 55, 150, 3, 'FD');
        doc.setFontType('bold');
        doc.text('ACCESO VPN', 105, 57.5, 'center');
        
        doc.setFontType('normal');


        doc.setFontSize(5);
        doc.setFontType('italic');
        doc.text(20, 290, '“Una vez impreso este documento, se considerará documento no controlado”');
        doc.text(185, 290, 'Pág. 2');
   
    doc.save('05.1-05.1.2-F-021-v.11 Formato Gestión de Acceso.pdf');

}




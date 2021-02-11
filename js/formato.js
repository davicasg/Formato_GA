
var plataformas = [
'AAA_ALEPO',
'ACS_CPE_ADMIN',
'ACS_CSR',
'ACS_PROVSION_PORTAL',
'ACTIVE_DIRECTORY',
'ALMACENAMIENTO_DELL',
'ALMACENAMIENTO_EMC',
'ALMACENAMIENTO_HITACHI',
'ALMACENAMIENTO_IBM',
'ALMACENAMIENTO_SAN',
'ANALIZADOR_DE_VULNERABILIDADES',
'ANTI_SPAM_OUT',
'ANTIVIRUS',
'ANTIVIRUS_CLAMAV',
'ATM_FR',
'AVAMAR',
'AVAS_ANTIVIRUS_ANTISPAM',
'BALANCEADORES_IP',
'BMC_ADDM',
'BMC_ENTUITY_NETOWORK_MONITORING',
'BMC_PROACTIVENET',
'BMC_REMEDY_ASSET_CMDB',
'BMC_REPORTING_MANAGER',
'BMC_TMART',
'BMC_TMART_TRANSACTION_MANAGEMENT_APPLICATION',
'BMC_TRUESIGHT_SERVER_AUTOMATION_TSA',
'CARRIER_ETHERNET_RCE',
'CAS',
'CERTIFICADOS_DIGITALES',
'CISCO_GESTIÓN',
'CISCO_NPLAY',
'CISCO_PRIME_NETWORK',
'CISCO_PRIME_PERFORMANCE',
'COMMAND_CENTER_CITRIX',
'CONSOLA_ADMINISTRACION_FIREWALL',
'CONSOLA_ADMINISTRACIÓN_FIREWALL_SEGURIDAD_CENTRALIZADA',
'CONVERSION_IP_NTSC',
'CORREO_VOZ',
'DATA_CENTER',
'DB_SQL_SERVER',
'DB2_',
'DEMARCADORES_NVIEW',
'DEMARCADORES_RADVIEW',
'DHCP',
'DHCP_SHTV',
'DNS_AUTORITATIVO',
'DNS_CACHE',
'ECI_LIGHTSOFT',
'EDAPEM_NETWORK_CONFIGURATION_MANAGER',
'EDAPEM_SERVICE_CONFIGURATION_MANAGER',
'ENCODING_VIDEO',
'ETBADMIN',
'FILTRADO_REGULATORIO',
'FILTRADO_SAAS',
'FIREWALL_BACKEND',
'FIREWALL_FRONT_END',
'FIREWALL_HOSTING_VIRTUAL_2_EDGE',
'FIREWALL_HOSTING_VIRTUAL_PALO_ALTO',
'FIREWALL_HOSTING_VIRTUAL_UPDATE_EDGE',
'FIREWALL_SHTV',
'FRAME_RELAY_EMS_PSAX',
'GESTION_DOCUMENTAL',
'GESTION_EASY_OPTICAL',
'GESTIÓN_SDH_ERICSSON',
'GESTION_UNIFICADA',
'GESTOR_NODO_BALANCEADOR',
'GPNBA',
'GPON_AMS',
'GPON_EOMU',
'GPON_NETNUMEN',
'GPON_NOKIA',
'GPON_ZTE',
'HOSTING_COMPARTIDO_LINUX',
'HOSTING_COMPARTIDO_WINDOWS',
'HOSTING_DEDICADO_WINDOWS',
'HOSTING_VIRTUAL_UPDATE_VMWARE',
'HOSTING_VIRTUAL1_CUNI_Y_SANTA_MONICA',
'HOSTING_VIRTUAL2_CUNI',
'HP_SERVICE_DESK',
'IGNITE',
'INCOGNITO',
'INFOBLOX',
'IPDSLAM_ERICSSON',
'IPDSLAM_HUAWEI',
'IPS_HOSTING_VIRTUAL',
'IPS_ISP',
'IRONPORT',
'JUNOS_SPACE',
'KVM_GESTIÓN_UNIFICADA',
'LCAP',
'MDN',
'MEDIDOR_ANCHO_DE_BANDA',
'MEM',
'METRO_ETHERNET_RME',
'MONITOREO_SHTV',
'MOVILES_CONECTIVIDAD_NE40',
'MOVILES_CONECTIVIDAD_NEXUS',
'MOVILES_CORE_EPC_PGW',
'MOVILES_DPI',
'MOVILES_OTA',
'MPLS',
'MRTG',
'MSAN',
'MYSQSL',
'N2000_BITS_SINCRONISMO',
'N2000_IPDSLAM',
'NAVISCORE',
'NCE_IP_METRO_CARRIER',
'NCE_T_SDH_DWDM_OTN',
'NETBACKUP_PLATAFORMA_DE_RESPALDO',
'NETWORKER_PLATAFORMA_DE_RESPALDO',
'NETWORKING_SHTV',
'NGN',
'NODO',
'NODO_BALANCEADOR',
'NODO_CUCUTA_CISCO',
'NODO_CUCUTA_CMTS',
'NODO_EQUIPOS_DE_BORDE_CRS',
'NTP',
'OFFICE_365_NUBE_PUBLICA',
'OPEN_VIEW_PERFORMANCE_INSIGHT_OVPI',
'OPENVIEW_SERVICE_INFORMATION_POTAL_PORTAL_DE_GESTION',
'ORACLE',
'OTT_SHTV',
'PLATAFORMA_SQM_ISEE_INTELLIGENT_SERVICE_EVALUATION',
'PLESK',
'POSTGRESS',
'PROXY',
'QOE_DE_MOVILIDAD',
'RADIO_SIAE',
'RADIOS_NERA_NETMASTER',
'RADIOS_NERA_NEW',
'RADIOS_NOKIA_HOPPER_MANAGER',
'RADIOS_PROVISION_XP4_PV3',
'RADIOS_SAF_NMS',
'RADIOS_SAGEM_IONOS_NMS',
'RADIOS_SGRWIN',
'RADIOS_SOEM',
'RADIOS_VIEWAIR',
'RECEPCIÓN_SATELITAL',
'REPORTER_FIREWALL_FRONT',
'REPORTER_FIREWALL_SEGURIDAD_CENTRALIZADA',
'REPORTES_SHTV',
'ROUTER_CENTRAL_EWSD_SMNET',
'ROUTERS_CLIENTE',
'RPTGEN',
'SAPE',
'SEGURIDAD_CENTRALIZADA',
'Seleccione',
'SERVICE_ACTIVATOR',
'SERVICE_MANAGER',
'SERVICIOS_WEB_PARA_USO_DE_SISTEMAS_INTERNOS_DE_ETB',
'SERVIDORES DE APLICACIONES (CAPA MEDIA)',
'SIEM',
'SIGAR',
'SINCRONISMO_OSA_SYNCVIEW',
'SMNET',
'SOFIA_ETB',
'SQM',
'STORAGE_SHTV',
'SUPERCLUSTER',
'SYBASE',
'SYSLOG',
'TDM',
'TUXSTONE_SBA_VILLAVICENCIO',
'TVMS',
'U2000_BANCO_DE_BOGOTA',
'U2000_MOVILES_IMS_NGN',
'U2000_MSAN',
'U2000_OTN',
'U2020_MOVILES_IMS_NGN ',
'UMS',
'VEEAM_PLATAFORMA_DE_RESPALDO',
'VIRTUALIZACION',
'VIRTUALIZACION_DELL',
'VOD',
'VPN',
'WIFI_SCG200_RUCKUS_AUTOPISTA',
'WIFI_VSZ_VIRTUAL_CUNI',
]

var perfiles = [
    ['Administrador','Consulta','VPN_SuperAdmin','VPN_Admin','VPN_Operador'],//AAA_ALEPO
    ['Administrador','Power_user','user'],//ACS_CPE_ADMIN
    ['Administrador','user'],//ACS_CSR
    ['Administrador','CSR','user'],//ACS_PROVSION_PORTAL
    ['Administrador Principal','Administrador Backup','Administrador Servidores','Remote Desktop Users Aprovisionamiento','Remote Desktop Users Otros'],//ACTIVE_DIRECTORY
    ['Administrador','Operador'],//ALMACENAMIENTO_DELL
    ['Administrador','Operador'],//ALMACENAMIENTO_EMC
    ['Administrador','Operador'],//ALMACENAMIENTO_HITACHI
    ['Administrador','Operador'],//ALMACENAMIENTO_IBM
    ['Administrador','Operador'],//ALMACENAMIENTO_SAN
    ['Administrador','Operador'],//ALNALIZADOR_DE_VULNERABILIDADES
    ['Administrador','Operador'],//ANTI_SPAM_OUT
    ['Administrador','Operador'],//ANTIVIRUS
]

var cargos = [
    'ANALISTA DE SEGURIDAD',
    'ASISTENTE OPERADOR',
    'AUXILIAR VII',
    'AUXILIAR X',
    'AUXILIAR XIV',
    'COORDINADOR',
    'DIRECTOR',
    'EMPALMADOR',
    'GERENTE',
    'INGENIERO I',
    'PROFESIONAL ESPECIALIZADO',
    'PROFESIONAL ESPECIALIZADO I',
    'PROFESIONAL ESPECIALIZADO II',
    'PROFESIONAL ESPECIALIZADO III',
    'PROFESIONAL I',
    'PROFESIONAL II',
    'PROFESIONAL III',
    'PROFESIONAL IV',
    'PROFESIONAL V',
    'PROFESIONAL VI',
    'SUPERVISOR',
    'TECNICO F JEFE',
    'TECNICO TELECOMUNICACIONES E'
]

var autorizados = [
    'ALEXANDER GARCIA CABRERA', '79714942', 
    'ANDRES FELIPE ALBAN GONZALEZ', '1010169909', 
    'ARMANDO LOPEZ CHAVARRIO', '80466606', 
    'CARLOS EDUARDO RODRIGUEZ RODRIGUEZ', '79538920', 
    'CARLOS ERNESTO RODRIGUEZ DE LA PEÑA', '32248', 
    'CARLOS HERNANDO PARDO CUBIDES', '79596257', 
    'CARLOS JULIO SAN MIGUEL GALEANO', '79591384', 
    'CESAR AUGUSTO MENDOZA NOY', '80127042', 
    'CESAR AUGUSTO QUINTERO GIRALDO', '79388287', 
    'CESAR GERMAN JIMENEZ ESPAÑOL', '79878255', 
    'CESAR ORLANDO QUICENO BUITRAGO', '79635518', 
    'CLAUDIA LOPEZ MAZUERA', '24019', 
    'DANIEL AMAYA OCAMPO', '94074050', 
    'DARIO VIDALES OLAYA', '79359703', 
    'DIANA ALEJANDRA SANCHEZ FRANCO', '52495585', 
    'ELBA LUCIA SANTANA FUQUEN', '51857409', 
    'ELKIN LINARES TORRES', '79695370', 
    'ESTEBAN GARCIA HERRERA', '79652557', 
    'FREDY ALEXANDER MONROY LOPEZ', '79890642', 
    'FREDY GARCIA CELEITA', '79838125', 
    'FREDY SANCHEZ RODRIGUEZ', '79898203', 
    'GERMAN DANIEL MEJIA ACOSTA', '10280551', 
    'GERMAN RODRIGO GONZALEZ GUZMAN', '7311190', 
    'GIOVANNI SACRISTAN BUSTOS', '79660631', 
    'GUEIBOR ISRAEL GARRIDO GRASS', '80263623', 
    'GUILLERMO MUNEVAR JIMENEZ', '79652704', 
    'HECTOR ALFONSO SUAREZ GARCIA', '79465699', 
    'HERMES EZEQUIEL GONZALEZ PAYARES', '21418', 
    'HERNANDO GONZALEZ SUAREZ', '79614074', 
    'IVAN ENRIQUE NAVARRO ARQUEZ', '79693479', 
    'IVAN MAURICIO MONTENEGRO ALVAREZ', '79758128', 
    'IVAN TARCISIO CASTELBLANCO MUÑOZ', '6775906', 
    'JAIME ENRIQUE CORTES CALVACHE', '79708064', 
    'JAVIER ANDRES ESCOBAR BAQUERO', '79797955', 
    'JENNY ELIZABETH CAIPE BALCAZAR', '30335447', 
    'JOHN ALEXANDER GOMEZ LOPEZ', '11186693', 
    'JOHN ANTONIO ARIZA PAEZ', '79663363', 
    'JOHN EDWIN GALLEGO SANDOVAL', '79758217', 
    'JONATHAN ERNESTO CADENA SACRISTAN', '1136883034', 
    'JORGE SEPULVEDA RIOS', '9970055', 
    'JOSE MIGUEL HERNANDEZ HERNANDEZ', '79942218', 
    'JUAN CARLOS STERLING ARTUNDUAGA', '83231663', 
    'JUAN FRANCISCO FORERO ROVIRA', '79913583', 
    'JUAN MANUEL CARDENAS MOLINA', '79386558', 
    'JUAN PABLO MORA ACOSTA', '79895637', 
    'JULIAN ANDRES DUARTE CAMACHO', '80094745', 
    'LEYDY YASMYN SIERRA MUNOZ', '52215391', 
    'LUIS ANDRES RODRIGUEZ HERRERA', '80500929', 
    'LUIS EDUARDO MUÑOZ ROMERO', '80024164', 
    'LUIS HERNAN IBAÑEZ PEREZ', '79782717', 
    'LUIS NICOLAS GONZALEZ AVELLA', '80438895', 
    'LUIS RICARDO VARGAS GARCIA', '80402610', 
    'LUISA FERNANDA RAMIREZ OSORIO', '52204120', 
    'LUZ ADRIANA INFANTE LARA', '52260086', 
    'LUZ MYRIAM FERNANDEZ IBARRA', '52348279', 
    'MARIA ALEXANDRA VARGAS RUBIO', '52453163', 
    'MARIA FERNANDA BERMUDEZ PUERTO', '53905076', 
    'MARTHA STELLA COVELLI ESCOBAR', '41637004', 
    'MAURICIO FERNANDO BELTRAN', '79837421', 
    'MAURICIO SAENZ PINTO', '9527526', 
    'MAURICIO SALGUERO RUIZ', '36670', 
    'MILENA MARIA VARGAS QUITIAN', '63555602', 
    'MILLER JOSUE PARRA VIRVIESCAS', '91252478', 
    'NELSON MUÑOZ POLANIA', '7687010', 
    'OMAR ORLANDO GUEVARA GUEVARA', '79908449', 
    'ORLANDO AGUILAR TORRES', '79401058', 
    'OSCAR FERNANDO RESTREPO CESPEDES', '79683083', 
    'PAOLA ANDREA OSOARIO PENAGOS', '29015', 
    'PEDRO IGNACIO JAIMES MERCHAN', '19496137', 
    'RAQUEL SOLTELO SUAREZ', '35414560', 
    'RICARDO PRADA PEÑA', '93357909', 
    'RICHARD VENEGAS APONTE', '79857241', 
    'RODRIGO ALBERTO ALBORNOZ CAÑIZARES', '5207328', 
    'ROGER NEIL TORRES REINA', '80096601', 
    'RUBEN DARIO VASQUEZ ZAMUDIO', '2990988', 
    'RUBEN DE JESUS VELASQUEZ CASTAÑEDA', '1129572679', 
    'RUBEN OVIEDO RODRIGUEZ', '14269218', 
    'SANDRA ELIZABETH FONSECA ESPITIA', '52046054', 
    'SANDRO ALVAREZ MUÑOZ', '16763858', 
    'SERGIO ENRIQUE RODRÍGUEZ BARRAGAN', '79795244', 
    'THULLA ZUQUE GAMARRA', '369348', 
    'WILLIAM DAVID GUARIN VILLALOBOS', '79568339', 
    'WILLIAM ENRIQUE NORIEGA QUIROZ', '80055979', 
    'WILLIAM GAONA DIAZ', '80512869', 
    'WILLIAM REINALDO CABRERA VELASQUEZ', '9399113', 
    'WILSON HERLEY VARGAS BRIÑEZ', '5824083', 
    'WILSON MORALES BALLESTEROS', '79659110', 
    'WILSON YAIR CHAVEZ HERNANDEZ', '79894030', 
    'YHONNY WILLIAN REYES GARCIA', '76312137',     
]
/*
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})*/

var fecha_actual = new Date();
var fecha = document.getElementById("fecha");
var dia = fecha_actual.getDate();
var mes = fecha_actual.getMonth();
var ano = fecha_actual.getFullYear();

if (dia>=1 && dia<10){
    dia = 0+dia.toString();
}

if (mes>=0 && mes<10){
    mes = mes + 1;
    mes = 0+mes.toString();
}

//Asociar los perfiles a la plataforma correspondiente
function cargar_datos(){
    fecha.value = ano + "-" + mes + "-" + dia;//setea a la fecha actual
    var plataforma_1 = document.getElementById("plataforma_1");
    var perfiles_1 = document.getElementById("perfiles_1");
    var plataforma_2 = document.getElementById("plataforma_2");
    var perfiles_2 = document.getElementById("perfiles_2");
    var plataforma_3 = document.getElementById("plataforma_3");
    var perfiles_3 = document.getElementById("perfiles_3");
    var plataforma_4 = document.getElementById("plataforma_4");
    var perfiles_4 = document.getElementById("perfiles_4");
    var plataforma_5 = document.getElementById("plataforma_5");
    var perfiles_5 = document.getElementById("perfiles_5");
    var plataforma_6 = document.getElementById("plataforma_6");
    var perfiles_6 = document.getElementById("perfiles_6");
    var nombre_autorizado = document.getElementById("autorizados");

    for(var i in plataformas){
        plataforma_1.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";
        plataforma_2.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";
        plataforma_3.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";
        plataforma_4.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";
        plataforma_5.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";
        plataforma_6.innerHTML += "<option value='"+i+"'>"+plataformas[i]+"</option>";

        for(var k in perfiles[i]){
            perfiles_1.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";
            perfiles_2.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";
            perfiles_3.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";
            perfiles_4.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";
            perfiles_5.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";
            perfiles_6.innerHTML += "<option value='"+perfiles[i][k]+"' data-chained='"+i+"'>"+perfiles[i][k]+"</option>";

        }
    }
    //
    for(var x=2; x<=30; x++ ){
        document.getElementById("cont_user").innerHTML += "<option value='"+x+"'>"+x+"</option>";
    }

    for(var x=2; x<=6; x++ ){
        document.getElementById("cont_platforms").innerHTML += "<option value='"+x+"'>"+x+"</option>";
    }
    //Rellenando los cargos
    for(var z in cargos ){
        document.getElementById("cargos_etb_autorizado").innerHTML += "<option value='"+z+"'>"+cargos[z]+"</option>";
        document.getElementById("cargos_etb_supervisor").innerHTML += "<option value='"+z+"'>"+cargos[z]+"</option>";
    }
    //Rellenando los autorizadores
    for(var i=0; i < autorizados.length ;i++ ){
        nombre_autorizado.innerHTML += "<option value='"+parseInt(autorizados[i+1])+"'>"+autorizados[i]+"</option>";
        i=i+1;
    }

    document.getElementById("TDM").hidden=true;
    document.getElementById("NGN").hidden=true;
    document.getElementById("VPN").hidden=true;
    //$("#TDM_AXE").hide();
    //$("#TDM_EWSD").hide();
}
var inicial=1;
//Muestra u oculta la cantidad de usuarios en la tabla de Relación de Usuarios
function generar_tabla(){
    
  //var tabla   = document.getElementById("tabla_usuarios");
  var tblBody = document.getElementById("tabla_registros");
  //$("#tabla_registros").empty();//limpiar tabla
    if (document.getElementById("cont_user").value>inicial){
        for(inicial;inicial<document.getElementById("cont_user").value;inicial++){
            var row = tblBody.insertRow(inicial);
            var cell1 = row.insertCell(0); // # registro 
            var cell2 = row.insertCell(1); // Lider Funcional
            var cell3 = row.insertCell(2); // Nombre Usuario
            var cell4 = row.insertCell(3); // Cedula
            var cell5 = row.insertCell(4); // Usuario
            var cell6 = row.insertCell(5); // Correo
            //var cell7 = row.insertCell(6); // firma
            cell1.innerHTML = (inicial+1).toString().bold();
            cell2.innerHTML = "<input type='text' class='form-control' id='' placeholder='' required minlength='9' name='nombre_lider'>";
            cell3.innerHTML = "<input type='text' class='form-control' id='' placeholder='' required minlength='9' name='nombre_usuario' >";
            cell4.innerHTML = "<input type='number' class='form-control' id='' placeholder='' name='cedula_usuario' required min='1000000' maxlength='10' oninput='if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);'>";
            cell5.innerHTML = "<input type='text' class='form-control' id='' placeholder='' name='usuario' required minlength='7' maxlength='9'>";;
            cell6.innerHTML = "<input type='email' class='form-control' id='' placeholder='' name='correo_usuario' required>";
        }
        inicial = parseInt(document.getElementById("cont_user").value);
        
    }else{
        for(inicial;inicial>document.getElementById("cont_user").value;inicial--){
            tblBody.deleteRow(inicial-1);
        }
        inicial = parseInt(document.getElementById("cont_user").value);
        
    }
    
}

//Muestra u oculta la cantidad de plataformas solicitadas
function mostrar_plataformas(){
    var cantidad_plataformas = document.getElementById("cont_platforms").value;

    if(cantidad_plataformas==1){
        document.getElementById("combo_plataforma_2").hidden=true;
        document.getElementById("combo_plataforma_3").hidden=true;
        document.getElementById("combo_plataforma_4").hidden=true;
        document.getElementById("combo_plataforma_5").hidden=true;
        document.getElementById("combo_plataforma_6").hidden=true;
        $("#plataforma_2").val('').attr('required',false);
        $("#perfiles_2").val('').attr('required',false);
        $("#plataforma_3").val('').attr('required',false);
        $("#perfiles_3").val('').attr('required',false);
        $("#plataforma_4").val('').attr('required',false);
        $("#perfiles_4").val('').attr('required',false);
        $("#plataforma_5").val('').attr('required',false);
        $("#perfiles_5").val('').attr('required',false);
        $("#plataforma_6").val('').attr('required',false);
        $("#perfiles_6").val('').attr('required',false);
    }
    
    if(cantidad_plataformas==2){
        document.getElementById("combo_plataforma_2").hidden=false;
        document.getElementById("combo_plataforma_3").hidden=true;
        document.getElementById("combo_plataforma_4").hidden=true;
        document.getElementById("combo_plataforma_5").hidden=true;
        document.getElementById("combo_plataforma_6").hidden=true;
        $("#plataforma_2").attr('required',true);
        $("#perfiles_2").attr('required',true);
        $("#plataforma_3").val('').attr('required',false);
        $("#perfiles_3").val('').attr('required',false);
        $("#plataforma_4").val('').attr('required',false);
        $("#perfiles_4").val('').attr('required',false);
        $("#plataforma_5").val('').attr('required',false);
        $("#perfiles_5").val('').attr('required',false);
        $("#plataforma_6").val('').attr('required',false);
        $("#perfiles_6").val('').attr('required',false);
    }
    if(cantidad_plataformas==3){
        document.getElementById("combo_plataforma_2").hidden=false;
        document.getElementById("combo_plataforma_3").hidden=false;
        document.getElementById("combo_plataforma_4").hidden=true;
        document.getElementById("combo_plataforma_5").hidden=true;
        document.getElementById("combo_plataforma_6").hidden=true;
        $("#plataforma_2").attr('required',true);
        $("#perfiles_2").attr('required',true);
        $("#plataforma_3").attr('required',true);
        $("#perfiles_3").attr('required',true);
        $("#plataforma_4").val('').attr('required',false);
        $("#perfiles_4").val('').attr('required',false);
        $("#plataforma_5").val('').attr('required',false);
        $("#perfiles_5").val('').attr('required',false);
        $("#plataforma_6").val('').attr('required',false);
        $("#perfiles_6").val('').attr('required',false);
    }
    if(cantidad_plataformas==4){
        document.getElementById("combo_plataforma_2").hidden=false;
        document.getElementById("combo_plataforma_3").hidden=false;
        document.getElementById("combo_plataforma_4").hidden=false;
        document.getElementById("combo_plataforma_5").hidden=true;
        document.getElementById("combo_plataforma_6").hidden=true;
        $("#plataforma_2").attr('required',true);
        $("#perfiles_2").attr('required',true);
        $("#plataforma_3").attr('required',true);
        $("#perfiles_3").attr('required',true);
        $("#plataforma_4").attr('required',true);
        $("#perfiles_4").attr('required',true);
        $("#plataforma_5").val('').attr('required',false);
        $("#perfiles_5").val('').attr('required',false);
        $("#plataforma_6").val('').attr('required',false);
        $("#perfiles_6").val('').attr('required',false);
    }
    if(cantidad_plataformas==5){
        document.getElementById("combo_plataforma_2").hidden=false;
        document.getElementById("combo_plataforma_3").hidden=false;
        document.getElementById("combo_plataforma_4").hidden=false;
        document.getElementById("combo_plataforma_5").hidden=false;
        document.getElementById("combo_plataforma_6").hidden=true;
        $("#plataforma_2").attr('required',true);
        $("#perfiles_2").attr('required',true);
        $("#plataforma_3").attr('required',true);
        $("#perfiles_3").attr('required',true);
        $("#plataforma_4").attr('required',true);
        $("#perfiles_4").attr('required',true);
        $("#plataforma_5").attr('required',true);
        $("#perfiles_5").attr('required',true);
        $("#plataforma_6").val('').attr('required',false);
        $("#perfiles_6").val('').attr('required',false);
    }
    if(cantidad_plataformas==6){
        document.getElementById("combo_plataforma_2").hidden=false;
        document.getElementById("combo_plataforma_3").hidden=false;
        document.getElementById("combo_plataforma_4").hidden=false;
        document.getElementById("combo_plataforma_5").hidden=false;
        document.getElementById("combo_plataforma_6").hidden=false;
        $("#plataforma_2").attr('required',true);
        $("#perfiles_2").attr('required',true);
        $("#plataforma_3").attr('required',true);
        $("#perfiles_3").attr('required',true);
        $("#plataforma_4").attr('required',true);
        $("#perfiles_4").attr('required',true);
        $("#plataforma_5").attr('required',true);
        $("#perfiles_5").attr('required',true);
        $("#plataforma_6").attr('required',true);
        $("#perfiles_6").attr('required',true);
    }
}


//Asocia la plataforma con los respectivos perfiles
$(function(){
    $("#perfiles_1").chained("#plataforma_1");
    $("#perfiles_2").chained("#plataforma_2");
    $("#perfiles_3").chained("#plataforma_3");
    $("#perfiles_4").chained("#plataforma_4");
    $("#perfiles_5").chained("#plataforma_5");
    $("#perfiles_6").chained("#plataforma_6");
});

//Evalua si hubo cambio de plataforma en alguno de las 6 opciones
$("#plataforma_1, #plataforma_2, #plataforma_3, #plataforma_4, #plataforma_5, #plataforma_6, #cont_platforms").change(function(){
    //Evalua si la plataforma seleccionada es TDM(163). Si es seleccionada en cualquiera de las 6 opciones; se muestran las diferentes tecnologias AXE y EWSD
    if($("#plataforma_1").val()==163 || $("#plataforma_2").val()==163 || $("#plataforma_3").val()==163 || $("#plataforma_4").val()==163 ||$("#plataforma_5").val()==163 || $("#plataforma_6").val()==163){
        document.getElementById("TDM").hidden=false;
    }else{
        document.getElementById("TDM").hidden=true;
    }

    //Evalua si la plataforma seleccionada es NGN(112). Si es seleccionada en cualquiera de las 6 opciones; se muestran las diferentes tecnologias NGN
    if($("#plataforma_1").val()==112 || $("#plataforma_2").val()==112 || $("#plataforma_3").val()==112 || $("#plataforma_4").val()==112 ||$("#plataforma_5").val()==112 || $("#plataforma_6").val()==112){
        document.getElementById("NGN").hidden=false;
    }else{
        document.getElementById("NGN").hidden=true;
    }

    //Evalua si la plataforma seleccionada es VPN(176). Si es seleccionada en cualquiera de las 6 opciones; se muestran las diferentes tecnologias NGN
    if($("#plataforma_1").val()==176 || $("#plataforma_2").val()==176 || $("#plataforma_3").val()==176 || $("#plataforma_4").val()==176 ||$("#plataforma_5").val()==176 || $("#plataforma_6").val()==176){
        document.getElementById("VPN").hidden=false;
        $("#periodo_uso_vpn").attr('required', true);
        $("#tipo_acceso_vpn").attr('required', true);
        $("#destino_vpn").attr('required', true);
        $("#servicio_vpn").attr('required', true);
    }else{
        document.getElementById("VPN").hidden=true;
        $("#periodo_uso_vpn").attr('required', false);
        $("#tipo_acceso_vpn").attr('required', false);
        $("#destino_vpn").attr('required', false);
        $("#servicio_vpn").attr('required', false);
    }

});

//Setea el perfil siempre que haya cambio de plataforma
$("#plataforma_1").change(function(){
    $("#perfiles_1").val('');
});

$("#plataforma_2").change(function(){
    $("#perfiles_2").val('');
});

$("#plataforma_3").change(function(){
    $("#perfiles_3").val('');
});

$("#plataforma_4").change(function(){
    $("#perfiles_4").val('');
});

$("#plataforma_5").change(function(){
    $("#perfiles_5").val('');
});

$("#plataforma_6").change(function(){
    $("#perfiles_6").val('');
});

//De acuerdo al autorizado, se coloca automaticamente la cedula
$("#autorizados").change(function(){
    $("#cedula_autorizado").val($("#autorizados").val());
});


    function validacion(){
        
        let data_lideres=[];
        let data_nombres_usuarios=[];
        let data_cedulas_usuarios=[];
        let data_usuarios=[];
        let data_correos_usuarios=[];
        var validacion_plataformas=0;
        var validacion_contratista=0;
        //Si la longitud del campo lider es mayor a 9 digitos, se guarda el valor en el array
        $("input[name=nombre_lider]").each(function(){
            if (this.value.length >=9 ){
                data_lideres.push(this.value);
            }
        });

        //Si la longitud del campo nombre de usuario es mayor a 9 digitos, se guarda el valor en el array
        $("input[name=nombre_usuario]").each(function(){
            if (this.value.length >=9 ){
                data_nombres_usuarios.push(this.value);
            }
        });

        //Si la longitud del campo cedula de usuario es mayor a 7 digitos y mayor a 1000000, se guarda el valor en el array
        $("input[name=cedula_usuario]").each(function(){
            if (this.value.length >=7 && this.value >= 1000000 ){
                data_cedulas_usuarios.push(this.value);
            }
        });

        //Si la longitud del campo usuario es mayor o igual a 7 digitos, se guarda el valor en el array
        $("input[name=usuario]").each(function(){
            if (this.value.length >=7 ){
                data_usuarios.push(this.value);
            }
        });

        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);//Expresion regular que valida un correo electronico
        //Si la longitud del campo correo es mayor o igual a 7 digitos, se guarda el valor en el array
        $("input[name=correo_usuario]").each(function(){
            if (this.value.length >=12 && caract.test(this.value) == true ){
                data_correos_usuarios.push(this.value);
            }
        });

        if($("#cont_platforms").val()==1){
            if($("#perfiles_1").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }

        if($("#cont_platforms").val()==2){
            if($("#perfiles_1").val() != "" &&  $("#perfiles_2").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }

        if($("#cont_platforms").val()==3){
            if($("#perfiles_1").val() != "" &&  $("#perfiles_2").val() != "" &&  $("#perfiles_3").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }

        if($("#cont_platforms").val()==4){
            if($("#perfiles_1").val() != "" &&  $("#perfiles_2").val() != "" &&  $("#perfiles_3").val() != "" &&  $("#perfiles_4").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }

        if($("#cont_platforms").val()==5){
            if($("#perfiles_1").val() != "" &&  $("#perfiles_2").val() != "" &&  $("#perfiles_3").val() != "" &&  $("#perfiles_4").val() != "" &&  $("#perfiles_5").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }

        if($("#cont_platforms").val()==6){
            if($("#perfiles_1").val() != "" &&  $("#perfiles_2").val() != "" &&  $("#perfiles_3").val() != "" &&  $("#perfiles_4").val() != "" &&  $("#perfiles_5").val() != "" &&  $("#perfiles_6").val() != ""){
                validacion_plataformas=1;
            }else{
                validacion_plataformas=0;
            }
        }
        
        //Validación de correo etb o contratista 
        var c1 = new RegExp(/\.pr(?=\@etb)/);//Devuelve true si antes del '@etb' hay un ".pr"
        var c2 = new RegExp(/\@(?!etb)/);//true siempre que despues del '@' no este la palabra etb -> @etb = false |||| @xxxx = true


        for(var i in data_correos_usuarios){
            if(c1.test(data_correos_usuarios[i])==true || c2.test(data_correos_usuarios[i])==true){
                $("#supervisor").attr('required', true);
                $("#cedula_supervisor").attr('required', true);
                $("#cargos_etb_supervisor").attr('required', true);
                $("#contrato").attr('required', true);
                validacion_contratista=1;
            }else{
                $("#supervisor").attr('required', false);
                $("#cedula_supervisor").attr('required', false);
                $("#cargos_etb_supervisor").attr('required', false);
                $("#contrato").attr('required', false);
                validacion_contratista=0;
            }
        }



        if($("#nombre_solicitante").val().length >= 10){
            if($("#empresa_cargo").val().length >= 5){
                if($("#telefono").val().length >= 7 && $("#telefono").val()>=1000000){
                    if($('input:radio[name=tipo_solicitud]:checked').val() != undefined){
                        //Si la longitud del array coincide con la cantidad de usuarios del formulario
                        if (data_lideres.length == $("#cont_user").val() && data_nombres_usuarios.length == $("#cont_user").val() && data_cedulas_usuarios.length == $("#cont_user").val() && data_usuarios.length == $("#cont_user").val() && data_correos_usuarios.length == $("#cont_user").val()){
                            if(validacion_plataformas==1){
                                if($("#grupo_area").val().length >= 3){
                                    if($("#vicepresidencia").val().length >= 5){
                                        if($("#autorizados").val().length != ""){
                                            if($("#cargos_etb_autorizado").val().length != ""){
                                                if(validacion_contratista==1){//En caso de ser contratista se solicitan los datos del supervisor del contrato
                                                    if($("#supervisor").val().length >= 5){
                                                        if($("#cedula_supervisor").val().length >= 7 && $("#cedula_supervisor").val()>1000000){
                                                            if($("#cargos_etb_supervisor").val().length != ""){
                                                                if($("#contrato").val().length >= 5){
                                                                    $("#descarga").attr('disabled',false);
                                                                    
                                                                }else{
                                                                    $("#descarga").attr('disabled',true);
                                                                }
                                                            }else{
                                                                $("#descarga").attr('disabled',true);
                                                            }
                                                        }else{
                                                            $("#descarga").attr('disabled',true);
                                                        }
                                                    }else{
                                                        $("#descarga").attr('disabled',true);
                                                    }
                                                }else{
                                                    $("#descarga").attr('disabled',false);
                                                }
                                            }else{
                                                $("#descarga").attr('disabled',true);
                                            }
                                        }else{
                                            $("#descarga").attr('disabled',true);
                                        }
                                    }else{
                                        $("#descarga").attr('disabled',true);
                                    }
                                }else{
                                    $("#descarga").attr('disabled',true);
                                }
                                
                            }else{
                                $("#descarga").attr('disabled',true);
                            }
                            
                        }else{
                            $("#descarga").attr('disabled',true);
                        }
                    }else{
                        $("#descarga").attr('disabled',true);
                    }
                }else{
                    $("#descarga").attr('disabled',true);
                }
            }else{
                $("#descarga").attr('disabled',true);
            }
        }else{
            $("#descarga").attr('disabled',true);
        }



    }
    
    setInterval('validacion()',500);
    

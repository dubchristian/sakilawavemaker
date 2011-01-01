dojo.declare("PrestadorRecibo", wm.Page, {
  start: function() {
       
       dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
       this.filtroPorUsuario();
    // this.labelUsuario.setCaption(app.UsuarioNombreSVX.getValue("usuarioNombre"));
       this.connect(app.pageDialog.domNode,"click", this, "click");
       // para que permita habilar la carga del prestador
        this.buttonCargaPrestador.setValue("showing",false);
  },
 // ** *********************** **
 // **   Funciones Generales   **
 // ** *********************** **
 
   mySessionExpiredMethod: function (){
                   app.MensajeTitulo.setValue("dataValue","Su SESION ha expirado debera volver a Ingresar Usuario y contraseña");
                   app.MensajeTipoIcono.setValue("dataValue","advertencia");    
                   app.nCallMensaje.update();
                   app.nCallPrincipal.update();
   },
   
click: function(e) { 
    console.log(e.target.id);
   // alert(e.target.id);
    // Para que cuando se Cierre el pageDialog se actulize el lookop
    /*if(e.target.id == "app_pageDialog"){
     this.categoryLookup1.update();
    }*/
    if(e.target.id == "app_pageDialog_prestadores_CerrarPrestador"){

       xbusquedaClave=app.GetBusquedaClave.getValue("dataValue");
       xbusquedaDescripcion=app.GetBusquedaDescripcion.getValue("dataValue");
       
       console.log("busqueda Clave: "+xbusquedaClave);
       
       console.log("busqueda descripcion: "+ xbusquedaDescripcion);
       
       this.labelBusquedaDescripcion.setValue("caption",xbusquedaDescripcion);
       
        this.prestadorreciboLiveForm1.dataOutput.setValue("prestador.idprestadore",xbusquedaClave);
    }
    
  },
  
 filtroPorUsuario: function(inSender) {      
       // Para que se filtre de acuerdo a si puede ver todo o o
       usuario_Actual_verSucursales=app.UsuarioNombreSVX.getValue("verTodasLasSucursales");
       usuario_Actual_SucursalClave=app.UsuarioNombreSVX.getValue("sucursalClave");
      // alert(usuario_Actual_verSucursales);
       
        if (usuario_Actual_verSucursales) {
               // Puede ver todos los registros
              // alert("Esta Filtrando");
               this.prestadorreciboLiveVariable1.filter.clearData();
          }
          else {
                // Solo puede ver lo que pertenece a su sucursal
                this.prestadorReciboFiltro.setValue("usuario.sucursal.idsucursal", usuario_Actual_SucursalClave);
                // Set filter for employeeLiveVar with an employee object
                this.prestadorreciboLiveVariable1.setFilter(this.prestadorReciboFiltro); 
                // Update live var to reflect new filter     
                this.prestadorreciboLiveVariable1.update();
          }
  },
  
  dialogoCargandoLiveVariableSuccess: function(inSender) {      
        // ** Termino de cargar el Livevariable  **
    
       
         app.pageDialog.dismiss(); 
  },
  dialogoCargandoLiveVariableBeforeUpdate: function(inSender) {
        // ** Pongo que se esta cargando  **

        
        app.nCallCargando.update();     
  },
  
 primeraFilaDataGrid1AfterRender: function(inSender) {  
         // ** Para que se ubique siempre en la primer fila de la grilla 
        if (inSender.dataSet.getCount() && !inSender.selected) {
          // Select the first row in datagrid
          inSender.select(0);
          // ejemplo de lo que se debe poner el codigo, this.primeraFilaDataGrid1AfterRender(inSender);
          }
  },
 
    reportePrestadorRecibo: function(inSender) {  
         // ** Para la Caratula para el envio 
         // para imprimir la caratula;
         idprestadorrecibo_Grilla=this.prestadorreciboDataGrid1.selectedItem.getData().idprestadorrecibo;
     
    var typeofdoc="PDF";
    var src="prestadorrecibo.jasper";
    var imagen="/com/mavirroco/logocosecha.png";
    
    var hash={"typeDoc" : typeofdoc,
              "file" : src ,
              "imagen" : imagen,
              "idprestadorrecibo" : idprestadorrecibo_Grilla.toString()
              };
              
              console.log(hash);
              // alert("anda");
           
              
         this.printSV.input.setValue("parameters",hash);
         this.printSV.update();  
     
  },
  
      reportePrestadorReciboDetalles: function(inSender) {  
         // ** Para la Caratula para el envio 
         idprestadorrecibo_Grilla=this.prestadorreciboDataGrid1.selectedItem.getData().idprestadorrecibo;
     
    var typeofdoc="PDF";
    var src="prestadorrecibodetalle.jasper";
    var imagen="/com/mavirroco/logocosecha.png";
    
    var hash={"typeDoc" : typeofdoc,
              "file" : src ,
              "imagen" : imagen,
              "idprestadorrecibo" : idprestadorrecibo_Grilla.toString()
              };
              
              //console.log(hash);
              // alert("anda");
              
              
         this.printSV.input.setValue("parameters",hash);
         this.printSV.update();  
     
  },
  
 // ** *********************** **
 // ** FIN Funciones Generales **
 // ** *********************** **

  prestadorreciboLiveForm1BeginInsert: function(inSender) {
    try {
        // para que permita habilar la carga del prestador
        this.buttonCargaPrestador.setValue("showing",true);
        
        mostrar_descripcion="Seleccione el prestador -->";
        
        this.labelBusquedaDescripcion.setValue("caption",mostrar_descripcion);
            
     // ** Grabo el Id del Usuario, este campo no se emuestra
 
        
        // inSender.dataOutput.setValue("usuario",app.devolverUsuario);
        inSender.dataOutput.setValue("usuario.idusuario",app.UsuarioNombreSVX.getValue("usuarioIdClave"));
        
        // si o SI debe estar esta linea para cuando vuelva el datos se puedeada modificar 
        
       //  this.prestadorreciboLiveForm1.dataOutput.setValue("prestador.idprestadore",null);
        
       
        this.totalconsultasEditor1.setValue("dataValue",0);
        this.totalfarmaciaEditor1.setValue("dataValue",0);
        this.totalpracticasEditor1.setValue("dataValue",0);
        
        // this.prestadorreciboLiveForm1.dataOutput.setValue("prestador.idprestadore",null);
        
      
      
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveForm1BeginInsert: ' + e); 
    } 
  },
  prestadorreciboDataGrid1AfterRender: function(inSender) {
    try {
      this.primeraFilaDataGrid1AfterRender(inSender);
  
    } catch(e) {
      console.error('ERROR IN prestadorreciboDataGrid1AfterRender: ' + e); 
    } 
  },
  
  button1Click: function(inSender, inEvent) {
    try {
      this.reportePrestadorRecibo();
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    } 
  },

  button4Click: function(inSender, inEvent) {
    try {
       usuario_Actual_verSucursales=app.UsuarioNombreSVX.getValue("verTodasLasSucursales");
       usuario_Actual_SucursalClave=app.UsuarioNombreSVX.getValue("sucursalClave");
      // alert(usuario_Actual_verSucursales);
       
        if (usuario_Actual_verSucursales) {
               // Puede ver todos los registros
              // alert("Esta Filtrando");
               this.prestadorreciboLiveVariable1.filter.clearData();
          }
          else {
                // Solo puede ver lo que pertenece a su sucursal
                this.prestadorReciboFiltro.setValue("usuario.sucursal.idsucursal", usuario_Actual_SucursalClave);
                // Set filter for employeeLiveVar with an employee object
                this.prestadorreciboLiveVariable1.setFilter(this.prestadorReciboFiltro); 
                // Update live var to reflect new filter     
                this.prestadorreciboLiveVariable1.update();
          }
      
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  prestadorreciboLiveVariable1Success: function(inSender, inDeprecated) {
    try {
      this.dialogoCargandoLiveVariableSuccess();
      // Actulizo el Detalle 
     // this.prestadorrecibodetalleLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveVariable1Success: ' + e); 
    } 
  },
  prestadorrecibodetalleLiveVariable1Success: function(inSender, inDeprecated) {
    try {
      this.dialogoCargandoLiveVariableSuccess();
      
    } catch(e) {
      console.error('ERROR IN prestadorrecibodetalleLiveVariable1Success: ' + e); 
    } 
  },
  prestadorrecibodetalleLiveVariable1BeforeUpdate: function(inSender, ioInput) {
    try {
      this.dialogoCargandoLiveVariableBeforeUpdate();
      
    } catch(e) {
      console.error('ERROR IN prestadorrecibodetalleLiveVariable1BeforeUpdate: ' + e); 
    } 
  },
  prestadorreciboLiveVariable1BeforeUpdate: function(inSender, ioInput) {
    try {
      this.dialogoCargandoLiveVariableBeforeUpdate();
      
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveVariable1BeforeUpdate: ' + e); 
    } 
  },
  prestadorrecibodetalleLiveForm1BeginInsert: function(inSender) {
    try {
         console.log(this.maestro);
         inSender.dataOutput.setValue("prestadorrecibo",this.maestro);
         
      
    } catch(e) {
      console.error('ERROR IN prestadorrecibodetalleLiveForm1BeginInsert: ' + e); 
    } 
  },
  roundedButton1Click: function(inSender, inEvent) {
    try {
      
      
    } catch(e) {
      console.error('ERROR IN roundedButton1Click: ' + e); 
    } 
  },

  printSVResult: function(inSender, inDeprecated) {
    try {
    // Se necesita para que se ejecute el Reporte
       window.open(inDeprecated);
      
    } catch(e) {
      console.error('ERROR IN printSVResult: ' + e); 
    } 
  },
  rButtonReciboDetalleClick: function(inSender, inEvent) {
    try {
      this.reportePrestadorReciboDetalles();
      
    } catch(e) {
      console.error('ERROR IN roundedButtonTransporte1Click: ' + e); 
    } 
  },
 

  tabLayers1Canchange: function(inSender, inChangeInfo) {
    try {
         // Cargo el recorset del maestro 
    // maestro_IdEnvio=this.EnvioId.data.idEnvio;
     // Para que solo pase al paso 2 Si el 1 Esat Seleccionado en la Grilla 
     // Pregunto por wl indece del tab al que voy En este caso el paso dos es index 1 
     
     if (inChangeInfo.newIndex == 1) {
     // ** Valido si puedo ir o no a ese TAB En este caso PASO 2 **
     if (this.maestro.getValue("idprestadorrecibo")==null) {
     
     app.MensajeTitulo.setValue("dataValue","No se selecciono El prestador ");
     app.MensajeTipoIcono.setValue("dataValue","advertencia");    
     app.nCallMensaje.update();
     // ** Deberia quedar en el tab que esta :-) ** && maestro==null 
     inChangeInfo.canChange = false;
                        }
        }// Final IF
        
         if (inChangeInfo.newIndex == 2) {
     // ** Valido si puedo ir o no a ese TAB En este caso PASO 2 **
     if (this.maestro.getValue("idprestadorrecibo")==null) {
     
     app.MensajeTitulo.setValue("dataValue","No se selecciono el envio al cual se se desea poner la RECEPCION");
     app.MensajeTipoIcono.setValue("dataValue","advertencia");    
     app.nCallMensaje.update();
     // ** Deberia quedar en el tab que esta :-) ** && maestro==null 
     inChangeInfo.canChange = false;
                        }
        }// Final IF
      
    } catch(e) {
      console.error('ERROR IN tabLayers1Canchange: ' + e); 
    } 
  },
  prestadorreciboLiveForm1Success: function(inSender, inData) {
    try {
                this.prestadorreciboLiveVariable1.update();
                
                // para que permita habilar la carga del prestador
                this.buttonCargaPrestador.setValue("showing",false);
        
      
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveForm1Success: ' + e); 
    } 
  },
  prestadorrecibodetalleDataGrid1AfterRender: function(inSender) {
    try {
      // ** Para que se ubique siempre en la primer fila de la grilla 
      this.primeraFilaDataGrid1AfterRender(inSender);
      
    } catch(e) {
      console.error('ERROR IN prestadorrecibodetalleDataGrid1AfterRender: ' + e); 
    } 
  },
  pageContainer1Start: function(inSender) {
    try {
      // cargo el label de esa pagina
       app.NombrePagina.setValue("dataValue","Prestador Recibos");
      // FIN cargo el label de esa pagina
      
    } catch(e) {
      console.error('ERROR IN pageContainer1Start: ' + e); 
    } 
  },
  prestadorreciboLiveForm1BeginUpdate: function(inSender) {
    try {
      // para que permita habilar la carga del prestador
        this.buttonCargaPrestador.setValue("showing",false);
       
       
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveForm1BeginUpdate: ' + e); 
    } 
  },

  prestadorreciboLiveForm1Error: function(inSender, inError) {
    try {
      // para que permita habilar la carga del prestador
        this.buttonCargaPrestador.setValue("showing",true);
        
        
      
    } catch(e) {
      console.error('ERROR IN prestadorreciboLiveForm1Error: ' + e); 
    } 
  },

  printSVSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss();
      
    } catch(e) {
      console.error('ERROR IN printSVSuccess: ' + e); 
    } 
  },
  button2Click: function(inSender, inEvent) {
    try {
       this.reportePrestadorReciboDetalles();
      
    } catch(e) {
      console.error('ERROR IN button2Click: ' + e); 
    } 
  },
  buttonActulizarClick: function(inSender, inEvent) {
    try {
       //invoke service variable
      this.prestadorreciboLiveVariable1.update();
      this.prestadorrecibodetalleLiveVariable1.update();
      
      this.nCallGenerarRecibo.update();
      
    } catch(e) {
      console.error('ERROR IN buttonActulizarClick: ' + e); 
    } 
  },
  _end: 0
});
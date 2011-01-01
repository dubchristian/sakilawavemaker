dojo.declare("Prestadores", wm.Page, {
  start: function() {
            dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
            this.connect(app.pageDialog.domNode,"click", this, "click");
            // arranco Si activar la carga de datos.
            this.checkMostarCargaAbm.setValue("dataValue","0");
            
  },
  
LimpiarBusqueda: function(inSender) {  

this.searchBoxPrestador.setDataValue(null);
this.searchBoxCuit.setDataValue(null);
this.searchBoxDomicilio.setDataValue(null);

this.prestadorLiveVariable1.update();

},  
       
       
  mySessionExpiredMethod: function (){
                   app.MensajeTitulo.setValue("dataValue","Su SESION ha expirado debera volver a Ingresar Usuario y contraseña");
                   app.MensajeTipoIcono.setValue("dataValue","advertencia");    
                   app.nCallMensaje.update();
                   app.nCallPrincipal.update();
   },
   
 filtroLookpLocalidad: function(inSender) {
         // Solo para mostrar las Localidades del CHACO
      this.filtroLocalidad.setValue("departamento.provincia.idProvincia","3");
      this.localidadLookup1.editor.dataSet.setFilter(this.filtroLocalidad);
      this.localidadLookup1.editor.dataSet.update();    
  },
       
      
      
      
      
 click: function(e) { 
    console.log(e.target.id);
    // alert(e.target.id);
    /*if(e.target.id == "app_pageDialog"){
     this.categoryLookup1.update();
    }*/
    if(e.target.id == "app_pageDialog_localidad_CerrarLocalidad"){
     // Cargo los valores traidos por la localidad
     
     
    
     Xclave=app.GetBusquedaClave.getValue("dataValue");
     Xdescripcion=app.GetBusquedaDescripcion.getValue("dataValue");
     
     
     this.labelSeleccioneDescripcion.setValue("caption", Xdescripcion);
     this.labelSeleccioneClave.setValue("caption", Xclave);
     
    }
    
  },
  
  
  CerrarPrestadorClick: function(inSender, inEvent) {
    try {
       app.pageDialog.dismiss();
      
    } catch(e) {
      console.error('ERROR IN CerrarPrestadorClick: ' + e); 
    } 
  },
  prestadorLiveVariable1BeforeUpdate: function(inSender, ioInput) {
    try {
      
      
    } catch(e) {
      console.error('ERROR IN prestadorLiveVariable1BeforeUpdate: ' + e); 
    } 
  },

  
  button1Click: function(inSender, inEvent) {
    try {
      this.filtroLookpLocalidad();
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    } 
  },
  prestadorLiveForm1BeginInsert: function(inSender) {
    try {
       // Solo Chaco
      this.filtroLookpLocalidad();
      
    } catch(e) {
      console.error('ERROR IN prestadorLiveForm1BeginInsert: ' + e); 
    } 
  },
  prestadorLiveForm1BeginUpdate: function(inSender) {
    try {
      // Solo Chaco
      this.filtroLookpLocalidad();
      
    } catch(e) {
      console.error('ERROR IN prestadorLiveForm1BeginUpdate: ' + e); 
    } 
  },
  LimpiarBtn3Click: function(inSender, inEvent) {
    try {
      this.LimpiarBusqueda();
      
    } catch(e) {
      console.error('ERROR IN LimpiarBtn3Click: ' + e); 
    } 
  },
  prestadorDataGrid1Selected: function(inSender, inIndex) {
    try {
      // Paso el IdLocalidad para Poder Filtrarlo
      idPrestador_grilla=inSender.selectedItem.getData().idprestadore;
      idPrestadorDescripcion_grilla=inSender.selectedItem.getData().prestador;
      // this.filtrarLiveVariable(inSender,idlocalidad_grilla); Para el abm con HSQL
      // cargo el valor de la Variable a Devolver

      app.GetBusquedaClave.setValue("dataValue",idPrestador_grilla);
      app.GetBusquedaDescripcion.setValue("dataValue",idPrestadorDescripcion_grilla);
      
    } catch(e) {
      console.error('ERROR IN prestadorDataGrid1Selected: ' + e); 
    } 
  },
  buttonActulizarClick: function(inSender, inEvent) {
    try {
      this.prestadorLiveVariable1.update();
      this.LimpiarBusqueda();
      
    } catch(e) {
      console.error('ERROR IN buttonActulizarClick: ' + e); 
    } 
  },
  prestadorLiveForm1Success: function(inSender, inData) {
    try {
      this.LimpiarBusqueda();
      
      // alert(this.prestadorNombre.getValue("dataValue"));
      
      prestador_cargado=this.prestadorNombre.getValue("dataValue")
      
      this.searchBoxPrestador.setValue("displayValue",prestador_cargado);
      this.searchBoxPrestador.setValue("dataValue",prestador_cargado);
     
     alert(prestador_cargado);
     
      this.prestadorLiveVariable1.update();
      
      
      
    } catch(e) {
      console.error('ERROR IN prestadorLiveForm1Success: ' + e); 
    } 
  },
  
  prestadorEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.prestadorNombre.setValue("dataValue",inDisplayValue);
      
    } catch(e) {
      console.error('ERROR IN prestadorEditor1Change: ' + e); 
    } 
  },
  _end: 0
});
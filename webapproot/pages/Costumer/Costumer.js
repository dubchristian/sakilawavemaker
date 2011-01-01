dojo.declare("Costumer", wm.Page, {
  start: function() {
    // No funciona la opcion de que arranque ya cliakeado (ToggleButton.clicked)  :-(
    this.tButtonBusquedaFirstName.click();
    this.tButtonBusquedaFirstName.setClicked(true);
    
       this.connect(app.pageDialog.domNode,"click", this, "click");
       // para que permita habilar la carga del prestador
       this.buttonCargaPrestador.setValue("showing",false);
        
        
  },
 
click: function(e) { 
    console.log(e.target.id);
    // app.toastInfo(e.target.id);
    // Para que cuando se Cierre el pageDialog se actulize el lookop
    /*if(e.target.id == "app_pageDialog"){
     this.categoryLookup1.update();
    }*/
    if(e.target.id == "app_pageDialog_address_Close"){

       xbusquedaClave=app.busquedaClave.getValue("dataValue");
       xbusquedaDescripcion=app.busquedaDescripcion.getValue("dataValue");
       
       console.log("busqueda Clave: "+xbusquedaClave);
       
       console.log("busqueda descripcion: "+ xbusquedaDescripcion);
       
       this.labelBusquedaDescripcion.setValue("caption",xbusquedaDescripcion);
       
       app.toastInfo(xbusquedaClave);
       this.customerLiveForm1.dataOutput.setValue("address.addressId",xbusquedaClave);
    }
    
  },
  
  
 filtrojs: function(FieldToSearch,valueToSearch) {
         // se le pasa los parametros para efectura el filtro
    
     
    
    
      // Set the customer wm.Variable to those from the user input
    this.filterCostumer.setValue(FieldToSearch, valueToSearch);
      //Set this wm.Variable of type customer as the filter
    this.customerLiveVariable1.setFilter(this.filterCostumer);
      // invoke service variable
     this.customerLiveVariable1.update();
    
    // reset the filter, para borrar elvalor anterior del filtro
       this.filterCostumer.setValue(FieldToSearch, null);
  },
  
  tButtonBusquedaFirstNameClick: function(inSender, inEvent) {
    try {
      // Desactivo los demas botones botones
      this.tButtonBusquedaAddress.setClicked(false);
      this.tButtonBusquedaEmail.setClicked(false);
      this.tButtonBusquedaLast.setClicked(false);
      // this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","firstName");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaFirstNameClick: ' + e); 
    } 
  },
  tButtonBusquedaLastClick: function(inSender, inEvent) {
    try {
       // Desactivo los demas botones botones
      this.tButtonBusquedaAddress.setClicked(false);
      this.tButtonBusquedaEmail.setClicked(false);
      // this.tButtonBusquedaLast.setClicked(false);
      this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","lastName");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaLastClick: ' + e); 
    } 
  },
  btBusquedaClick: function(inSender, inEvent) {
    try {
      this.filtrojs(this.filtrojsFieldToSearch.getValue("dataValue"),this.searchBox.dataValue);
      
    } catch(e) {
      console.error('ERROR IN btBusquedaClick: ' + e); 
    } 
  },
  tButtonBusquedaEmailClick: function(inSender, inEvent) {
    try {
       // Desactivo los demas botones botones
      this.tButtonBusquedaAddress.setClicked(false);
      // this.tButtonBusquedaEmail.setClicked(false);
      this.tButtonBusquedaLast.setClicked(false);
      this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","email");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaEmailClick: ' + e); 
    } 
  },
  tButtonBusquedaAddressClick: function(inSender, inEvent) {
    try {
       // Desactivo los demas botones botones
      // this.tButtonBusquedaAddress.setClicked(false);
      this.tButtonBusquedaEmail.setClicked(false);
      this.tButtonBusquedaLast.setClicked(false);
      this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","address.address");
      


    } catch(e) {
      console.error('ERROR IN tButtonBusquedaAddressClick: ' + e); 
    } 
  },
  customerLiveForm1BeginInsert: function(inSender) {
    try {
    
      // para que permita habilar la carga de las direcciones address
        this.buttonCargaPrestador.setValue("showing",true);
        
        mostrar_descripcion="Select the address -->";
        
        this.labelBusquedaDescripcion.setValue("caption",mostrar_descripcion);
        
      
    } catch(e) {
      console.error('ERROR IN customerLiveForm1BeginInsert: ' + e); 
    } 
  },
  customerLiveForm1Success: function(inSender, inData) {
    try {
         this.customerLiveVariable1.update();
         // para que permita habilar la carga del prestador
         this.buttonCargaPrestador.setValue("showing",false);
      
    } catch(e) {
      console.error('ERROR IN customerLiveForm1Success: ' + e); 
    } 
  },
  customerLiveForm1Error: function(inSender, inError) {
    try {
      app.toastError("Verifique haya cargado todos los datos")
      
    } catch(e) {
      console.error('ERROR IN customerLiveForm1Error: ' + e); 
    } 
  },

  _end: 0
});
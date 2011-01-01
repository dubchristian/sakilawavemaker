dojo.declare("Address", wm.Page, {
  start: function() {
        // No funciona la opcion de que arranque ya cliakeado (ToggleButton.clicked)  :-(
    this.tButtonBusquedaAddress.click();
    this.tButtonBusquedaAddress.setClicked(true);
  },
  
  
 filtrojs: function(FieldToSearch,valueToSearch) {
         // se le pasa los parametros para efectura el filtro
    
      // Set the customer wm.Variable to those from the user input
    this.filteraddrees.setValue(FieldToSearch, valueToSearch);
      //Set this wm.Variable of type customer as the filter
    this.addressLiveVariable1.setFilter(this.filteraddrees);
      // invoke service variable
     this.addressLiveVariable1.update();
    
    // reset the filter, para borrar elvalor anterior del filtro
       this.filteraddrees.setValue(FieldToSearch, null);
  },
  
  
  
  
  tButtonBusquedaAddressClick: function(inSender, inEvent) {
    try {
           // Desactivo los demas botones botones
      // this.tButtonBusquedaAddress.setClicked(false);
      this.tButtonBusquedaAddress2.setClicked(false);
      this.tButtonBusquedaDistrict.setClicked(false);
      // this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","address");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaFirstNameClick: ' + e); 
    } 
  },
  tButtonBusquedaAddress2Click: function(inSender, inEvent) {
    try {
           // Desactivo los demas botones botones
      this.tButtonBusquedaAddress.setClicked(false);
      // this.tButtonBusquedaAddress2.setClicked(false);
      this.tButtonBusquedaDistrict.setClicked(false);
      // this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","address2");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaAddress2Click: ' + e); 
    } 
  },
  tButtonBusquedaDistrictClick: function(inSender, inEvent) {
    try {
           // Desactivo los demas botones botones
      this.tButtonBusquedaAddress.setClicked(false);
      this.tButtonBusquedaAddress2.setClicked(false);
      // this.tButtonBusquedaDistrict.setClicked(false);
      // this.tButtonBusquedaFirstName.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","district");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaDistrictClick: ' + e); 
    } 
  },
  btBusquedaClick: function(inSender, inEvent) {
    try {
      this.filtrojs(this.filtrojsFieldToSearch.getValue("dataValue"),this.searchBox.dataValue);
      
    } catch(e) {
      console.error('ERROR IN btBusquedaClick: ' + e); 
    } 
  },
  CloseClick: function(inSender, inEvent) {
    try {
      app.pageDialog.dismiss();
      
    } catch(e) {
      console.error('ERROR IN CloseClick: ' + e); 
    } 
  },
  addressDojoGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
    try {
      // Paso los valores de la Busqueda 
      app.busquedaClave.setValue("dataValue",inSender.selectedItem.data.addressId);
      app.busquedaDescripcion.setValue("dataValue",inSender.selectedItem.data.address);
      
     
     
    } catch(e) {
      console.error('ERROR IN addressDojoGridClick: ' + e); 
    } 
  },
  _end: 0
});
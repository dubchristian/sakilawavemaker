dojo.declare("City", wm.Page, {
  start: function() {
       // No funciona la opcion de que arranque ya cliakeado (ToggleButton.clicked)  :-(
       // De esta forma anda en Mozilla google chrome e internet explore :-)
    this.tButtonBusquedaCity.click();
    this.tButtonBusquedaCity.setClicked(true);
  },

 filtrojs: function(FieldToSearch,valueToSearch) {
         // se le pasa los parametros para efectura el filtro
  
    this.filterCity.setValue(FieldToSearch, valueToSearch);
      //Set this wm.Variable of type customer as the filter
    this.cityLiveVariable1.setFilter(this.filterCity);
      // invoke service variable
     this.cityLiveVariable1.update();
    
    // reset the filter, para borrar elvalor anterior del filtro
       this.filterCity.setValue(FieldToSearch, null);
  },
  
  
  
  
  formatLastUpdateCityDojoGrid: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
    try {
      var stringdate=dojo.date.locale.format(new Date(rowObj.lastUpdate), {datePattern:"dd/MM/yyyy", selector:"date", locale:'es-es'});
      // app.alert(stringdate);
      
      return stringdate;
      
    } catch(e) {
      console.error('ERROR IN formatLastUpdateCityDojoGrid: ' + e); 
    } 
  },
  tButtonBusquedaCityClick: function(inSender, inEvent) {
    try {
       // Desactivo los demas botones botones
      // this.tButtonBusquedaCity.setClicked(false);
      this.tButtonBusquedaCountry.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","city");
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaCityClick: ' + e); 
    } 
  },
  tButtonBusquedaCountryClick: function(inSender, inEvent) {
    try {
      // Desactivo los demas botones botones
      this.tButtonBusquedaCity.setClicked(false);
      // this.tButtonBusquedaCountry.setClicked(false);
      
      // Cargo la variable para los filtros
      this.filtrojsFieldToSearch.setValue("dataValue","country.country");
      
      
    } catch(e) {
      console.error('ERROR IN tButtonBusquedaCountryClick: ' + e); 
    } 
  },
  btBusquedaClick: function(inSender, inEvent) {
    try {
      this.filtrojs(this.filtrojsFieldToSearch.getValue("dataValue"),this.searchBox.dataValue);
      
    } catch(e) {
      console.error('ERROR IN btBusquedaClick: ' + e); 
    } 
  },
  _end: 0
});
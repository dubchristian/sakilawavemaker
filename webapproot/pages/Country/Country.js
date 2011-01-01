dojo.declare("Country", wm.Page, {
  start: function() {
    
  },


  formatLastUpdateDojoGrid1: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
    try {
      
     var stringdate=dojo.date.locale.format(new Date(rowObj.lastUpdate), {datePattern:"dd/MM/yyyy", selector:"date", locale:'es-es'});
      // app.alert(stringdate);
      
      return stringdate;
      
    } catch(e) {
      console.error('ERROR IN formatLastUpdateDojoGrid1: ' + e); 
    } 
  },
  _end: 0
});
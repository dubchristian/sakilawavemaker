dojo.declare("Login", wm.Page, {
  start: function() {
    // If dojo.cookie set for this app, use it to set default user value
    if (dojo.cookie("user")) {
       this.usernameInput.setDataValue(dojo.cookie("user"));
    }  
    // Subscribe to keypress event - onKeydown event, call keydownFunc()
    // Use this to interpret pressing enter key to be same as clicking login button
    this.connect(this.domNode, "keydown", this, "keydownFunc");
    this.doUrlActions();
  },
  // Check url to see if parameters were passed in
  doUrlActions: function() {
    // Check for parameters passed in by url
    var idUser=this.getParam('idUser');
    var action=this.getParam('action');
    // Activate user id using encrypted password sent by email
    if(action=="Activate" && idUser){
       //execute validation of user
       this.svActivate.input.data.idEncrypted=idUser;
       this.svActivate.update();
    }
    // Reset userid
    else if(action=="Reset" && idUser){
       this.ncPassChangeLayer.update();
    }
    else{
       window.location.reload;
    }
  },
  // getParam called by init function to get parameters from url
  getParam: function (param) {
    name = param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    // windows.location.href is the current url displayed in browser
    var results = regex.exec( window.location.href );
    if( results == null )
          return "";
      else
          return results[1];
  },
  // keydownFunc called by onKeydown event via dojo.hitcht
  keydownFunc: function(e) {
    // Interpret enter key as pressing the login button
    if (e.keyCode == dojo.keys.ENTER) {
      this.loginButton.domNode.focus();
    }
  },
  
  // ******** BUTTON CLICK EVENTS *********  

  // loginButtonClick called by loginButton onClick event in accessLayer
  loginButtonClick: function(inSender) {
    // Create cookie to store user name with expiration of 365 days
    dojo.cookie("user", this.usernameInput.getDataValue(), {expires: 365});
    // Clear any current error message displayed
    this.loginErrorMsg.setCaption("");
    // Call login function and use dojo.hitch to call loginFailed if there is an error
    wm.login(
      [this.usernameInput.getDataValue(), this.passwordInput.getDataValue()], 
      null, dojo.hitch(this, "loginFailed"));
  },
  // loginFailed called by loginButtonClick via dojo.hitch to wm.login function call failure
  loginFailed: function(inResponse) {
    this.loginErrorMsg.setCaption("Invalid username or password.");
    // Set cursor in username field
    this.usernameInput.focus();
  },
  // btnRegister1Click called by btnRegister1 onClick event in resetFieldLayer
  btnPassChangeClick: function(inSender, inEvent) {
    try {
        var idUser=this.getParam('idUser');
        //Change password for user
       this.svResetPassField.input.data.password=this.passwordEditor3.getDataValue();
       this.svResetPassField.input.data.uId=idUser;
       this.svResetPassField.update();     
    } catch(e) {
      console.error('ERROR IN btnRegister1Click: ' + e); 
    } 
  },

  // ******** SERVICE CALL EVENTS *********  
    
  // svRegisterUserBeforeUpdate called by onClick event of btnRegister, which calls svRegisterUser.update()
  svRegisterUserBeforeUpdate: function(inSender, ioInput) {
    try {
      // Show spinner while processing is underway
      app.pageDialog.showPage("Loading",true,250,120); 
    } catch(e) {
      console.error('ERROR IN svRegisterUserBeforeUpdate: ' + e); 
    } 
  },
  // svRegisterUserSuccess called after successful call to svRegisterUser.update()
  // svRegisterUser calls the JSRegistration Java method, createUser returns integer error code
  svRegisterUserSuccess: function(inSender, inDeprecated) {
    try {
       // console.log("In svRegisterUserSuccess dataValue = "+inSender.getData().dataValue);
       var errorCode = inSender.getData().dataValue;
       app.pageDialog.dismiss("Loading");
        switch(errorCode) {
          // errorCode = 0 means registration was successful
          case 0: this.ncSuccessCreateUser.update();
                  break;
          case 1: this.labRegError.setCaption("Please check your email format!");
                  break;
          case 2: this.labRegError.setCaption("Email already registered!");
                  break;
          case 3: this.labRegError.setCaption("Email not sent please check your SMTP connection !");
                  break;
        };
    } catch(e) {
      console.error('ERROR IN svRegisterUserSuccess: ' + e); 
    } 
  },
  // svActivateResult called by onResult event for svActivate
  // svActivate calls the JSRegistration Java method, activateUser  
  svActivateResult: function(inSender, inDeprecated) {
    try {
      var resultCode = inSender.getData().dataValue;
      // activeateUser returns 1 for success
      if(resultCode==1){
        this.ncSuccessActivate.update();
      }
    } catch(e) {
      console.error('ERROR IN svActivateResult: ' + e); 
    } 
  },
  // svResetPassBeforeUpdate called by onClick event of btnReset, which calls svResetPass.update()
  svResetPassBeforeUpdate: function(inSender, ioInput) {
    try {
         app.pageDialog.showPage("Loading",true,250,120); 
    } catch(e) {
      console.error('ERROR IN svResetPassBeforeUpdate: ' + e); 
    } 
  },
  svResetPassSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading");
        switch(inDeprecated) {
          case 0: this.ncGoToResetLayer.update();
                  break;
          case 1: this.labResetError.setCaption("Please check your email format!");
                  break;
          case 2: this.labResetError.setCaption("Email not recognized!");
                  break;
          case -1: this.labResetError.setCaption("Email not sent - please check smpt connection !");
                  break;
        };
      
    } catch(e) {
      console.error('ERROR IN svResetPassSuccess: ' + e); 
    } 
  },

  svResetPassFieldBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading",true,250,120); 
      
    } catch(e) {
      console.error('ERROR IN svResetPassFieldBeforeUpdate: ' + e); 
    } 
  },
  svResetPassFieldSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading");
        switch(inDeprecated) {
          case 0: this.ncSuccessResetLayer.update();
                  break;
          case -1: this.labRegError1.setCaption("Password not change please try again !");
                  break;
        };
      
    } catch(e) {
      console.error('ERROR IN svResetPassFieldSuccess: ' + e); 
    } 
  },

  // ******** EDITOR ONCHANGE EVENTS *********  
  
  emailEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
       // Set regex for editor2 to make sure dataValue is identical to editor1
       this.emailEditor2.editor.regExp = "^("+inDataValue+")";
       // After setting new regex must call createEditor
       this.emailEditor2.editor.createEditor();
    } catch(e) {
      console.error('ERROR IN emailEditor1Change: ' + e); 
    } 
  },
  passwordEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
       // Set regex for editor2 to make sure dataValue is identical to editor1    
       this.passwordEditor2.editor.regExp = "^("+inDataValue+")";
       this.passwordEditor2.editor.createEditor();
    } catch(e) {
      console.error('ERROR IN passwordEditor1Change: ' + e); 
    } 
  },
  passwordEditor3Change: function(inSender, inDisplayValue, inDataValue) {
    try {
       // Set regex for editor2 to make sure dataValue is identical to editor1    
       this.passwordEditor4.editor.regExp = "^("+inDataValue+")";
       this.passwordEditor4.editor.createEditor();
    } catch(e) {
      console.error('ERROR IN passwordEditor3Change: ' + e); 
    } 
  },
  _end: 0
});
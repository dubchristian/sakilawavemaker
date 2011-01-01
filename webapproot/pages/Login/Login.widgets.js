Login.widgets = {
	svRegisterUser: ["wm.ServiceVariable", {"operation":"createUser","service":"JSRegistration"}, {"onBeforeUpdate":"svRegisterUserBeforeUpdate","onSuccess":"svRegisterUserSuccess"}, {
		input: ["wm.ServiceInput", {"type":"createUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"liveForm1.dataOutput","targetProperty":"user"}, {}],
				wire5: ["wm.Wire", {"source":"usernameEditor1.dataValue","targetProperty":"userName"}, {}],
				wire1: ["wm.Wire", {"source":"emailEditor1.dataValue","targetProperty":"email"}, {}],
				wire2: ["wm.Wire", {"source":"firstnameEditor1.dataValue","targetProperty":"firstName"}, {}],
				wire3: ["wm.Wire", {"source":"lastnameEditor1.dataValue","targetProperty":"lastName"}, {}],
				wire4: ["wm.Wire", {"source":"passwordEditor1.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	ncAccessLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"accessLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	ncRegisterLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"registerLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	svActivate: ["wm.ServiceVariable", {"operation":"activateUser","service":"JSRegistration"}, {"onResult":"svActivateResult"}, {
		input: ["wm.ServiceInput", {"type":"activateUserInputs"}, {}]
	}],
	ncSuccessActivate: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"successActivateLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	ncSuccessCreateUser: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"goToActivateLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	svResetPass: ["wm.ServiceVariable", {"operation":"resetEmail","service":"JSRegistration"}, {"onBeforeUpdate":"svResetPassBeforeUpdate","onSuccess":"svResetPassSuccess"}, {
		input: ["wm.ServiceInput", {"type":"resetEmailInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"teResetEmail.dataValue","targetProperty":"inEmail"}, {}]
			}]
		}]
	}],
	ncGoToResetLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"goToResetLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	ncResetLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"resetLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	svResetPassField: ["wm.ServiceVariable", {"operation":"resetPassword","service":"JSRegistration"}, {"onBeforeUpdate":"svResetPassFieldBeforeUpdate","onSuccess":"svResetPassFieldSuccess"}, {
		input: ["wm.ServiceInput", {"type":"resetPasswordInputs"}, {}]
	}],
	ncSuccessResetLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"successResetLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	ncPassChangeLayer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"passChangeLayer","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	layoutBox: ["wm.Layout", {"height":"100%","width":"695px"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			templateMain: ["wm.Template", {"_classes":{"domNode":["template-main"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				content: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"700px"}, {}, {
					panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						pictureHeader: ["wm.Panel", {"_classes":{"domNode":["wm_Attribution_new"]},"height":"100%","margin":"0,0,0,20","width":"280px"}, {}],
						labelHeader: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontColor_White"]},"align":"right","border":"0","caption":"User Management  App","height":"100%","padding":"20","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"bottom","width":"80px"}, {}, {
							spacer1: ["wm.Spacer", {"height":"20px","width":"96px"}, {}],
							picture1: ["wm.Picture", {"border":"0","height":"47px","source":"resources/images/buttons/admin.png","width":"100%"}, {"onclick":"ncAccessLayer"}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"align":"center","border":"0","caption":"Log in","height":"16px","width":"100%"}, {"onclick":"ncAccessLayer"}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}],
					panelHeaderTitle: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
						templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
						templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
						templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
					}],
					panelContentCentral: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
						templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							layersLikePages: ["wm.Layers", {"defaultLayer":0}, {}, {
								welcomeLayer: ["wm.Layer", {"borderColor":"","caption":"welcomeLayer","horizontalAlign":"center","verticalAlign":"top"}, {}, {
									content1: ["wm.Content", {"border":"0","content":"Welcome","height":"353px"}, {}]
								}],
								accessLayer: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									loginMainPanel: ["wm.Panel", {"height":"100%","layoutKind":"left-to-right","padding":"10","width":"100%"}, {}, {
										spLeftAccess: ["wm.Spacer", {"width":"100%"}, {}],
										loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray"]},"height":"100%","padding":"10","width":"280px"}, {}, {
											picture3: ["wm.Picture", {"border":"0","height":"127px","source":"resources/images/logos/login_icon.gif","width":"100%"}, {}],
											lblRegister1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundColor_LightBlue"]},"border":"0","caption":"Login Here","height":"31px","width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											loginErrorMsg: ["wm.Label", {"border":"0","caption":" ","height":"32px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											usernameInput: ["wm.Editor", {"caption":"Email","captionSize":"80px","height":"28px"}, {}, {
												editor: ["wm._TextEditor", {"invalidMessage":"Bad format for email","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true}, {}]
											}],
											passwordInput: ["wm.Editor", {"caption":"Password","captionSize":"80px","height":"28px"}, {}, {
												editor: ["wm._TextEditor", {"invalidMessage":"Password must be at least 6 characters long","password":true,"promptMessage":"Enter your password (at least 6 characters)","regExp":"^.{6,}$","required":true}, {}]
											}],
											loginButtonPanel: ["wm.Panel", {"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
												loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","caption":"Login","disabled":true,"margin":"0","width":"60px"}, {"onclick":"loginButtonClick"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"loginMainPanel.invalid","targetProperty":"disabled"}, {}]
													}]
												}]
											}],
											spacer3: ["wm.Spacer", {"height":"30px"}, {}],
											panel5: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												label2: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Don't have an account?","height":"28px","width":"100%"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												label3: ["wm.Label", {"border":"0","caption":"Sign up here","display":"Link","height":"28px","link":"#","width":"100%"}, {"onclick":"ncRegisterLayer"}, {
													format: ["wm.LinkFormatter", {"link":"#"}, {}]
												}]
											}],
											panel6: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":" Forgot your password?","height":"28px","width":"100%"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												label5: ["wm.Label", {"border":"0","caption":"Reset Password","display":"Link","height":"28px","link":"#","width":"100%"}, {"onclick":"ncResetLayer"}, {
													format: ["wm.LinkFormatter", {"link":"#"}, {}]
												}]
											}],
											contentLogin: ["wm.Content", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","content":"Login","height":"100px"}, {}]
										}],
										spRightAccess: ["wm.Spacer", {"width":"100%"}, {}]
									}]
								}],
								registerLayer: ["wm.Layer", {"borderColor":"","caption":"registerLayer","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										spRegisterLeft: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
										pnRegister: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"325px"}, {}, {
											lblRegister: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundColor_LightBlue"]},"border":"0","caption":"New User Registration","height":"31px","width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											labRegError: ["wm.Label", {"_classes":{"domNode":["wm_TextAlign_Center","wm_FontSizePx_12px","wm_FontColor_Red"]},"border":"0","height":"30px","width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											label6: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"align":"right","border":"0","caption":"(<font color=red size=4px>*</font>) This fields are required.","height":"27px","width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panelFormRegister: ["wm.Panel", {"height":"215px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
												firstnameEditor1: ["wm.Editor", {"caption":"Firstname","captionSize":"60%","formField":"firstname","height":"26px","width":"100%"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												lastnameEditor1: ["wm.Editor", {"caption":"Lastname","captionSize":"60%","formField":"lastname","height":"26px","width":"100%"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												emailEditor1: ["wm.Editor", {"caption":"Email","captionSize":"60%","formField":"email","height":"26px","width":"100%"}, {"onchange":"emailEditor1Change"}, {
													editor: ["wm._TextEditor", {"changeOnKey":true,"invalidMessage":"Bad format for email","promptMessage":"Put your mail here","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true}, {}]
												}],
												emailEditor2: ["wm.Editor", {"caption":"Confirm Email","captionSize":"60%","formField":"email","height":"26px","width":"100%"}, {}, {
													editor: ["wm._TextEditor", {"changeOnKey":true,"invalidMessage":"Emails do not match!","regExp":"","required":true}, {}]
												}],
												passwordEditor1: ["wm.Editor", {"caption":"Password","captionSize":"60%","formField":"password","height":"26px","width":"100%"}, {"onchange":"passwordEditor1Change"}, {
													editor: ["wm._TextEditor", {"changeOnKey":true,"password":true,"required":true}, {}]
												}],
												passwordEditor2: ["wm.Editor", {"caption":"Confirm Password","captionSize":"60%","formField":"password","height":"26px","width":"100%"}, {}, {
													editor: ["wm._TextEditor", {"changeOnKey":true,"invalidMessage":"Passwords do not match!","password":true,"required":true}, {}]
												}],
												panel8: ["wm.Panel", {"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													btnRegister: ["wm.Button", {"caption":"Register","disabled":true,"height":"29px","width":"96px"}, {"onclick":"svRegisterUser"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"source":"panelFormRegister.invalid","targetProperty":"disabled"}, {}]
														}]
													}]
												}]
											}]
										}],
										spRegisterRight: ["wm.Spacer", {"height":"100%","width":"100%"}, {}]
									}]
								}],
								successActivateLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									content2: ["wm.Content", {"border":"0","content":"ActivateSuccesfull"}, {}]
								}],
								goToActivateLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									content3: ["wm.Content", {"border":"0","content":"GoToActivate"}, {}]
								}],
								resetLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"center","verticalAlign":"top"}, {}, {
									panResetFrame: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved8px"]},"height":"303px","horizontalAlign":"center","verticalAlign":"middle","width":"500px"}, {}, {
										lblRegister2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundColor_LightBlue"]},"border":"0","caption":"Reset Your Password","height":"31px","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										conReset: ["wm.Content", {"border":"0","content":"Reset","height":"151px","margin":"10","width":"500px"}, {}],
										labResetError: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Red"]},"border":"0","height":"34px","width":"355px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										spacer6: ["wm.Spacer", {"height":"20px","width":"550px"}, {}],
										panReset: ["wm.Panel", {"height":"37px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"500px"}, {}, {
											teResetEmail: ["wm.TextAreaEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"],"captionNode":["wm_FontSizePx_12px","wm_FontColor_Black"]},"caption":"Email:","captionSize":"100px","display":"Text","height":"28px","width":"300px"}, {}, {
												editor: ["wm._TextEditor", {"invalidMessage":"Bad format for email","promptMessage":"Put your mail here","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"}, {}]
											}],
											btnLostPass: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Reset","disabled":undefined,"height":"30px","iconHeight":"18px","iconMargin":"0 10px 1 0","iconWidth":"20px","width":"60px"}, {"onclick":"svResetPass"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"source":"panReset.invalid","targetProperty":"disabled"}, {}]
												}]
											}]
										}]
									}]
								}],
								goToResetLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									content4: ["wm.Content", {"border":"0","content":"GoToReset"}, {}]
								}],
								passChangeLayer: ["wm.Layer", {"borderColor":"","caption":"resetFieldLayer","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
									spacer2: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
									pnRegister1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"325px"}, {}, {
										lblRegister3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundColor_LightBlue"]},"border":"0","caption":"Password Reset","height":"31px","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										labRegError1: ["wm.Label", {"_classes":{"domNode":["wm_TextAlign_Center","wm_FontSizePx_12px","wm_FontColor_Red"]},"border":"0","height":"30px","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										label7: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"align":"right","border":"0","caption":"(<font color=red size=4px>*</font>) This fields are required.","height":"27px","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										panelResetFieldPass: ["wm.Panel", {"height":"93px","horizontalAlign":"right","verticalAlign":"top","width":"100%"}, {}, {
											passwordEditor3: ["wm.Editor", {"caption":"Password","captionSize":"60%","formField":"password","height":"26px","width":"100%"}, {"onchange":"passwordEditor3Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"password":true,"promptMessage":"Put your password here","required":true}, {}]
											}],
											passwordEditor4: ["wm.Editor", {"caption":"Confirm Password","captionSize":"60%","formField":"password","height":"26px","width":"100%"}, {}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"invalidMessage":"Passwords do not match!","password":true,"required":true}, {}]
											}],
											btnPassChange: ["wm.Button", {"caption":"Reset","disabled":true,"height":"29px","width":"96px"}, {"onclick":"btnPassChangeClick"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"source":"panelResetFieldPass.invalid","targetProperty":"disabled"}, {}]
												}]
											}]
										}],
										label8: ["wm.Label", {"border":"0","caption":"Please enter a new password for your account","height":"28px","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									spacer4: ["wm.Spacer", {"height":"48px","width":"100%"}, {}]
								}],
								successResetLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									content5: ["wm.Content", {"border":"0","content":"ResetSuccesfull"}, {}]
								}]
							}]
						}],
						templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
					}],
					panelFooterTitle: ["wm.Panel", {"freeze":true,"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
						templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
						templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
					}],
					panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_LightGray"]},"align":"right","border":"0","caption":"Wavemaker Software<br>301 Howard St Suite 2200 San Francisco, CA 94105","height":"48px","margin":"0","padding":"10,20","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}
Prestadores.widgets = {
	prestadorLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.prestadorLiveView1","matchMode":"anywhere","maxResults":20,"orderBy":"asc: prestador","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"searchBoxPrestador.dataValue","targetProperty":"filter.prestador"}, {}],
			wire1: ["wm.Wire", {"source":"searchBoxCuit.dataValue","targetProperty":"filter.cuit"}, {}],
			wire2: ["wm.Wire", {"source":"searchBoxDomicilio.dataValue","targetProperty":"filter.domicilio"}, {}]
		}]
	}],
	filtroLocalidad: ["wm.Variable", {"type":"com.data.Localidad"}, {}],
	prestadorNombre: ["wm.Variable", {"type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panelSelcciono: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Yellow"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"border":"0","caption":"Busque y luego seleccione el registro que desea","height":"100%","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel4: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"border":"0","caption":"Se selecciono:","height":"100%","width":"114px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_TextDecoration_Bold","wm_Border_DropShadow","wm_BackgroundColor_LightBlue","wm_FontColor_White"]},"align":"center","border":"0","caption":undefined,"height":"34px","margin":"5","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.prestador","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				picture1: ["wm.Picture", {"border":"0","height":"100%","showing":undefined,"source":"resources/images/iconos/flechaderecha.png","width":"64px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.cuit","targetProperty":"showing"}, {}]
					}]
				}],
				CerrarPrestador: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundChromeBar_Purple","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved12px","wm_Border_DropShadow"]},"caption":"Cerrar esta ventana","height":"52px","hint":"Cierra esta ventana","showing":undefined,"width":"218px"}, {"onclick":"CerrarPrestadorClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.cuit","targetProperty":"showing"}, {}]
					}]
				}],
				picture2: ["wm.Picture", {"border":"0","height":"100%","showing":undefined,"source":"resources/images/iconos/flechaizquierda.png","width":"64px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.cuit","targetProperty":"showing"}, {}]
					}]
				}]
			}],
			prestadorLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				prestadorGridPanel: ["wm.FancyPanel", {"title":"Prestador"}, {}, {
					PanelBusqueda: ["wm.Panel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_Border_BottomStyleCurved12px","wm_Border_TopStyleCurved12px","wm_BackgroundColor_LightBlue"]},"borderColor":"#FFFFFF","height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextDecoration_Bold"]},"border":"0","caption":"Prestador","height":"100%","width":"76px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						searchBoxPrestador: ["wm.Editor", {"height":"100%","margin":"4","padding":"0","width":"172px"}, {}, {
							editor: ["wm._TextEditor", {"changeOnKey":true}, {}]
						}],
						BuscarBtn: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Evergreen","wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"caption":"Buscar","height":"31px","hint":"Click para realizar la busqueda","width":"69px"}, {"onclick":"prestadorLiveVariable1"}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"17px"}, {}],
						label5: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextDecoration_Bold"]},"border":"0","caption":"Cuit","height":"100%","width":"37px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						searchBoxCuit: ["wm.Editor", {"height":"100%","margin":"4","padding":"0","width":"117px"}, {}, {
							editor: ["wm._TextEditor", {"changeOnKey":true}, {}]
						}],
						BuscarBtn1: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Evergreen","wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"caption":"Buscar","height":"31px","hint":"Click para realizar la busqueda","width":"69px"}, {"onclick":"prestadorLiveVariable1"}],
						dataNavigator1: ["wm.DataNavigator", {"byPage":true,"height":"28px","width":"261px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"prestadorLiveVariable1","targetProperty":"liveSource"}, {}]
							}]
						}]
					}],
					panel6: ["wm.Panel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_Border_BottomStyleCurved12px","wm_Border_TopStyleCurved12px","wm_BackgroundColor_LightBlue"]},"borderColor":"#FFFFFF","height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						labelSeEnviaA2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextDecoration_Bold"]},"border":"0","caption":"Domicilio","width":"77px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						searchBoxDomicilio: ["wm.Editor", {"height":"100%","margin":"4","padding":"0","width":"173px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"searchProvincia.dataValue","targetId":"sVariableLocalidad.input","targetProperty":"xprovincia"}, {}]
							}],
							editor: ["wm._TextEditor", {}, {}]
						}],
						BuscarBtn3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Evergreen","wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"caption":"Buscar","height":"31px","hint":"Click para realizar la busqueda","width":"69px"}, {"onclick":"prestadorLiveVariable1"}],
						spacer3: ["wm.Spacer", {"height":"48px","width":"16px"}, {}],
						LimpiarBtn3: ["wm.Button", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_FontSizePx_14px","wm_TextDecoration_Bold","wm_BackgroundChromeBar_Yellow"]},"caption":"Limpiar Busquedas","height":"31px","width":"180px"}, {"onclick":"LimpiarBtn3Click"}],
						panelMostrarCarga: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved8px","wm_FontColor_White","wm_BackgroundChromeBar_Purple"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"1","padding":"2","verticalAlign":"top","width":"189px"}, {}, {
							labelSeEnviaA3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextDecoration_Bold"]},"border":"0","caption":"Mostrar carga de datos","width":"153px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							checkMostarCargaAbm: ["wm.CheckBoxEditor", {"width":"23px"}, {}, {
								editor: ["wm._CheckBoxEditor", {"startChecked":true}, {}]
							}]
						}]
					}],
					prestadorDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"prestadorDataGrid1Selected"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"prestadorLiveVariable1","targetProperty":"dataSet"}, {}]
						}],
						prestador1: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Prestador","columnWidth":"187px","field":"prestador"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						prestadortipoDescripcion1: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Tipo Prestador","columnWidth":"124px","field":"prestadortipo.descripcion","index":3}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						localidadDescripcion1: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Localidad","columnWidth":"191px","field":"localidad.descripcion","index":4}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						domicilio1: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Domicilio","columnWidth":"206px","field":"domicilio","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						cuit1: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Cuit","field":"cuit","index":2}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				prestadorLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundChromeBar_Yellow"]},"fitToContentHeight":true,"height":"162px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onSuccess":"prestadorLiveForm1Success","onBeginInsert":"prestadorLiveForm1BeginInsert","onBeginUpdate":"prestadorLiveForm1BeginUpdate","onBeforeOperation":"prestadorLiveForm1BeforeOperation"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"prestadorDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
						wire3: ["wm.Wire", {"source":"checkMostarCargaAbm.dataValue","targetProperty":"showing"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"prestadortipoRelatedEditor1.dataOutput","targetProperty":"dataOutput.prestadortipo"}, {}],
						wire2: ["wm.Wire", {"expression":undefined,"source":"localidadRelatedEditor1.dataOutput","targetProperty":"dataOutput.localidad"}, {}]
					}],
					prestadorEditor1: ["wm.Editor", {"caption":"Prestador","formField":"prestador","height":"26px","readonly":true,"width":"100%"}, {"onchange":"prestadorEditor1Change"}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					domicilioEditor1: ["wm.Editor", {"caption":"Domicilio","formField":"domicilio","height":"26px","readonly":true,"width":"100%"}, {}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					cuitEditor1: ["wm.Editor", {"caption":"Cuit","formField":"cuit","height":"26px","readonly":true,"width":"100%"}, {}, {
						editor: ["wm._TextEditor", {"regExp":"^(20|23|27|30|33)-[0-9]{8}-[0-9]$","required":true}, {}]
					}],
					prestadortipoRelatedEditor1: ["wm.RelatedEditor", {"formField":"prestadortipo"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"expression":undefined,"source":"prestadorDataGrid1.selectedItem.prestadortipo","targetProperty":"dataSet"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"prestadortipoLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
						}],
						prestadortipoLookup1: ["wm.Editor", {"caption":"Prestadortipo (lookup)","display":"Lookup","formField":"","height":"26px","readonly":true,"width":"100%"}, {}, {
							editor: ["undefined", {"displayField":"descripcion","required":true}, undefined]
						}]
					}],
					localidadRelatedEditor1: ["wm.RelatedEditor", {"formField":"localidad"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"expression":undefined,"source":"prestadorDataGrid1.selectedItem.localidad","targetProperty":"dataSet"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"localidadLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
						}],
						localidadLookup1: ["wm.Editor", {"caption":"Localidad (lookup)","display":"Lookup","formField":"","height":"26px","readonly":true,"width":"100%"}, {}, {
							editor: ["undefined", {"displayField":"descripcion","required":true}, undefined]
						}]
					}],
					editPanel1: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"prestadorLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Grabar","height":"100%","hint":"Graba el registro","iconHeight":"28","iconUrl":"resources/images/Iconoscrud/grabar.png","width":"120px"}, {"onclick":"editPanel1.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","hint":"Cancelar la accion","iconHeight":"28","iconUrl":"resources/images/Iconoscrud/cancelar.png","width":"120px"}, {"onclick":"editPanel1.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							buttonActulizar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Purple","wm_FontSizePx_12px","wm_FontColor_White","wm_TextDecoration_Bold"]},"caption":"Actulizar LookUp","height":"31px","width":"146px"}, {"onclick":"buttonActulizarClick"}],
							spacer2: ["wm.Spacer", {"height":"48px","width":"213px"}, {}],
							newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","hint":"Inserta un nuevo registro","iconHeight":"28","iconUrl":"resources/images/Iconoscrud/nuevo.png","width":"120px"}, {"onclick":"editPanel1.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Modificar","disabled":true,"height":"100%","hint":"Modifica el registro Seleccionado","iconHeight":"28","iconUrl":"resources/images/Iconoscrud/modificar.png","width":"120px"}, {"onclick":"editPanel1.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Borrar","disabled":true,"height":"100%","hint":"Borra el registro seleccionado","iconHeight":"28","iconUrl":"resources/images/Iconoscrud/borrar.png","width":"120px"}, {"onclick":"editPanel1.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
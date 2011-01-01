PrestadorRecibo.widgets = {
	printSV: ["wm.ServiceVariable", {"service":"Reports","operation":"getReport"}, {"onResult":"printSVResult","onSuccess":"printSVSuccess","onBeforeUpdate":"app.nCallCargando"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	prestadorreciboLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.prestadorreciboLiveView1","orderBy":"desc: idprestadorrecibo","matchMode":"anywhere","maxResults":5}, {"onSuccess":"prestadorreciboLiveVariable1Success","onBeforeUpdate":"prestadorreciboLiveVariable1BeforeUpdate"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.usuario.sucursal.idSucursal","source":"app.UsuarioNombreSVX.sucursalClave"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.idPrestadorRecibo","source":"searchBox.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.prestador.prestador","source":"searchBox1.dataValue"}, {}]
		}]
	}],
	navigationCallPrincipal: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Principal\""}, {}]
			}]
		}]
	}],
	prestadorrecibodetalleLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.prestadorrecibodetalleLiveView1","matchMode":"exact","maxResults":20,"designMaxResults":20}, {"onSuccess":"prestadorrecibodetalleLiveVariable1Success","onBeforeUpdate":"prestadorrecibodetalleLiveVariable1BeforeUpdate"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.prestadorrecibo.idPrestadorRecibo","source":"maestro.idPrestadorRecibo"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.prestadorrecibo","source":"maestro"}, {}]
		}]
	}],
	prestadorReciboFiltro: ["wm.Variable", {"type":"com.data.Prestadorrecibo"}, {}],
	maestro: ["wm.Variable", {"type":"com.data.Prestadorrecibo"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"prestadorreciboDataGrid1.selectedItem"}, {}]
		}]
	}],
	NCallTabCargar: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"layerreciboDetalles"}, {}]
			}]
		}]
	}],
	navigationCall1: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"layerRecibo"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"95%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		CenteredLayout: ["wm.Template", {"_classes":{"domNode":["wm_SilverBlueTheme_MainOutsetPanel"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
			panelOpciones: ["wm.Panel", {"height":"32px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
				buttonActulizar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Purple","wm_FontSizePx_12px","wm_FontColor_White","wm_TextDecoration_Bold"]},"width":"136px","height":"31px","caption":"Actulizar LookUp"}, {"onclick":"buttonActulizarClick"}],
				lblOpcion: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"90%","width":"160px","border":"0","caption":"Mostrar mas opciones"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				checkOpciones: ["wm.CheckBoxEditor", {"width":"24px"}, {}, {
					editor: ["wm._CheckBoxEditor", {"startChecked":true}, {}]
				}],
				FancyChkBusqueda: ["wm.Template", {"height":"36px","horizontalAlign":"left","verticalAlign":"top","width":"181px"}, {}, {
					PanelHabilitarBusqueda: ["wm.Panel", {"height":"32px","width":"171px","padding":"2","margin":"4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						checkBoxMostrarBusqueda: ["wm.CheckBoxEditor", {"width":"248px","captionAlign":"center","caption":"Mostrar Busqueda","captionSize":"100%"}, {}, {
							editor: ["wm._CheckBoxEditor", {"startChecked":true}, {}]
						}]
					}]
				}]
			}],
			contentPanel: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_WhiteOutsetPanel"]},"height":"100%","width":"90%","borderColor":"steelblue","border":"0,1"}, {}, {
				pageContainer1: ["wm.PageContainer", {"height":"64px","border":"0","pageName":"Cabecera"}, {"onStart":"pageContainer1Start"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"showing","source":"checkOpciones.dataValue"}, {}]
					}]
				}],
				tabLayers1: ["wm.TabLayers", {"layersType":"RoundedTabs"}, {"oncanchange":"tabLayers1Canchange"}, {
					layerRecibo: ["wm.Layer", {"caption":"Generar recibo","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						prestadorreciboLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
							prestadorreciboGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow"]},"horizontalAlign":"left","verticalAlign":"top","title":"Prestadorrecibo","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved12px wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"90%"}, {}, {
								BusquedaFancy: ["wm.Template", {"height":"42px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"showing","source":"checkBoxMostrarBusqueda.dataValue"}, {}]
									}],
									panel5: ["wm.Panel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_Border_BottomStyleCurved12px","wm_Border_TopStyleCurved12px","wm_BackgroundColor_LightBlue"]},"height":"35px","width":"100%","borderColor":"#FFFFFF","margin":"2","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										searchBox: ["wm.Editor", {"caption":"N recibo","width":"219px","height":"100%","padding":"0","margin":"4"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										BuscarBtn: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Evergreen","wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_TextDecoration_Bold"]},"width":"69px","height":"31px","caption":"Buscar","hint":"Click para realizar la busqueda"}, {"onclick":"prestadorreciboLiveVariable1"}],
										searchBox1: ["wm.Editor", {"caption":"Prestador","width":"219px","height":"100%","padding":"0","margin":"4"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										BuscarBtn1: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundChromeBar_Evergreen","wm_Border_BottomStyleCurved8px","wm_Border_TopStyleCurved8px","wm_Border_DropShadow","wm_TextDecoration_Bold"]},"width":"69px","height":"31px","caption":"Buscar","hint":"Click para realizar la busqueda"}, {"onclick":"prestadorreciboLiveVariable1"}],
										dataNavigatorEnvio: ["wm.DataNavigator", {"height":"31px","width":"269px","byPage":true}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"liveSource","source":"prestadorreciboLiveVariable1","expression":undefined}, {}]
											}]
										}]
									}]
								}],
								prestadorreciboDataGrid1: ["wm.DataGrid", {"border":"0"}, {"onAfterRender":"prestadorreciboDataGrid1AfterRender","onRowDblClick":"NCallTabCargar"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"prestadorreciboLiveVariable1","expression":undefined}, {}]
									}],
									idprestadorrecibo1: ["wm.DataGridColumn", {"field":"idprestadorrecibo","caption":"Clave","autoSize":undefined,"display":"Number","columnWidth":"62px"}, {}, {
										format: ["wm.NumberFormatter", {}, {}]
									}],
									factura1: ["wm.DataGridColumn", {"field":"factura","caption":"Factura","autoSize":undefined,"index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									usuarioNombre1: ["wm.DataGridColumn", {"field":"usuario.nombre","caption":"Usuario","autoSize":undefined,"index":9}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									prestadorPrestador1: ["wm.DataGridColumn", {"field":"prestador.prestador","caption":"Prestador","autoSize":undefined,"index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									mesliquidacion1: ["wm.DataGridColumn", {"field":"mesliquidacion","caption":"Mesliquidacion","autoSize":undefined,"index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									totalconsultas1: ["wm.DataGridColumn", {"field":"totalconsultas","caption":"Totalconsultas","autoSize":undefined,"display":"Number","index":4}, {}, {
										format: ["wm.NumberFormatter", {}, {}]
									}],
									prestadorCuit1: ["wm.DataGridColumn", {"field":"prestador.cuit","caption":"Cuit","autoSize":undefined,"index":10}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									totalfarmacia1: ["wm.DataGridColumn", {"field":"totalfarmacia","caption":"Totalfarmacia","autoSize":undefined,"display":"Number","index":5}, {}, {
										format: ["wm.NumberFormatter", {}, {}]
									}],
									totalpracticas1: ["wm.DataGridColumn", {"field":"totalpracticas","caption":"Totalpracticas","autoSize":undefined,"display":"Number","index":6}, {}, {
										format: ["wm.NumberFormatter", {}, {}]
									}],
									observacion1: ["wm.DataGridColumn", {"field":"observacion","caption":"Observacion","autoSize":undefined,"index":7}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									fechacarga1: ["wm.DataGridColumn", {"field":"fechacarga","caption":"Fechacarga","autoSize":undefined,"display":"Date","index":8}, {}, {
										format: ["wm.DateFormatter", {}, {}]
									}]
								}]
							}],
							prestadorreciboDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow"]},"horizontalAlign":"left","verticalAlign":"top","title":"Detalle","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved12px wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold"}, {}, {
								prestadorreciboLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundChromeBar_Yellow"]},"verticalAlign":"top","horizontalAlign":"left","readonly":true,"height":"166px","fitToContentHeight":true}, {"onSuccess":"prestadorreciboLiveForm1Success","onBeginInsert":"prestadorreciboLiveForm1BeginInsert","onBeginUpdate":"prestadorreciboLiveForm1BeginUpdate","onError":"prestadorreciboLiveForm1Error"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"prestadorreciboDataGrid1.selectedItem","expression":undefined}, {}],
										wire1: ["wm.Wire", {"targetProperty":"dataOutput.usuario","source":"usuarioRelatedEditor1.dataOutput","expression":undefined}, {}],
										wire2: ["wm.Wire", {"targetProperty":"dataOutput.prestador","source":"prestadorRelatedEditor1.dataOutput","expression":undefined}, {}]
									}],
									panel3: ["wm.Panel", {"height":"124px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										panel1: ["wm.Panel", {"height":"100px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											facturaEditor1: ["wm.Editor", {"caption":"Factura","readonly":true,"formField":"factura","width":"100%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {"required":true}, {}]
											}],
											mesliquidacionEditor1: ["wm.Editor", {"caption":"Mesliquidacion","readonly":true,"formField":"mesliquidacion","width":"100%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {"required":true}, {}]
											}],
											panelBusquedaLocalidad: ["wm.Panel", {"height":"40px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												FancyDialogoCarga1: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
													labelBusquedaDescripcion: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"height":"48px","width":"193px","border":"0","caption":"Colegio Medico Gremial Gral Jose de San Martin","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}],
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"caption","source":"prestadorreciboDataGrid1.selectedItem.prestador.prestador"}, {}]
														}]
													}],
													label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_FontColor_Red"]},"height":"48px","width":"19px","border":"0","caption":"*"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													buttonCargaPrestador: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White","wm_Border_DropShadow","wm_BackgroundColor_Purple","wm_TextDecoration_Bold"]},"width":"135px","height":"34px","caption":"Prestadores","hint":"Carga de los Prestadores","iconUrl":"resources/images/iconos/mascargar.png","iconWidth":"25px","iconHeight":"30px"}, {"onclick":"app.navigationCallPrestador"}]
												}]
											}]
										}],
										panel2: ["wm.Panel", {"height":"117px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											totalconsultasEditor1: ["wm.Editor", {"caption":"Totalconsultas","readonly":true,"formField":"totalconsultas","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											totalfarmaciaEditor1: ["wm.Editor", {"caption":"Totalfarmacia","readonly":true,"formField":"totalfarmacia","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											totalpracticasEditor1: ["wm.Editor", {"caption":"Totalpracticas","readonly":true,"formField":"totalpracticas","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											observacionEditor1: ["wm.Editor", {"caption":"Observacion","readonly":true,"formField":"observacion","width":"100%","height":"35px","display":"TextArea","singleLine":false}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}]
										}]
									}],
									editPanel1: ["wm.EditPanel", {"liveForm":"prestadorreciboLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false}, {}, {
										savePanel1: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
											saveButton1: ["wm.Button", {"width":"120px","height":"100%","caption":"Grabar","hint":"Graba el registro","iconUrl":"resources/images/Iconoscrud/grabar.png","iconHeight":"28"}, {"onclick":"editPanel1.saveData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
												}]
											}],
											cancelButton1: ["wm.Button", {"width":"120px","height":"100%","caption":"Cancelar","hint":"Cancelar la accion","iconUrl":"resources/images/Iconoscrud/cancelar.png","iconHeight":"28"}, {"onclick":"editPanel1.cancelEdit"}]
										}],
										operationPanel1: ["wm.Panel", {"height":"45px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
											panelImprimir: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"40px","width":"260px","borderColor":"#olive","border":"2","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												spacer4: ["wm.Spacer", {"width":"16px","height":"26px"}, {}],
												button1: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"width":"152px","height":"48px","caption":"Recibo Prestadores"}, {"onclick":"button1Click"}],
												picture1: ["wm.Picture", {"height":"35px","width":"72px","border":"0","source":"resources/images/print-printer-icon32.png","hint":"Presione en los botones de la Izquierda para imprimir"}, {}]
											}],
											spacer3: ["wm.Spacer", {"width":"115px","height":"48px"}, {}],
											newButton1: ["wm.Button", {"width":"120px","height":"100%","caption":"Nuevo","hint":"Inserta un nuevo registro","iconUrl":"resources/images/Iconoscrud/nuevo.png","iconHeight":"28"}, {"onclick":"editPanel1.beginDataInsert"}],
											updateButton1: ["wm.Button", {"width":"120px","height":"100%","caption":"Modificar","hint":"Modifica el registro Seleccionado","iconUrl":"resources/images/Iconoscrud/modificar.png","iconHeight":"28"}, {"onclick":"editPanel1.beginDataUpdate"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
												}]
											}],
											deleteButton1: ["wm.Button", {"width":"120px","height":"100%","caption":"Borrar","hint":"Borra el registro seleccionado","iconUrl":"resources/images/Iconoscrud/borrar.png","iconHeight":"28"}, {"onclick":"editPanel1.deleteData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}],
					layerreciboDetalles: ["wm.Layer", {"caption":"Cargar detalles del recibo","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						prestadorrecibodetalleLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
							prestadorrecibodetalleGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow"]},"horizontalAlign":"left","verticalAlign":"top","title":"Prestadorrecibodetalle","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved12px wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold"}, {}, {
								BusquedaFancy1: ["wm.Template", {"height":"37px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
									panel8: ["wm.Panel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_Border_BottomStyleCurved12px","wm_Border_TopStyleCurved12px","wm_BackgroundColor_LightBlue"]},"height":"30px","width":"100%","borderColor":"#FFFFFF","margin":"2","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										LabelPrestador: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px","wm_FontColor_White"]},"height":"100%","width":"106px","border":"0","caption":2189}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"caption","source":"maestro.idprestadorrecibo"}, {}]
											}],
											format: ["wm.DataFormatter", {}, {}]
										}],
										spacer1: ["wm.Spacer", {"width":"96px","height":"22px"}, {}],
										LabelPrestador1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px","wm_FontColor_White"]},"height":"100%","width":"248px","border":"0","caption":"Colegio Medico Gremial Gral Jose de San Martin"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"caption","source":"maestro.prestador.prestador"}, {}]
											}],
											format: ["wm.DataFormatter", {}, {}]
										}],
										dataNavigatorEnvio1: ["wm.DataNavigator", {"height":"26px","width":"279px","byPage":true}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"liveSource","source":"prestadorrecibodetalleLiveVariable1","expression":undefined}, {}]
											}]
										}]
									}]
								}],
								prestadorrecibodetalleDataGrid1: ["wm.DataGrid", {"border":"0"}, {"onAfterRender":"prestadorrecibodetalleDataGrid1AfterRender"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"prestadorrecibodetalleLiveVariable1","expression":undefined}, {}]
									}],
									prestadorreciboIdprestadorrecibo1: ["wm.DataGridColumn", {"field":"prestadorrecibo.idprestadorrecibo","caption":"Clave","autoSize":undefined,"display":"Number"}, {}, {
										format: ["wm.NumberFormatter", {}, {}]
									}],
									numeroorden1: ["wm.DataGridColumn", {"field":"numeroorden","caption":"Numeroorden","autoSize":undefined,"index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nsocioybarra1: ["wm.DataGridColumn", {"field":"nsocioybarra","caption":"Nsocioybarra","autoSize":undefined,"index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre1: ["wm.DataGridColumn", {"field":"nombre","caption":"Nombre","autoSize":undefined,"index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									codigos1: ["wm.DataGridColumn", {"field":"codigos","caption":"Codigos","autoSize":undefined,"index":4}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}],
							prestadorrecibodetalleDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow"]},"horizontalAlign":"left","verticalAlign":"top","title":"Detalle","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved12px wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold"}, {}, {
								prestadorrecibodetalleLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundChromeBar_Yellow"]},"verticalAlign":"top","horizontalAlign":"left","readonly":true,"height":"146px","fitToContentHeight":true}, {"onSuccess":"prestadorrecibodetalleLiveVariable1","onBeginInsert":"prestadorrecibodetalleLiveForm1BeginInsert"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"prestadorrecibodetalleDataGrid1.selectedItem","expression":undefined}, {}],
										wire1: ["wm.Wire", {"targetProperty":"dataOutput.prestadorrecibo","source":"prestadorreciboRelatedEditor1.dataOutput","expression":undefined}, {}]
									}],
									numeroordenEditor1: ["wm.Editor", {"caption":"Numeroorden","readonly":true,"formField":"numeroorden","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {"required":true}, {}]
									}],
									nsocioybarraEditor1: ["wm.Editor", {"caption":"Nsocioybarra","readonly":true,"formField":"nsocioybarra","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {"required":true}, {}]
									}],
									nombreEditor1: ["wm.Editor", {"caption":"Nombre","readonly":true,"formField":"nombre","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {"required":true}, {}]
									}],
									codigosEditor1: ["wm.Editor", {"caption":"Codigos","readonly":true,"formField":"codigos","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {"required":true}, {}]
									}],
									editPanel2: ["wm.EditPanel", {"liveForm":"prestadorrecibodetalleLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
										savePanel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
											saveButton2: ["wm.Button", {"width":"120px","height":"100%","caption":"Grabar","hint":"Graba el registro","iconUrl":"resources/images/Iconoscrud/grabar.png","iconHeight":"28"}, {"onclick":"editPanel2.saveData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
												}]
											}],
											cancelButton2: ["wm.Button", {"width":"120px","height":"100%","caption":"Cancelar","hint":"Cancelar la accion","iconUrl":"resources/images/Iconoscrud/cancelar.png","iconHeight":"28"}, {"onclick":"editPanel2.cancelEdit"}]
										}],
										operationPanel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
											panelImprimir1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"40px","width":"260px","borderColor":"#808000","border":"2","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												spacer5: ["wm.Spacer", {"width":"16px","height":"26px"}, {}],
												button2: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"width":"128px","height":"48px","caption":"Detalle recibo"}, {"onclick":"button2Click"}],
												picture2: ["wm.Picture", {"height":"35px","width":"72px","border":"0","source":"resources/images/print-printer-icon32.png","hint":"Presione en los botones de la Izquierda para imprimir"}, {}]
											}],
											spacer6: ["wm.Spacer", {"width":"90px","height":"48px"}, {}],
											newButton2: ["wm.Button", {"width":"120px","height":"100%","caption":"Nuevo","hint":"Inserta un nuevo registro","iconUrl":"resources/images/Iconoscrud/nuevo.png","iconHeight":"28"}, {"onclick":"editPanel2.beginDataInsert"}],
											updateButton2: ["wm.Button", {"width":"120px","height":"100%","caption":"Modificar","disabled":true,"hint":"Modifica el registro Seleccionado","iconUrl":"resources/images/Iconoscrud/modificar.png","iconHeight":"28"}, {"onclick":"editPanel2.beginDataUpdate"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
												}]
											}],
											deleteButton2: ["wm.Button", {"width":"120px","height":"100%","caption":"Borrar","disabled":true,"hint":"Borra el registro seleccionado","iconUrl":"resources/images/Iconoscrud/borrar.png","iconHeight":"28"}, {"onclick":"editPanel2.deleteData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
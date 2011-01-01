Address.widgets = {
	addressLiveVariable1: ["wm.LiveVariable", {"designMaxResults":30,"liveSource":"app.addressLiveView1","maxResults":30}, {}],
	filteraddrees: ["wm.Variable", {"type":"com.sakila.data.Address"}, {}],
	filtrojsFieldToSearch: ["wm.Variable", {"type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"autoScroll":false,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		addressLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			addressGridPanel: ["wm.FancyPanel", {"height":"439px","title":"Find the address"}, {}, {
				WidgetBusquedaunBoton: ["wm.Template", {"height":"178px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panelSelcciono: ["wm.MainContentPanel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"border":"0","caption":"Busque y luego seleccione el registro que desea","height":"100%","width":"100%"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							panel6: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"border":"0","caption":"Se selecciono:","height":"100%","width":"114px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_TextDecoration_Bold","wm_Border_DropShadow","wm_BackgroundColor_LightBlue","wm_FontColor_White"]},"align":"center","border":"0","caption":"1411 Lillydale Drive null","height":"34px","margin":"5","width":"100%"}, {}, {
									format: ["wm.DataFormatter", {}, {}],
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${addressDojoGrid.selectedItem.address}+\" \"+${addressDojoGrid.selectedItem.address2}","targetProperty":"caption"}, {}]
									}]
								}]
							}]
						}],
						picture1: ["wm.Picture", {"border":"0","height":"100%","showing":undefined,"source":"resources/images/iconos/flechaderecha.png","width":"64px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.cuit","targetProperty":"showing"}, {}]
							}]
						}],
						Close: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_20px","wm_FontColor_White","wm_BackgroundChromeBar_Purple","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved12px","wm_Border_DropShadow"]},"caption":"Close","height":"52px","hint":"Close this windows","showing":4,"width":"218px"}, {"onclick":"CloseClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"addressDojoGrid.selectedItem.addressId","targetProperty":"showing"}, {}]
							}]
						}],
						picture2: ["wm.Picture", {"border":"0","height":"100%","showing":undefined,"source":"resources/images/iconos/flechaizquierda.png","width":"64px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"prestadorDataGrid1.selectedItem.cuit","targetProperty":"showing"}, {}]
							}]
						}]
					}],
					panel5: ["wm.EmphasizedContentPanel", {"borderColor":"#FFFFFF","height":"91px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"88px","horizontalAlign":"left","verticalAlign":"top","width":"994px"}, {}, {
							panel2: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"996px"}, {}, {
								label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"border":"0","caption":"Search in:","width":"105px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								tButtonBusquedaAddress: ["wm.ToggleButton", {"captionDown":"Address","captionUp":"Address","width":"108px"}, {"onclick":"tButtonBusquedaAddressClick"}],
								tButtonBusquedaAddress2: ["wm.ToggleButton", {"captionDown":"Address2","captionUp":"Address2","width":"92px"}, {"onclick":"tButtonBusquedaAddress2Click"}],
								tButtonBusquedaDistrict: ["wm.ToggleButton", {"captionDown":"District","captionUp":"District","width":"85px"}, {"onclick":"tButtonBusquedaDistrictClick"}]
							}],
							panel3: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								searchBox: ["wm.Editor", {"height":"36px","margin":"4","padding":"0","width":"219px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								btBusqueda: ["wm.Button", {"caption":"Buscar","hint":"Click para realizar la bsuqueda"}, {"onclick":"btBusquedaClick"}],
								spacer1: ["wm.Spacer", {"height":"48px","width":"49px"}, {}],
								dataNavigator1: ["wm.DataNavigator", {"byPage":true,"horizontalAlign":"left","width":"311px"}, {}]
							}]
						}]
					}]
				}],
				addressDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","dsType":"com.sakila.data.Address","height":"318px","columns":[{"show":true,"id":"addressId","title":"AddressId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"address","title":"Address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address2","title":"Address2","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget"},{"show":true,"id":"district","title":"District","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"postalCode","title":"PostalCode","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"phone","title":"Phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"city.cityId","title":"City.cityId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"city.city","title":"City.city","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"city.lastUpdate","title":"City.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}]}, {"onClick":"addressDojoGridClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			addressDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"248px","title":"Details"}, {}, {
				addressLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"214px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"addressLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"addressDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"cityRelatedEditor1.dataOutput","targetProperty":"dataOutput.city"}, {}]
					}],
					addressIdEditor1: ["wm.Number", {"caption":"AddressId","captionSize":"200px","formField":"addressId","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"200px","formField":"address","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					address2Editor1: ["wm.Text", {"caption":"Address2","captionSize":"200px","formField":"address2","height":"26px","readonly":true,"width":"100%"}, {}],
					districtEditor1: ["wm.Text", {"caption":"District","captionSize":"200px","formField":"district","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					postalCodeEditor1: ["wm.Text", {"caption":"PostalCode","captionSize":"200px","formField":"postalCode","height":"26px","readonly":true,"width":"100%"}, {}],
					phoneEditor1: ["wm.Text", {"caption":"Phone","captionSize":"200px","formField":"phone","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					lastUpdateEditor1: ["wm.Date", {"caption":"LastUpdate","captionSize":"200px","formField":"lastUpdate","height":"26px","readonly":true,"required":true,"width":"400px"}, {}],
					cityRelatedEditor1: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"city"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"addressDojoGrid.selectedItem.city","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"cityLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
						}],
						cityLookup1: ["wm.Lookup", {"caption":"City (lookup)","captionSize":"200px","displayField":"city","displayValue":"","formField":"","height":"26px","readonly":true,"required":true,"width":"100%"}, {}]
					}],
					addressLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"addressLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save"}, {"onclick":"addressLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel"}, {"onclick":"addressLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New"}, {"onclick":"addressLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update"}, {"onclick":"addressLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete"}, {"onclick":"addressLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
Costumer.widgets = {
	customerLiveVariable1: ["wm.LiveVariable", {"designMaxResults":30,"firstRow":570,"liveSource":"app.customerLiveView1","matchMode":"anywhere","maxResults":30}, {}],
	filterCostumer: ["wm.Variable", {"type":"com.sakila.data.Customer"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"customerLiveVariable1","targetProperty":"dataValue"}, {}]
		}]
	}],
	filtrojsFieldToSearch: ["wm.Variable", {"type":"StringData"}, {}],

	ncaddrees: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"Address","type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Address\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":"700","targetProperty":"height"}, {}],
				wire2: ["wm.Wire", {"expression":"800\n","targetProperty":"width"}, {}],
				wire3: ["wm.Wire", {"expression":"true","targetProperty":"hideControls"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"borderColor":"#361e12","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		customerLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			customerGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Customer"}, {}, {
				WidgetBusquedaPlus: ["wm.Template", {"height":"95px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.EmphasizedContentPanel", {"borderColor":"#FFFFFF","height":"91px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"86px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							panel2: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"border":"0","caption":"Search in:","width":"105px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								tButtonBusquedaFirstName: ["wm.ToggleButton", {"captionDown":"First Name","captionUp":"First Name","width":"108px"}, {"onclick":"tButtonBusquedaFirstNameClick"}],
								tButtonBusquedaLast: ["wm.ToggleButton", {"captionDown":"Last Name","captionUp":"Last Name"}, {"onclick":"tButtonBusquedaLastClick"}],
								tButtonBusquedaEmail: ["wm.ToggleButton", {"captionDown":"Email","captionUp":"Email"}, {"onclick":"tButtonBusquedaEmailClick"}],
								tButtonBusquedaAddress: ["wm.ToggleButton", {"captionDown":"Address","captionUp":"Address"}, {"onclick":"tButtonBusquedaAddressClick"}]
							}],
							panel3: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								searchBox: ["wm.Editor", {"height":"36px","margin":"4","padding":"0","width":"219px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								btBusqueda: ["wm.Button", {"caption":"Buscar","hint":"Click para realizar la bsuqueda"}, {"onclick":"btBusquedaClick"}],
								spacer1: ["wm.Spacer", {"height":"48px","width":"222px"}, {}],
								dataNavigator1: ["wm.DataNavigator", {"byPage":true,"horizontalAlign":"left","width":"311px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"liveSource"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				customerDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","dsType":"com.sakila.data.Customer","height":"100%","columns":[{"show":true,"id":"customerId","title":"CustomerId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstName","title":"FirstName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastName","title":"LastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"email","title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"active","title":"Active","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"createDate","title":"CreateDate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"store.storeId","title":"Store.storeId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"store.lastUpdate","title":"Store.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"address.addressId","title":"Address.addressId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"address.address","title":"Address.address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.address2","title":"Address.address2","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.district","title":"Address.district","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.postalCode","title":"Address.postalCode","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.phone","title":"Address.phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"address.lastUpdate","title":"Address.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}]}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			customerDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"308px","title":"Details"}, {}, {
				customerLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"274px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"customerLiveForm1Success","onBeginInsert":"customerLiveForm1BeginInsert","onError":"customerLiveForm1Error"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"storeRelatedEditor1.dataOutput","targetProperty":"dataOutput.store"}, {}],
						wire2: ["wm.Wire", {"expression":undefined,"source":"addressRelatedEditor1.dataOutput","targetProperty":"dataOutput.address"}, {}]
					}],
					customerIdEditor1: ["wm.Number", {"caption":"CustomerId","captionSize":"200px","formField":"customerId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					firstNameEditor1: ["wm.Text", {"caption":"FirstName","captionSize":"200px","formField":"firstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					lastNameEditor1: ["wm.Text", {"caption":"LastName","captionSize":"200px","formField":"lastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					emailEditor1: ["wm.Text", {"caption":"Email","captionSize":"200px","formField":"email","height":"26px","readonly":true,"width":"100%"}, {}],
					activeEditor1: ["wm.Checkbox", {"caption":"Active","captionSize":"200px","displayValue":"true","emptyValue":"false","formField":"active","height":"26px","readonly":true,"width":"100%"}, {}],
					createDateEditor1: ["wm.Date", {"caption":"CreateDate","captionSize":"200px","formField":"createDate","height":"26px","readonly":true,"required":true,"width":"400px"}, {}],
					lastUpdateEditor1: ["wm.Date", {"caption":"LastUpdate","captionSize":"200px","defaultInsert":"","emptyValue":"null","formField":"lastUpdate","height":"26px","readonly":true,"width":"400px"}, {}],
					storeRelatedEditor1: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"store"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem.store","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"storeLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
						}],
						storeLookup1: ["wm.Lookup", {"caption":"Store (lookup)","captionSize":"200px","displayField":"lastUpdate","formField":"","height":"26px","readonly":true,"required":true,"width":"100%"}, {}]
					}],
					FancyDialogoCarga1: ["wm.EmphasizedContentPanel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						spacer2: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
						labelBusquedaDescripcion: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"border":"0","caption":undefined,"height":"48px","singleLine":false,"width":"287px"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding1: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"prestadorreciboDataGrid1.selectedItem.prestador.prestador","targetProperty":"caption"}, {}]
							}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"customerDojoGrid.selectedItem.address.address","targetProperty":"caption"}, {}]
							}]
						}],
						label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_FontColor_Red"]},"border":"0","caption":"*","height":"48px","width":"19px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						buttonCargaPrestador: ["wm.Button", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Purple"]},"caption":"Address","height":"34px","hint":"Select the addrees","iconHeight":"30px","iconUrl":"resources/images/iconos/mascargar.png","iconWidth":"25px","margin":"3","width":"124px"}, {"onclick":"ncaddrees"}]
					}],
					customerLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"customerLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save"}, {"onclick":"customerLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel"}, {"onclick":"customerLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New"}, {"onclick":"customerLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","disabled":true}, {"onclick":"customerLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","disabled":true}, {"onclick":"customerLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
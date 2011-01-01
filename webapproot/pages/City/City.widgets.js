City.widgets = {
	cityLiveVariable1: ["wm.LiveVariable", {"designMaxResults":30,"liveSource":"app.cityLiveView1","matchMode":"anywhere","maxResults":30}, {}],
	filterCity: ["wm.Variable", {"type":"com.sakila.data.City"}, {}],
	filtrojsFieldToSearch: ["wm.Variable", {"type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		cityLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			cityGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"City"}, {}, {
				WidgetBusquedaunBoton: ["wm.Template", {"height":"96px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.EmphasizedContentPanel", {"borderColor":"#FFFFFF","height":"91px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"88px","horizontalAlign":"left","verticalAlign":"top","width":"994px"}, {}, {
							panel2: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"996px"}, {}, {
								label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"border":"0","caption":"Search in:","width":"105px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								tButtonBusquedaCity: ["wm.ToggleButton", {"captionDown":"City","captionUp":"City","width":"100px"}, {"onclick":"tButtonBusquedaCityClick"}],
								tButtonBusquedaCountry: ["wm.ToggleButton", {"captionDown":"Country","captionUp":"Country","width":"100px"}, {"onclick":"tButtonBusquedaCountryClick"}]
							}],
							panel3: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								searchBox: ["wm.Editor", {"height":"36px","margin":"4","padding":"0","width":"219px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								btBusqueda: ["wm.Button", {"caption":"Buscar","hint":"Click para realizar la bsuqueda","width":"100px"}, {"onclick":"btBusquedaClick"}],
								spacer1: ["wm.Spacer", {"height":"48px","width":"118px"}, {}],
								dataNavigator1: ["wm.DataNavigator", {"byPage":true,"horizontalAlign":"left","width":"311px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"cityLiveVariable1","targetProperty":"liveSource"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				cityDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","dsType":"com.sakila.data.City","height":"100%","columns":[{"show":false,"id":"cityId","title":"CityId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","editable":true},{"show":true,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"formatLastUpdateCityDojoGrid"},{"show":false,"id":"country.countryId","title":"Country.countryId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"country.country","title":"Country.country","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"country.lastUpdate","title":"Country.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}]}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"cityLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			cityDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"144px","title":"Details"}, {}, {
				cityLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"cityLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"cityDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"countryRelatedEditor1.dataOutput","targetProperty":"dataOutput.country"}, {}]
					}],
					cityIdEditor1: ["wm.Number", {"caption":"CityId","captionSize":"200px","formField":"cityId","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
					cityEditor1: ["wm.Text", {"caption":"City","captionSize":"200px","formField":"city","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					lastUpdateEditor1: ["wm.Date", {"caption":"LastUpdate","captionSize":"200px","formField":"lastUpdate","height":"26px","readonly":true,"required":true,"width":"400px"}, {}],
					countryRelatedEditor1: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"country"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"cityDojoGrid.selectedItem.country","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"countryLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
						}],
						countryLookup1: ["wm.Lookup", {"caption":"Country (lookup)","captionSize":"200px","displayField":"country","formField":"","height":"26px","readonly":true,"required":true,"width":"100%"}, {}]
					}],
					cityLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"cityLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save"}, {"onclick":"cityLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"cityLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel"}, {"onclick":"cityLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New"}, {"onclick":"cityLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","disabled":true}, {"onclick":"cityLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"cityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","disabled":true}, {"onclick":"cityLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"cityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
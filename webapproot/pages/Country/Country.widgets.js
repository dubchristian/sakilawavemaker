Country.widgets = {
	countryLiveVariable1: ["wm.LiveVariable", {"designMaxResults":30,"liveSource":"app.countryLiveView1","matchMode":"anywhere","maxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"searchBox.dataValue","targetProperty":"filter.country"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		countryLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			countryGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Country"}, {}, {
				WidgetBusquedaunBoton: ["wm.Template", {"height":"60px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.EmphasizedContentPanel", {"borderColor":"#FFFFFF","height":"51px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","verticalAlign":"top","width":"966px"}, {}, {
							panel3: ["wm.Panel", {"height":"41px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								searchBox: ["wm.Editor", {"caption":"Country","height":"36px","margin":"4","padding":"0","width":"219px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								btBusqueda: ["wm.Button", {"caption":"Buscar","hint":"Click para realizar la bsuqueda"}, {"onclick":"countryLiveVariable1"}],
								spacer1: ["wm.Spacer", {"height":"48px","width":"222px"}, {}],
								dataNavigator1: ["wm.DataNavigator", {"byPage":true,"horizontalAlign":"left","width":"311px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"countryLiveVariable1","targetProperty":"liveSource"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				dojoGrid1: ["wm.DojoGrid", {"dsType":"com.sakila.data.Country","height":"596px","columns":[{"show":true,"id":"countryId","title":"CountryId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"country","title":"Country","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"formatLastUpdateDojoGrid1","fieldType":"dojox.grid.cells._Widget"}]}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"countryLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			countryDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"144px","title":"Details"}, {}, {
				countryLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"countryLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					countryIdEditor1: ["wm.Number", {"caption":"CountryId","captionSize":"200px","formField":"countryId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					countryEditor1: ["wm.Text", {"caption":"Country","captionSize":"200px","formField":"country","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					lastUpdateEditor1: ["wm.Date", {"caption":"LastUpdate","captionSize":"200px","formField":"lastUpdate","height":"26px","readonly":true,"required":true,"width":"400px"}, {}],
					countryLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"countryLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save"}, {"onclick":"countryLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"countryLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel"}, {"onclick":"countryLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New"}, {"onclick":"countryLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","disabled":true}, {"onclick":"countryLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"countryLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","disabled":true}, {"onclick":"countryLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"countryLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}
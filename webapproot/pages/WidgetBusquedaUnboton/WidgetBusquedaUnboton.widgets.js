WidgetBusquedaUnboton.widgets = {
	WidgetBusquedaunBoton: ["wm.TemplatePublisher", {"description":"WidgetBusquedaunBoton","displayName":"WidgetBusquedaunBoton","group":"Templates","namespace":"WidgetBusquedaunBoton","publishName":"sakilaWidgetBusquedaUnboton"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel5: ["wm.EmphasizedContentPanel", {"borderColor":"#FFFFFF","height":"91px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"margin":"2","verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"height":"88px","horizontalAlign":"left","verticalAlign":"top","width":"994px"}, {}, {
				panel2: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"996px"}, {}, {
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
					btBusqueda: ["wm.Button", {"caption":"Buscar","hint":"Click para realizar la bsuqueda"}, {}],
					spacer1: ["wm.Spacer", {"height":"48px","width":"222px"}, {}],
					dataNavigator1: ["wm.DataNavigator", {"byPage":true,"horizontalAlign":"left","width":"311px"}, {}]
				}]
			}]
		}]
	}]
}
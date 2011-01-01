Main.widgets = {
	ncHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"Home","type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Home\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	nccostumer: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"Costumer","type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Costumer\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	nctoaster: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"10000\"","targetProperty":"duration"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire2: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}],
				wire3: ["wm.Wire", {"expression":"\"prueba de toaster succes\"","targetProperty":"content"}, {}]
			}]
		}]
	}],
	ncCountry: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"Country","type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Country\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	ncCity: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"City","type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"City\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	ncAddress: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"pageName":"Address","type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Address\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":"800","targetProperty":"width"}, {}],
				wire2: ["wm.Wire", {"expression":"750","targetProperty":"height"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"border":"1","borderColor":"#361e12","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		MenuonSide: ["wm.Template", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minWidth":900,"verticalAlign":"top","width":"90%"}, {}, {
				panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
					picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
					label3: ["wm.Label", {"border":"0","caption":"Example using Sakila database","height":"35px","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}]
				}],
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"120px"}, {}, {
						dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"eventList":[{"label":"Home","onClick":"ncHome"},{"label":"Custumer","children":[{"label":"Custumer"}],"onClick":"nccostumer"},{"label":"Custumer","children":[{"label":"Custumer"}],"onClick":"nccostumer"},{"label":"Custumer","children":[{"label":"Custumer"}],"onClick":"nccostumer"},{"label":"Custumer","children":[{"label":"Custumer"}],"onClick":"nccostumer"},{"label":"Country","onClick":"ncCountry"},{"label":"City","onClick":"ncCity"}],"height":"100%","menu":"Home \nCustumer > Custumer, Country, City","padding":"20,0,0,0","structure":"{\"items\":[{\"label\":\"Home\"},{\"label\":\"Custumer\",\"children\":[{\"label\":\"Custumer\"},{\"label\":\"Country\"},{\"label\":\"City\"}]}]}","transparent":false,"vertical":true}, {}]
					}],
					panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Home"}, {}]
					}]
				}],
				panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
					label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright dubchristian 2010","height":"100%","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}
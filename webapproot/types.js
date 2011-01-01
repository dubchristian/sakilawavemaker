wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.sakila.data.Actor": {
			"fields": {
				"actorId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"filmActors": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.FilmActor"
				},
				"firstName": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.ActorInfo": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.ActorInfoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.ActorInfoId": {
			"fields": {
				"actorId": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"filmInfo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"firstName": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"lastName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.Address": {
			"fields": {
				"address": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"address2": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"addressId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"city": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.City"
				},
				"customers": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Customer"
				},
				"district": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"phone": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"postalCode": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"staffs": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Staff"
				},
				"stores": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Store"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Category": {
			"fields": {
				"categoryId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"filmCategories": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.FilmCategory"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.City": {
			"fields": {
				"addresses": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Address"
				},
				"city": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"cityId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"country": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Country"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Country": {
			"fields": {
				"cities": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.City"
				},
				"country": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"countryId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Customer": {
			"fields": {
				"active": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"address": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Address"
				},
				"createDate": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"customerId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"email": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"firstName": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"payments": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Payment"
				},
				"rentals": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Rental"
				},
				"store": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Store"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.CustomerList": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.CustomerListId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.CustomerListId": {
			"fields": {
				"address": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"city": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"country": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"notes": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"phone": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"sid": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"zipCode": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.Film": {
			"fields": {
				"description": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"filmActors": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.FilmActor"
				},
				"filmCategories": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.FilmCategory"
				},
				"filmId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"inventories": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Inventory"
				},
				"languageByLanguageId": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Language"
				},
				"languageByOriginalLanguageId": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Language"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"length": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Short"
				},
				"rating": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"releaseYear": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"rentalDuration": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Byte"
				},
				"rentalRate": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"replacementCost": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"specialFeatures": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"title": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.FilmActor": {
			"fields": {
				"actor": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Actor"
				},
				"film": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Film"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.FilmActorId"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.FilmActorId": {
			"fields": {
				"actorId": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"filmId": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.FilmCategory": {
			"fields": {
				"category": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Category"
				},
				"film": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Film"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.FilmCategoryId"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.FilmCategoryId": {
			"fields": {
				"categoryId": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"filmId": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.FilmList": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.FilmListId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.FilmListId": {
			"fields": {
				"actors": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"category": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"description": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fid": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"length": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"price": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"rating": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"title": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.FilmText": {
			"fields": {
				"description": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"filmId": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"title": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Inventory": {
			"fields": {
				"film": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Film"
				},
				"inventoryId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"rentals": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Rental"
				},
				"store": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Store"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Language": {
			"fields": {
				"filmsForLanguageId": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Film"
				},
				"filmsForOriginalLanguageId": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Film"
				},
				"languageId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.NicerButSlowerFilmList": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.NicerButSlowerFilmListId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.NicerButSlowerFilmListId": {
			"fields": {
				"actors": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"category": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"description": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fid": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"length": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"price": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"rating": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"title": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.Payment": {
			"fields": {
				"amount": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"customer": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Customer"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"paymentDate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"paymentId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Short"
				},
				"rental": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Rental"
				},
				"staff": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Staff"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.Rental": {
			"fields": {
				"customer": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Customer"
				},
				"inventory": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Inventory"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"payments": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Payment"
				},
				"rentalDate": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"rentalId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"returnDate": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"staff": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Staff"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.SalesByFilmCategory": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.SalesByFilmCategoryId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.SalesByFilmCategoryId": {
			"fields": {
				"category": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"totalSales": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.SalesByStore": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.SalesByStoreId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.SalesByStoreId": {
			"fields": {
				"manager": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"store": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"totalSales": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.Staff": {
			"fields": {
				"active": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"address": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Address"
				},
				"email": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"firstName": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"password": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"payments": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Payment"
				},
				"picture": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "byte"
				},
				"rentals": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Rental"
				},
				"staffId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"store": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Store"
				},
				"stores": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Store"
				},
				"username": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.StaffList": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.sakila.data.StaffListId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.sakila.data.StaffListId": {
			"fields": {
				"address": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"city": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"country": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"name": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"phone": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"sid": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				},
				"zipCode": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "sakila"
		},
		"com.sakila.data.Store": {
			"fields": {
				"address": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Address"
				},
				"customers": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Customer"
				},
				"inventories": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Inventory"
				},
				"lastUpdate": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"staff": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.sakila.data.Staff"
				},
				"staffs": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.sakila.data.Staff"
				},
				"storeId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Byte"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "sakila"
		},
		"com.wavemaker.runtime.service.PagingOptions": {
			"fields": {
				"firstResult": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"maxResults": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"orderBy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"com.wavemaker.runtime.service.PropertyOptions": {
			"fields": {
				"filters": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "com.wavemaker.runtime.service.Filter"
				},
				"properties": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
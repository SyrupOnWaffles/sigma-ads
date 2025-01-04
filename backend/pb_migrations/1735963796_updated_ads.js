/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "url917281265",
    "name": "link",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2375276105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // remove field
  collection.fields.removeById("url917281265")

  // remove field
  collection.fields.removeById("relation2375276105")

  return app.save(collection)
})

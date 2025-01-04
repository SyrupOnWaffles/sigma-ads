/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3672867105")

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "url1766001124",
    "name": "site",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3672867105")

  // remove field
  collection.fields.removeById("url1766001124")

  return app.save(collection)
})

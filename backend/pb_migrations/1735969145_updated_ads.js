/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number451057295",
    "max": null,
    "min": 0,
    "name": "max_impressions",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // remove field
  collection.fields.removeById("number451057295")

  return app.save(collection)
})

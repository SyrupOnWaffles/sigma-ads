/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": "user = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": null
  }, collection)

  return app.save(collection)
})

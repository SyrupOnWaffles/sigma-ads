/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3672867105")

  // update collection data
  unmarshal({
    "listRule": "ad.user.id = '@request.auth.id'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3672867105")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  return app.save(collection)
})
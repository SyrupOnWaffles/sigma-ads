/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": "user = @request.auth.id && @request.body.max_impressions = 0",
    "listRule": "user ?= @request.auth.id",
    "updateRule": "user = @request.auth.id && @request.body.max_impressions = 0"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": "user = @request.auth.id",
    "listRule": "user ?= @request.auth.id &&\n@request.body.max_impressions:isset = false",
    "updateRule": "user = @request.auth.id"
  }, collection)

  return app.save(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": "user = @request.auth.id && @request.body.maxImpressions = 0",
    "updateRule": "user = @request.auth.id && @request.body.maxImpressions = 0"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1911549009")

  // update collection data
  unmarshal({
    "createRule": "user = @request.auth.id && @request.body.max_impressions = 0",
    "updateRule": "user = @request.auth.id && @request.body.max_impressions = 0"
  }, collection)

  return app.save(collection)
})

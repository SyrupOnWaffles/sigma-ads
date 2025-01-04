routerAdd("GET", "/embed/ad/{id}", (e) => {
    let id = e.request.pathValue("id")
    let record = $app.findRecordById("ads",id)
    let image = `/api/files/${record.baseFilesPath()}/${record.get('image')}`

    let html = $template.loadFiles(
        `${__hooks}/views/ad.html`,
    ).render({
        "tagline": record.get('tagline'),
        "link": record.get('link'),
        "image" : image,
    })

    e.response.header().set("x-frame-options", "allow")
    return e.html(200, html)
    // return e.json(200, {ip:e.request['remoteAddr']})
})
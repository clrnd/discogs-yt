var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: /.*discogs.*\/release\/.*/,
    attachTo: ["top"],
    contentScriptFile: [self.data.url("jquery.js"), self.data.url("script.js")]
});

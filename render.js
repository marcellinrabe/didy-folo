( async () => {
    const dataFile = await fetch("data.js");
    const dataJSON = await dataFile.text()
        .then(script => {
            eval(script);
            console.log(data);
        });
    console.log(dataJSON);
    const template = document.getElementById("template").innerHTML;
    const rendered = Mustache.render(template, { name: "marcellin" });
    document.getElementById("target").innerHTML = rendered;
})();
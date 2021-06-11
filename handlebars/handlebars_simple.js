var data = {
    title : "Handlebars Tutorial",
    info : "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions."
}

// Compile handlebar templates
var handlebar_sample_template = Handlebars.compile(
    document.querySelector('#handlebars-sample-info').innerHTML
);

//fill in data

var filled_handlebar_sample_template = handlebar_sample_template(data);
document.querySelector("#handlebars-sample-output-container").innerHTML = filled_handlebar_sample_template;
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnStartup')

function carouselIndicators(slides) {
    var indicators = [];
    for (var i = 0; i < slides.length; i++) {
        var cssClass = i === 0 ? 'class="active"' : '';
        indicators.push(`<li data-target="#carouselExampleCaptions" data-slide-to="${i}" ${cssClass}></li>`);
    }

    return `<ol class="carousel-indicators">${indicators.join('')}</ol>`;
}

function carouselItems(slides) {
    var carouselItems = [];
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        var cssClass = i === 0 ? 'active' : '';

        carouselItems.push(`    
        <div class="carousel-item ${cssClass}">
        <img src="${slide.image}" class="d-block w-100" alt="${slide.title}" style="height: 200px">
        <div class="carousel-caption d-none d-md-block">
          <h5>${slide.title}</h5>
          <p>${slide.description}</p>
        </div>
        </div>
        `);
    }

    return `<div class="carousel-inner">${carouselItems.join('')}</div>`;
}

function carouselMarkup(data) {
    return `
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    ${carouselIndicators(data.slides)}
    ${carouselItems(data.slides)}
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>`;
}

window.SetCarouselData = function (data) {
    try {
        var markup = carouselMarkup(data);
        document.getElementById('controlAddIn').innerHTML = markup;
        $('#carouselExampleCaptions').carousel();
        console.log(markup);
    } catch (err) {
        console.log(err);
    }
}
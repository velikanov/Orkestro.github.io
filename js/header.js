(function($) {
    "use strict";

    var titleCount = $('header input:hidden[name^="header-"]').length;
    var firstTitleIndex = Math.round(Math.random() * (titleCount - 1));

    $('header .header-content .header-content-inner h1').html($('header input:hidden[name^="header-"]:eq(' + firstTitleIndex + ')').val());
    $('header .header-content .header-content-inner p.description').html($('header input:hidden[name^="description-"]:eq(' + firstTitleIndex + ')').val());
    $('header .header-content .header-content-inner a').html($('header input:hidden[name^="button-"]:eq(' + firstTitleIndex + ')').val());
})(jQuery);;

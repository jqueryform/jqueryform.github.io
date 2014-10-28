
jQuery(function($){
    $('.rq-post-link a').each(function(){
        $(this).parent().html(
            '<a href="%href">%html</a>'
                .replace('%href', $(this).attr('href'))
                .replace('%html', $(this).parent().text())
        );
    });
});
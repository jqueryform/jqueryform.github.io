
var rating = {
    click : function(a){
        var v = a.innerHTML;
        if (a.parentNode.parentNode.className.indexOf('rating-disable') >= 0) alert('You have already voted!');
        else {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = RATE_PHP_URL + '&v=' + v;
            head.appendChild(script);
        }
        return false;
    },
    ready : function(){
        var ratings = document.getElementById('ratings');
        var tags = ratings.getElementsByTagName('div');
        if (tags.length) tags[0].innerHTML = 'Thanks!';
        tags = ratings.getElementsByTagName('ul');
        if (tags.length) tags[0].className = tags[0].className + ' rating-disable';
    }
};

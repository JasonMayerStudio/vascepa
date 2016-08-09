jQuery(document).ready(function($){
    if (isAuthenticated() == false) authenticate("Please enter a password", 3, "http://www.vascepahcp.com");
    var url = window.location.protocol + "//" + window.location.host + '/';
    
    $('#top-content').load(url+'/includes/header.html', function(){
        var currentpg = $('#currentpg').data('current');
        $('#'+currentpg).addClass('current-page-parent');
    });
    $('.load-disclaimer').load(url+'/includes/disclaimer.html');
    $('.load-callout').load(url+'/includes/callout.html');
    $('#footer').load(url+'/includes/footer.html');
    
    
    $('#top-child-content').load(url+'/includes/child-header.html', function(){
        var currentpg = $('#currentpg').data('current');
        $('#'+currentpg).addClass('current-page-parent');
    });
    $('.load-child-disclaimer').load(url+'/includes/child-disclaimer.html');
    $('.load-child-callout').load(url+'/includes/child-callout.html');
    $('#child-footer').load(url+'/includes/child-footer.html');
});
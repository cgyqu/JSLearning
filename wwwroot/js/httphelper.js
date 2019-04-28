var httphelper = function () {

    var httpRequest;
    // Old compatibility code, no longer needed.
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = JSON.parse(httpRequest.responseText);
                alert(response.computedString);
            } else {
                alert('There was a problem with the request.');
            }
        }
    }


    httpRequest.open('GET', 'http://www.example.org/some.file', true);
    httpRequest.send();
    var proto = httphelper.prototype || {};
    proto.get = function (url) {
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }
}
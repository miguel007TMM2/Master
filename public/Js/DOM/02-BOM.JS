'use strict'

// BOM - Browser object model

function getBom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    console.log(screen.width);
    console.log(screen.height);

    console.log(window.location);
}

function redirect(url) {
    
    window.location.href = url
}

function openNewWindow(url) {
    window.open(url);
}
 getBom();

//  redirect('https://www.youtube.com/watch?v=_QfPliSW83A&list=RDSl84nmRaqaA&index=8');

// openNewWindow('https://www.youtube.com/watch?v=_QfPliSW83A&list=RDSl84nmRaqaA&index=8');
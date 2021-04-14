let footerEnd = document.getElementById('year');
    let date = new Date();
    footerEnd.innerText = '2020 - ' + date.getFullYear().toString();
    
    let subMenuHeadline = document.getElementsByClassName('sub_menu_headline');

    for (let el of subMenuHeadline){
        el.onclick = function(){
            el.nextElementSibling.classList.toggle('visible');             
        };
    }
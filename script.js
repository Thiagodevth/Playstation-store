const menuList = document.getElementById('menu-list')
menuList.style.maxHeight = "0px" // quando o menu tiver em 0px o overflor vai esconder no CSS

    function showMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "120px"
        } else{
            menuList.style.maxHeight = "0px"
        }
    }

document.addEventListener ('DOMContentLoaded',function(){
    const links = document.querySelectorAll(".header__link, .about__link, .projects__link ,.contact__link")
    const sections = document.querySelectorAll(".section")
    function showSection(event){
        event.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        console.log(targetId,targetSection)
        if (targetSection){
            sections.forEach(section => section.classList.remove("active"));
            targetSection.classList.add("active");
        }
    }
    links.forEach(link =>{
        link.addEventListener("click",showSection);
    });
    //scroll
    $(document).ready(function () {
        var Scrollbar = window.Scrollbar;

        Scrollbar.use(window.OverscrollPlugin);

        var customScroll = Scrollbar.init(document.querySelector('.js-scroll-list'), {
            plugins: {
                overscroll: true
            }
        });

        var listItem = $('.js-scroll-list-item');

        listItem.eq(0).addClass('item-focus');
        listItem.eq(1).addClass('item-next');

        customScroll.addListener(function (status) {

            var $content = $('.js-scroll-content');

            var viewportScrollDistance = 0;


            viewportScrollDistance = status.offset.y;
            var viewportHeight = $content.height();
            var listHeight = 0;
            var $listItems = $content.find('.js-scroll-list-item');
            for (var i = 0; i < $listItems.length; i++) {
                listHeight += $($listItems[i]).height();
            }

            var top = status.offset.y;
            // console.log(top);
            var visibleCenterVertical = 0;
            visibleCenterVertical = top;

            var parentTop = 1;
            var $lis = $('.js-scroll-list-item');
            var $focusLi;
            for (var i = 0; i < $lis.length; i++) {
                var $li = $($lis[i]);
                var liTop = $li.position().top;
                var liRelTop = liTop - parentTop;

                var distance = 0;
                var distance = Math.abs(top - liRelTop);
                var maxDistance = $('.js-scroll-content').height() / 2;
                var distancePercent = distance / (maxDistance / 100);


                if (liRelTop + $li.parent().scrollTop() > top) {
                    if (!$li.hasClass('item-focus')) {
                        $li.prev().addClass('item-hide');
                        $lis.removeClass('item-focus');
                        $lis.removeClass('item-next');
                    }
                    $li.removeClass('item-hide');
                    $li.addClass('item-focus');
                    $li.next().addClass('item-next');
                    break;
                }
            }
        });

    });
    // icon
    document.querySelectorAll(".ico_desc").forEach((icon) => {
        icon.parentElement.addEventListener("mouseenter", () => {
            icon.parentElement.style.animation = "bounce 0.5s";
        });
    
        icon.parentElement.addEventListener("animationend", () => {
            icon.parentElement.style.animation = "";
        });
    });
    //sect color
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.style.color = "");
                    if (entry.target.id === "intro") {
                        document.querySelector(".about__link").style.color = "#111";
                    } else if (entry.target.id === "projects") {
                        document.querySelector(".projects__link").style.color = "#111";
                    } else if (entry.target.id === "contact") {
                        document.querySelector(".contact__link").style.color = "#111";
                    }
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                }
            });
        },
        { threshold: 0.2 } 
    );
    section.forEach((section) => observer.observe(section));
    //modalFrontend
    const openModalFrontend = document.querySelector('.frontend_buttom');
    const modalFrontend = document.querySelector('.modal_frontend')
    const closeModalFrontend = document.querySelector('.close_modal')

    openModalFrontend.addEventListener('click', (e)=>{
        e.preventDefault();
        modalFrontend.classList.add('modalFrontend--show')
        console.log(modalFrontend)
    });
    closeModalFrontend.addEventListener('click', (e)=>{
        e.preventDefault();
        modalFrontend.classList.remove('modalFrontend--show')
        console.log(modalFrontend)
    });
    //modalWordpress
    const openModalWordpress = document.querySelector('.wordpress_buttom');
    const modalWordpress = document.querySelector('.modal_Wordpress')
    const closeModalWordpress = document.querySelector('.close_modalWordpress')

    openModalWordpress.addEventListener('click', (e)=>{
        e.preventDefault();
        modalWordpress.classList.add('modalWordpress--show')
        console.log(modalWordpress)
    });
    closeModalWordpress.addEventListener('click', (e)=>{
        e.preventDefault();
        modalWordpress.classList.remove('modalWordpress--show')
        console.log(modalWordpress)
    });
        //modalDataAnalyst
        const openModalDataAnalyst = document.querySelector('.DataAnalyst_buttom');
        const modalDataAnalyst = document.querySelector('.modal_DataAnalyst')
        const closeModalDataAnalyst = document.querySelector('.close_modalDataAnalyst')
    
        openModalDataAnalyst.addEventListener('click', (e)=>{
            e.preventDefault();
            modalDataAnalyst.classList.add('modalDataAnalyst--show')
            console.log(modalDataAnalyst)
        });
        closeModalDataAnalyst.addEventListener('click', (e)=>{
            e.preventDefault();
            modalDataAnalyst.classList.remove('modalDataAnalyst--show')
            console.log(modalDataAnalyst)
        });
        //modalPython
        const openModalPython = document.querySelector('.Python_buttom');
        const modalPython = document.querySelector('.modal_Pyton')
        const closeModalPython = document.querySelector('.close_modalPython')
    
        openModalPython.addEventListener('click', (e)=>{
            e.preventDefault();
            modalPython.classList.add('modalPython--show')
            console.log(modalPython)
        });
        closeModalPython.addEventListener('click', (e)=>{
            e.preventDefault();
            modalPython.classList.remove('modalPython--show')
            console.log(modalPython)
        });
        const check = document.querySelector(".check")
        check.addEventListener('click', lenguage);

        function lenguage(){
            let id=check.checked;
            if (id==true){
                location.href="es/index.html";
            }
            else{
                location.href="../index.html";
            }
            
            }
        }
)


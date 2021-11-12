function navAnimation() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu_toggle');
    menu.classList.toggle("navActive");
    menuToggle.classList.toggle("menuActive");
}

let contentPage = document.querySelector('.content-page');
let socialIcons = document.querySelectorAll('.media ul li a');
// let bg = document.querySelector('.bgColor');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
// var darkRight = document.querySelector('.dark_mode .right');
// var darkLeft = document.querySelector('.dark_mode .left');
let wrapper = document.querySelector('.wrapper');


if (annyang) {
    var formCommand = {
        'open menu': function() {
            var menu = document.querySelector('.menu');
            var menuToggle = document.querySelector('.menu_toggle');
            menu.classList.add("navActive");
            menuToggle.classList.add("menuActive");
        },
        'close menu': function() {
            var menu = document.querySelector('.menu');
            var menuToggle = document.querySelector('.menu_toggle');
            menu.classList.remove("navActive");
            menuToggle.classList.remove("menuActive");
        },
        'shutdown': function() {
            annyang.abort();
            var voiceBtn = document.querySelector('.voiceBtn');
            var voiceBtni = document.querySelector('.voiceBtn i');
            var modalOpen = document.querySelector('.modal');

            voiceBtn.style.backgroundColor = 'black';
            voiceBtni.style.color = 'white';

            modalOpen.style.display = "none";
            modalOpen.classList.remove('show');
        },
        'home page': function(){
            window.open('index.html','_self');
        },
        'contact us page': function(){
            window.open('contact_us.html','_self');
        },
        'glossary page': function(){
            window.open('glosary.html','_self');
        },
        'lab equipments page': function(){
            window.open('labtools.html','_self');
        },
        'practical page': function(){
            window.open('practicals.html','_self');
        },
        'reload': function(){
            window.open('../','_self');
            
        },
        'scroll down':function(){
            document.body.scrollTop = 800;
            document.documentElement.scrollTop = 800;
            if(document.body.scrollTop == 800 || document.documentElement.scrollTop == 800){
                document.body.scrollTop = 1600;
                document.documentElement.scrollTop = 1600;
            }else if(document.body.scrollTop == 1600 || document.documentElement.scrollTop == 1600){
                document.body.scrollTop = 2400;
                document.documentElement.scrollTop = 2400;
            }
        },
        'scroll up':function(){
            document.body.scrollTop = 800;
            document.documentElement.scrollTop = 800;
            if(document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }   
        },
        'voice commands':function(){
            var modalOpen = document.querySelector('.modal');

            modalOpen.style.display = "block";
            modalOpen.classList.add('show');
            modalOpen.classList.add('.fade');

        },
        'close voice commands':function(){
            var modalOpen = document.querySelector('.modal');

            modalOpen.style.display = "none";
            modalOpen.classList.remove('show');
        },
        'write name *tag': function(variable){
            let name = document.getElementById("name");
            name.value = variable;
        },
        'write email *tag': function(variable){
            let email = document.getElementById("email");
            email.value = variable;
        },
        'write number *tag': function(variable){
            let phone = document.getElementById("phone");
            phone.value = variable;
        },
        'write message *tag': function(variable){
            let message = document.getElementById("message");
            message.value = variable;
        },
        'submit':function(){
            var submitBtn = document.querySelector(".btn-contact");
            submitBtn.classList.add("d-none");
        }

    }
  
// Add our commands to annyang
annyang.addCommands(formCommand);
    
    
// Start listening. You can call this here, or attach this call to an event, button, etc.
    

    $('.nav .voiceBtn').click(
        function(){
            annyang.start();
            $('.voiceBtn i').css("color",'#2672ff');
            $('.voiceBtn').css("background",'white');
            $('.voiceBtn i').css("text-shadow","0px 0px 9px #2672ff");
            $(".nav .voiceBtn").click(
                function(){
                    annyang.abort();
                    var voiceBtn = document.querySelector('.voiceBtn');
                    var voiceBtni = document.querySelector('.voiceBtn i');
                    voiceBtn.style.backgroundColor = 'black';
                    voiceBtni.style.color = 'white';
                    $('.nav .voiceBtn').click(
                        function(){
                            annyang.start();
                            $('.voiceBtn i').css("color",'#2672ff');
                            $('.voiceBtn').css("background",'white');
                            $('.voiceBtn i').css("text-shadow","0px 0px 9px #2672ff");
                            $(".nav .voiceBtn").click(
                                function(){
                                    annyang.abort();
                                    var voiceBtn = document.querySelector('.voiceBtn');
                                    var voiceBtni = document.querySelector('.voiceBtn i');
                                    voiceBtn.style.backgroundColor = 'black';
                                    voiceBtni.style.color = 'white';
                                }
                            );
                        }
                        
                    );
                }
            );
        }
        
    );
}

if(window == annyang.start()){
    var modalOpen = document.querySelector('.modal');

    modalOpen.style.display = "block";
    modalOpen.classList.add('show');
    modalOpen.classList.add('.fade');
}else if(window == annyang.abort()){
    modalOpen.style.display = "none";
    modalOpen.classList.remove('show');
    modalOpen.classList.remove('.fade');
}


// function darkMode() {
//     var wrapper = document.querySelector('.wrapper');
//     wrapper.classList.toggle("dark_mode");
// }

socialIcons.forEach(element => {
    element.addEventListener('mouseover', function(event){
        let color = event.target.getAttribute('data-color');
        // bg.style.backgroundColor = color;
        right.style.backgroundColor = color;
        left.style.backgroundColor = color;
        // darkLeft.style.backgroundColor = '#1a1a1a';
        contentPage.style.visibility = 'hidden';
    });
    element.addEventListener('mouseout', function(event){
        // bg.style.backgroundColor = '';
        if(wrapper.classList == 'dark_mode'){
            left.style.backgroundColor = '#1a1a1a';
        }else{
            left.style.backgroundColor = '#d8d8d8';
            right.style.backgroundColor = '#a2ebff';
        }
        // darkRight.style.backgroundColor = '#002b7c';
        // darkLeft.style.backgroundColor = '#1a1a1a';
        contentPage.style.visibility = 'visible';
    })
})

$('.media ul .face').hover(
    function(){
        $('#face').css("opacity","1");
        $('#face').css("top","50%");
    },
    function(){
        $('#face').css("opacity","0");
        $('#face').css("top","20%");
    }
);
$('.media ul .link').hover(
    function(){
        $('#link').css("opacity","1");
        $('#link').css("top","50%");
    },
    function(){
        $('#link').css("opacity","0");
        $('#link').css("top","20%");
    }
);
$('.media ul .inst').hover(
    function(){
        $('#inst').css("opacity","1");
        $('#inst').css("top","50%");
    },
    function(){
        $('#inst').css("opacity","0");
        $('#inst').css("top","20%");
    }
);
$('.page_headings ul .l1 a').hover(
    function(){
        $('iframe.l1l').css("opacity","1");
        $('iframe.l1l').css("top","47");
        $('iframe.l1l').css("height","560");
    },
    function(){
        $('iframe.l1l').css("opacity","0");
    }
);
$('.page_headings ul .l2 a').hover(
    function(){
        $('iframe.l2l').css("opacity","1");
        $('iframe.l2l').css("top","47");
        $('iframe.l2l').css("height","560");
    },
    function(){
        $('iframe.l2l').css("opacity","0");
    }
);
$('.page_headings ul .l3 a').hover(
    function(){
        $('iframe.l3l').css("opacity","1");
        $('iframe.l3l').css("top","47");
        $('iframe.l3l').css("height","560");
    },
    function(){
        $('iframe.l3l').css("opacity","0");
    }
);


TweenMax.from('.right', 2,{
    delay: .4,
    width: 0,
    ease: Power2.easeInOut
})
TweenMax.from('.left', 2,{
    delay: .9,
    width: 0,
    ease: Power2.easeInOut
})

TweenMax.from('.nav', 2,{
    delay: 1.5,
    opacity:0,
    ease: Expo.easeInOut
})
TweenMax.from('.SocialLinks', 2 ,{
    delay: 2.0,
    bottom: '400px',
    opacity:0,
    ease: Power3.easeInOut
})

TweenMax.from('.header_banner', 2 ,{
    delay: 2.4,
    top: '600px',
    opacity:0,
    ease: Power3.easeInOut
})
TweenMax.from('.banner_heading', 2 ,{
    delay: 3,
    opacity:0,
    // left: '-550px',
    ease: Power3.easeInOut
})
TweenMax.from('.labtoolsBanner h1', 2 ,{
    delay: 2.4,
    left: '600px',
    opacity:0,
    ease: Power3.easeInOut
})
TweenMax.from('.labtoolsBanner img', 2 ,{
    delay: 2.4,
    opacity:0,
    ease: Power3.easeInOut
})

// TweenMax.from('.content-page .text', 2,{
//     delay: 2.2,
//     top: '-65%',
//     ease: Power2.easeInOut
// })
// TweenMax.from('.parallax-box', 2 ,{
//     delay: 2.9,
//     transform: "translate(0%,140%)",
//     ease: Power3.easeInOut
// })


// Guide Line Popup Draggable

$(".modal-header,.modal-body").on('mousedown', function(downEvt){
    var $draggable = $(this)
    var x = downEvt.pageX - $draggable.offset().left,
        y = downEvt.pageY - $draggable.offset().top;

    $('body').on('mousemove.draggable', function(moveEvt){
        $draggable.closest(".modal-dialog").offset({
            "left" : moveEvt.pageX - x,
            "top" : moveEvt.pageY - y
        })
    })
    $("body").on('mouseup',function(){
        $('body').off("mousemove.draggable")
    })
    $draggable.closest(".modal").one("bs.modal.hide",function(){
        $("body").off("mousemove.draggable")
    })
})


document.querySelector('.wrapper').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}

document.querySelector('.wrapper').onmouseleave = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
}


gsap.timeline({
    scrollTrigger:{
        trigger:".wrapper",
        start:"0px 0%",
        scrub:1,
        markers:true,
        pin:true
    }
})
.to(".header_banner",{
    x:-400,
})
.to(".banner_heading",{
    top: '-400px',
    left: '-550px',
    transform: 'rotate(-90deg)',
})
.to(".banner_heading",{
    y:-800
})
.to(".header_banner",{
    width:1100,
    y:-100,
    x:-70
})
// .to("iframe.laptop_screen",{
//     height:"560px",
//     top:"47px"
// })
.to("iframe.laptop_screen",{
    opacity:0
})
.from(".page_headings",{
    opacity:0,
    x:-700,
})
.from(".page_headings .l1",{
    opacity:0,
    x:10,
})
.from(".page_headings .l2",{
    opacity:0,
    x:10,
})
.from(".page_headings .l3",{
    opacity:0,
    x:10,
})
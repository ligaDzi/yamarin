MyApp.define('myAnima'),MyApp.myAnima=function(){function b(){$(this).find('div').is('.lastSlide_cont.anima')&&$('.lastSlide_cont').animate({bottom:'50%',height:'20%'},{duration:600,ease:'swing'}).animate({bottom:'5%',height:'50%'},{duration:400}).animate({bottom:'30%',height:'30%'},{duration:400}).animate({bottom:'15%',height:'40%'},{duration:400}).removeClass('anima')}return{showTechHarac:function(){$('.itemInfo').hover(b)},showInfoPage:function(){$('#infoPage').animate({left:'15%'},{duration:600,ease:'swing'})},closeInfoPage:function(){$('#infoPage').animate({left:'-150%'},{duration:600,ease:'swing'})}}}();
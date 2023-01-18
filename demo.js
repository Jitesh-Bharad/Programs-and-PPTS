$(()=>{
    console.log("document loaded success");
    // $('p').first().css({'color':'red'});
    // $('p').eq(3).css({'background':'green'});
    // $('#p7').css({'background':'yellow'});
    // $('.c2').css({'background':'gray'});

    // $('p.intro').css({'color':'pink'});

    //   $('*').css({'background':'cyan'});

    $('p:first').css({'background':"green"});
    // $('ul li:first').css({'color':'red'});
     $('ul li:first-child').css({'color':'red'});    

    //  $('[href]').css({'color':'purple'});  
     
     $("[href='demo3.html']").css({'color':'orange'}); 
     
     $('tr:even').css({'background':'cyan'});
     $('tr:odd').css({'background':'black','color':'white'});     
     
    //  $('div').first().click((ev)=>{
    //     alert('clicked on the div');
    //  });

     $('div').first().dblclick((ev)=>{
        console.log('double clicked on the div');
     });

     $('div').first().mouseenter(()=>{
        console.log('entered mouse in the div');
     });

     $('div').first().mouseleave(()=>{
        console.log('mouse left the div');
     });

     $('div').first().hover(()=>{
        console.log('hovered over div');
     });

     $('input').first().keypress((ev)=>{
        console.log('key pressed');
        console.log(ev.keyCode);
        console.log(ev.key);        
       //console.log(ev.target.value);
     })

})



// 1. Create 2 divs  

// div 1 : width:100, height : 100, background:red
// div2 :  width :100, height:100, background:green

// On mouseover of div1 , the 
// background of div2 must change to
// black











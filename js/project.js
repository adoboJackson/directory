function readSearch(){
  if($('#search-text').val()==''){
    $('li').removeClass('show');
    return;
  }
  var searchStr = $('#search-text').val().toLowerCase();
  $('li').removeClass('show');
  $('nav a').removeClass('active');
  $( ".first-name:contains('"+searchStr+"')" ).closest("li").addClass('show');
}

function readMenu(search){ 
  if($('#search-text').val()!=''){
    $('#search-text').val('');
  }
  console.log('search:'+search);
 search.toLowerCase();
  $('li').removeClass('show');
  $('nav a').removeClass('active');
  var selector=$( ".first-name:contains('"+search+"')" );
  selector.closest("li").addClass('show');
}


function buildMenu(selector){
  var selected=$("."+$(selector).attr('href').replace(/#/, ''));
  var n = $(selected).length;
  var str="<ul class='submenu'>";
  $(selected).each(function(x){
    var t_str=$(this).children(".front").children("p").children("span.first-name").html();
    console.log("HTML:"+$(this).children(".front").children("p").children("span.first-name").html());
    str+="<li><a href='#' onclick='javascript:readMenu(\""+t_str+"\")'>"+t_str+"</a></li>";
  });
  str+="</ul>";
  $(selector).closest("li").append(str);
}
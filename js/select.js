$(document).ready(function(){
	var mySettings = {
		  key : true,
		  dropBlock : $('.drop'),
		  virtualSelect : $('.slct')
	  }
	  
	  mySettings.virtualSelect.click(function(){
		  if( mySettings.dropBlock.is(':hidden') ) {
			  mySettings.dropBlock.show();
			  $(this).addClass('active');
		  } 
		  else {
			  mySettings.dropBlock.hide();
			  $(this).queue(function(nextJ){
				  $(this).removeClass("active");
				  nextJ();
			  });
		  }
		  return false;
	  });	
	  mySettings.dropBlock.find('li').click(function(){
		  var selectResult = $(this).html();
		  $(this).parent().parent().find('input').val(selectResult);
		  mySettings.dropBlock.hide();				
		  mySettings.virtualSelect.queue(function(nextJs){
			  $(this).removeClass("active");
			  nextJs();
		  }).html(selectResult + '<i class="icon-down">');
		  return false;
	  });	
	  $(document).click(function(event) {
		  if(mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
			  mySettings.dropBlock.hide();
			  mySettings.virtualSelect.queue(function(nextJs){
				  $(this).removeClass("active");
				  nextJs();
			  });
			  mySettings.key = true; 
			  return;
		  }	
	  });
  });
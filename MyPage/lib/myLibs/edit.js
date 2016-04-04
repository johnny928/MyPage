$(document).ready(function(){
	$(document).on("click",".addRowBtn",function(){
		addRow();
	});
	$(document).on("click",".addColBtn",function(){
		addCol();
	});
});

function addRow(){
	var $newTR = $(".product_wrap tr").last().clone();
	//根据业务逻辑对 $newTR 进行修改属性。
	$(".product_wrap").append($newTR);
}

function addCol(){
	$(".product_wrap tr").each(function(i){
		var $newTD = $(document.createElement("td")  ); //根据业务逻辑进行修改
		$newTD.html(i);
		$(this).append( $newTD );
	});
}

$(document).ready(function() {
	$(document).on("click", ".addRowBtn", function() {
		addRow();
	});
	$(document).on("click", ".addColBtn", function() {
		addCol();
	});

	$(document).on("click", ".attr_wrap td", function() {
		var $td = $(this);
		if ($td.hasClass("focus")) {
			$td.find("input").focus();
			return false;
		};
		var $focus = $(".attr_wrap td.focus");
		if ($focus.length > 0) {
			$focus.removeClass("focus")
			$focus.html($focus.find(".tableEditInput").val());
		}
		var $input = $(document.createElement("input"));
		$input.addClass("tableEditInput");
		$input.val($td.html());
		$td.html($input).addClass("focus");
		$input.focus();
		console.log(123123);
	});

});

function addRow() {
	var $newTR = $(".product_wrap tr").last().clone();
	//根据业务逻辑对 $newTR 进行修改属性。
	$(".product_wrap").append($newTR);
}

function addCol() {
	$(".product_wrap tr").each(function(i) {
		var $newTD = $(document.createElement("td")); //根据业务逻辑进行修改
		$newTD.html(i);
		$(this).append($newTD);
	});
}
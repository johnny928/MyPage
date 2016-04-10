;
(
	function($) {
		$.fn.myfix = function(options) {
			var opts = $.extend({}, $.fn.myfix.defaults, options);
			var $mytable = this;

			if (!$($mytable).is('table')) {
				return $mytable;
			}

			//			if((typeof opts.scrollXObj == 'string') && opts.scrollXObj == 'default' ){
			//				
			//			}

			var $myfixed = $([
				'<div class="myfixed">',
				'</div>'
			].join(''));
			$($mytable).wrap($myfixed);

			function fixHeader() {
				var $tableheader = $([
					'<div class="myfixed-table-header">',
					'<table>',
					'<thead></thead>',
					'</table>',
					'</div>'
				].join(''));
				$($mytable).before($tableheader);
				//$tableheader.width($tableheader.parent().width());
				$tableheader.find('table').append($($mytable).find('tr:eq(0)').clone());
				$tableheader.find('table').attr('class', $($mytable).attr('class'));
				$tableheader.find('table').width($($mytable).width());
				$tableheader.find('table tr:eq(0)').width($($mytable).find('tr:eq(0)').width());
				$tableheader.find('table tr:eq(0) *').each(function($inx, $el) {
					var _index = $inx;
					if ($($el).is('th')) {
						_index = 0;
					} else {
						_index = $inx - 1;
					}
					var thatWidth = $($mytable).find('tr:eq(0) ' + $($el)[0].tagName + ':eq(' + _index + ')').width();
					var thisWidthOld = $($el).width();
					console.log('thatWidth=' + thatWidth + '   thisWidthOld=' + thisWidthOld);
					$($el).width(thatWidth + 1);
					console.log('thisWidthNew=' + $($el).width());
				});
				var orgn_width = $tableheader.find('table').width();
				$tableheader.affix({
					offset: {
						top: 40
					}
				});
				$tableheader.closest('.myfixed').on('scroll', function() {
					$tableheader.scrollLeft($(this).scrollLeft());
				});
				$tableheader.on('affix.bs.affix', function() {
					$tableheader.width($tableheader.parent().width());
				});
				$tableheader.on('affixed.bs.affix', function() {
					$tableheader.scrollLeft($tableheader.closest('.myfixed').scrollLeft());
				});
				$tableheader.on('affix-top.bs.affix', function() {
					$tableheader.width(orgn_width);
				});
			};

			function fixColumns() {
				var $tablecolumns = $([
					'<div class="myfixed-table-body-columns">',
					'<table>',
					'<tbody></tbody>',
					'</table>',
					'</div>'
				].join(''));
				$($mytable).before($tablecolumns);
				$($mytable).find('tr').find('th:eq(0)').each(function($i, $el) {
					var _tr = $('<tr></tr>'),
						_td = $(this).clone();
					_tr.append(_td);
					_tr.attr('class', $(this).closest('tr').attr('class'));
					_td.width($(this).width());
					_td.height($(this).height());
					_tr.height($(this).closest('tr').height());
					$tablecolumns.find('table').append(_tr);
					console.log('o.td.height=' + $(this).height() + '   o.tr.height=' + $(this).closest('tr').height() + '    td.height=' + _td.height() + '    tr.height=' + _tr.height());
				});
				$tablecolumns.find('table').attr('class', $($mytable).attr('class'));
				//				$tablecolumns.css('position', 'absolute');
				var _orgOffsetTop = $tablecolumns.offset().top;
				$tablecolumns.closest('.myfixed').on('scroll', function() {
					if ($(this).scrollLeft() == 0) {
						$tablecolumns.css('position', 'absolute');
					} else {
						$tablecolumns.css('position', 'fixed');
					}
					resetColumnsTop($tablecolumns, $(window), _orgOffsetTop);
				});
				$(window).on('scroll', function() {
					resetColumnsTop($tablecolumns, $(window), _orgOffsetTop);
				});
			}

			function resetColumnsTop($obj, $scrollObj, $orgOffsetTop) {
				if ($obj.css('position') == 'absolute') {
					$obj.css('top', 'auto');
				} else {
					$obj.css('top', $orgOffsetTop - $scrollObj.scrollTop());
				}
			}

			function fixHeaderCol() {
				var $tableheadercol = $([
					'<div class="myfixed-table-header-columns">',
					'<table>',
					'<tbody></tbody>',
					'</table>',
					'</div>'
				].join(''));
				$($mytable).before($tableheadercol);
				var _that_td = $($mytable).find('tr:eq(0)').find('th:eq(0)');
				var _tr = $('<tr></tr>'),
					_td = _that_td.clone();
				_tr.append(_td);
				_tr.attr('class', _that_td.closest('tr').attr('class'));
				_td.width(_that_td.outerWidth());
				_td.height(_that_td.height());
				_tr.height(_that_td.closest('tr').height());
				$tableheadercol.find('table').append(_tr);
				$tableheadercol.find('table').attr('class', $($mytable).attr('class'));
				$tableheadercol.affix({
					offset: {
						top: 40
					}
				});
			}

			fixHeaderCol();
			fixHeader();
			fixColumns();
			return this;

		};
		$.fn.myfix.defaults = {
			//			scrollXObj: 'default',
			//			scrollYObj: window
		};
	}
)(jQuery);
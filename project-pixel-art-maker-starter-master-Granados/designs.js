

var height, width, color;
// set 3 variables for project

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
	//this sets grid hxw and I use makeGrid in next section
	})

function makeGrid(x, y) {
	$('tr').remove();
	//this clears the cell and below adds table
	
	for (var a = 1; a <= x; a++) {
		$('#pixelCanvas').append('<tr id=table' + a + '></tr>');
		for (var b = 1; b <= y; b++) {
				$('#table' + a).append('<td></td>');
	 	}
	}
	//this adds color and allows to fill cells	
	// we also can clear a cell and refill it
	$('td').click(function addColor() {
		color = $('#colorPicker').val();
		
		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		// Per MDN using this is a global  value like a global object
		}
	})
}	

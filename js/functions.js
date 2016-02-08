function activeButton(btnName){
	$('input').on('keyup', function(){
		var isValid = false,
		inputs = document.getElementsByTagName('input');

		for(var i = 0; i < inputs.length; i++){
			var value = $(inputs[i]).val();
			if(value === '' || (i > 1 && value <= 0)){
				isValid = false;
				break;
			} else {
				isValid = true;
			}
		}

		if(isValid){
			$('#' + btnName + '-btn').prop('disabled', false);
		} else {
			$('#' + btnName + '-btn').prop('disabled', true);
		}
	});
}

function makeTD(tr, content, className){
	var $td = $('<td></td>').addClass(className);

	$td.text(content);
	tr.append($td);
}

function addCar(index, brand, model, year, km, data){
	var car = {
		brand: brand,
		model: model,
		year: year,
		km: km
	},
		$row = $('<tr></tr>').attr('data', index),
			$editBtn = $('<button/>', {
			text: '-',
			class: 'btn edit',
	}),
		$removeBtn = $('<button/>', {
			text: 'X',
			class: 'btn remove',
	}),
		$btnRow = $('<td></td>').append($editBtn).append($removeBtn);

	makeTD($row, index + 1);
	makeTD($row, brand, 'brand');
	makeTD($row, model, 'model');
	makeTD($row, year, 'year');
	makeTD($row, km, 'km');
	$row.append($btnRow);
	$('#car-list').append($row);

	data.push(car);
	console.log(data);
}

function getCarInfo(car){
	var currentCar = car,
		$brand = $('#brand').val(currentCar.brand),
		$model = $('#model').val(currentCar.model),
		$year = $('#year').val(currentCar.year),
		$km = $('#km').val(currentCar.km);
}

function clearForm(){
	$brand = $('#brand').val(''),
	$model = $('#model').val(''),
	$year = $('#year').val(''),
	$km = $('#km').val('');

	$('#add-btn').prop('disabled', true);
}

function switchPanels(){
	$('#add-panel').toggle();
	$('#edit-panel').toggle();
}

function editCar(data, index){
	var $brand = $('#brand').val(),
		$model = $('#model').val(),
		$year = $('#year').val(),
		$km = $('#km').val(),
		$currentRow = $('tr[data="'+ index +'"]');
	
	$currentRow.find('.brand').text($brand);
	$currentRow.find('.model').text($model);
	$currentRow.find('.year').text($year);
	$currentRow.find('.km').text($km);

	data[index] = {
		brand: $brand,
		model: $model,
		year: $year,
		km: $km
	};
}
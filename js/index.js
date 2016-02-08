
(function($){

	$(function(){
		var data = [],
			index = 0,
			currentRow;

		$('#edit-panel').hide();

		activeButton('add');

		$('#add-btn').on('click', function(e){
			var $brand = $('#brand').val(),
				$model = $('#model').val(),
				$year = $('#year').val(),
				$km = $('#km').val();

			e.preventDefault();
			addCar(index, $brand, $model, $year, $km, data);
			clearForm();
			index++;
		});

		$('#car-list').on('click', '.edit', function(e){
			currentRow = $(e.target.parentNode.parentNode).attr('data');
			activeButton('edit');

			if($('#edit-panel').css('display') == 'none'){
				switchPanels();
			}

			getCarInfo(data[currentRow]);
		});

		$('#cancel-edit-btn').on('click', function(e){
			e.preventDefault();
			clearForm();
			switchPanels();
		});

		$('#edit-btn').on('click', function(e){
			e.preventDefault();
			editCar(data, currentRow);
			clearForm();
			switchPanels();
		});

		$('#car-list').on('click', '.remove', function(e){
			e.preventDefault();
			currentRow = e.target.parentNode.parentNode;
			var $currentIndex = $(currentRow).attr('data');

			if(confirm('Do you really want to delete this?')){
				$(currentRow).remove();
				data.splice($currentIndex, 1);
			}
		})
	});
})(jQuery);
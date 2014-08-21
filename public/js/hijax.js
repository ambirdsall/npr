var onClick = function(e) {
	e.preventDefault();
	$.ajax({
		url: "/city",
		type: "POST",
		data: $(this).serialize()
	}).done(function(data) {
		// debugger;
		$('.container').empty();
		$('.container').append(data);
		graphStations();
		addSorting();
	});

};

$('.city-finder').submit(onClick);
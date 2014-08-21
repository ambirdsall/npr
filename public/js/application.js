var graphThisSucker = function(stationName, stationGrades, chartDiv) {
  polyjs.chart({
      layer: {
          data: stationGrades,
          type: "point",
          y: "gradeLevel",
          opacity: { const: 0.5 },
          size: { const: 3 }
      },

      guide: {
        x: {
          title: stationName
        },
        y: {
          title: "Grade Level",
          min: 0,
          max: 20
        }
      },

      zoom: false,
      dom: chartDiv,
      width: 120,
      height: 350
  });
};

var thereAreStoriesFor = function(station) {
  if (JSON.parse(station.dataset.grades).length > 0) {
    return station.dataset.grades.length
  } else {
    return false
  }
}

var graphStations = function() {
  var stationList = document.querySelectorAll(".chart");
  for (var i = 0; i < stationList.length; i++) {
    if (thereAreStoriesFor(stationList[i])) {
      var callLetters = stationList[i].dataset.name;
      var gradeLevels = polyjs.data({
        gradeLevel: JSON.parse(stationList[i].dataset.grades)
      });

      graphThisSucker(callLetters, gradeLevels, stationList[i]);
    }
  }
}

graphStations();

$(function() {
    $( "#sortable" ).sortable({
      axis: "x",
      containment: "parent"
    });
    $( "#sortable" ).disableSelection();
  });

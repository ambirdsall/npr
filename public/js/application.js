var graphGrades = function(stationName, stationGrades, chartDiv) {
  polyjs.chart({
      layer: {
          data: stationGrades,
          type: "point",
          y: "gradeLevel",
          color: "wordCount",
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
        },
        color: {
          scale: {
            type: 'gradient2',
            lower: '#339966',
            middle: '#666666',
            upper: '#6600cc',
            midpoint: 500
          },
          title: "Words"
        }
      },

      zoom: false,
      dom: chartDiv,
      width: 130,
      height: 350
  });
};

var thereAreStoriesFor = function(station) {
  if (JSON.parse(station.dataset.grades).length > 0) {
    return station.dataset.grades.length;
  } else {
    return false;
  }
};

var graphStations = function() {
  var stationList = document.querySelectorAll(".chart");
  for (var i = 0; i < stationList.length; i++) {
    if (thereAreStoriesFor(stationList[i])) {
      var callLetters = stationList[i].dataset.name;
      var gradeLevels = polyjs.data({
        gradeLevel: JSON.parse(stationList[i].dataset.grades),
        wordCount: JSON.parse(stationList[i].dataset.wordCounts)
      });

      graphGrades(callLetters, gradeLevels, stationList[i]);
    }
  }
};


var addSorting = function() {
  $( "#sortable" ).sortable({
    axis: "x",
    containment: "parent"
  });
  $( "#sortable" ).disableSelection();
};
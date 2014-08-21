var searchterms = polyjs.data({
  gradeLevel: [9.34130177514793,8.859733038348086,10.488697788697792,6.92278643476012,8.69156479731149,10.048655937364071,5.697836585365852,11.110889464594127,5.2882139194139235,9.611282506785098]
//     term: ["Flower"], "Chocolate", "Candy", "Valentine"],
//     count: [16600000, 9140000, 7480000, 5000000]
});
var chart_holder = document.getElementsByClass("chart");

var sfc = polyjs.chart({
    layer: {
        data: searchterms,
        type: "point",
        y: "gradeLevel",
        opacity: { const: 0.5 },
        size: { const: 3 }
    },

    guide: {
      x: {
        title: "WFUK"
      },
      y: {
        title: "Grade Level",
        min: 0,
        max: 18
      }
    },

    title: "oh SHIT it's a chart",
    dom: chart_holder,
    width: 120,
    height: 350
});
// store station name and grade array as JSON in data attribute

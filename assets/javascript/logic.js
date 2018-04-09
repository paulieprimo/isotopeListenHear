
var Data = [
  {
    name: "Beatles",
    genre: "rock",
    venue: "303 Country Venue Ln.",
    city: "Raleigh",
    distance: 7

  },
  {
    name: "Hank Williams",
    genre: "country",
    venue: "303 Country Venue Ln.",
    city: "Durham",
    distance: 10

  },
  {
    name: "Parliament",
    genre: "rb",
    venue: "14 Warehouse Rd.",
    city: "Chapel Hill",
    distance: 20
  },
  {
    name: "Snoop Dogg",
    genre: "rap",
    venue: "100 Main St.",
    city:  "Raleigh",
    distance: 7
  },
  {
    name: "Rolling Stones",
    genre: "rock",
    venue: "14 Warehouse Rd.",
    city: "Durham",
    distance: 17
  },
  {
    name: "Beck",
    genre: "alternative",
    venue: "100 Main St.",
    city: "Durham",
    distance: 12

  },

  {
    name: "Tom Petty",
    genre: "rock",
    venue: "104 Main St.",
    city: "Durham",
    distance: 19

  },

  {
    name: "Foo Fighters",
    genre: "alternative",
    venue: "100 Main St.",
    city: "Chapel Hill",
    distance: 25

  },

  {
    name: "Miles Davis",
    genre: "blueJazz",
    venue: "100 Main St.",
    city: "Durham",
    distance: 9

  },

  {
    name: "Merle Haggard",
    genre: "country",
    venue: "100 Main St.",
    city: "Raleigh",
    distance: 2

  },
  {
    name: "Shakira",
    genre: "latin",
    venue: "100 Main St.",
    city: "Raleigh",
    distance: 6

  },
  {
    name: "Jay Z",
    genre: "rap",
    venue: "100 Main St.",
    city: "Durham",
    distance: 10

  },
  {
    name: "Crystal Method",
    genre: "electronic",
    venue: "100 Main St.",
    city: "Durham",
    distance: 16

  },
  {
    name: "Mark Anthony",
    genre: "latin",
    venue: "100 Main St.",
    city: "Raleigh",
    distance: 4

  },
  {
    name: "The Who",
    genre: "rock",
    venue: "100 Main St.",
    city: "Raleigh",
    distance: 7

  }


];







function loadData() {
  Data.forEach(datum => {
    
    let index = Data.indexOf(datum);
    var html =
      `
    <div class="grid-item ${datum.genre} ${datum.city}" data-category="${datum.genre}">
    <div class="datum-name">${datum.name}</div>
    <div class="datum-venue">${datum.venue}</div>
    <div class="datum-city">${datum.city}</div>
    <div class="datum-distance">${datum.distance}m</div>

    </div>
    `;
    

    $("#grid").append(html);
    console.log(datum.genre);
  });
};

loadData ();


var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    distance: ".datum-distance"
},
});








$(".filter a").on("click", function () {

  var value = $(this).attr('data-name');

  $grid.isotope ({

    filter: value,

    
  });

})

$(".filterCity a").on("click", function () {

  var cityValue = $(this).attr('data-name');

  $grid.isotope ({

    filter: cityValue,

    
  });

})

$(".sort button").on("click", function () {

  console.log("test");

  $grid.isotope ({

    sortBy: $grid.distance,

    
  });

})










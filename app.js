var doctors = [
    { number: 1,  actor: "William Hartnell",      colour: "brown", begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     colour: "white", begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           colour: "yellow", begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             colour: "red", begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         colour: "brown", begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           colour: "white", begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       colour: "yellow", begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           colour: "red", begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", colour: "brown", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         colour: "yellow", begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            colour: "white", begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         colour: "brown", begin: 2013, end: 2013 }   
];

//yellow or brown || and || 2005 or 1996


// doctors = doctors.filter(function(doctor) {
//     return doctor.actor.match('Tom'); // if truthy then keep item
// }).map(function(doctor) {
//     return { // return what new object will look like
//         doctorNumber: "#" + doctor.number,
//         playedBy: doctor.actor,
//         yearsPlayed: doctor.end - doctor.begin + 1
//     };
// });

//console.log(JSON.stringify(doctors, null, 4));

//js for all
// var newPeeps = doctors.filter(function(user){
//   return user.begin > 2000;
// });

// console.log(JSON.stringify(newPeeps, null, 5)); // Only Christopher Eccleston, David Tennant, Matt Smith and Peter Capaldi survived the cull


// function getValuesByKey(array, key){
//   return array.map(function(item){
//     return item[key] || null;
//   });
// }

// // var actors = getValuesByKey(doctors, "actor");
// var inputs = [{'name':'one', 'oh':'dear'},{'name':'two'},{'name':'three'}];
// // console.log(actors); // all the actors names
// var queryString = getQueryStringFromFilters();
// function getQueryStringFromFilters(){
//   var input_groups = inputs.map(function(item){
//     var name = item.name;
//     var namePrefix = "Mr. ";
//     return namePrefix + name;
//   });
//   return input_groups;
// }
// console.log( queryString );

// Grab all inputs
// Filter selected


var inputs = document.querySelectorAll('.filter-input');

// console.log( inputs );
// //console.log( "filters " + JSON.stringify(filters, null, 5) );


// var filters = _.map( inputs, function( input ) {
//   var filterAttribute = input.name;
//   var filterKey = input.value;

//   return { attribute : filterAttribute, key : filterKey };
// });

var filters = _.map( inputs, function( filter ) {
  var filterAttribute = filter.name;
  var filterKey = filter.value;
  
  return { attribute : filterAttribute, key : filterKey };

  //console.log( filterAttribute + " " + filterKey );
});

// //var filters = test( inputs );
console.log( JSON.stringify(filters, null, 5) );

// function buildQuery( inputs ) {
//   var obj = {};

//   for (i = 0; i < inputs.length; ++i) {
//     var filterAttribute = inputs[i].name;
//     var filterKey = inputs[i].value;

//     obj[inputs[i][0]] = [filterAttribute];
//     obj[inputs[i][1]] = [filterKey];
//   }

//   return obj;
// }

// function getValuesByKey(array, key){
//   return array.map(function(item){
//     return item[key] || null;
//   });
// }

function filterArray( array, filters ) {
  return _.query( array, filters );
};

var filteredDoctors = filterArray( doctors, {
  $and: [ 
    { $or: { colour: { $in:[ "yellow", "red", "white" ] } } },
    { $or: { begin:  { $in:[ 2005, 1984 ] } } },
    //{ $or: { end:  { $in:[ 2010 ] } } }
  ]
} );

console.log( JSON.stringify(filteredDoctors, null, 5) );

//console.log("using _query " + JSON.stringify(filteredDoctors, null, 5));
//console.log();


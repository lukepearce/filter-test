var doctors = [
    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
];

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
var inputs = document.querySelectorAll('.filter-input');

console.log( "inputs " + inputs );
var filters = buildQuery( inputs );
console.log( "filters " + JSON.stringify(filters, null, 5) );

function buildQuery( inputs ) {
  var obj = {};

  for (i = 0; i < inputs.length; ++i) {
    var filterAttribute = inputs[i].name;
    var filterKey = inputs[i].value;

    obj[inputs[i][0]] = [filterAttribute];
    obj[inputs[i][1]] = [filterKey];
  }

  return obj;
}

// function getValuesByKey(array, key){
//   return array.map(function(item){
//     return item[key] || null;
//   });
// }

function filterArray( array, filters ) {
  return _.query( array )
            .and( filters );
}

var filteredDoctors = filterArray( doctors, filters );

console.log( JSON.stringify(filteredDoctors, null, 5) );

//console.log("using _query " + JSON.stringify(filteredDoctors, null, 5));
//console.log();


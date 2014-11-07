/**
  * Creates a randomized list of integers between 1 and 10,000.
  */
var randomizer = (function() {

  // constants
  var MINRANGE = 1;
  var MAXRANGE = 10000;

  /**
   * Initializer for randomizer
   */
  var init = function(settings) {
    $('#randomize').click(function(){
      var orderedList = createOrderedList();
      var randomizedList = createRandomOrderedList(orderedList);

      outputToScreen(randomizedList);
    });
  };

  /**
   * Creates an array of unique integers ordered from MINRANGE to MAXRANGE
   *
   * @note: Complexity is linear O(n)
   */
  var createOrderedList = function() {
    var orderedList = [];

    for (var i = MINRANGE; i <= MAXRANGE; i++) {
      orderedList.push(i);
    }

    return orderedList;
  };

  /**
   * Takes an ordered array of integers and then randomizes the order.
   *
   * @note: Complexity is linear O(n)
   *
   * @param {Array} orderedList
   */
  var createRandomOrderedList = function(orderedList) {
    var randomizedList = [];

    while (orderedList.length != 0) {
      // Pick a random index from the ordered array
      var randomIndex = randomNumberBetween(0, orderedList.length)

      // remove the integer from the ordered array and store its value
      var number = orderedList.splice(randomIndex, 1)[0];

      // push the integer to the randomized array
      randomizedList.push(number);
    }

    return randomizedList;
  };

  /**
   * Creates a random integer between min and max numbers
   *
   * @note: Complexity is constant
   *
   * @param {Integer} min
   * @param {Integer} max
   */
  var randomNumberBetween = function(min, max) {
    return Math.floor(Math.random() * max) + min;
  };

  /**
   * Outputs the results of the randomized array to screen
   *
   * @note: Complexity is constant
   *
   * @param {Array} randomizedList
   */
  var outputToScreen = function(randomizedList) {
    var output = '<tr><td>';
    output += randomizedList.toString();
    output += '</td></tr>';

    $('.table tbody').html(output);
  }

  return {
    init: init
  };

}());
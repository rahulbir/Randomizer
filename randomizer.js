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
   * @note: 
   *        This method takes a list of ordered integers [1, 2, 3] and
   *        picks a random index (ex. 1) between startIndex = 0 and
   *        endIndex = 2. Then it removes that element from the array [1, 3]
   *        and pushes it to the end of the array [1, 3, 2]. Followed by
   *        updating the endIndex by -1. This process is repeated again using
   *        startIndex = 0 and endIndex = 1 up until endIndex finally
   *        equals the startIndex.
   *
   * @param {Array} list
   */
  var createRandomOrderedList = function(list) {
    // return the list if the list is empty or contains only one number
    if (list.length <= 1 ) { return list; }

    var startIndex = 0;
    var endIndex = list.length - 1;

    // end when index points to the last non-randomized element
    while (endIndex != startIndex) {
      // Pick a random index within the range of the list
      var randomIndex = randomNumberBetween(startIndex, endIndex);

      // remove the integer from the list and stores its value
      var number = list.splice(randomIndex, 1)[0];

      // push the integer to the end of the list
      list.push(number);

      // update the index range
      endIndex--;
    }

    return list;
  };

  /**
   * Creates a random integer between min and max numbers
   *
   * @param {Integer} min
   * @param {Integer} max
   */
  var randomNumberBetween = function(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  };

  /**
   * Outputs the results of the randomized array to screen
   *
   * @param {Array} randomizedList
   */
  var outputToScreen = function(randomizedList) {
    var output = '<tr><td>';
    output += randomizedList.toString();
    output += '</td></tr>';

    $('.table tbody').html(output);
  };

  return {
    init: init,
    createOrderedList: createOrderedList,
    createRandomOrderedList: createRandomOrderedList,
    randomNumberBetween: randomNumberBetween
  };

}());

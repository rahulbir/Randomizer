describe("randomizer", function() {

  describe("createOrderedList()", function() {

    beforeEach(function() {
      orderedList = randomizer.createOrderedList();
    });

    it("returns an Array", function() {
      expect(orderedList).toEqual(jasmine.any(Array));
    });

    it("has 10,000 elements", function() {
      expect(orderedList.length).toEqual(10000);
    });

    it("starts with 1", function() {
      expect(orderedList[0]).toEqual(1);
    });

    it("ends with 10,000", function() {
      expect(orderedList[orderedList.length - 1]).toEqual(10000);
    });
  });

  describe("createRandomOrderedList()", function() {

    beforeEach(function() {
      orderedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      randomizedList = randomizer.createRandomOrderedList(orderedList);
    });

    it("returns an Array", function() {
      expect(randomizedList).toEqual(jasmine.any(Array));
    });

    it("has the same number of elements as the ordered list", function() {
      expect(randomizedList.length).toEqual(orderedList.length);
    });

    it("has a different order than the ordered list", function() {
      expect(randomizedList).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("returns an empty list when ordered list is empty", function() {
      var orderedList = [];
      expect(randomizer.createRandomOrderedList(orderedList)).toEqual([]);
    });

    it("returns the same list when ordered list has only one number", function() {
      var orderedList = [2];
      expect(randomizer.createRandomOrderedList(orderedList)).toEqual([2]);
    });
  });

  describe("randomNumberBetween(min, max)", function() {

    beforeEach(function() {
      min = 1;
      max = 10;
      randomNumber = randomizer.randomNumberBetween(min, max);
    });

    it("returns an Integer", function() {
      expect(randomNumber).toEqual(jasmine.any(Number));
    });

    it("is between the range (inclusive)", function() {
      expect(min <= randomNumber <= max).toEqual(true);
    });
  });
});

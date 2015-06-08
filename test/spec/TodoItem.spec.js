describe("TodoItem - ", function() {

	it("should have an id", function() {
		var desc = "buy 3% milk";
		var item = new TodoApp.TodoItem(desc);
		expect(item.id).toBeDefined();
	});

	it("should have a created date", function() {
		expect(true).toBe(false);
	});

	it("should have a description property", function() {
		expect(true).toBe(false);
	});

	describe("when an item's done status has been changed, ", function() {

		it("should set to true when it's done", function() {
			expect(true).toBe(false);
		});

		it("should be false when set back to undone", function() {
			expect(true).toBe(false);
		});
	});


	  // demonstrates use of expected exceptions
	  // describe("#done again", function() {
	  // 	it("should throw an exception if item is already done", function() {
	  // 		item.done();

	  // 		expect(function() {
	  // 			item.done();
	  // 		}).toThrowError("item is already done");
	  // 	});
	  // });
});

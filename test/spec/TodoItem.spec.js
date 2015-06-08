describe("TodoItem - ", function() {

	it("should have an id", function() {
		var desc = "buy 3% milk";
		var item = new TodoApp.TodoItem(desc);
		expect(item.id).toBeDefined();

		//demonstrates use of custom matcher
		// expect(player).toBePlaying(song);
	});

	it("should have a created date", function() {
		var desc = "buy 3% milk";
		var item = new TodoApp.TodoItem(desc);
		expect(item.created).toBeDefined();
		expect(item.created).not.toBe(null);
	});

	it("should have a description property", function() {
		var desc = "buy 3% milk";
		var item = new TodoApp.TodoItem(desc);
		expect(item.description).toEqual(desc);
		expect(item.description).toBe(desc);
	});

	describe("when an item's done status has been changed, ", function() {

		it("should set to true when it's done", function() {
			var desc = "buy 3% milk";
			var item = new TodoApp.TodoItem(desc);
			item.done();
			expect(item.isDone).toBeTruthy();
			expect(item).toBeDone(true);
		});

		it("should be false when set back to undone", function() {
			var desc = "buy 3% milk";
			var item = new TodoApp.TodoItem(desc);
			item.done();
			item.setUndone();
			expect(item.isDone).toBeFalsy();
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

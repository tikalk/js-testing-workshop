describe("TodoList - ", function() {
	var items = [{
			"description": "buy milk"
		}, {
			"description": "pick the kids from school"
		}, {
			"description": "clean the car"
		}, {
			"description": "have fun"
		}];

	it("should have no items", function() {
		var url = 'mocks/items.json';
		var list = new TodoApp.TodoList(url);
		expect(list.items).toBeDefined();
		expect(list.items.length).toBe(0);
		list.items.length = 0;
	});

	it("should have a url", function() {
		var url = 'mocks/items.json';
		var list = new TodoApp.TodoList(url);
		expect(list.url).toBeDefined();
		expect(list.url).toBe(url);
		list.items.length = 0;
	});

	xit("should archive an item", function(){
		var url = 'mocks/items.json';
		var list = new TodoApp.TodoList(url);
		list.archive();
		list.items.length = 0;
	});

});
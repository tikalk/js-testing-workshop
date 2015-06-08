describe("TodoList - ", function() {
	var list;
	var url = 'mocks/items.json';
	var items = [{
			"description": "buy milk"
		}, {
			"description": "pick the kids from school"
		}, {
			"description": "clean the car"
		}, {
			"description": "have fun"
		}];

	beforeEach(function() {
		list = new TodoApp.TodoList(url);
	});

	it("should have no items", function() {
		expect(list.items).toBeDefined();
		expect(list.items.length).toBe(0);
	});

	it("should have a url", function() {
		expect(list.url).toBeDefined();
		expect(list.url).toBe(url);
	});

	xit("should archive an item", function(){
		list.archive();
	});

	afterEach(function(){
		list.items.length = 0;
	});

});
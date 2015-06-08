describe("TodoList - ", function() {

	it("should have no items", function() {
		var url = 'mocks/data.json';
		var list = new TodoApp.TodoList(url);
		expect(list.items).toBeDefined();
		expect(list.items.length).toBe(0);
		list.items.length = 0;
	});

	it("should have a url", function() {

	});

	xit("should archive an item", function(){

	});

});
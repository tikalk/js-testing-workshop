describe("TodoList - ", function() {
	var list;
	var url = 'mocks/data.json';
	var items = [{
			"description": "buy milk"
		}, {
			"description": "pick the kids from school"
		}, {
			"description": "clean the car"
		}, {
			"description": "have fun"
		}];
	var defineAjaxSpy = function() {
		$.ajax = jasmine.createSpy().and.callFake(function(res){
			var d = $.Deferred();
		    d.resolve(items);
		    return d.promise();
		});
	};

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

	it("should fetch items and populate the items array", function(){
		defineAjaxSpy();

		list.fetch();

		expect(list.items.length).toBe(items.length);
	});

	it("should add a new item", function(){
		var first = items[0];
		// Use spies!
        expect(true).toBe(false);
	});

	xit("should archive an item", function(){
		list.archive();
	});

	it("should call add 4 times", function(){
		// Use spies!
        expect(true).toBe(false);
	});

	it("should add the items with 'fetch' without ajax", function(){
		// Use spies!
        expect(true).toBe(false);
	});

	describe("when a list doesn't have a url", function(){
		beforeEach(function() {
			list = new TodoApp.TodoList();
		});

		it("shouldn't have a url set as a property", function(){
			expect(list.url).toBe();
		});

		it("should throw an error when trying to fetch items", function(){
			defineAjaxSpy();
			expect(list.fetch).toThrow();
		});
	});

	afterEach(function(){
		list.items.length = 0;
	});

});
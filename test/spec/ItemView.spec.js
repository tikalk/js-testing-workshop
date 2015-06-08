describe("ItemView - ", function () {
    var model, view;
    var desc = "buy 3% milk";

	beforeEach(function() {
		model = new TodoApp.TodoItem(desc);
		view = new TodoApp.ItemView(model);
	});

    it("should render a todo item element", function () {
        expect(view.$el).toHaveClass('view');
    });

    it("should have a 'Remove' button", function () {
        expect(true).toBe(false);
    });

    it("should mark the item as done when clicked on the input", function () {
        expect(true).toBe(false);
    });

    it("should have 'click' to check the item", function () {
        expect(true).toBe(false);
    });

    it("should have a 'remove' button with 'click' handler", function () {
        expect(true).toBe(false);
    });
});

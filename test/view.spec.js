describe('todo-app view', function() {
	var view;

	var setupTemplates = function () {
        var div = document.createElement('div');
        var templateId = 'test-tpl';
        var oldDiv = document.querySelector('#' + templateId);
        div.setAttribute('id', templateId);
        div.innerHTML = window.__html__['test/test.tpl.html'];
        if (oldDiv) {
            document.body.removeChild(oldDiv);
            oldDiv = null;
        }
        document.body.appendChild(div);
    };

	beforeEach(function(done) {
		setTimeout(function () {
		    setupTemplates();
		    done();
		}, 0);

		var template = new app.Template();
		view = new app.View(template);
	});

	it('should have a template instance as a property', function() {
		expect(view.template).toBeDefined();
	});

	it('should have a reference to the #todo-list', function() {
		expect(view.$todoList).toBeDefined();
		expect(view.$todoList.getAttribute('id')).toBe('todo-list');
	});

	it('should have a render method', function() {
		expect(view.render).toBeDefined();
	});

	it('should clear the #new-todo', function() {
		view.$newTodo.value = "new item" + new Date().toString();
		expect(view.$newTodo.value.length).toBeGreaterThan(0);
		view.render('clearNewTodo');
		expect(view.$newTodo.value).toBe('');
	});

	it('should render to the DOM 1 todo item', function() {
		var todoItemTitle = 'write tests for my code'
		var data = [{
			id: new Date().getTime(),
			completed: false,
			title: todoItemTitle
		}];
		view.render('showEntries', data);
		expect(view.$todoList.innerHTML).toMatch(todoItemTitle);
		expect(view.$todoList.children.length).toBe(1);
	});
});
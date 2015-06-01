TodoApp.ItemView = function (model) {
	this.model = model;
	this.createElement();
	this.attachEvents();
};
TodoApp.ItemView.prototype = {
	createElement: function(){
		this.$el = this.make('li', {
			class: 'view' + (this.model.isDone ? 'completed' : '')
		});
		this.$view = this.make('div', {
			id: this.model.id
		});
		// create the input element
		this.$input = this.make('input', {
			type: 'checkbox',
			class: 'toggle',
			checked: this.model.isDone
		});
		this.$view.append(this.$input);
		// create the description element
		this.$description = this.make('label', {}, this.model.description);
		this.$removeBtn = this.make('button', {
			class: 'destroy'
		});
		this.$el.append([
			this.$view,
			this.$description,
			this.$removeBtn
		]);
	},

	make: function(tag, attrs, html){
		// create dom element for this todo
	    var $view = $('<' + tag + '/>');
	    $view.attr(attrs);
	    if (html) {
	    	$view.html(html);
	    }
	    return $view;
	},

	attachEvents: function(){
	    // the onItemCheck event handler is invoked
	    // in the context of the "this"
	    this.$input.on('click', $.proxy(this.onItemCheck, this));
	    this.$removeBtn.on('click', $.proxy(this.onRemove, this));
	},

	detachEvents: function () {
		this.$input.off('click');
		this.$removeBtn.off('click');
		this.$view.off();
	},

	onItemCheck: function(ev) {
	    this.model.isDone = ev.target.checked;
	    if (this.model.isDone) {
	        this.$el.addClass('completed');
	    } else {
	        this.$el.removeClass('completed');
	    }
	},

	onRemove: function(ev){
		this.$el.trigger('remove:todo', { id: this.model.id });
		this.remove();	
	},

	remove: function(){
		this.detachEvents();
		this.$el.remove();
	}
};
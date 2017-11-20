function Button (text) {
	this.text = text || "hello";
};

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);

		this.$element.click(function(){
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var button1 = new Button('Przycisk 1');
button1.create();

var button2 = new Button();
button2.create();
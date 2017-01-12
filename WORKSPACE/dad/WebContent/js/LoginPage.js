var inputs = document.getElementsByTagName('input'),
	label,
	i;

for(i = 0; i < 2; i++){
	
	inputs[i].onkeypress = function(){
		label = this.previousSibling;
		label.classList.add('hidden');
		
	};
	inputs[i].onblur = function(){
		label = this.previousSibling;
		
		if(this.value == ''){
			label.classList.remove('hidden');
		}
	};
}

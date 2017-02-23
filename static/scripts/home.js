console.log('hello');
document.getElementById('hide').addEventListener('click', function(){
	var body = document.getElementById("body");
	body.style.visibility ="hidden";
	console.log('Body hidden');
});
document.getElementById('changeColor').addEventListener('click',function(){
	var color = document.getElementById("color").value;
	var body = document.getElementById("body");
	console.log(color);
	body.style.color = color;

});


function validateForm(){
	name = document.getElementById('nameInput').value;
	species = document.getElementById('speciesInput').value;
	age = document.getElementById('ageInput').value;
	if(name===''||species===''||age===''){
		alert('info cant be blank');
		return false;
	}
	else if(!isNaN(parseInt(name))||!isNaN(parseInt(species))||isNaN(parseInt(age))){
		alert('name and species must be a string and age must be a number');
		return false;
	}else{
		return true;
	}
	console.log(name+' '+species+' '+age);
	return false;
};
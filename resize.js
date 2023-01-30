<script>
const source = document.getElementById('source');

const inputHandler = function(e) {
 var value = document.getElementById('source');

 if (value.value.length < 6) 
 {
   value.setAttribute('class', 'text-field-10 w-input')
 }
 
 if (value.value.length == 6)
 {
 	value.setAttribute('class', 'text-field-10 w-input _80font');
 }
 
 if (value.value.length == 7)
 {
 	value.setAttribute('class', 'text-field-10 w-input _70font');
 }
 
 if (value.value.length == 8)
 {
 	value.setAttribute('class', 'text-field-10 w-input _60font');
 }
 if (value.value.length == 9)
 {
 	value.setAttribute('class', 'text-field-10 w-input _50font');
 }
 console.log(value.value.length);
}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8
// Firefox/Edge18-/IE9+ don’t fire on <select><option>
// source.addEventListener('change', inputHandler); 
</script>

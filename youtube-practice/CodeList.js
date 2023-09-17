// alert('');
// document.write('');
// document.body.innerHTML = '';
// Math.round();
// Math.ceil();
// Math.floor();
// typeof   ;
// String + numbers
// Single quote '' recommended in JavaScipt by default;
// Double quote " " used when sring has any single quote inside;
// Back tick ` ` used and is called template strings;
// template Srings (1) are used for interpolation;
// template Srings (2) are called multi-line strings;
/* template strings have more advantags over single quotes; 
    however usages of single quotes are recommended by default;
    only for interpolations/ multi-lines, template strngs are used */ ;

// Escape Characters;
// \' = is a escape character;
// \" = is another escape charater;
// \n = is the new line character;
// ${} is a excellent function;

alert(`Items (${2+2}): $${(2*2095 + 2*799)/100}
Shipping & handling: $${(499 + 499)/100}
Total before tax: $${((2*2095 + 2*799) + 499 + 499)/100}
Estimated tax(10%): $${Math.round(((2*2095 + 2*799) + 499 + 499)*.1)/100}
Order total: $${Math.round(((2*2095 + 2*799) + 499 + 499) + ((2*2095 + 2*799) + 499 + 499)*.1)/100}`)

alert(`Items (${1+1}): $${(1*2095 + 1*799)/100}
Total before tax: $${(1*2095 + 1*799)/100}
Estimated tax(10%): $${Math.round((1*2095 + 1*799)*.1)/100}
Order total: $${Math.round((1*2095 + 1*799) + (1*2095 + 1*799)*.1)/100}`)

// Learning HTML, CSS and JavaScript together
// sytax = Rules/grammar of pragraming language

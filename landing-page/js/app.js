/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

//build a event button with Java script
function scrollWin() {
  window.scrollTo(0, -500);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

//call a html id with a variable
const menu=document.querySelector('#navbar__list');

//call a html tag with a variable	
const sections=document.querySelectorAll('section');

//build a fragment
const fragment=document.createDocumentFragment();

//create a for of loop 
	for(const section of sections){
// call a data-nav of section		
	const data=section.querySelector("data-nav");
	
	//create a list and call it with variable	
	const Li=document.createElement('li');
		
	//create a link and call it with variable		
	const A=document.createElement('a');
			
		//create a textnode and and call with it a variable data in const type				
	const type=document.createTextNode(data);
	//call all id section and link it with the const linking	
	const linking=section.getAttribute('id');	
	//create a new text content	
	type.textContent=('section');	
		
//create a type and put it in the link
	A.appendChild(type);	
		
	//  put  the link in the list
	Li.appendChild(A);
		
	// put  the link in the menu

	menu.appendChild(Li);	
		
		// put  the list in the fragment
	
	fragment.appendChild(Li);
		
		//edit a css code of the list in javascript 
    Li.style.cssText='list-style: none';
		
			//edit a css code of the link in javascript 
	
	A.style.cssText=' cursor: pointer; ';
		
	A.setAttribute('id','link');
		

// Scroll to section on link click
		
A.addEventListener('click',()=>{	
section.scrollIntoView({behavior: "smooth",});
	
})

		
}
	


//set a timeout of the nav menu to remove it in 30s

	menu.appendChild(fragment);
	menu.style.cssText='color:black; background-color:white;';
	let menu12;
	menu12=setTimeout(function time(){
	menu.remove();
},30000);


	




	


//scroll event

function animation(event){
		 let sectionevn = event.getBoundingClientRect();
	return (sectionevn.top >= 0);

}



	
	
// Set sections as active

//create a function to build scroll
	  function scrollto(){
		 //call the section with id 
	const section=document.querySelectorAll('.landing__container');
	
	//create a for loop to divison a events to all sections
	for(const section=0;section<=sections;section++){
		
	//put the rule to divison a function
	if(scrollto(section)){
	if(!section.classList.contains('your-actve-class')){
		section.classList.add('your-actve-class');
		}
	}
		else{
		section.classList.remove('your-actve-class');
		}
		
}
//excution the event
document.addEventListener('scroll',animation);
	

	  }
	
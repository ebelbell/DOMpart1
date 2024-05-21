// Menu link data with submenu links
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},


    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},


    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
 
  //Part 1
  //1.    Select and cache the <main> element in a variable named mainEl.
  const mainEl = document.getElementsByTagName('main');
  console.log(mainEl[0]);
 
  // 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
  // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
  mainEl[0].style.backgroundColor = 'var(--main-bg)';
 
  // 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
  mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
 
  // 4.    Add a class of flex-ctr to mainEl.
  // Hint: Use the Element.classList API.
  mainEl[0].classList.add(`flex-ctr`);
 
  //Part 2:
  // 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  const topMenuEl = document.getElementById(`top-menu`);
  console.log(topMenuEl);
 
  // 2.   Set the height of the topMenuEl element to be 100%.
  topMenuEl.style.height = `100%`;
 
  // 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
 
  // 4.    Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around');
 
 
 
  //Part 3:
  // 1.   Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach((link)=>{
      // 2.   Create an <a> element.
      let newLink = document.createElement('a')
 
      // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
      newLink.setAttribute('href', link.href)
 
      // 4.   Set the new element's content to the value of the text property of the "link" object.
      newLink.textContent = link.text
 
      // 5.   Append the new element to the topMenuEl element.
      topMenuEl.appendChild(newLink)
  })




  /***************************** PART TWO ****************************/
//Part 3:
// 1.   Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
    const subMenuEl = document.getElementById('sub-menu');
    console.log(subMenuEl);


// 2.    Set the height subMenuEl element to be 100%
    subMenuEl.style.height = '100%';


// 3.    Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
    subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';


// 4.    Add the class of flex-around to the subMenuEl element
    subMenuEl.classList.add('flex-around');




//Part 4:
// 1.   Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
    const topMenuLinks = topMenuEl.querySelectorAll('a'); //prints array of all the <a> elements
    // console.log(topMenuLinks);
    console.log(topMenuLinks);


// 2.   Attach a delegated 'click' event listener to topMenuEl.
//      The first line of code of the event listener function should call the event object's preventDefault() method.
    topMenuEl.addEventListener("click", clickEvent);
       
    function clickEvent(evt) {
        console.log(evt);


        evt.preventDefault();
        //The second line of code of the function should immediately return if the element clicked was not an <a> element.
        // evt.target.getElementsByTagName("a"); //find the <a> element inside the event property
        console.log(evt.target.tagName);


        let isAElement = evt.target.tagName; //store the tagName
        console.log(isAElement);

        //this statement checks if the user has clicked on the top menu links, other than 'About'
        if (isAElement != 'A') { //if the tagName is NOT an <a> element
            console.log(`Bye!`);
            return;
        }
        else {
            console.log(`Hi`);
        }


        //Now that we have references to each of these links, and a registered event listener, we will want to add a toggled
        //"active" state to each menu item, showing whether or not it is currently selected:

        //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
        //select an element in the active classList and remove it from the classList
        document.querySelector('.active')?.classList.remove('active'); //the '?' prevents the code from returning an error if there is nothing active
        console.log(topMenuLinks.target, ' <a> element is not clicked');

        //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
        evt.target.classList.add('active');
        console.log(topMenuLinks.target, ' <a> element is clicked');

        // Show the corresponding submenu
        const clickedLink = menuLinks.find(link => link.text === evt.target.textContent);
        if (clickedLink && clickedLink.subLinks) {
        
        // Set the display property of the submenu to 'block'
        subMenuEl.style.display = 'block';
        
        // Add code to populate the submenu with sublinks if needed
        } else {

        // Hide the submenu if there are no sublinks for the clicked menu item
        subMenuEl.style.display = 'none';
        }
    }

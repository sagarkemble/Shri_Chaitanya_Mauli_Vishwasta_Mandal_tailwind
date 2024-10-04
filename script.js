// function showlinks(){
//     const links=document.querySelector('.links');
//     const hamburger=document.querySelector('.hamburger');
//     const crossicon=document.querySelector('.crossicon');
//     links.style.display='initial';
//     hamburger.style.display='none';
//     crossicon.style.display='initial';
//     inks.classList.add('animate-slidedown');
//   };
//   function hidelinks(){
//     const links=document.querySelector('.links');
//     const hamburger=document.querySelector('.hamburger');
//     const crossicon=document.querySelector('.crossicon');
//     links.style.display='none';
//     hamburger.style.display='initial';
//     crossicon.style.display='none';

//   };
function showlinks() {
  const links = document.querySelector('.links');
  const hamburger = document.querySelector('.hamburger');
  const crossicon = document.querySelector('.crossicon');
  
  if (links.style.maxHeight) {
      links.style.maxHeight = null; // Collapse if already expanded
      links.classList.remove('border-t-2', 'border-b-2'); // Remove borders on collapse
  } else {
      links.classList.add('border-t-2', 'border-b-2'); // Add borders on expansion
      links.style.maxHeight = links.scrollHeight + "px"; // Expand to full height
  }
}


  function showsublink() {
    const sublink = document.querySelector('.sublink');
    
    if (sublink.style.maxHeight) {
      sublink.style.maxHeight = null; // Collapse if already expanded
    } else {
      sublink.style.maxHeight = sublink.scrollHeight + "px"; // Expand to full height
    }
  };

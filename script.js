// function showlinks(){
//     const links=document.querySelector('.links');
//     const hamburger=document.querySelector('.hamburger');
//     const crossicon=document.querySelector('.crossicon');
//     links.style.display='initial';
//     hamburger.style.display='none';
//     crossicon.style.display='initial';
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
  
  links.style.maxHeight = links.scrollHeight + "px"; // Expand the menu
  hamburger.style.display = 'none'; // Hide the hamburger
  crossicon.style.display = 'initial'; // Show the cross icon
}

function hidelinks() {
  const links = document.querySelector('.links');
  const hamburger = document.querySelector('.hamburger');
  const crossicon = document.querySelector('.crossicon');
  
  links.style.maxHeight = null; // Collapse the menu
  hamburger.style.display = 'initial'; // Show the hamburger
  crossicon.style.display = 'none'; // Hide the cross icon
}

    function hidesublinks(){
    const links=document.querySelector('.links');
    const hamburger=document.querySelector('.hamburger');
    const crossicon=document.querySelector('.crossicon');
    links.style.display='none';
    hamburger.style.display='initial';
    crossicon.style.display='none';
  };
  // function showsublink(){
  //   const links = document.querySelector('.sublink');
  //   if (links.style.display === 'none' || links.style.display === '') {
  //     links.style.display = 'block';
  //   } else {
  //     links.style.display = 'none';
  //   }
  // };
  function showsublink() {
    const sublink = document.querySelector('.sublink');
    
    if (sublink.style.maxHeight) {
      sublink.style.maxHeight = null; // Collapse if already expanded
    } else {
      sublink.style.maxHeight = sublink.scrollHeight + "px"; // Expand to full height
    }
  };
    
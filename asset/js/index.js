AOS.init({
    duration:1200,
});

// input search
let buttonSearch = document.querySelector('.headerOne .search');
let inputSearch = document.querySelector('.headerOne .searchHead');

buttonSearch.onclick =_=>{
    inputSearch.classList.toggle('show')
}

// slider
let circleSlider = document.querySelectorAll('.carousel-indicators .side .circle');

// circle bottom slider
circleSlider.forEach(e => {
    e.onclick=_=>{
        circleSlider.forEach(e => {
            e.classList.remove('show');
            
        });
        e.classList.add('show');
    }

});

// header two active
let activeHeaderTwo = document.querySelectorAll('.headerTwo nav a');
activeHeaderTwo.forEach(e => {
    e.onclick=_=>{
        activeHeaderTwo.forEach(e => {
            e.classList.remove('active');
        });
        e.classList.add('active');
    }
});
// sideBAar Offcanves
let activeCanves = document.querySelectorAll('.offcanvas-body nav a');
activeCanves.forEach(e => {
    e.onclick=_=>{
        activeCanves.forEach(e => {
            e.classList.remove('active');
        });
        e.classList.add('active');
    }
});

// numbers
let numbers = document.querySelector('.numbers .box .num');
// let count = 0 ;
// function doSetTimeout(i) {
//     setInterval(function() {
//         numbers.innerText = count ++
       
//     }, 100);
//   }
  
//   for (var i = 1; i <= 2; ++i){
//       doSetTimeout(i);
      
//   }

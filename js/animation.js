function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.9] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.comp-1');
  
  for (let elm of elements) {
    observer.observe(elm);
  }








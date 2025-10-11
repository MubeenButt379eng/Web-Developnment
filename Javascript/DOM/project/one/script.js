  const btns = document.querySelectorAll('.btn');
    const body = document.querySelector('body');

    btns.forEach(button => {
      button.addEventListener('click', e => {
        // body.style.backgroundColor = e.target.id;
        if(e.target.id=== 'red'){
        body.style.backgroundColor =  e.target.id
        }
         if(e.target.id=== 'blue'){
        body.style.backgroundColor =  e.target.id
        }
         if(e.target.id=== 'green'){
        body.style.backgroundColor =  e.target.id
        }
         if(e.target.id=== 'yellow'){
        body.style.backgroundColor =  e.target.id
        }
         if(e.target.id=== 'purple'){
        body.style.backgroundColor =  e.target.id
        }
      });
    });
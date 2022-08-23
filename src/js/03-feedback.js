import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const KEY_FORM = 'feedback-form-state';
const infoForm = {};


form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

initForm()
function onInput(e) {        
   
    infoForm[e.target.name] = e.target.value;

    const infoSave = JSON.stringify(infoForm);
    localStorage.setItem('KEY_FORM', infoSave);
};

 
function onSubmit(e) {
     e.preventDefault();  
    const localSave = localStorage.getItem('KEY_FORM');
       
    try {
       
        const localData = localSave ? JSON.parse(localSave) : {};
        
        console.log(localData);
    } catch (error) {
console.log('parsing error');
    }    
    
    
    localStorage.removeItem(KEY_FORM);
    e.target.reset();
};


function initForm() {
  let save = localStorage.getItem('KEY_FORM');
  if (save) {
    save = JSON.parse(save);
    Object.entries(save).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
};
console.log(initForm);



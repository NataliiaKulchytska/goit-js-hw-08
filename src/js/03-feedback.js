import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name = email]'),
    text: document.querySelector('[name = message]'),
};

const KEY_FORM = 'feedback-form-state';
const infoForm = {};


refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);


function onInput(e) {
    // const value = refs.input.value;

    // console.log();
    infoForm[e.target.name] = e.target.value;

    const infoSave = JSON.stringify(infoForm);
    localStorage.setItem('KEY_FORM', infoSave);
};

 
function onSubmit(e) {
     e.preventDefault();  
    const localSave = localStorage.getItem('KEY_FORM');
        // infoForm[e.target.name] = e.target.value;

    // const infoSave = JSON.stringify(infoForm);
    // localStorage.setItem('KEY_FORM', infoSave);
    try {
        // const localObject = JSON.parse(localSave);
        const localData = localSave ? JSON.parse(localSave) : {};
        // onInput(e);
        console.log(localData);
    } catch (error) {
console.log('parsing error');
    }    
    
    //  console.log(localSave); 
    // localStorage.removeItem(KEY_FORM);
    e.target.reset();
};


// function onSave() {
//     const localSave = localStorage.getItem('KEY_FORM');
//     try {
//         const savedForm = JSON.parse('KEY_FORM');
//         console.log(savedForm);
        
//     }catch (error){}
// };
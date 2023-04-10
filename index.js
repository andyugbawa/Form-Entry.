const button =document.querySelector('.btn');


button.addEventListener('click', addInput);

function addInput(){
    const logininput = document.createElement('div');
    logininput.classList.add('login-page');
    const formDiv =document.createElement('div');
    formDiv.classList.add('form');
    const form = document.createElement('form');
    form.classList.add('register-form');
    const input1=document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","user name");
    const input2=document.createElement('input');
    input2.setAttribute("type","text")
    input2.setAttribute("placeholder","password")
    const input3=document.createElement('input');
    input3.setAttribute("type","text");
    input3.setAttribute("placeholder", "email id");
    const button =document.createElement('button');
    button.innerText='Create';
    logininput.appendChild(formDiv);
    formDiv.appendChild(form);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(button);
    const p = document.createElement('p');
    p.classList.add('message');
    p.innerText='Already Registered?';
    let anchor = document. createElement('a');
    p.appendChild(anchor);
    anchor.setAttribute("href", "#");
    anchor.innerHTML='login';
    form.appendChild(p);
    document.body.appendChild(logininput);
}




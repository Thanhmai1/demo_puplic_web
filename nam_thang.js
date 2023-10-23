var elForm, elSelecPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelecPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint(){
    var pack = this.options[this.selectedIndex].value;
    if(pack=== 'monthly'){
        elPackageHint.innerHTML= 'Save $10 if you pay for 1 year';
    }else{
        elPackageHint.innerHTML= 'Wise CHoice';
    }
}
function checkTerms(event){
    if (!elTerms.ckecked){
        elTermsHint.innerHTML = 'You must agree to the terms'
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelecPackage.addEventListener('change',packageHint, false);
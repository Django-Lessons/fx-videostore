import $ from "jquery";


class Password {
    constructor(pwd, keyup_handler, context) {
        /* pwd is jquery instance of password input*/
        this._pwd = pwd;
        this._pwd.on('keyup', function(event){
            keyup_handler.apply(context, event.data);            
        });
    }

    get text() {
        return this._pwd.val(); 
    }
}


export class DuoPass {

    static get RED() {
        return "red";
    }

    static get GREEN() {
        return "green";
    }

    constructor() {
        this._pass1 = new Password($("#password1"), this.keyup, this);
        this._pass2 = new Password($("#password2"), this.keyup, this); 
    }

    keyup() {
        let text1, text2;

        text1 = this._pass1.text;
        text2 = this._pass2.text;

        if (text1 != text2) {
            this.mark(DuoPass.RED);
        } else {
            this.mark(DuoPass.GREEN);
        }
    }

    mark(color) {
        console.log(`Mark color=${color}`);
    }
}


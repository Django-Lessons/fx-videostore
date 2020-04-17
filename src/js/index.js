import $ from 'jquery';
import '../sass/index.scss';
import 'bootstrap';

import {DuoPass} from "./duo_pass";

function is_registration() {
    return $("form#registration").length != 0;
}

$(function() {
    let duo_pass;

    if (is_registration()) {
        duo_pass = new DuoPass();
    }
});

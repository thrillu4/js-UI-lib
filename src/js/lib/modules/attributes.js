import $ from '../core';

$.prototype.setAttribute = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(name)) {
            continue;
        }
        this[i].setAttribute(name, value);
    }
    return this;
}

$.prototype.getAttribute = function(name) {
    for(let i = 0; i < this.length; i++) {
        if(!this[0].getAttribute(name)){
            continue;
        }
        this[i].getAttribute(name);

    }
    return this;
}

$.prototype.removeAttribute = function(name) {
    for(let i = 0; i < this.length; i++) {
        if(this[0].getAttribute(name)){
            continue;
        }
        this[i].removeAttribute(name);
    }
    return this;
}

$.prototype.toggleAttribute = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        if(this[0].hasAttribute(name)){
            this[0].removeAttribute(name)
        } else {
            this[0].setAttribute(name, value)
        }
    }
    return this;
}
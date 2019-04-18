var dec = document.getElementById("dec"),
    oct = document.getElementById("oct"),
    hex = document.getElementById("hex"),
    bin = document.getElementById("bin"),
    bcd = document.getElementById("bcd");

dec.addEventListener("input", function(){
    if (this.value != ""){
        octUpdate();
        hexUpdate();
        binUpdate();
        bcdUpdate();
    }
})

oct.addEventListener("input", function(){
    if (this.value != ""){
        decUpdate(this, 8);
        hexUpdate();
        binUpdate();
        bcdUpdate();
    }
})

hex.addEventListener("input", function(){
    if (this.value != ""){
        decUpdate(this, 16);
        octUpdate();
        binUpdate();
        bcdUpdate();
    }
})

bin.addEventListener("input", function(){
    if (this.value != ""){
        decUpdate(this, 2);
        octUpdate();
        hexUpdate();
        bcdUpdate();
    }
})

bcd.addEventListener("input", function(){
    if (this.value != ""){
        dec.value = "";
        decFromBCD();
        octUpdate();
        hexUpdate();
        binUpdate();
    }
})

function decFromBCD() {
    var val = bcd.value.split(' ');
    val.forEach(function(el){
        if (parseInt(el, 2) > 9)
            dec.value=NaN;
        else
            dec.value += parseInt(el, 2).toString();
    })
}

function decUpdate(txtobj, base) {
    dec.value = parseInt((txtobj).value, base);
};

function octUpdate() {
    oct.value = (Number(dec.value)).toString(8);
};

function hexUpdate() {
    hex.value = (Number(dec.value)).toString(16).toUpperCase();
};

function binUpdate() {
    bin.value = (Number(dec.value)).toString(2);
};

function bcdUpdate(val=dec.value) {
    // this function uses recursion!!!!
    bcd.value = "";
    if (val > 0) {
        bcdUpdate(Math.floor(val / 10));
        
        switch (val % 10) {
            case 0: 
                bcd.value += "0000 ";
                break;
            case 1: 
                bcd.value += "0001 ";
                break;
            case 2: 
                bcd.value += "0010 ";
                break;
            case 3: 
                bcd.value += "0011 ";
                break;
            case 4: 
                bcd.value += "0100 ";
                break;
            case 5: 
                bcd.value += "0101 ";
                break;
            case 6: 
                bcd.value += "0110 ";
                break;
            case 7: 
                bcd.value += "0111 ";
                break;
            case 8: 
                bcd.value += "1000 ";
                break;
            case 9: 
                bcd.value += "1001 ";
        }
    }
};


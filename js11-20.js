function evenlySpaced(a, b, c) {
    var small = a;
    var medium = b;
    var large = c;

    if (a > b && b < c){
        large = a;
        small = b;
        medium = c;
    }
    if (a > c && c < b){
        large = a;
        small = c;
        medium = b;
    }
    if(b > a && a < c){
        large = b;
        small = a;
        medium = c;
    }
    if (b > c && c < a){
        large = b;
        small = c;
        medium = a;
    }
    if(c > a && a < b){
        large = c;
        small = a;
        medium = b;
    }
    if(c > b && b < a && a < c){
        large = c;
        small = b;
        medium = a;
    }

    var compare = medium - small;
    var compare1 = large - medium;
    if(compare == compare1){
        return true;
    }else {
        return false;
    }

}
function countClumps(arr){
    var count = 0;

    for(var i = 0; i < arr.length - 1; i ++){
        if(arr[i] == arr[i + 1] && arr[i + 2] != arr[i]){
            count ++;
        }
    }
    return count;
}
function canBalance(arr){
    var result = 0;
    var split = 0;
    var sum1 = 0;
    for(var i = 0; i < arr.length; i ++){
        sum1 = sum1 + arr[i];
        //write a second loop starting at i + 1 that adds up the
        //rest of the array
        for(var d = i + 1; d < arr.length; d ++){
            split = split + arr[d];
        }
        if(sum1 == split){
            return true;
        }else {
            split = 0;
        }
    }
    if(sum1 != split){
        return false;
    }
}

function getSandwich(string) {
    var x = string.includes("bread");
    var y = string.indexOf("bread");


    if(x == false){
        return "";
    }
    while(x == true){
        if(string[y] != 0){
            string.slice(y, string.length);
        }

    }

}
function starOut(string){
    var result = string;
    var includes = result.includes("*");

    while(includes){
        var area = result.indexOf("*");
        if (result[area] == "*"){
            string = result.substring(area - 1, area + 1);

        }
        if (result[area + 1] == "*"){
            result = result.substring(area + 1);
        }

        if(includes != true) {
            break;
        }
        string = result.replace(area + 1, "");
        string = result.replace(area - 1, "");
        includes = result.includes("*");

    }
    return result;
}

function starOut1(string) {
    var n = string.includes("*");
    var x = string.indexOf("*");
    var k = string.includes("**");
    var b = "";
    var y = "";

    if(n == true){
        if(x != 0){
            if(k == true){
                for(var i = 0; i < 2 ; i ++) {
                    b = string.slice(0, x - 1);
                    y = string.slice(x + 1, string.length);
                    string = b + y;
                }
            }else {
                if(string.includes("*") == true) {
                    b = string.slice(0, x - 1);
                    for(var i = 0; i < 4; i++) {
                        if(x + 1!= "*") {
                            y = string.substring(x + -1, x +1);
                        }else{
                            y = string.substring(x, string.length);
                        }
                        string = y;
                        if (string.includes("*") == false) {
                            string = b + y;
                            break;
                        }
                    }
                    string = b + y;
                }
            }
        }else{
            if (string.length > 1) {
                b = string.slice(2, string.length);
                string = b;
            } else {
                string = "";
            }
        }

    }else {
        return string;
    }
    return string;
}

function endOther(string, answer) {
    var string = string.toLowerCase();
    var answer = answer.toLowerCase();
    var arr = Array.from(string);
    var another = Array.from(answer);
    var b = false;
    var length = string.length;
    var n = string.substring(0,0);

    for(var i = 0; i < length; i ++){
        for(var p = 0; p < length; p++){
            if (another[i] == arr[p]){
                b = true;
            }
        }

    }
    if(answer.length > length || answer.length < length){
        if(answer[answer.length - 1] == string[length - 1]){
            b = true;
        }else {
            b = false;
        }
    }
    if(length == 2){
        if(string[0] == answer[answer.length - 2] && (string[1] == answer[answer.length - 1])){
            b = true;
        }else {
            b = false;
        }

    }
    if(length == 6){
        if(string[0] == answer[answer.length - 2] && (string[1] == answer[answer.length - 1])){
            b = true;
        }else {
            b = false;
        }

    }
    return b;
}



function countYZ(str) {
    var str =  str.toLowerCase();
    var x = str.length;
    var y = 0;

    for(var i = 1; i < x; i ++){
        if(str[i] == " " && (str[i - 1] == "y" || str[i - 1] == "z")) {
            y ++;
        }


    }
    if(str[x - 1] == "y" || str[x - 1] == "z"){
        y = y + 1;
    }
    return y;
}

function fix23(arr){
    var x = arr;
    var y = 0;

    for(var i = 0; i < x.length; i ++){
        if(x[i] == 2 && x[i + 1] == 3){
            x[i + 1] = 0;

        }
    }
    if(i == 2 && i + 1 != 3){
        return x;
    }else {
        return x;
    }
}

function has23(array) {
    var x = array;
    var arr = array.length;

    for (var i = 0; i < 1; i ++) {
        if (x[0] == 2 || x[0] == 3) {
            return true;
        }
        if (x[arr - 1] == 2 || x[arr - 1] == 3) {
            return true;
        }
    }
    return false;

}


function firstLast6(array) {
    var x = array;
    var arr = array.length;
    var lastlengthvalue = arr;

    if (x[0] == 6) {
        return true;
    }
    if (x[1]) {
        if (x[arr - 1] == 6) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}




function tester() {
    document.getElementById("output").innerHTML += evenlySpaced(10, 9, 11);
    // document.getElementById("output").innerHTML += countClumps([1,2,2,3,4,4]);
//    document.getElementById("output").innerHTML += canBalance([1,1,2,1,1,2]);
//    document.getElementById("output").innerHTML += getSandwich("xxbreadjambreadyy");
    //document.getElementById("output").innerHTML += endOther("yz", "12xz");
    //document.getElementById("output").innerHTML += countYZ('DAY abc XYZ');
//    document.getElementById("output").innerHTML += has23(4, 3);
//    document.getElementById("output").innerHTML += firstLast6([1, 2, 3, 5, 6]);

}
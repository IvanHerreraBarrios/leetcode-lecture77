var replaceDigits = function(s) {
    let result = ""
    for(let i=0; i < s.length ;i++){
        const char = s[i]
        if(i % 2 === 1){
            result +=shift(s[i-1], parseInt(char))
        } else {
            result += char 
        }
    }
    return result
};

function shift(c, x){
    let code = c.charCodeAt(0)
    code += x
    return String.fromCharCode(code)
}
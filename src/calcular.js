import cal from './weChatBigNumber'
function calcular(){
    this.val1 = ''
    this.cal = ''
    this.val2 = ''
    this.first = true
}

calcular.prototype.add = function(){
    this.cal = '+'
    this.first = false
}
calcular.prototype.sub = function(){
    this.cal = '-'
    this.first = false
}
calcular.prototype.time = function(){
    this.cal = '*'
    this.first = false
}
calcular.prototype.divide = function(){
    this.cal = '/'
    this.first = false
}
calcular.prototype.mod = function(){
    this.cal = '%'
    this.first = false
}
calcular.prototype.clear = function(){
    this.val1 = ''
    this.val2 = ''
    this.cal = ''
    this.first = true
    return this.val1
}
calcular.prototype.result = function(){
    if(this.cal == '+'){
        this.val1 = cal.add(this.val1, this.val2)
    }else if(this.cal == '-'){
        this.val1 = cal.subtract(this.val1, this.val2)
    }else if(this.cal == '*'){
        this.val1 = cal.multiply(this.val1, this.val2)
    }else if(this.cal == '/'){
        this.val1 = cal.divide(this.val1, this.val2)
    }else if(this.cal == '%'){
        this.val1 = cal.mod(this.val1, this.val2)
    }
    // this.val1 = this.val1.replace('NaN','.')
    this.val2 = ''
    this.cal = ''
    return this.val1
}

export default calcular
module.exports = function check(str, bracketsConfig) {
    let bracketsArr = bracketsConfig.map(function(item) {
        return item.join('');
    });
    let res_str = str;
    for (let i = 0; i < bracketsArr.length; i++) {
        if (res_str.includes(bracketsArr[i])) {
            res_str = res_str.replace(bracketsArr[i], '');
            i = -1;
        }
    }
    return res_str.length === 0;
}

//样式文件同样以模块方式引入
require("./style.css");
//以CMD引入content.js
var content = require("./content.js");
 
function print() {
    document.write(content);
};
print();
var config = require('./weaconfig');

var appName = "demo1";

var mode = "release";

var node_env = "production";

const apps = {
    "demo1":{ //һ����Ŀ
        entry:"./project/demo1/src4js/index.js", //��Ŀ·��
        output:"./project/demo1/WebRoot/ecology/cloudstore/app/no0000005/js/index.js"
    },
    "demo2":{ //һ����Ŀ
        entry:"./project/demo2/src4js/index.js", //��Ŀ·��
        output:"./project/demo2/WebRoot/ecology/cloudstore/app/no0000005/js/index.js"
    }
}

module.exports = config.create(apps[appName],mode,node_env);
var config = require('./weaconfig');

var appName = "demo1";

var mode = "release";

var node_env = "production";

var isOutput2Custom = true; //�Ƿ�������Զ���·����������ԭ·���������

var customPath = "./DEMO/Weaver_20170116"; //�Զ���·����ַ

const apps = {
    "demo1":{ //һ����Ŀ
        entry:"./project/demo1/src4js/index.js", //��Ŀ·��
        output:"./project/demo1/WebRoot/ecology/cloudstore/app/no0000005/js/index.js",
        output2Custom:customPath+"/ecology/cloudstore/app/no0000005/js/index.js",
        isOutput2Custom:isOutput2Custom
    },
    "demo2":{ //һ����Ŀ
        entry:"./project/demo1/src4js/index.js", //��Ŀ·��
        output:"./project/demo1/WebRoot/ecology/cloudstore/app/no0000005/js/index.js",
        output2Custom:customPath+"/ecology/cloudstore/app/no0000005/js/index.js",
        isOutput2Custom:isOutput2Custom
    }
}

module.exports = config.create(apps[appName],mode,node_env);
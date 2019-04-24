var Paging = function (obj) {
    //默认配置
    var defaultOption = {
        pageNumber: 1, //页码
        pageSize: 10, //每页大小
        url: "", //请求地址
        data: {}, //请求参数
        callback: function (ret) {},
        totalCount: 0,
        pageCount: 0
    }
    //合并配置
    this.option = extend(defaultOption, obj);
    var isPass = false;
    var proto = Paging.prototype || {};
    proto.init = function () {
        if (!this.option.url) {
            alert('no url');
            return;
        }
        if (this.option.pageSize <= 0) {
            this.option.pageSize = 10;
        }
        if (this.option.pageNumber <= 0) {
            this.option.pageNumber = 1;
        }
        isPass = true;
        this.getData();
    }
    proto.getData = function () {
        if (!isPass) {
            alert("参数错误");
            return;
        }
        var data = {
            pageSize: this.option.pageSize,
            pageNumber: this.option.pageNumber,
            data: this.option.data
        };
        //接口总数
        this.option.totalCount = 100;
        this.option.pageCount = this.option.totalCount % this.option.pageSize > 0 ?
            this.option.totalCount / this.option.pageSize + 1 :
            this.option.totalCount / this.option.pageSize;

        //请求接口获取数据
        var res = this.option;
        if (this.option.callback) {
            this.option.callback(res);
        }
    }
    proto.nextPage = function () {
        if (this.option.pageNumber < this.option.pageCount) {
            this.option.pageNumber += 1;
            this.getData();
        }
    }
    proto.prePage = function () {
        if (this.option.pageNumber == 1) {
            return;
        }
        this.option.pageNumber -= 1;
        this.getData();
    }
    this.init();
}

function extend(target, source) {
    for (var obj in source) {
        target[obj] = source[obj];
    }
    return target;
}
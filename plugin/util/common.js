var SUCCESS = 'OK';
var CRM_PATH = '/sxm-crm-esop-pro/api/project/crm/';

var fail = function () {
    prompt('系统异常');
}

var prompt = function (data) {
    alert(data);
}
var loading_show = function () {

}
var loading_hide = function () {

}
AJAX_Req = {
    request: function (url, type, dataType, contentType, data, success, fail) {
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            contentType: contentType,
            data: data,
            cache: false,
            success: success,
            fail: fail
        });
    }
};



// @ts-nocheck
import './sass/styles.scss';
import mock from './mock-data';
var _data = window.$mock_data = mock.data;
console.log('数据内容', _data);
const XLSX = window['XLSX'];
const saveAs = window['saveAs'];
const $ = window['$'];

window.miliFormat = (function() {
        var DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
        var MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;

        return function(num) {
            if (!isNaN(num)) {
                return num && num.toString().replace(DIGIT_PATTERN, function(m) {
                    return m.replace(MILI_PATTERN, ",");
                });
            } else {
                return num;
            }

        };
    })();
function s2ab(s) {
	if(typeof ArrayBuffer !== 'undefined') {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	} else {
		var buf = new Array(s.length);
		for (var i=0; i!=s.length; ++i)
            buf[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
}

function export_table_to_excel(dom, type = 'xlsx') {
    var wb = XLSX.utils.table_to_book(dom, { sheet: "Sheet JS" });
    var wbout = XLSX.write(wb, { bookType: type, bookSST: true, type: 'binary' });
    var fname = 'test.' + type;
    try {
        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), fname);
    } catch (e) { if (typeof console != 'undefined') console.log(e, wbout); }
    return wbout;
}

var down = document.getElementById('down');
down.addEventListener('click',function(){
    // export_table_to_excel(document.getElementById('tdd'));
    export_table_to_excel(document.getElementById('fixTable'));
    // export_table_to_excel($(window.html)[0]);
})

// var window["html"] = '';
var create = document.getElementById('create');
create.addEventListener('click',function(){
    // export_table_to_excel(document.getElementById('tdd'));
    var start = Date.now();
    var template = _.template($('#reportWorkDetail-tpl').html());
    $mock_data.data
    var i = 432;
    var list = []
    while(i--){
        list.push(...$mock_data.data)
    }
    window["html"] = template({data:list });
    console.log('用时：'+(Date.now()-start));
    // $('body').append($(html)[0])
})
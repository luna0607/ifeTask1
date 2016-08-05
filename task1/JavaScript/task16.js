/**
 * Created by Ariana on 2016/7/21.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var a=document.getElementById("aqi-table").insertRow();
    var button=a.insertCell(0);
    button.innerHTML="<button onclick='delBtnHandle(this)'>删除</button>";
    var v =a.insertCell(0);
    v.innerHTML=document.getElementById("aqi-value-input").value;
    var city=a.insertCell(0);
    city.innerHTML=document.getElementById("aqi-city-input").value;

}


/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(a) {
    document.getElementById("aqi-table").deleteRow(a.parentNode.parentNode.rowIndex);
}



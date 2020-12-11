var editText;
var customerArray = [];
function validateForm() {
    var regex = new RegExp("^[a-zA-Z ]");
    var num = new RegExp("^[0-9]*$");
    var a = $("#name").val();
    var b = $("#Type").val();
    var c = $("#GST").val();
    var d = $("#State").val();
    var e = $("#City").val();
    var f = $("#Country").val();
    var g = $("#Number1").val();
    var h = $("#Number2").val();
    var i = $("#Contact").val();
    var j = $("#Prefix").val();
    var k = $("#Sefix").val();

    if (a == "") {
        $('#name_err').html("Required");
    }
    else {
        $('#name_err').html("");
    }
    if (b == "") {
        $('#name_err1').html("Required");
    }
    else {
        $('#name_err1').html("");
    }
    if (c == "") {
        $('#name_err2').html("Required");
    }
    else {
        $('#name_err2').html("");
    }
    if (d == "") {
        $('#name_err3').html("Required");
    }
    else {
        $('#name_err3').html("");
    }
    if (e == "") {
        $('#name_err4').html("Required");
    }
    else {
        $('#name_err4').html("");
    }
    if (f == "") {
        $('#name_err5').html("Required");
    }
    else {
        $('#name_err5').html("");
    }
    if (g == "") {
        $('#name_err6').html("Required");
    }
    else {
        $('#name_err6').html("");
    }
    if (h == "") {
        $('#name_err7').html("Required");
    }
    else {
        $('#name_err7').html("");
    }
    if (i == "") {
        $('#name_err8').html("Required");
    }
    else {
        $('#name_err8').html("");
    }
    if (j == "") {
        $('#name_err9').html("Required");
    }
    else {
        $('#name_err9').html("");
    }
    if (k == "") {
        $('#name_err10').html("Required");
        return false;
    }
    else {
        $('#name_err10').html("");

    }
    console.log(editText)

    inserTable();
    $('input[type="text"],input[type="number"],select,textarea').val("");

    // $("#name").val() = '';
    // $("#Type").val() = '';
    // $("#GST").val() = '';
    // $("#State").val() = '';
    // $("#City").val() = '';
    // $("#Country").val() = '';
    // $("#Number1").val() = '';
    // $("#Number2").val() = '';
    // $("#Contact").val() = '';
    // $("#Prefix").val() = '';
    // $("#Sefix").val() = '';


}
function inserTable() {
    if (editText != undefined) {
        customerArray.splice(editText, 1);
    }
    var rate_value;
    var a = $("#name").val();
    var b = $("#Type").val();
    var c = $("#GST").val();
    var d = $("#State").val();
    var e = $("#City").val();
    var f = $("#Country").val();
    var g = $("#Number1").val();
    var h = $("#Number2").val();
    var i = $("#Contact").val();
    var j = $("#Prefix").val();
    var k = $("#Sefix").val();

    var customerObj = {
        name: a,
        Type: b,
        GST: c,
        State: d,
        City: e,
        Country: f,
        Number1: g,
        Number2: h,
        Contact: i,
        result: rate_value,
        Obj :{
            Prefix: j,
            Sefix: k
        }
    };
    customerArray.push(customerObj);
    console.log(customerArray);
    addTable();

}
function addTable() {
    var v = "";
    editText = undefined;
    for (i = 0; i < customerArray.length; i++) {
     v += "<tr>";
      v += "<td>" + customerArray[i].name + "</td>";
      v += "<td>" + customerArray[i].GST + "</td>";
      v += "<td>" + customerArray[i].Contact + "</td>";
      v += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' + i + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' + i + ')">Delete</button></td>';
    }
    $("#displayArea").html(v);
  }

  function Delete(item) {
    customerArray.splice(item, 1);
    addTable();
  };
  function Edit(item) {
    editText = item;
    console.log(item);
    console.log(customerArray);
    console.log(customerArray[item]);
    $("#name").val(customerArray[item].name);
    $("#Type").val(customerArray[item].Type);
    $("#GST").val(customerArray[item].GST);
    $("#State").val(customerArray[item].State);
    $("#City").val(customerArray[item].City);
    $("#Country").val(customerArray[item].Country);
    $("#Number1").val(customerArray[item].Number1);
    $("#Number2").val(customerArray[item].Number2) ;
    $("#Contact").val(customerArray[item].Contact);
    $("#Prefix").val(customerArray[item].Obj.Prefix);
    $("#Sefix").val(customerArray[item].Obj.Sefix) ;
  
  
  };
  
  

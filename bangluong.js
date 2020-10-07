function add() {
	document.getElementById("form-new").style.display = "block";
	document.getElementById("form-new").action = '';
	document.getElementById("update").style.display = "none";
}
//Mảng khai báo 
var list = [
	{
		month : 'Thang 5', 
		name : "Tran Hoang Quy", 
		cmnd : 174564239, 
		time : 192,
		money : 100000,
		bonus : 5000000,
		punish : 0,
		totalMoney : 24200000
	},
	{
		month : "Thang 6", 
		name : "Tran Hoang Quy", 
		cmnd : 174564239, 
		time : 192,
		money : 100000,
		bonus : 4000000,
		punish : 0,
		totalMoney : 23200000
		
	},
	{
		month : "Thang 7", 
		name : "Tran Hoang Quy", 
		cmnd : 174564239, 
		time : 192,
		money : 100000,
		bonus : 4500000,
		punish : 0,
		totalMoney : 23700000
		
	},
	{
		month : 'Thang 5', 
		name : "Tran Huyen My", 
		cmnd : 145678932, 
		time : 192,
		money : 80000,
		bonus : 3000000,
		punish : 0,
		totalMoney : 18360000
	},
	{
		month : "Thang 6", 
		name : "Tran Huyen My", 
		cmnd : 145678932, 
		time : 192,
		money : 80000,
		bonus : 2000000,
		punish : 0,
		totalMoney : 17360000
	},
	{
		month : "Thang 7", 
		name : "Tran Huyen My", 
		cmnd : 145678932, 
		time : 192,
		money : 80000,
		bonus : 4000000,
		punish : 0,
		totalMoney : 19360000
	},
	{
		month : 'Thang 5', 
		name : "Nguyen Quang Hai", 
		cmnd : 123456789, 
		time : 192,
		money : 90000,
		bonus : 3000000,
		punish : 0,
		totalMoney : 20280000
	},	
	{
		month : "Thang 6", 
		name : "Nguyen Quang Hai", 
		cmnd : 123456789, 
		time : 192,
		money : 90000,
		bonus : 4000000,
		punish : 0,
		totalMoney : 21280000
	},	
	{
		month : "Thang 7", 
		name : "Nguyen Quang Hai", 
		cmnd : 123456789, 
		time : 192,
		money : 90000,
		bonus : 2000000,
		punish : 0,
		totalMoney : 19280000
	},		
	{
		month : 'Thang 5', 
		name : "Nguyen The Duc", 
		cmnd : 147258369, 
		time : 192,
		money : 90000,
		bonus : 3000000,
		punish : 0,
		totalMoney : 20280000
	},
	{
		month : "Thang 6", 
		name : "Nguyen The Duc", 
		cmnd : 147258369, 
		time : 192,
		money : 90000,
		bonus : 5000000,
		punish : 0,
		totalMoney : 22280000
	},
	{
		month : "Thang 7", 
		name : "Nguyen The Duc", 
		cmnd : 147258369, 
		time : 192,
		money : 90000,
		bonus : 1000000,
		punish : 0,
		totalMoney : 18280000
	},
];
//Kiểm tra điều kiện để Lưu tt
function save() {
	var month = document.getElementById("month").value;
		if ( month.length == 0  ) {
  			alert("Không được để trống Tháng");
  			return;
	}
	var name = document.getElementById("name").value;
		if ( name.length == 0  ) {
  			alert("Không được để trống Tên");
  			return;
	}
	var cmnd = document.getElementById("cmnd").value;
		if ( cmnd.length == 0  ) {
  			alert("Không được để trống ID");
  			return;
	}
	var time = document.getElementById("time").value;
		if ( time.length == 0  ) {
  			alert("Không được để trống Giờ công");
  			return;
	}var money = document.getElementById("money").value;
		if ( money.length == 0  ) {
  			alert("Không được để trống Giờ công");
  			return;
	}
	var bonus = document.getElementById("bonus").value;
		if ( bonus.length == 0  ) {
  			alert("Không được để trống Tiền thưởng");
  			return;
	}
	var punish = document.getElementById("punish").value;
		if ( punish.length == 0  ) {
  			alert("Không được để trống Tiền phạt");
  			return;
	}
	var totalMoney = document.getElementById("totalMoney").value;
		if ( totalMoney.length == 0  ) {
  			alert("Không được để trống ");
  			return;
	}
	//
	var arr = list;
	arr = arr.filter((nv) => {
			return nv.month == month && nv.cmnd == cmnd;
		});
		if (arr.length > 0) {
			alert("Tháng làm việc và ID Numbers bị trùng, vui lòng kiểm tra lại");
			return;
		}
	//
	var a = {
		month : month , 
		name : name, 
		cmnd : cmnd, 
		time : time,
		money : money ,
		bonus : bonus,
		punish : punish,
		totalMoney : +totalMoney
		};
	var table = document.getElementById("content");
	table.innerHTML = ' ';
	list.push(a);
	loadData(list);
	document.getElementById("formReset").reset();
}
loadData(list);
//Load data nhân viên từ JS ra HTML
function loadData(list1) {
	document.getElementById("content").innerHTML = '';
	for (let i = 0; i < list1.length; i++) {
		var table = document.getElementById("content");
		var row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		var cell7 = row.insertCell(6);
		var cell8 = row.insertCell(7);

		cell1.innerHTML = list[i].month;
		cell2.innerHTML = list[i].name;
		cell3.innerHTML = list[i].cmnd;
		cell4.innerHTML = list[i].time;
		cell5.innerHTML = list[i].money;
		cell6.innerHTML = list[i].bonus;
		cell7.innerHTML = list[i].punish;
		cell8.innerHTML = list[i].totalMoney;
		list = list1;
		}
}
//Tình lương của nhân viên
function tinh() {
	let time = parseInt(document.getElementById("time").value);
    let money = parseInt(document.getElementById("money").value);
    let bonus = parseInt(document.getElementById("bonus").value);
    let punish =parseInt(document.getElementById("punish").value);
    let tong = 0;
    tong = time * money + bonus - punish;
	document.getElementById("totalMoney").value = tong;
}
//Sắp xếp lương của nhân viên tăng và giảm dần
var statusSort = 0;
function sortMoney() {	
	function compare( a, b ) {
		var money1 = a.totalMoney;
		var money2 = b.totalMoney;
			if(statusSort == 0){
				if ( money1 > money2 ) {
					return 1;
				}
				if ( money1 < money2 ) {
					return -1;
				}
			}else if(statusSort == 1){
				if ( money1 < money2 ) {
					return 1;
				}
				if ( money1 > money2 ) {
					return -1;
				}			
			}
			return 0;
		}
    list.sort(compare);
    loadData(list);
    statusSort==0?statusSort=1:statusSort=0;
}
//Tìm kiếm tên nhân viên và tháng
var list2 = list;
function searchNV(value) {
	list = list2;
	var keyWordName = value.trim();
	var table = document.getElementById("content");
	table.innerHTML = '';
		if (keyWordName !== '') {
			list = list.filter((nv) => {
				if (nv.name.toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0) {
					return nv;
				}
				if (String(nv.month).toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0 ) {
					return nv;
				}
			});
		} else {
			list = list2;
		}

loadData(list);
//Cộng tổng lương theo tháng và Nhân viên
var  sum = 0;
console.log(list);
	for(var i = 0; i < list.length; i++) {
		    sum = sum + list[i].totalMoney;
		}
document.getElementById("total_Money").value = sum;
}
function calMoney() {
	document.getElementById("font-cal").style.display = "block";
	document.getElementById("salary").style.display = "block";
}

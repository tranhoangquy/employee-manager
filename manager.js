function add() {
	document.getElementById("form-new").style.display = "block";
	document.getElementById("form-new").action = '';
	document.getElementById("update").style.display = "none";
	document.getElementById("save").style.display = "block";
}
//Khai báo mảng fake thông tin
var list = [
	{
		name : "Tran Hoang Quy", 
		sex : "Nam", 
		ngaysinh : "1998-10-22", 
		diachi : "Dinh Cong, Hoang Mai, Ha Noi",
		chucvu : "Truong phong",
		phongban : "Kinh doanh",
		cmnd : 174564239,
		id: 1
	},
	{
		name : "Tran Huyen My", 
		sex : "Nu", 
		ngaysinh : "2000-03-23", 
		diachi : "Dinh Cong, Hoang Mai, Ha Noi",
		chucvu : "Ke toan",
		phongban : "Ke toan",
		cmnd : 145678932,
		id: 2
	},
	{
		name : "Nguyen Quang Hai", 
		sex : "Nam", 
		ngaysinh : "1997-12-02", 
		diachi : "Dinh Cong, Hoang Mai, Ha Noi",
		chucvu : "Nhan vien ki thuat",
		phongban : "Ki thuat",
		cmnd : 123456789,
		id: 3
	},
	{
		name : "Nguyen The Duc", 
		sex : "Nam", 
		ngaysinh : "1993-05-27", 
		diachi : "Dinh Cong, Hoang Mai, Ha Noi",
		chucvu : "Nhan vien kinh doanh",
		phongban : "Kinh doanh",
		cmnd : 147258369,
		id: 4
	}
];
//Kiểm tra điều kiện thông tin nhập vào
function save() {
	let gioitinh = document.getElementById("gioitinh").value;
	let chucvu = document.getElementById("chucvu").value;
	let phongban = document.getElementById("phongban").value;
	var name = document.getElementById("name").value;
		if ( name.length == 0  ) {
  			alert("Vui lòng nhập Họ và Tên");
  			return;
		}
		if (gioitinh == '') {
			alert("Vui lòng chọn Giới tính");
			return;
		}
	var namsinh = document.getElementById("namsinh").value;
		if ( namsinh.length == 0  ) {
  			alert("Vui lòng nhập Năm sinh");
  			return;
		}
	var diachi = document.getElementById("diachi").value;
		if ( diachi.length == 0  ) {
  			alert("Vui lòng nhập Địa chỉ");
  			return;
		}
		if (chucvu == '') {
			alert("Vui lòng chọn Chức vụ");
			return;
		}
		if (phongban == '') {
			alert("Vui lòng chọn Phòng ban");
			return;
		}
	var arr = list;
	var cmnd = document.getElementById("cmnd").value;
		if ( cmnd.length == 0  ) {
			alert("Vui lòng nhập ID Numbers");
			return;
		}
		arr = arr.filter((nv) => {
			return nv.cmnd == cmnd;
		});
		if (arr.length > 0) {
			alert("ID đã tồn tại, vui lòng kiểm tra lại");
			return;
		}
	var newId = getBiggestId(list);
	var a  = {
		name: name,
	 	sex: gioitinh,
  		ngaysinh: namsinh,
	   	diachi: diachi,
	    chucvu: chucvu,
	    phongban: phongban,
		cmnd: cmnd,
		id: newId+1
	};
	var table = document.getElementById("content");
	table.innerHTML = '';
	list.push(a);
	loadData(list);
	document.getElementById("formReset").reset();
}
//Lặp mảng để insert mảng vào HTML
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
		var icons = `<a style="margin: 5px" class="add" title="Lưu Lại" data-toggle="tooltip">
						<i class="fa fa-floppy-o"aria-hidden="true"></i>
					</a>
	                <a style="margin: 5px" class="edit" id="editUser" onclick="editUser(`+list[i].id+`)" title="Sửa" data-toggle="tooltip">
	                	<i class="fa fa-pencil"aria-hidden="true"></i>
	              	</a>	
	                <a style="margin: 5px" class="delete" onclick="deleteUser(`+list[i].id+`)" title="Xóa" data-toggle="tooltip">
	                	<i class="fa fa-trash-o"aria-hidden="true"></i>
	                </a>`
		cell1.innerHTML = list[i].name;
		cell2.innerHTML = list[i].sex;
		cell3.innerHTML = list[i].ngaysinh;
		cell4.innerHTML = list[i].diachi;
		cell5.innerHTML = list[i].chucvu;
		cell6.innerHTML = list[i].phongban;
		cell7.innerHTML = list[i].cmnd;
		cell8.innerHTML = icons;
		list = list1;
	}
}
//Xóa thông tin nhân viên
function deleteUser(id) {
	var table = document.getElementById("content");
		table.innerHTML = '';
		list = list.filter((nv) => {
			console.log(nv.id);
			console.log(id)
			return nv.id !== id;
		})
	loadData(list);
	document.getElementById("formReset").reset();
	document.getElementById("update").style.display = "none";
	document.getElementById("save").style.display = "block";
}
//Tìm id lớn nhất để xóa nhân viên vừa được thêm vào
function getBiggestId(listData) {
	var max = listData[0].id;
	listData.forEach((nv) => {	
			if(nv.id > max) {
				max = nv.id;
			}
     	});
	return max;	
}
function checkDuplicateId(id, listaa) {
	listaa.forEach((nv) => {
		if(id === nv.id) {
			return true;
		}
 	});
	return false;
}
loadData(list);
//Chỉnh sửa thông tin nhân viên
function editUser(idUser) {
	document.getElementById("save").style.display = "none";
	document.getElementById("form-new").style.display = "block";
	document.getElementById("update").style.display = "block";
	document.getElementById("update").setAttribute("data-id",idUser);
		list3 = list.filter((nv) => {
		return nv.id === idUser;
		console.log(nv.id)
	});
	let name = list3[0].name;
	let sex = list3[0].sex;
	let ngaysinh = list3[0].ngaysinh;
	let diachi = list3[0].diachi;
	let chucvu = list3[0].chucvu;
	let phongban = list3[0].phongban;
	let cmnd = list3[0].cmnd;
	let id = idUser;
	document.getElementById("name").value = name;
	document.getElementById("gioitinh").value = sex;
	document.getElementById("namsinh").value = ngaysinh;
	document.getElementById("diachi").value = diachi;
	document.getElementById("chucvu").value = chucvu;
	document.getElementById("phongban").value = phongban;
	document.getElementById("cmnd").value = cmnd;
}
// Tìm kiếm nhân viên 
var list2 = list;
function searchNV(value) {
	list = list2;
	var keyWordName = value.trim();
	var table = document.getElementById("content");
		table.innerHTML = '';
		if (keyWordName !== '' ) {
		list = list.filter((nv) => {
			if (nv.name.toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0) {
				return nv;
			}
			if (nv.chucvu.toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0) {
				return nv;
			}
			if (nv.phongban.toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0) {
				return nv;
			}
			if (String(nv.cmnd).toUpperCase().indexOf(keyWordName.toUpperCase()) >= 0 ) {
				return nv;
			}
		});
		} else {
			list = list2;
		}
	loadData(list);
}
function update() {
	var idUser = document.getElementById("update").getAttribute("data-id");
	let gioitinh = document.getElementById("gioitinh").value;
	let chucvu = document.getElementById("chucvu").value;	
	let phongban = document.getElementById("phongban").value;
	var name = document.getElementById("name").value;
		if ( name.length == 0  ) {
			alert("Không được để trống Tên");
			return;
	}
		if (gioitinh == '') {
			alert("Vui lòng chọn Giới tính");
			return;
	}
	var namsinh = document.getElementById("namsinh").value;
		if ( namsinh.length == 0  ) {
  			alert("Không được để trống Năm sinh");
  			return;
	}
	var diachi = document.getElementById("diachi").value;
		if ( diachi.length == 0  ) {
  			alert("Không được để trống Địa chỉ");
  			return;
	}
		if (chucvu == '') {
			alert("Vui lòng chọn Chức vụ");
			return;
	}
		if (phongban == '') {
			alert("Vui lòng chọn Phòng ban");
			return;
	}
	var cmnd = document.getElementById("cmnd").value;
		if ( cmnd.length == 0  ) {
  			alert("Không được để trống ID Numbers");
  			return;
	}
	for(let i = 0; i < list.length; i++){
		if(list[i].id == idUser){
			list[i].name = name;
			list[i].sex = gioitinh;
			list[i].ngaysinh = namsinh;
			list[i].diachi = diachi;
			list[i].chucvu = chucvu;
			list[i].phongban = phongban;
			list[i].cmnd = cmnd;			
		}
	}
	loadData(list);
	
}
//Sắp xếp nhân viên theo tên 
var statusSort = 0;
function sortTable() {
	function compare( a, b ) {
		var ten = a.name.split(' ');
		var name1 = ten[ten.length - 1];
		var ten2 = b.name.split(' ');
		var name2 = ten2[ten2.length - 1];
		if(statusSort == 0){
				if ( name1 > name2 ) {
					return 1;
				}
				if ( name1 < name2 ) {
					return -1;
				}
			}else if(statusSort == 1){
				if ( name1 < name2 ) {
					return 1;
				}
				if ( name1 > name2 ) {
					return -1;
				}			
			}
		return 0;
		}
	    list.sort(compare);
	    loadData(list);
	    statusSort==0?statusSort=1:statusSort=0;
}
//Sắp xếp nhân viên theo phong ban 
function sortPB() {
	function compare( a, b ) {
	var ten = a.phongban.split(' ');
	var name1 = ten[ten.length - 1];
	var ten2 = b.phongban.split(' ');
	var name2 = ten2[ten2.length - 1];
	if(statusSort == 0){
			if ( name1 > name2 ) {
				return 1;
			}
			if ( name1 < name2 ) {
				return -1;
			}
		}else if(statusSort == 1){
			if ( name1 < name2 ) {
				return 1;
			}
			if ( name1 > name2 ) {
				return -1;
			}			
		}
		return 0;
	}
    list.sort(compare);
    loadData(list);
    statusSort==0?statusSort=1:statusSort=0;
}
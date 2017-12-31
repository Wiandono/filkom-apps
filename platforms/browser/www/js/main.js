var header = "<li class='ui-screen-hidden'><a>"; 
var footer = "</a></li>"; 
var result = ''; 
var hari = ''; 
var praktikum = ''; 
 
$.ajax({ 
    url: 'https://cors-anywhere.herokuapp.com/' + 'http://filkom.ub.ac.id/module/api/conf/get_jadwal/in', 
    type: 'get', 
    crossDomain: true,
    success: function (data) { 
        objP = JSON.parse(atob(data)); 
 
        $.each(objP, function (index, value) { 
            if (index == "senin") { 
                hari = "Senin"; 
            } else if (index == "selasa") { 
                hari = "Selasa"; 
            } else if (index == "rabu") { 
                hari = "Rabu"; 
            } else if (index == "kamis") { 
                hari = "Kamis"; 
            } else { 
                hari = "Jumat"; 
            } 
            $.each(value, function (index2, value2) { 
                $.each(value2, function (index3, value3) { 
                    if (value3.praktikum == "1") { 
                        praktikum = " | Praktikum" 
                    } else { 
                        praktikum = ""; 
                    } 
                    result += header; 
                    result += "<h2>" + value3.matakuliah + " - " + value3.kelas + "</h2>"; 
                    result += "<p><strong>" + hari + " | " + value3.jam_mulai + " - " + value3.jam_selesai + " | " + index2 + praktikum + "</strong></p>"; 
                    result += "<p>" + value3.dosen + "</p>"; 
                    result += footer; 
                }) 
            }); 
        }); 
 
        document.getElementById('listview').innerHTML = result; 
    } 
});
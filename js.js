class Category {
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}
///bai 2
class Song {
    constructor(id, name, lyrics) {
        this.id = id;
        this.name = name;
        this.lyrics = lyrics;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setLyrics(lyrics) {
        this.lyrics = lyrics;
    }

    getLyrics() {
        return this.lyrics
    }
}

let listNhac = [];

function select() {

}
function createList() {

}


let listCategory = [];
let category1 = new Category(1, 'Nhạc vàng');
let category2 = new Category(2, 'Nhạc đỏ');
let category3 = new Category(3, 'Nhạc trẻ');
let category4 = new Category(4, 'Nhạc rock');
listCategory.push(category1, category2, category3, category4);


function showListCategory() {
    let drawTable = '';
    for (let i = 0; i < listCategory.length; i++) {
        drawTable += `<tr>
            <td>${listCategory[i].id = i + 1}</td>
            <td>${listCategory[i].name}</td>
            <td><button type="button" class="btn btn-warning" onclick="editCategory(${listCategory[i].id})">Edit</button></td>
            <td><button type="button" class="btn btn-success" onclick="deleteCategory(${listCategory[i].id})">Delete</button></td>
            </tr>`
    }
    document.getElementById('drawTable').innerHTML = drawTable;
    let music = '';
    for (let i = 0; i < listCategory.length; i++) {
        let valueMucsic = listCategory[i].name;
        music += `<option valueMusic="${valueMucsic}">${listCategory[i].name}</option>`
    }
    document.getElementById('stylee').innerHTML = music;
}

showListCategory();

function createCategory() {
    let newMusic = document.getElementById("add").value;
    let check = true
    if (newMusic.trim() === '') {
        document.getElementById('validate').innerHTML = '<span style="color: #8b00ff">Sửa Pls</span>'
    } else {
        for (let j = 0; j < listCategory.length; j++) {
            if (newMusic.toLowerCase() === listCategory[j].name.toLowerCase()) {
                check = false
            }
        }
        if (check) {
            listCategory.push(new Category(listCategory[listCategory.length - 1].id + 1, newMusic));
            document.getElementById('validate').innerHTML = '<span style="color: #0000ff">Không Trùng</span>'
        } else {
            document.getElementById('validate').innerHTML = '<span style="color: #ff0000">Trùng Loại</span>'
        }
    }
    showListCategory();
}


function editCategory(id) {
    console.log('id=========', id)
    let check2 = false
    let editCategory = prompt("Edit name", listCategory[id - 1], name);
    if (editCategory.trim() === '') {
        document.getElementById("validate").innerHTML = '<span style="color: #ff0000">Không để trống !</span>'
        return;
    } else {
        for (let i = 0; i < listCategory.length; i++) {
            if (listCategory[i].name.toLowerCase() === editCategory.toLowerCase()) {
                check2 = true;
                document.getElementById("validate").innerHTML = '<span style="color: #ff0000">Nhập tên khac</span>'
            }
        }
    }
    if (!check2) {
        listCategory[id - 1].setName(editCategory)
        document.getElementById('validate').innerHTML = '<span style="color: #ff008a">DONE !</span>'
    }
    showListCategory();
}

function deleteCategory(id) {
    for (let i = 0; i < listCategory.length; i++) {
        if (listCategory[i].id === id) {
            let xacNhan = confirm("Xóa hay không xóa")
            if (xacNhan) {
                listCategory.splice(listCategory[i], 1)
            }
        }
    }
    showListCategory();
}



/*jshint esversion: 6 */
(function() {
    "use strict";

var nameElem, depositElem, btnElem, textElem;
var accountInfoList = [];

var AccountFactory = function() {
    var privateName;
    var privateBalance;
    var privateCreate = function(name, deposit) {
        privateName = name;
        privateBalance = deposit;
    };
    return { // public 
        create: function(name, deposit) { 
            privateCreate(name, deposit);
            return this;
        },
        getAccountInfo: function() {
            return "Account name: " + privateName + " \tBalance: " + privateBalance;
        }
    };
};

function handleCreate() {
    console.log("handleCreate");
    var acc = AccountFactory().create(nameElem.value, depositElem.value);
    accountInfoList.push(acc);
    accList.value = "";
    accountInfoList.forEach(item => accList.value += item.getAccountInfo() + "\n");
}

function init() {
    nameElem = document.getElementById("name");
    depositElem = document.getElementById("deposit");
    btnElem = document.getElementById("createBtn");
    btnElem.onclick = handleCreate;
    textElem =  document.getElementById("accList");
}

window.onload = init;
})();
/**
 * Created by tinhonng on 1/26/15.
 */
function Unit(newUnit){
    this.unit = newUnit;
}
Unit.prototype.createUnit = function(){
    var unitDiv = initClass('unit', 'div');
    var showInfo = initClass('showInfo', 'div');
    var neighborhood = initClass('neighborhood', 'div');
    var building = initClass('building','div');
    var sellOrRent = initClass('sellOrRent', 'div');
    var otherShowInfo = initClass('otherShowInfo', 'div');
    var firstRow = initClass('firstRow', 'ul');
    var secondRow = initClass('secondRow', 'ul');
    var type = initClass('type', 'li');
    var area = initClass('area', 'li');
    var floorSet = initClass('floorSet', 'li');
    var alpha = initClass('alpha', 'li');
    var rooms = initClass('rooms', 'li');
    var square = initClass('square', 'li');
    var price = initClass('price', 'li');
    var pricePerFeet = initClass('pricePerFeet', 'li');
    var rent = initClass('rent', 'li');
    var parking = initClass('parking', 'li');
    var status = initClass('status', 'li');
    var commission = initClass('commission', 'li');
    var hiddenInfo = initClass('hiddenInfo', 'div');
    var phoneNumber = initClass('phoneNumber', 'li');
    var client_name = initClass('client_name', 'li');
    var hiddenInfo_ul = initClass('hiddenInfo_ul', 'ul');

    neighborhood.innerHTML = this.unit.neighborhood;
    building.innerHTML = this.unit.building;
    sellOrRent.innerHTML = this.unit.sellOrRent;
    type.innerHTML = this.unit.type;
    area.innerHTML = this.unit.area;
    floorSet.innerHTML = this.unit.floorSet;
    alpha.innerHTML = this.unit.alpha;
    rooms.innerHTML = this.unit.rooms;
    square.innerHTML = this.unit.square;
    price.innerHTML = this.unit.price;
    pricePerFeet.innerHTML = this.unit.price;
    rent.innerHTML = this.unit.rent;
    parking.innerHTML = this.unit.parking;
    status.innerHTML = this.unit.status;
    commission.innerHTML = this.unit.commission;
    phoneNumber.innerHTML = this.unit.phoneNumber;
    client_name.innerHTML = this.unit.client_name;
    phoneNumber.innerHTML = getPhoneHTMLBody(this.unit.phoneNumber);
    client_name.innerHTML = getClient_nameHTMLBody(this.unit.client_name);

    showInfo.appendChild(neighborhood);
    showInfo.appendChild(building);
    showInfo.appendChild(sellOrRent);
    firstRow.appendChild(type);
    firstRow.appendChild(area);
    firstRow.appendChild(floorSet);
    firstRow.appendChild(alpha);
    firstRow.appendChild(rooms);
    firstRow.appendChild(square);
    secondRow.appendChild(price);
    secondRow.appendChild(pricePerFeet);
    secondRow.appendChild(rent);
    secondRow.appendChild(parking);
    secondRow.appendChild(status);
    secondRow.appendChild(commission);
    otherShowInfo.appendChild(firstRow);
    otherShowInfo.appendChild(secondRow);
    hiddenInfo_ul.appendChild(phoneNumber);
    hiddenInfo_ul.appendChild(client_name);
    hiddenInfo.appendChild(hiddenInfo_ul);

    unitDiv.appendChild(showInfo);
    unitDiv.appendChild(otherShowInfo);
    unitDiv.appendChild(hiddenInfo);

    addClickToShowEvent(unitDiv);
    return unitDiv;

};
function initClass(str, elementType){
    var aDiv = document.createElement(elementType);
    aDiv.className = str;
    return aDiv;
}

function insertNewUnit(unit){
    document.getElementById('list').appendChild(unit);
}
document.addEventListener("DOMContentLoaded", function() {
   /* Array.prototype.forEach.call(document.getElementsByClassName('unit'), function(e){
        e.addEventListener("click", function(){
            var hiddenInfo = e.getElementsByClassName("hiddenInfo")[0];
            var flag = hiddenInfo.getAttribute('data-flag');
            if(flag){
                hiddenInfo.style.display = "none";
                hiddenInfo.setAttribute("data-flag", "");
            }
            else{
                hiddenInfo.style.display = "block";
                hiddenInfo.setAttribute("data-flag", "showing");
            }



        });
    });*/
    document.getElementById("search").addEventListener("keydown", function(){
        window.setTimeout(function(){
            var value = document.getElementById("search").value;
            var unitArray = document.getElementsByClassName('unit');
            var rex = new RegExp(value, 'i');
            Array.prototype.forEach.call(unitArray, function(e){
                e.style.display = "none";
            });
            Array.prototype.forEach.call(unitArray, function(e){
                if(rex.test(e.textContent)){ //should use textContent instead of innerHTHML or outterHTML
                    e.style.display = "table";
                }
            });
        },1);

    });
    document.getElementById("confirm").addEventListener('click', function(){
        var aUnit = [];
        var modalForm = document.forms[0];
        var formInputs = modalForm.getElementsByTagName('input');
        Array.prototype.forEach.call(formInputs, function(e){
            aUnit[e.name] = e.value;
        });
        var newUnit = new Unit(aUnit);
        var newUnitDiv = newUnit.createUnit();
        insertNewUnit(newUnitDiv);
        $('#basicModal').modal('hide');
        modalForm.reset();
        var list = document.getElementById('list');
    });

    Array.prototype.forEach.call(document.getElementsByClassName('unit'), function(e){
        addClickToShowEvent(e);
    });
});

function addClickToShowEvent(e){
    e.addEventListener('click', function(){
        var h = e.getElementsByClassName('hiddenInfo')[0];
        if(!h.hasAttribute('data-hidden') || h.getAttribute('data-hidden') === 'false'){
            h.style.display = 'block';
            h.setAttribute('data-hidden', 'true');
        }
        else{
            h.style.display = 'none';
            h.setAttribute('data-hidden', 'false');
        }
    });
}

function getPhoneHTMLBody(number){
    return '<i class="fa fa-phone">&nbsp;</i><a href="tel:replaceThis">replaceThis</a>'.replace(/replaceThis/g, number);
}

function getClient_nameHTMLBody(name){
    return '<i class="fa fa-user ">&nbsp;</i>replaceThis'.replace('replaceThis', name);
}
let myTable = document.querySelector('.myTable');

function tableCreate(choseDrop, checkBoxVal) {
    let data = structuredClone(glossary);
    let searchInput = document.querySelector("input").value;
    let filteredData;

    if (searchInput !== '') {

        data = data.filter(value => {
            const searchStr = searchInput.toLowerCase();
            const termMatches = value.term.toLowerCase().includes(searchStr);
            const defintionMatches = value.definition.toLowerCase().includes(searchStr);

            return termMatches || defintionMatches;
        });

    }


    if (choseDrop !== undefined && choseDrop !== 'null' && choseDrop !== null) {
        data = data.filter(cls => {
            return cls.class == choseDrop;
        })
    }

    if (checkBoxVal !== undefined && checkBoxVal !== 'null' && checkBoxVal !== null) {

        data = data.filter(el => {
            return el.tags.indexOf(checkBoxVal) !== -1;
        })


    }

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        //for (let j = 0; j < 3; j++) {

        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td.append(`${data[i].term}`);
        td2.append(data[i].class);
        td3.append(`${data[i].definition}`);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);

        myTable.appendChild(tr);
    }

}

tableCreate();
createDropDown();
createCheckBox();

function searcInputFunction() {

    $(".myTable").find("tr:gt(0)").remove();
    tableCreate();
}

function createDropDown() {
    let data = structuredClone(glossary);

    var select = document.createElement("select");
    select.name = "className";
    select.id = "className"

    const unique = [...new Set(data.map(item => item.class))];
    var option = document.createElement("option");
    option.value = null;
    option.text = '-';
    select.appendChild(option);
    for (const val of unique) {

        var option = document.createElement("option");
        option.value = val;
        option.text = val;

        select.appendChild(option);

    }

    var label = document.createElement("label");
    label.innerHTML = "Choose your Class: "
    label.htmlFor = "class";

    document.getElementById("searchDiv").appendChild(label).appendChild(select);
}

document.getElementById("className").onchange = function () {
    $(".myTable").find("tr:gt(0)").remove();
    // var checkboxes = document.getElementsByName("test");
    // var checkboxesChecked = [];
    // // loop over them all
    // for (var i = 0; i < checkboxes.length; i++) {
    //     // And stick the checked ones onto an array...
    //     if (checkboxes[i].checked) {
    //         checkboxesChecked.push(checkboxes[i].value);
    //     }
    // }
    tableCreate(this.value, null)
};


function createCheckBox() {
    let data = structuredClone(glossary);

    let totalTags = [];
    for (const val of data) {
        for (const val2 of val.tags) {
            totalTags.push(val2);
        }
    }

    let totalTags2 = [...new Set(totalTags)];

    for (const val of totalTags2) {
        let chkBox = document.createElement("input");
        chkBox.setAttribute("type", "checkbox");
        chkBox.setAttribute("name", "test")
        chkBox.value = val;
        chkBox.addEventListener("click", function () {
            $(".myTable").find("tr:gt(0)").remove();

            if (this.checked) {
                tableCreate(null, this.value);
            } else {
                tableCreate();
            }
        })
        var label = document.createElement('label');

        // assigning attributes for
        // the created label tag
        label.htmlFor = "id";

        // appending the created text to
        // the created label tag
        label.appendChild(document.createTextNode(val));
        document.getElementById("searchDiv").appendChild(chkBox);
        document.getElementById("searchDiv").appendChild(label);
    }


}



async function createTable(user){
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
    let data = await response.json(); 
    let id;
    let name;
    let username;
    let email;
    let address;
    if (user != "") {
        id = data.id;
        name = data.name;
        username = data.username;
        email = data.email;
        address = data.address.street + ", " + data.address.city;
        let table = document.createElement('table');
        for (i = -1; i < 1; i++){

            let tr = document.createElement('tr');   

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');

            if (i == -1){
                td1.append("Id");
                td2.append("Name");
                td3.append("Username");
                td4.append("Email");
                td5.append("Address");
                tr.setAttribute("class", "th");
            }
            else {
                td1.append(id);
                td2.append(name);
                td3.append(username);
                td4.append(email);
                td5.append(address);
            }
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            table.appendChild(tr);    
        }
        document.body.appendChild(table); 

        table.setAttribute("id", "table");
    }
    else {
        id = data.map(x => x.id);
        name = data.map(x => x.name);
        username = data.map(x => x.username);
        email = data.map(x => x.email);
        address = data.map(x => x.address.street + ", " + x.address.city);
    
        let table = document.createElement('table');

        for (i = -1; i < data.length; i++){

            let tr = document.createElement('tr');   

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            
            if (i == -1){
                td1.append("Id");
                td2.append("Name");
                td3.append("Username");
                td4.append("Email");
                td5.append("Address");
                tr.setAttribute("class", "th");
            }
            else {
                td1.append(id[i]);
                td2.append(name[i]);
                td3.append(username[i]);
                td4.append(email[i]);
                td5.append(address[i]);
            }
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            table.appendChild(tr);    
        }
        document.body.appendChild(table); 

        table.setAttribute("id", "table");
    }
}

function filterUsers() {
    let user = document.getElementById("user").value;
    if (user > 0 && user < 11) {
        document.getElementById("table").remove();
        createTable(user);
    }
    else {
        alert("There are no users with that ID");
    }
}

function reset() {
    document.getElementById("user").value = "";
    document.getElementById("table").remove();
    createTable("");
}

createTable("");
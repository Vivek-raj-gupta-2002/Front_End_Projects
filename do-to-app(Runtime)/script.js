class Task {
    constructor(title, id, isStatus) {
        this.title = title;
        this.id = id;
        this.isStatus = isStatus;
    };

    //get methods
    getTitle() {
        return this.title.title;
    };

    getId() {
        return this.id;
    };

    getStatus() {
        return this.isStatus;
    };
}

class App {
    static assignedTask = [];

    static addElement() {
        let title = document.getElementById('title').value;

        if(title !== ''){
            let li = document.createElement('li');

            let index = this.assignedTask.length;

            li.id = String(index);

            li.setAttribute('onclick', 'App.done(' + index +')');
            

            this.assignedTask.push(title);


            let p = document.createTextNode(title);
            li.appendChild(p);
            document.getElementById('myList').appendChild(li);
            
        }else{

            alert("Write Some Thing!!")

        }

        document.getElementById('title').value = '';
    }


    static done(id) {
        let myElement = document.getElementById(id);
        myElement.style.textDecoration = "line-through";
        myElement.style.textDecorationThickness = '2px';
        myElement.setAttribute('onclick', 'App.Done(' + id +', 0)');
    }

    static Done(id, x) {
        let myElement = document.getElementById(id);
        myElement.style.display = 'none';
    }
}
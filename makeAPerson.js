/**
 * Fill in the object constructor with the following methods below:

 * getFirstName() 
 * getLasttName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 */

const Person = function (firstAndLast) {
    const name = firstAndLast.split(" ")

    this.getFullName = function () {
        return name.join(" ");
    };

    this.getFirstName = () => {
        return name[0];
    }

    this.getLastName = () => {
        return name[1];
    }

    this.setFirstName = (newFirstName) => {
        return name[0] = newFirstName;
    }

    this.setLastName = (newLastName) => {
        return name[1] = newLastName;
    }

    this.setFullName = (newFullName) => {
        const splitFullName = newFullName.split(" ");
        name[0] = splitFullName[0];
        name[1] = splitFullName[1]
        return name.join(" ");
    }
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName('Hey');

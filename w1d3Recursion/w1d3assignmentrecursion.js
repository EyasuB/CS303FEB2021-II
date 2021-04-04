
//Add the sum of all numbers upto n;
function sum(num) {
    if (num === 0 ?? num === 1) {
        return num;

    }
    return num + sum(num - 1);
}
console.log(sum(9));


/* 
 use recursion to implement print() method.
 use ObjectLiteral to create an object named linkedlist with
methods linkedlist.add(1), linkedlist.remove(2), linkedlist.print()
*/
let linkedlist = {
    
    add(ourvalue) {
        let mykey = Object.keys(linkedlist);
        if (mykey.length <= 3) {
            linkedlist.value = ourvalue;
            linkedlist.next = null;
        } else {
            object = linkedlist;
        
            while (object) {
                if (object.next === null) {
                    object.next = { value: ourvalue, next: null };
                    break;
                }
                object = object.next;
            }
        }
    },
    remove(ourvalue) {
        if (linkedlist == null) {
            return linkedlist;
        }
        while (linkedlist.value == ourvalue) {
            linkedlist = linkedlist.next;
        }
        myobject = linkedlist;
        nextobj = myobject.next;
        while (nextobj != null) {
            if (nextobj.value == ourvalue) {
                myobject.next = nextobj.next;
                // ie last head was to be removed
                if (myobject.next == null)
                    break;
            }
            myobject = myobject.next;
            nextobj = myobject.next;
        }
        return linkedlist;
        
    },
    print() {
        let temp = linkedlist;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
     }

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.add(5);
linkedlist.remove(4);
// linkedlist.add(6);
// linkedlist.add(7)
//linkedlist.remove(4);
linkedlist.print();


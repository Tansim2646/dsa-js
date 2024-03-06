// This is linked implementation using JS

// Node Class
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// Linked List Class
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Methods For adding Node
    appendNode(data){
        const newNode = new Node(data);
        let current;
        if(this.head === null){
            this.head = newNode;
            console.log('Head Initiated');
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            console.log('New Item added to the list');
        }
        this.size++;
       
    }
    // This method will print all the elements inside the linked list
    printAll(){
        let current;
        current = this.head;
        while(current){
            console.log(`data is ${current.data} \n`);
            current = current.next;
        }
    }
    // This method will print the size of the linked list
    size(){
        return this.size;
    }
    
}

// Driver Code
const newList = new LinkedList();
newList.appendNode(10);
newList.appendNode(20);
newList.appendNode(30);
newList.appendNode(70);
console.log(newList.size);
newList.printAll();

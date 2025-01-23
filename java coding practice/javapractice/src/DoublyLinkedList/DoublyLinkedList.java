package DoublyLinkedList;
class Node{
    int data;
    Node  next;
    Node prev;

    Node(int data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

public class DoublyLinkedList {
    Node  head;
    // method to add in dll
    public void addDll(int data){
        Node newNode = new Node(data);
        if(head == null){
            head=newNode;
        }else{
            Node current = head;
            while(current.next!= null){
                current=current.next;
            }
            current.next=newNode;
            current.prev=current;
        }
    }

    // method to print doubly linkedlist in forward direction
    public void printDll(){
        Node current = head;
        while(current != null){
            System.out.println(current.data+" ");
            current=current.next;
        }
        System.out.println();
    }

    // mthod to print doubly linked listin backward direction
    public void printBackward(){
        if(head== null){
            System.out.println("thi list is empty ");
            return;
        }

        Node current = head;
        while(current.next != null){
            current=current.next;
        }
        while(current != null){
            System.out.println(current.data+" ");
            current=current.prev;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.addDll(13);
        list.addDll(34);
        list.printBackward();
        list.printDll();

    }
}

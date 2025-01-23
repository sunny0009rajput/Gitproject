package LinkedList;

//class Node{
//    int data;
//    Node next;
//
//    Node(int data){
//        this.data=data;
//        this.next=null;
//        }
//}

public class LinkedList {
    Node head;
    // method to add new node to the end ot the linked list .
    public void add(int data){
        Node newNode = new Node(data);
        if(head == null){
            head= newNode;
        }else{
            Node current =head;
            while(current.next != null){
                current=current.next;
            }
            current.next=newNode;
        }
    }

    // method to print the linkedlist
    public void printList(){
        Node current = head;
        while(current != null){
            System.out.println(current.data+" ");
            current=current.next;
        }
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.add(22);
        list.add(34);
        list.printList();
    }

}

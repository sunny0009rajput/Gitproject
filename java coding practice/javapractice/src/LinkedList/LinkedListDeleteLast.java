package LinkedList;

class Node{
    int data;
    Node next;

    Node(int data){
        this.data=data;
        this.next=null;
    }
}
public class LinkedListDeleteLast {
    Node head;

    // method to add node in linked list;
    public void addll(int data){
        Node newNode = new Node(data);
        // if the ll is empty
        if(head == null){
            head=newNode;
        }else{
            Node current = head;
            while(current.next != null){
                current=current.next;
            }
            current.next=newNode;
        }
    }
    public void printll(){
        Node current = head;
        while(current != null){
            System.out.println(current.data+" ");
            current=current.next;
        }

    }

    public void deleteLl(){
        // if there is no nodes are there
        if(head == null){
            System.out.println(" there is no nodes are present there");
            return;
        }
        // if there are only one node are there that is head only then
        if(head.next == null){
            head=null;
            System.out.println(" the last node is deleted and the head is empty now ");
            return;
        }
        // if there is more than one node then delte the last node
        Node current = head;

        while(current.next.next!= null){
            current=current.next;
        }
        current.next=null;
        System.out.println("the last node has been deleted");
    }

    public int getLength(){
        int length=0;
        Node current = head;
        while(current != null){
            length++;
            current=current.next;
        }
        return length;
    }
    public boolean searchll(int key){
        Node current = head;
        while(current != null){
            if(current.data== key){
                return true;
            }
            current=current.next;
        }
        return false;
    }

    public static void main(String[] args) {
        LinkedListDeleteLast list= new LinkedListDeleteLast();
        list.addll(22);
        list.addll(34);
        int key = 34;
        boolean value = list.searchll(key);
        System.out.println(value);
        list.printll();
        int length= list.getLength();
        System.out.println(length);

        list.deleteLl();
        list.printll();
        int length2 =list.getLength();
        System.out.println(length2);
        boolean value1 = list.searchll(34);
        System.out.println(value1);
    }
}

package heap;
import java.util.*;
public class InsertionInHeap {
    private int size;
    private int capacity;
    private int[] heap;

    // constructor
    public InsertionInHeap(int capacity){
        this.capacity=capacity;
        this.size=0;
        heap = new int[capacity];
    }

    private int parent(int i){
        return (i -1)/2;
    }

    public void insert(int value){
        if(size == capacity){
            System.out.println("size is full ");
            return;
        }

        // step 1 : insert at end
        heap[size]= value;
        int current = size;
        size++;

        // step 2 : hepify
        while( current > 0 && heap[parent(current)] > heap[current]){
            // swap
            int temp = heap[current];
            heap[current] = heap[parent(current)];
            heap[parent(current)]= temp;

            current = parent(current);
        }


    }

    // print heap
    public void print(){
        for(int i =0; i < size;i++){
            System.out.print(heap[i]+ " ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        InsertionInHeap minHeap = new InsertionInHeap(10);
        minHeap.insert(20);
        minHeap.insert(15);
        minHeap.insert(30);
        minHeap.insert(5);
        minHeap.insert(10);

        System.out.println("min heap after insertion");
        minHeap.print();

    }


}

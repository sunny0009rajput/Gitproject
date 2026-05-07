package heap;

public class ExtractMinHeap {
    private int size;
    private int capacity;
    private int[] heap;

    public ExtractMinHeap(int capacity){
        this.capacity=capacity;
        this.size=0;
        heap= new int[capacity];
    }

    private int parent(int i){
        return (i -1)/2;
    }

    public void insert(int value){
        if(size == capacity){
            System.out.println(" heap is full");
            return;
        }
        // step 1 : inset at last index
        heap[size]= value;
        int current = size;
        size++;

        // heapify up
        while(current > 0 && heap[parent(current)] > heap[current]){
            //swap
            int temp = heap[parent(current)];
            heap[parent(current)]= heap[current];
            heap[current]= temp;

            current = parent(current);
        }
    }

    public void print(){
        for(int i =0;i < size;i++){
            System.out.print(heap[i]+" ");
        }
        System.out.println();
    }

    // logic for extract min heap

    private int leftChild(int i){
        return 2*i+1;
    }

    private int rightChild(int i){
        return 2*i+2;
    }

    public int extractMin(){
        if(size == 0){
            throw new RuntimeException("Heap is empty");
        }
        // store minimum value
        int min = heap[0];

        // replace root with last element
        heap[0]=heap[size-1];
        size--;

        // heapifyDown
        heapifyDown(0);
        return min;
    }

    public void heapifyDown(int i){
        int smallest =i;
        int left = leftChild(i);
        int right = rightChild(i);

        if(left < size && heap[left] < heap[smallest]){
            smallest=left;
        }

        if(right < size && heap[right] < heap[smallest]){
            smallest= right;
        }

        if(smallest != i){
            int temp = heap[i];
            heap[i] = heap[smallest];
            heap[smallest]= temp;

            heapifyDown(smallest);
        }
    }

    public void getMin(){
        int min= heap[0];
        System.out.println(min);
    }
    public static void main(String[] args) {
        ExtractMinHeap minHeap = new ExtractMinHeap(10);
        minHeap.insert(20);
        minHeap.insert(15);
        minHeap.insert(30);
        minHeap.insert(5);
        minHeap.insert(10);

        System.out.println("min heap after insertion");
        minHeap.print();
        minHeap.getMin();
        System.out.println("extractminHeap"+ minHeap.extractMin());
        System.out.println("after aply extractMin heap");
        minHeap.print();


    }
}

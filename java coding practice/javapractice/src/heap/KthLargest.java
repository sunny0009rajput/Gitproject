package heap;

import java.util.PriorityQueue;

public class KthLargest {

    public static int findKthLargest(int[] nums,int k){
        PriorityQueue<Integer> minHeap= new PriorityQueue<>();
        for(int num : nums){
            minHeap.offer(num);

            if(minHeap.size() > k){
                minHeap.poll();
            }
        }

        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        int k = 2;

        System.out.println(findKthLargest(nums, k)); // Output: 4
    }
}

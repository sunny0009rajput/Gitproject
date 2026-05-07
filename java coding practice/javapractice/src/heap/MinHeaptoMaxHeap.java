package heap;

import java.util.Arrays;

public class MinHeaptoMaxHeap {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 21, 23};

        convertToMaxHeap(nums);

        System.out.println(Arrays.toString(nums));
    }

    public static void convertToMaxHeap(int[] nums){
        int n = nums.length;

        //start from the last non leaf node
        for(int i = (n/2)-1; i >=0;i --){
            maxHeapify(nums,n,i);
        }
    }
    public static void maxHeapify(int[] nums, int n , int i){
        int largest = i;
        int left = 2*i+1;
        int right =2*i+2;

        if(left < n && nums[left] > nums[largest]){
            largest=left;
        }
        if(left < n && nums[right] > nums[largest]){
            largest=right;
        }
        if(largest != i){
            int temp = nums[i];
            nums[i]=nums[largest];
            nums[largest]=temp;

            maxHeapify(nums,n,largest);
        }
    }
}

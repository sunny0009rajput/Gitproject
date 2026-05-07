package heap;

public class IsMeanHeap {
    public static void main(String[] args) {
        int[] nums1 = {10, 20, 30, 21, 23};
        int[] nums2 = {10, 20, 30, 25, 15};

        System.out.println(isMinHeap(nums1)); // true
        System.out.println(isMinHeap(nums2)); // false
    }

    public static boolean isMinHeap(int[] nums){
        int n = nums.length;
        for(int i =0;i <= ((n/2)-1) ;i++){
            int leftChild = 2*i+1;
            int rightChild = 2*i+2;

            // check left chile
            if(leftChild < n && nums[i] > nums[leftChild]){
                return false;
            }

            // check right child
            if(rightChild < n && nums[i] > nums[rightChild]){
                return false;
            }
        }
        return true;
    }
}

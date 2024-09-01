package HashingTheory;

public class HighestLowestCountFreq {
    public static void main(String[] args) {
        int arr[]={10,5,10,15,10,5};
        int n= arr.length;

        countFreq(arr,n);
    }
    public static void countFreq(int arr[], int n){
        int maxFreq=0;
        int minFreq=n;
        int maxEle=0;
        int minEle=0;
        boolean visited[] = new boolean[n];

        for(int i =0; i <n;i++){
            if(visited[i]==true){
                continue;
            }
            int count =1;
            for(int j = i+1;j<n;j++){
                if(arr[i]== arr[j]){
                    count++;
                    visited[j]=true;
                }
            }
            if (count > maxFreq) {
                maxEle = arr[i];
                maxFreq = count;
            }
            if (count < minFreq) {
                minEle = arr[i];
                minFreq = count;
            }
            System.out.println("The highest frequency element is: " + maxEle);
            System.out.println("The lowest frequency element is: " + minEle);

        }
    }

}

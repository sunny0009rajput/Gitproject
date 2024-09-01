package ArrayAllProblem;


import java.util.Arrays;
import java.util.List;

public class EvenSumCalculator {
    public static int sumOfEvenNumbers(List<Integer> numbers) {
        int sum = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                sum += number;
            }
        }

        return sum;
    }

    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        int evenSum = sumOfEvenNumbers(numbers);
        System.out.println("Sum of even numbers: " + evenSum);
    }
}


package multithreading;

public class Company {


    int n;


    synchronized public void produce_item(int n) {
        this.n = n;

        System.out.println("produced:" + this.n);

    }


    synchronized public int consume_item() {
        System.out.println("consumed " + this.n);
        return this.n;

    }

}
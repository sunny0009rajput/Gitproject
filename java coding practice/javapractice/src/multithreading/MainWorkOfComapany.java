package multithreading;

public class MainWorkOfComapany {

    public static void main(String[] args) {

        Company comp = new Company();

        Producer p = new Producer(comp);

        Consumer c = new Consumer(comp);

        p.start();

        c.start();

    }

}

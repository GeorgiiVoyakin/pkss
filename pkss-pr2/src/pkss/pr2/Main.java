package pkss.pr2;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        new Server().start();
        new Client().start();
    }
}

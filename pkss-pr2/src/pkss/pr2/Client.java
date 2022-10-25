package pkss.pr2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;

public class Client extends Thread {
    private final Socket socket;
    private final BufferedReader fromServer;
    private final PrintStream toServer;

    public Client() throws IOException {
        this.socket = new Socket("localhost", 1001);
        fromServer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        toServer = new PrintStream(socket.getOutputStream());
    }

    @Override
    public void run() {
        toServer.println("Hello");
        try {
            System.out.println(fromServer.readLine());
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }
}

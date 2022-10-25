package pkss.pr2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;

public class Client extends Thread {
    private final BufferedReader fromServer;
    private final PrintStream toServer;

    public Client() throws IOException {
        Socket socket = new Socket("localhost", 1001);
        fromServer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        toServer = new PrintStream(socket.getOutputStream());
    }

    @Override
    @SuppressWarnings("InfiniteLoopStatement")
    public void run() {
        toServer.println("Hello");
        try {
            while (true) {
                String message = fromServer.readLine();
                if (message != null) {
                    System.out.println("Client> Получено сообщение от сервера: " + message);
                }
            }
        } catch (IOException e) {
            System.err.println("Client> не удалось прочитать сообщение от сервера: " + e.getMessage());
        }
    }
}

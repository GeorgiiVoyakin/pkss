using System.Net;
using System.Net.Sockets;

namespace Server
{
    class Program
    {
        static void Main()
        {
            int Port = 1002;
            TcpListener listener = new TcpListener(new IPEndPoint(IPAddress.Parse("127.0.0.1"), Port));
            listener.Start();
            Console.WriteLine("Server> Сервер запущен на порту: " + Port);

            while (true)
            {
                TcpClient client = listener.AcceptTcpClient();
                Console.WriteLine("Server> Установлено соединение с клиентом: " + client.Client.RemoteEndPoint);

                Thread t = new Thread(new ParameterizedThreadStart(ClientHandler));
                t.Start(client);
            }
        }

        static void ClientHandler(object? tcpClient)
        {
            StreamReader reader = new StreamReader((tcpClient as TcpClient)!.GetStream());
            StreamWriter writer = new StreamWriter((tcpClient as TcpClient)!.GetStream());
            writer.AutoFlush = true;
            writer.WriteLine("Hello");
        }
    }
}

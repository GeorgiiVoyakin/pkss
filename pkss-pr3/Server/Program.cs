using System.Net;
using System.Net.Sockets;

namespace Server
{
    class Program
    {
        static void Main()
        {
            int Port = 1002;
            TcpListener listener = new TcpListener(new IPEndPoint(IPAddress.Parse("localhost"), Port));
            listener.Start();
            Console.WriteLine("Server> Сервер запущен на порту: " + Port);
        }
    }
}

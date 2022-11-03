using System.Net.Sockets;

namespace Client
{
    class Program
    {
        static void Main()
        {
            int Port = 1002;
            TcpClient client = new TcpClient("localhost", Port);
            StreamReader reader = new StreamReader(client.GetStream());
            StreamWriter writer = new StreamWriter(client.GetStream());

            Console.WriteLine("Client> Получено сообщение от сервера: " + reader.ReadLine());
        }
    }
}

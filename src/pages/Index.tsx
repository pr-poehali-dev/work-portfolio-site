import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bots = [
    {
      id: 1,
      title: "Фишинг номера",
      description: "Данный бот позволяет узнать номер телефона вашего обидчика под видом бота для поиска информации о человеке",
      link: "https://t.me/MolotLogger_Bot"
    },
    {
      id: 2,
      title: "Фишинг номера + Перехватчик сообщений",
      description: "Данный бот улучшенная версия обычного бота для фишинга номера, в этом боте также сохранился функционал узнавать номер обидчика но в этот раз я добавил туда функционал который позволяет создавать своего бота для фишинга номера а также данный бот будет перехватывать все сообщения написанные в бота и отправлять их в канал который также можно настроить в этом боте",
      link: "https://t.me/jsjsjdjxjkdiaoapoabot"
    },
    {
      id: 3,
      title: "Связь со мной",
      description: "Предложить следующего бота для создания или сообщить баги в ботах",
      link: "https://t.me/CREATOR_MAKCA"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            ᴋᴇʍᴩᴇr
          </h1>
          <p className="text-lg text-muted-foreground">
            Разработчик на Python, Lua.
          </p>
        </div>

        <div className="space-y-6">
          {bots.map((bot, index) => (
            <Card 
              key={bot.id}
              className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
            >
              <a 
                href={bot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Bot" size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold flex-1">{bot.title}</h2>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bot.description}
                  </p>
                  <Button className="w-full mt-2">
                    Открыть в Telegram
                  </Button>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
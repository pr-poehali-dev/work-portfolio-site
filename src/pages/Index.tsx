import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bots = [
    {
      id: 1,
      title: "Logger Bot",
      description: "Умный инструмент для сбора контактной информации через интерактивное взаимодействие с пользователем",
      link: "https://t.me/MolotLogger_Bot",
      icon: "Phone"
    },
    {
      id: 2,
      title: "Advanced Logger + Interceptor",
      description: "Продвинутая версия с расширенным функционалом: создание собственных ботов, перехват сообщений и настройка уведомлений в личный канал",
      link: "https://t.me/jsjsjdjxjkdiaoapoabot",
      icon: "Shield"
    },
    {
      id: 3,
      title: "Прямая связь",
      description: "Предложить идею нового проекта или сообщить о найденных проблемах",
      link: "https://t.me/CREATOR_MAKCA",
      icon: "MessageCircle"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            ᴋᴇʍᴩᴇr
          </h1>
          <p className="text-lg text-muted-foreground">
            Разработчик на Python, Lua.
          </p>
        </div>

        <div className="space-y-5">
          {bots.map((bot, index) => (
            <Card 
              key={bot.id}
              className="p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 rounded-2xl animate-slide-up backdrop-blur-sm bg-white/80 group"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
            >
              <a 
                href={bot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={bot.icon as any} size={26} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-1">{bot.title}</h2>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[72px] pr-4">
                    {bot.description}
                  </p>
                  <Button className="w-full mt-2 group-hover:bg-primary/90 transition-all duration-300">
                    Открыть в Telegram
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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

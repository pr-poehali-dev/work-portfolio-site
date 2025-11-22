import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const works = [
    {
      id: 1,
      title: "Проект 1",
      description: "Краткое описание работы",
      image: "https://cdn.poehali.dev/projects/310c5e01-f8e6-4a0d-8df8-8b331296d2b2/files/2ca2e7c0-99e5-4d6e-82f2-c3afb9579d6e.jpg"
    },
    {
      id: 2,
      title: "Проект 2",
      description: "Краткое описание работы",
      image: "https://cdn.poehali.dev/projects/310c5e01-f8e6-4a0d-8df8-8b331296d2b2/files/2ca2e7c0-99e5-4d6e-82f2-c3afb9579d6e.jpg"
    },
    {
      id: 3,
      title: "Проект 3",
      description: "Краткое описание работы",
      image: "https://cdn.poehali.dev/projects/310c5e01-f8e6-4a0d-8df8-8b331296d2b2/files/2ca2e7c0-99e5-4d6e-82f2-c3afb9579d6e.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-semibold tracking-tight">Портфолио</div>
          <Button className="rounded-full px-8">
            Связаться
          </Button>
        </div>
      </header>

      <main className="pt-32">
        <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-12 relative group">
              <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/placeholder.svg" 
                  alt="Аватар" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Sparkles" className="text-white" size={28} />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Привет, я дизайнер
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              Создаю минималистичные и функциональные интерфейсы, 
              которые приносят пользу и радость людям
            </p>
            
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-10 shadow-lg hover:shadow-xl transition-all">
                Смотреть работы
                <Icon name="ArrowDown" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-32">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Мои работы</h2>
            <p className="text-muted-foreground text-lg">Избранные проекты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {works.map((work) => (
              <Card 
                key={work.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 rounded-3xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Портфолио. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

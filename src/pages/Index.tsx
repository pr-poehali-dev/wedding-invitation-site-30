import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-white font-opensans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wedding-green-soft to-wedding-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8">
            <img
              src="/img/bc628cd2-be1d-4f2d-bc1b-a73b58d212bc.jpg"
              alt="Свадебная пара"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-wedding-green shadow-lg mb-6"
            />
          </div>
          <h1 className="font-montserrat text-6xl md:text-8xl font-light text-wedding-green mb-4">
            Анна & Дмитрий
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-wedding-green w-16"></div>
            <Icon name="Heart" className="text-wedding-green" size={24} />
            <div className="h-px bg-wedding-green w-16"></div>
          </div>
          <p className="text-2xl md:text-3xl text-wedding-gray mb-6">
            Приглашаем вас разделить с нами этот особенный день
          </p>
          <div className="text-xl md:text-2xl font-montserrat text-wedding-green mb-8">
            15 августа 2024
          </div>
          <Button
            size="lg"
            className="bg-wedding-green hover:bg-wedding-green/90 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Подтвердить участие
          </Button>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-wedding-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-montserrat text-4xl md:text-5xl font-light text-center text-wedding-green mb-16">
            Программа торжества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-wedding-gray-light border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="bg-wedding-green-soft rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon
                    name="Church"
                    className="text-wedding-green"
                    size={32}
                  />
                </div>
                <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-4">
                  Церемония
                </h3>
                <p className="text-wedding-gray text-lg mb-4">15:00</p>
                <p className="text-wedding-gray">
                  Торжественная регистрация брака в красивом месте с видом на
                  природу
                </p>
              </CardContent>
            </Card>

            <Card className="bg-wedding-gray-light border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="bg-wedding-green-soft rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon
                    name="Camera"
                    className="text-wedding-green"
                    size={32}
                  />
                </div>
                <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-4">
                  Фотосессия
                </h3>
                <p className="text-wedding-gray text-lg mb-4">16:00</p>
                <p className="text-wedding-gray">
                  Памятные снимки с молодожёнами и гостями на фоне живописной
                  природы
                </p>
              </CardContent>
            </Card>

            <Card className="bg-wedding-gray-light border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="bg-wedding-green-soft rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon
                    name="Utensils"
                    className="text-wedding-green"
                    size={32}
                  />
                </div>
                <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-4">
                  Банкет
                </h3>
                <p className="text-wedding-gray text-lg mb-4">18:00</p>
                <p className="text-wedding-gray">
                  Праздничный ужин, танцы и веселье до утра в тёплой компании
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-20 bg-wedding-green-soft">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-montserrat text-4xl md:text-5xl font-light text-center text-wedding-green mb-16">
            Детали свадьбы
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-wedding-green rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-2">
                    Место проведения
                  </h3>
                  <p className="text-wedding-gray text-lg">
                    Загородный комплекс "Зелёная усадьба"
                  </p>
                  <p className="text-wedding-gray">
                    Московская область, Одинцовский район
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-wedding-green rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-2">
                    Время
                  </h3>
                  <p className="text-wedding-gray text-lg">
                    15 августа 2024, 15:00
                  </p>
                  <p className="text-wedding-gray">
                    Просьба прибыть за 15 минут до начала
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-wedding-green rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shirt" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat text-2xl font-medium text-wedding-green mb-2">
                    Дресс-код
                  </h3>
                  <p className="text-wedding-gray text-lg">Элегантный casual</p>
                  <p className="text-wedding-gray">
                    Приветствуются натуральные оттенки
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wedding-white rounded-2xl p-8 shadow-lg">
              <div className="bg-wedding-gray-light rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <Icon
                    name="Map"
                    className="text-wedding-green mx-auto mb-4"
                    size={48}
                  />
                  <p className="text-wedding-gray text-lg">
                    Интерактивная карта
                  </p>
                  <p className="text-wedding-gray text-sm">
                    Нажмите для просмотра маршрута
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-wedding-green text-wedding-green hover:bg-wedding-green hover:text-white"
              >
                <Icon name="Navigation" className="mr-2" size={18} />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-green text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-white/30 w-16"></div>
            <Icon name="Heart" className="text-white" size={24} />
            <div className="h-px bg-white/30 w-16"></div>
          </div>
          <p className="text-xl mb-4">Анна & Дмитрий</p>
          <p className="text-white/80">
            С любовью приглашаем вас на наше торжество
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

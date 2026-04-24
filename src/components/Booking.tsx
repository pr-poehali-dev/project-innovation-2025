import { Button } from "@/components/ui/button"

export function Booking() {
  const handleContactClick = () => {
    window.open("https://t.me/", "_blank")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы начать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Запишитесь на курс</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Выберите подходящий курс и начните свой путь в кондитерском мастерстве
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Мастер по МК</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Научитесь проводить мастер-классы и зарабатывать на любимом деле
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>✓ Сценарий и структура МК</p>
              <p>✓ Работа с участниками</p>
              <p>✓ Продажи и продвижение</p>
            </div>
            <Button
              onClick={handleContactClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Записаться
            </Button>
          </div>

          {/* Course 2 — Featured */}
          <div className="bg-accent text-accent-foreground rounded-xl p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-3 py-1 rounded-full font-semibold">
              Популярный
            </div>
            <div className="text-3xl mb-4">🍪</div>
            <h3 className="text-xl font-semibold mb-2">Пряники: от нуля до профи</h3>
            <p className="text-accent-foreground/80 text-sm mb-6 flex-1">
              Полный курс по пряничному делу — от теста до продаж готовых изделий
            </p>
            <div className="space-y-2 text-sm text-accent-foreground/90 mb-6">
              <p>✓ Рецептура и выпечка</p>
              <p>✓ Роспись и декор глазурью</p>
              <p>✓ Упаковка и монетизация</p>
            </div>
            <Button
              onClick={handleContactClick}
              className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent w-full"
            >
              Записаться
            </Button>
          </div>

          {/* Course 3 */}
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
            <div className="text-3xl mb-4">🎀</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Кенди бар</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Создавайте праздничные сладкие столы и работайте с заказчиками
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>✓ Стиль и декор</p>
              <p>✓ Ассортимент и расчёт</p>
              <p>✓ Работа с клиентами</p>
            </div>
            <Button
              onClick={handleContactClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Записаться
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          ✓ Живое общение с наставником • ✓ Поддержка после курса • ✓ Сертификат об окончании
        </p>
      </div>
    </section>
  )
}

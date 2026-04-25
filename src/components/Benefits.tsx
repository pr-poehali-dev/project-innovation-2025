export function Benefits() {
  const courses = [
    {
      icon: "🎓",
      title: "Мастер по проведению мастер-классов",
      description: "Освойте разные техники нанесения изображений и контуров на пряник — без художественных навыков. Научитесь выстраивать МК от А до Я: программа, материалы, работа с группой и стабильный доход.",
    },
    {
      icon: "🍪",
      title: "Печать на пряниках: от нуля до профи",
      description: "Пошаговый курс по всему пряничному делу: от замеса теста до красивой упаковки и первых продаж. Освоите заливку глазурью, пищевую печать и технику сушки — всё, чтобы уверенно принимать заказы.",
    },
    {
      icon: "🎀",
      title: "Кенди бар",
      description: "Создавайте сладкие столы для праздников: стиль, декор, ассортимент, оформление и работа с заказчиками",
    },
    {
      icon: "💡",
      title: "Практика с первого дня",
      description: "Сразу работаем руками — минимум теории, максимум результата. Готовые изделия уже на первом занятии",
    },
    {
      icon: "📱",
      title: "Поддержка в чате",
      description: "Закрытый чат выпускников, ответы на вопросы и помощь куратора после окончания курса",
    },
    {
      icon: "💼",
      title: "Старт своего дела",
      description: "Получите базу для монетизации: как продавать, как находить клиентов и сколько можно зарабатывать",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Наши курсы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё, чтобы стать мастером
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Три авторских программы для кондитеров и пряничных мастеров — выбери свой путь
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function Testimonials() {
  const testimonials = [
    {
      name: "Марина Соколова",
      role: "Открыла пряничную студию после курса",
      image: "/professional-woman-headshot.png",
      quote:
        "После курса по пряникам поняла, что это моё призвание. Уже через месяц получила первые заказы, а сейчас веду собственные мастер-классы!",
    },
    {
      name: "Ольга Петрова",
      role: "Кондитер, ведёт МК по выходным",
      image: "/professional-woman-smiling.png",
      quote:
        "Курс по проведению мастер-классов полностью изменил подход к работе. Научилась выстраивать программу, общаться с участниками и монетизировать своё хобби.",
    },
    {
      name: "Анна Краснова",
      role: "Декоратор кенди баров",
      image: "/professional-woman-working-on-laptop-in-virtual-me.jpg",
      quote:
        "Начинала с нуля — не умела ни печь, ни декорировать. Сейчас оформляю кенди бары на свадьбы и дни рождения. Спасибо за такой живой и понятный курс!",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории учениц</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы наших выпускниц</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

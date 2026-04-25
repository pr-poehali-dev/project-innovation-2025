export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[520px] md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/3205edb8-5a8f-47ea-ba27-1b3ef424dbeb/bucket/2d73dcd7-0416-4c09-9a3d-0bde064e45ef.jpg"
              alt="Елена Талалаева — основатель студии Кукис"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">Ваш наставник</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Елена Талалаева
              </h2>
              <p className="text-muted-foreground mt-1 font-medium">Основатель студии «Кукис» · 8 лет в кондитерском деле</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Я влюбилась в пряничное искусство больше восьми лет назад — и с тех пор это не просто работа,
              а моя жизнь. Основала собственную сладкую студию «Кукис», где обучаю, создаю и вдохновляю.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Мои курсы — это не просто техники, это целая система: от азов декорирования до продвижения
              своего дела. Каждая ученица получает не только навыки, но и уверенность в себе.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">8+ лет опыта</p>
                  <p className="text-sm text-muted-foreground">Кондитерское и пряничное мастерство</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Студия «Кукис»</p>
                  <p className="text-sm text-muted-foreground">Собственная сладкая студия и школа</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">300+ выпускниц</p>
                  <p className="text-sm text-muted-foreground">Многие открыли собственное дело</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

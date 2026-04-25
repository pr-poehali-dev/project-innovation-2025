export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/3205edb8-5a8f-47ea-ba27-1b3ef424dbeb/bucket/0cce343c-79e9-461b-b704-684d7a59895d.png"
                alt="Кукис"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="font-semibold">Студия «Кукис»</span>
            </div>
            <p className="text-sm text-background/70">Елена Талалаева — 8 лет кондитерского мастерства, своя студия и сотни счастливых учениц.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Курсы
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Записаться
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Мастер по МК
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Пряники от нуля
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Кенди бар
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Связаться</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Студия «Кукис» · Елена Талалаева. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
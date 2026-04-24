import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Нужен ли опыт для записи на курс?",
      answer:
        "Нет! Курсы подходят как для полных новичков, так и для тех, кто уже печёт, но хочет улучшить навыки или начать зарабатывать. Обучение построено от простого к сложному.",
    },
    {
      question: "В каком формате проходят занятия?",
      answer:
        "Занятия проходят онлайн в прямом эфире с возможностью задавать вопросы, а также в записи — можно пересматривать в любое время. Практические задания выполняете дома и получаете обратную связь.",
    },
    {
      question: "Сколько длится каждый курс?",
      answer:
        "Продолжительность зависит от программы: от нескольких недель до полноценного курса. Точные сроки и расписание уточняйте при записи.",
    },
    {
      question: "Что если мне что-то непонятно?",
      answer:
        "После каждого занятия можно задать вопросы куратору. Также есть закрытый чат выпускников, где всегда помогут разобраться в нюансах.",
    },
    {
      question: "Выдаётся ли сертификат?",
      answer:
        "Да! После успешного завершения курса вы получаете сертификат об окончании, который подтверждает ваши навыки и можно использовать в продвижении.",
    },
    {
      question: "Можно ли купить сразу несколько курсов?",
      answer:
        "Да, при записи на два и более курсов действует специальная скидка. Уточните условия у куратора при записи.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

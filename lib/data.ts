import { PortraitProps } from '../components/Portrait'

const adm: PortraitProps[] = [
  {
    role: 'dungeon_master',
    name: 'Людмила Ивановна Иващенко',
    src: 'https://img-fotki.yandex.ru/get/41717/227958524.f/0_1e1a93_d396e4b0_L.jpg',
    children: `образование высшее педагогическое директор МБОУ &quot;Лицей№2&quot; высшей квалификационной категории
    liceum_2@mail.ru 74-47-01`
  },
  {
    role: 'left',
    name: 'Оксана Викторовна Хоменко',
    src: 'https://img-fotki.yandex.ru/get/69681/227958524.9/0_1af8d5_2edc9a8c_L.jpg',
    children: `образование высшее педагогическое заместитель директора по УВР высшей квалификационной категории, учитель
    истории и обществознания высшей квалификационной категории стаж работы 25 лет`
  },
  {
    role: 'center',
    name: 'Елена Александровна Рюмкина',
    src: 'https://img-fotki.yandex.ru/get/5103/227958524.9/0_1af8e3_5806c8d4_L.jpg',
    children: `образование высшее педагогическое заместитель директора по УВР первой квалификационной категории, учитель
    информатики высшей квалификационной категории стаж работы 27 лет`
  },
  {
    role: 'right',
    name: 'Муравьева Ольга Станиставна',
    src: 'http://liceym2.ru/images/FOTO2018/IMG-20190618-WA0001.jpg',
    children: `образование высшее педагогическое заместитель директора по ВР высшей квалификационной категории стаж работы 22
    года`
  }
]

type linksObject = Record<
  string,
  {
    text: string
    href: string
  }[]
>

const links: linksObject = {
  summary: [
    {
      text: 'Сведения о МБОУ "Лицей №2"',
      href: '/summary'
    },
    {
      text: 'О лицее',
      href: '/about'
    },
    {
      text: 'Достижения',
      href: '/achievements'
    },
    {
      text: 'Атрибуты и символилка',
      href: '/identity'
    }
  ],
  mgmt: [
    {
      text: 'Директор',
      href: '/mgmt/director'
    },
    {
      text: 'Администрация',
      href: '/mgmt/adm'
    },
    {
      href: '/mgmt/teachers',
      text: 'Педагогический состав'
    },
    {
      href: '/mgmt/organs',
      text: 'Структура и органы управления'
    },
    {
      href: 'http://liceym2.ru/index.php/rukovodstvo/upravlyayushchij-sovet',
      text: 'Управляющий совет'
    }
  ],
  conditions: [
    {
      text: 'Обеспечение',
      href: '/conditions/resources'
    },
    {
      text: 'Кабинеты',
      href: '/conditions/rooms'
    },
    {
      text: 'Библиотека',
      href: '/conditions/lib'
    },
    {
      text: 'Социально-психологическая служба',
      href: 'http://liceym2.ru/index.php/usloviya/sotsialno-psikhologicheskaya-sluzhba'
    },
    {
      text: 'Электронный дневник',
      href: 'http://liceym2.ru/index.php/usloviya/elektronnyj-dnevnik'
    },
    {
      text: 'Служба медиации',
      href: 'http://liceym2.ru/index.php/usloviya/252-sluzhba-mediatsii'
    }
  ],
  activity: [
    {
      text: 'Классы',
      href: '/activity/classes'
    },
    {
      text: 'Учёба',
      href: 'http://liceym2.ru/index.php/deyatelnost/uchebnaya-deyatelnost'
    },
    {
      text: 'Проектная деятельность',
      href: '/activity/projects'
    },
    {
      text: 'Дополнительное образование',
      href: '/activity/external'
    },
    {
      text: 'Спортивно-массовые мероприятия',
      href: 'http://liceym2.ru/index.php/deyatelnost/sportivno-massovye-meropriyatiya'
    },
    {
      text: ' Воспитательная работа',
      href: 'http://liceym2.ru/index.php/deyatelnost/vospitatelnaya-rabota'
    },
    {
      text: 'Экскурсии, походы',
      href: 'http://liceym2.ru/index.php/deyatelnost/ekskursii-pokhody'
    },
    {
      text: 'Всероссийская олимпиада школьников',
      href: '/activity/olymp'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/regionalnaya-innovatsionnaya-ploshchadka',
      text: 'Региональная инновационная площадка'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/sovmestnye-meropriyatiya-s-roditelyami',
      text: 'Совместные мероприятия с родителями'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/videostudiya',
      text: 'Видеостудия'
    },
    {
      text: 'ЭРУДИТ',
      href: 'http://liceym2.ru/index.php/deyatelnost/erudit'
    }
  ],

  safety: [
    {
      href: 'http://liceym2.ru/index.php/bezopasnost-i-zdorove-shkolnikov',
      text: 'Комплексная безопасность'
    },
    {
      href: 'http://liceym2.ru/index.php/informatsionnaya-bezopasnost',
      text: 'Информационная безопаность'
    }
  ]
}

export { adm, links }

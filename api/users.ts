export interface UserInfo {
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  type: string;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  description: string;
  info: UserInfo[];
}

export const USERS: User[] = 
[
  {
     "id":1,
     "name":"Олександр",
     "surname":"Доу",
     "description":"Експерт з IT-консалтингу.",
     "info":[
        {
           "date":"01-06-2024",
           "startTime":"10:00",
           "endTime":"11:00",
           "price":500,
           "type":"Онлайн консультація"
        },
        {
           "date":"02-06-2024",
           "startTime":"12:00",
           "endTime":"13:00",
           "price":700,
           "type":"Офлайн консультація"
        },
        {
           "date":"03-06-2024",
           "startTime":"09:00",
           "endTime":"10:00",
           "price":800,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":2,
     "name":"Оксана",
     "surname":"Сміт",
     "description":"Спеціаліст з маркетингу.",
     "info":[
        {
           "date":"01-06-2024",
           "startTime":"14:00",
           "endTime":"15:00",
           "price":600,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":3,
     "name":"Аліса",
     "surname":"Джонсон",
     "description":"Фінансовий консультант.",
     "info":[
        {
           "date":"03-06-2024",
           "startTime":"09:00",
           "endTime":"10:00",
           "price":800,
           "type":"Онлайн консультація"
        },
        {
           "date":"05-06-2024",
           "startTime":"15:00",
           "endTime":"16:00",
           "price":500,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":4,
     "name":"Богдан",
     "surname":"Браун",
     "description":"Консультант з управління персоналом.",
     "info":[
        {
           "date":"04-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":750,
           "type":"Офлайн консультація"
        },
        {
           "date":"04-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":750,
           "type":"Офлайн консультація"
        },
        {
           "date":"04-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":750,
           "type":"Офлайн консультація"
        },
        {
           "date":"04-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":750,
           "type":"Офлайн консультація"
        }
     ]
  },
  {
     "id":5,
     "name":"Чарлі",
     "surname":"Девіс",
     "description":"Спеціаліст з IT-підтримки.",
     "info":[
        {
           "date":"05-06-2024",
           "startTime":"15:00",
           "endTime":"16:00",
           "price":500,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":6,
     "name":"Емілія",
     "surname":"Вайт",
     "description":"Керівник проєктів.",
     "info":[
        {
           "date":"06-06-2024",
           "startTime":"08:00",
           "endTime":"09:00",
           "price":900,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":7,
     "name":"Давид",
     "surname":"Вілсон",
     "description":"Інженер-програміст.",
     "info":[
        {
           "date":"07-06-2024",
           "startTime":"13:00",
           "endTime":"14:00",
           "price":1200,
           "type":"Офлайн консультація"
        }
     ]
  },
  {
     "id":8,
     "name":"Софія",
     "surname":"Мартінес",
     "description":"Юридичний консультант.",
     "info":[
        {
           "date":"08-06-2024",
           "startTime":"10:00",
           "endTime":"11:00",
           "price":1000,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":9,
     "name":"Михайло",
     "surname":"Гарсія",
     "description":"Консультуючий психолог.",
     "info":[
        {
           "date":"09-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":1100,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":10,
     "name":"Емма",
     "surname":"Мартінес",
     "description":"Консультант з охорони здоров'я.",
     "info":[
        {
           "date":"10-06-2024",
           "startTime":"12:00",
           "endTime":"13:00",
           "price":1300,
           "type":"Офлайн консультація"
        }
     ]
  },
  {
     "id":11,
     "name":"Олівер",
     "surname":"Гернандес",
     "description":"Фінансовий аналітик.",
     "info":[
        {
           "date":"11-06-2024",
           "startTime":"09:00",
           "endTime":"10:00",
           "price":900,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":12,
     "name":"Ава",
     "surname":"Лопес",
     "description":"Спеціаліст зі зв'язків з громадськістю.",
     "info":[
        {
           "date":"12-06-2024",
           "startTime":"13:00",
           "endTime":"14:00",
           "price":800,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":13,
     "name":"Вільям",
     "surname":"Гонсалес",
     "description":"Консультант з обслуговування клієнтів.",
     "info":[
        {
           "date":"13-06-2024",
           "startTime":"15:00",
           "endTime":"16:00",
           "price":700,
           "type":"Офлайн консультація"
        }
     ]
  },
  {
     "id":14,
     "name":"Ізабелла",
     "surname":"Кларк",
     "description":"Бізнес-стратег.",
     "info":[
        {
           "date":"14-06-2024",
           "startTime":"10:00",
           "endTime":"11:00",
           "price":950,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":15,
     "name":"Джеймс",
     "surname":"Льюіс",
     "description":"Консультант з IT-безпеки.",
     "info":[
        {
           "date":"15-06-2024",
           "startTime":"12:00",
           "endTime":"13:00",
           "price":1000,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":16,
     "name":"Шарлотта",
     "surname":"Вокер",
     "description":"Консультант з екології.",
     "info":[
        {
           "date":"16-06-2024",
           "startTime":"11:00",
           "endTime":"12:00",
           "price":1100,
           "type":"Офлайн консультація"
        }
     ]
  },
  {
     "id":17,
     "name":"Богдан",
     "surname":"Холл",
     "description":"Юридичний консультант.",
     "info":[
        {
           "date":"17-06-2024",
           "startTime":"09:00",
           "endTime":"10:00",
           "price":1200,
           "type":"Телефонна консультація"
        }
     ]
  },
  {
     "id":18,
     "name":"Мія",
     "surname":"Ален",
     "description":"Маркетинговий аналітик.",
     "info":[
        {
           "date":"18-06-2024",
           "startTime":"08:00",
           "endTime":"09:00",
           "price":950,
           "type":"Онлайн консультація"
        }
     ]
  },
  {
     "id":19,
     "name":"Ілля",
     "surname":"Янг",
     "description":"IT-консультант.",
     "info":[
        {
           "date":"19-06-2024",
           "startTime":"10:00",
           "endTime":"11:00",
           "price":1000,
           "type":"Офлайн консультація"
        }
     ]
  }
]
# Развёртывание

Тут будет информация о развёртывании приложения

---

# Заметки по дизайну
Все отступления от дизайна помечены комментом

/* TODO: design-off */

### CSS
- #rank-table .rank-table-tabs - Расположил элементы флесом с заполнением внутренних отступов
- #rank-table .rank-table-tabs > li.active:after - ширину подчёркивания активного элемента списка сделал равным ширине родительского элемента. По дизайну она меньше.
- assets/icons/desctop/star-filled.svg - исправлен размер холста с 16x16 на 20x16. Было нужно для попадание в пиксель.
- assets/icons/desctop/star-empty.svg - исправлен размер холста с 16x16 на 20x16. Было нужно для попадание в пиксель.



## Примеры запросов и ответов

Запросы GET
Ответы отличаються порядком эл-ов в массиве (на ваше усмотрение, но статично)

### Запросы
```
/topbk?type=byuser
/topbk?type=byeditors
/topbk?type=bybonus
/topbk?type=bysubrating&id=reliability
```

### Ответ
```json
[
  {
    "id": 1,
    "logo": "https://example.com/logo1.png",
    "rating": 4.7,
    "review_count": 123,
    "bonus_amount": 10000,
    "badge": "exclusive",
    "internal_link": "/bk/1",
    "external_link": "https://partner1.com"
  },
  {
    "id": 2,
    "logo": "https://example.com/logo2.png",
    "rating": 4.2,
    "review_count": 87,
    "bonus_amount": 10000,
    "badge": "no-deposit",
    "internal_link": "/bk/2",
    "external_link": "https://partner2.com"
  },
  {
    "id": 3,
    "logo": "https://example.com/logo3.png",
    "rating": 3.9,
    "review_count": 45,
    "bonus_amount": 0,
    "badge": "no-deposit",
    "internal_link": "/bk/3",
    "external_link": "https://partner3.com"
  }
]
```
в итоге 7 эл-ов для всех возможных ситуаций

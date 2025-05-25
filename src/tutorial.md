<details>
<summary>Основы Markdown</summary>

### Заголовки

```markdown
# Заголовок 1 уровня
## Заголовок 2 уровня
### Заголовок 3 уровня
#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня
```

</details>

<details>
<summary>Абзацы и переносы строк</summary>

```markdown
Абзацы создаются пустой строкой между текстом.

Для переноса строки в конце строки поставь два пробела и нажми Enter.  
Вот пример переноса.
```

Абзацы создаются пустой строкой между текстом.

Для переноса строки в конце строки поставь два пробела и нажми Enter.  
Вот пример переноса.

</details>

<details>
<summary>Жирный и курсив</summary>

```markdown
**Жирный текст** или __жирный__
*Курсивный текст* или _курсив_
```

</details>

<details>
<summary>Зачёркнутый текст</summary>

```
~~Зачёркнутый текст~~
```

~~Зачёркнутый текст~~

</details>

<details>
<summary>Списки</summary>

### Маркированный список

```markdown
- Первый пункт
- Второй пункт
  - Вложенный пункт
* Можно использовать и звёздочки
+ Или плюсы
```

- Первый пункт
- Второй пункт
  - Вложенный пункт
* Можно использовать и звёздочки
+ Или плюсы

### Нумерованный список

```markdown
1. Первый пункт
2. Второй пункт
3. Третий пункт
```

1. Первый пункт
2. Второй пункт
3. Третий пункт

</details>

<details>
<summary>Цитаты</summary>

```markdown
> Это цитата
>
> Можно писать несколько строк.
```

> Это цитата
>
> Можно писать несколько строк.

</details>

<details>
<summary>Код</summary>

### Встроенный код
Используй одинарные обратные кавычки для встроенного кода.

### Блочный код
Три обратных кавычки, язык необязателен:

<pre>
```js
console.log("Hello, world!");
```
</pre>

</details>

<details>
<summary>Ссылки и изображения</summary>

### Ссылки

```markdown
[Текст ссылки](https://v4nixd.xyz/beta)
```

[Текст ссылки](https://v4nixd.xyz/beta)

### Изображения

```markdown
![Alt-текст](https://v4nixd.xyz/cdn/aetherlog/Showcase.png)
```

![Alt-текст](https://v4nixd.xyz/cdn/aetherlog/Showcase.png)

### Либо использовать HTML

```markdown
<img src="https://v4nixd.xyz/cdn/aetherlog/Showcase.png">
```

<img src="https://v4nixd.xyz/cdn/aetherlog/Showcase.png">

</details>

<details>
<summary>Таблицы</summary>

```markdown
| Заголовок 1 | Заголовок 2 |
| ----------- | ----------- |
| Ячейка 1   | Ячейка 2    |
| Ячейка 3   | Ячейка 4    |
```

| Заголовок 1 | Заголовок 2 |
| ----------- | ----------- |
| Ячейка 1   | Ячейка 2    |
| Ячейка 3   | Ячейка 4    |

</details>

<details>
<summary>Дополнительные HTML-теги</summary>

Ты можешь использовать эти теги прямо в Markdown:

```markdown
<p>Параграф</p>
<br>
<hr>
<blockquote>Цитата в блоке blockquote</blockquote>
<pre><code>Блочный код</code></pre>
<del>Зачёркнутый текст</del>
<em>Курсив</em>
<i>Курсив</i>
<strong>Жирный</strong>
<b>Жирный</b>
<small>Мелкий текст</small>
<ul><li>Список</li></ul>
<ol><li>Нумерованный список</li></ol>
<a href="https://example.com" title="Подсказка">Ссылка</a>
<img src="https://example.com/image.png" alt="Изображение" width="200" height="100" loading="lazy"/>
<h1>Заголовок 1</h1>
<h2>Заголовок 2</h2>
<h3>Заголовок 3</h3>
<h4>Заголовок 4</h4>
<h5>Заголовок 5</h5>
<h6>Заголовок 6</h6>
<table>
  <thead>
    <tr><th>Заголовок</th><th>Заголовок</th></tr>
  </thead>
  <tbody>
    <tr><td>Ячейка</td><td>Ячейка</td></tr>
  </tbody>
</table>
<sup>Верхний индекс</sup> и <sub>нижний индекс</sub>
<span class="text-red-500 font-bold">Можно добавлять классы Tailwind через span</span>
<details>
  <summary>Раскрывающийся блок</summary>
  Содержимое блока, которое можно скрыть или показать.
</details>
<mark>Выделение желтым фоном</mark>
```

</details>
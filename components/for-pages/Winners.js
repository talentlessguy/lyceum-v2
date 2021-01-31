import React from 'react'
import { table } from '../../styles/table.module.css'

const Winners = () => (
  <table className={table}>
    <thead>
      <th>№</th>
      <th>класс</th>
      <th>ФИ учащегося</th>
      <th>статус</th>
      <th>Учитель</th>
      <th>&nbsp;</th>
      <th>&nbsp;</th>
    </thead>
    <tbody>
      <tr>
        <td>&nbsp;</td>
        <td colSpan="3">Информатика и ИКТ</td>
        <td>&nbsp;</td>
        <td>Победитель</td>
        <td>Призер</td>
      </tr>
      <tr>
        <td>1</td>
        <td>11</td>
        <td>Герасенко Ростислав</td>
        <td>победитель</td>
        <td>Никитичева А.С.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colSpan="4">Право</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>9</td>
        <td>Крылов Глеб</td>
        <td>призер</td>
        <td>Прусова С.И.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>9</td>
        <td>Казакова Мария</td>
        <td>призер</td>
        <td>Прусова&nbsp;С.И.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10</td>
        <td>Блага Карина</td>
        <td>победитель</td>
        <td>Прусова С.И.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>11</td>
        <td>Шелухо Вероника</td>
        <td>призер</td>
        <td>Прусова&nbsp;С.И.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">История</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>победитель</td>
        <td>Прусова&nbsp;С.И.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colSpan="4">Английский язык</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>победитель</td>
        <td>&nbsp;</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Лосев Павел</td>
        <td>призер</td>
        <td>Горина Е.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>7</td>
        <td>Труфина Анастасия</td>
        <td>призер</td>
        <td>Карпенко М.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>Шерман Елизавета</td>
        <td>призер</td>
        <td>Карпенко&nbsp;М.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>8</td>
        <td>Бамбуров Никита</td>
        <td>призер</td>
        <td>Карпенко&nbsp;М.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Астрономия</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>победитель</td>
        <td>Беляева Е.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>призер</td>
        <td>Беляева&nbsp;Е.А.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>11</td>
        <td>Крутова Мария</td>
        <td>победитель</td>
        <td>Беляева&nbsp;Е.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>11</td>
        <td>Герасенко Ростислав</td>
        <td>призер</td>
        <td>Беляева&nbsp;Е.А.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Математика</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>6</td>
        <td>Мукосей Алексей</td>
        <td>победитель</td>
        <td>Смелянец М.К.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>6</td>
        <td>Шлейхер Константин</td>
        <td>призер</td>
        <td>Смелянец&nbsp;М.К.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>6</td>
        <td>Поплевин Андрей</td>
        <td>призер</td>
        <td>Смелянец&nbsp;М.К.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>6</td>
        <td>Римский Андрей</td>
        <td>призер</td>
        <td>Смелянец&nbsp;М.К.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>7</td>
        <td>Труфина Анастасия</td>
        <td>призер</td>
        <td>Ларионова Г.А.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td>Яблоков Сергей</td>
        <td>призер</td>
        <td>Ларионова Г.А.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>10</td>
        <td>Шлейхер Софья</td>
        <td>победитель</td>
        <td>Ларионова&nbsp;Г.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>8</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>победитель</td>
        <td>Ларионова&nbsp;Г.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
        <td>Кошелева Полина</td>
        <td>призер</td>
        <td>Бушуева Т.Б.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>10</td>
        <td>11</td>
        <td>Бесараб Александр</td>
        <td>призер</td>
        <td>Синкина О.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>11</td>
        <td>11</td>
        <td>Герасенко Ростислав</td>
        <td>призер</td>
        <td>Синкина О.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Биология</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>7</td>
        <td>Труфина Анастасия</td>
        <td>призер</td>
        <td>Шибаева М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>7</td>
        <td>Шумакова Ульяна</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>победитель</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>Выгановский Егор</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>8</td>
        <td>Черниченко Мария</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>8</td>
        <td>Лукин Александр</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>9</td>
        <td>Алесенко Нелли</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>9</td>
        <td>Майорова Виктория</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
        <td>Семирнина Валерия</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>10</td>
        <td>10</td>
        <td>Кузнецова Валерия</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>11</td>
        <td>10</td>
        <td>Меликсетова Инга</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>12</td>
        <td>11</td>
        <td>Панюшина Маргарита</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>13</td>
        <td>11</td>
        <td>Проханин Роман</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Литература</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>7</td>
        <td>Труфина Анастасия</td>
        <td>призер</td>
        <td>Бабельская Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>7</td>
        <td>Степанов Алексей</td>
        <td>призер</td>
        <td>Бабельская Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>победитель</td>
        <td>Цедерштрем Н.В.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>Выгановский Егор</td>
        <td>призер</td>
        <td>Цедерштрем Н.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>9</td>
        <td>Макаров Никита</td>
        <td>призер</td>
        <td>Губенко С.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>10</td>
        <td>Рыжкова София</td>
        <td>призер</td>
        <td>Бабельская Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>10</td>
        <td>Столбова Дарья</td>
        <td>призер</td>
        <td>Бабельская Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>11</td>
        <td>Шелухо Вероника</td>
        <td>призер</td>
        <td>Бузько А.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>9</td>
        <td>11</td>
        <td>Панюшина Маргарита</td>
        <td>призер</td>
        <td>Бузько А.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>10</td>
        <td>11</td>
        <td>Щербакова Алина</td>
        <td>призер</td>
        <td>Губенко С.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Русский язык</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>призер</td>
        <td>Цедерштрем Н.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>7</td>
        <td>Труфина Анастасия</td>
        <td>призер</td>
        <td>Бабельская&nbsp;Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>9</td>
        <td>Алесенко Нелли</td>
        <td>призер</td>
        <td>Цедерштрем Н.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>призер</td>
        <td>Бабельская&nbsp;Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>10</td>
        <td>Рыжкова София</td>
        <td>победитель</td>
        <td>Бабельская&nbsp;Л.В.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>6</td>
        <td>&nbsp;</td>
        <td>Мануйлова Наталья</td>
        <td>призер</td>
        <td>Бабельская&nbsp;Л.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>11</td>
        <td>Шелухо Вероника</td>
        <td>призер</td>
        <td>Бузько А.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>11</td>
        <td>Панюшина Маргарита</td>
        <td>призер</td>
        <td>Бузько А.В,</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Технология</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>10</td>
        <td>Блага Карина</td>
        <td>призер</td>
        <td>Нарбаева Д.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>9</td>
        <td>Анисимова Елизавета</td>
        <td>победитель</td>
        <td>Нарбаева&nbsp;Д.М.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>призер</td>
        <td>Пастухов М.Г.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>Кузнецова Полина</td>
        <td>призер</td>
        <td>Нарбаева&nbsp;Д.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>10</td>
        <td>Яраева Кристина</td>
        <td>призер</td>
        <td>Нарбаева&nbsp;Д.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Экология</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>7</td>
        <td>Степанов Алексей</td>
        <td>призер</td>
        <td>Шибаева М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Выгановский Егор</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>10</td>
        <td>Семирнина Валерия</td>
        <td>призер</td>
        <td>Шибаева&nbsp;М.Н.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Физкультура</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Цедерштрем Егор</td>
        <td>призер</td>
        <td>Пастухов М.Г.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Косыгин Кирилл</td>
        <td>призер</td>
        <td>Пастухов&nbsp;М.Г.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Кесьян Диана</td>
        <td>призер</td>
        <td>Пастухов&nbsp;М.Г.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>7</td>
        <td>Деева Виктория</td>
        <td>призер</td>
        <td>Заикина С.К.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>11</td>
        <td>Волкова Александра</td>
        <td>призер</td>
        <td>Заикин Ю.П.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>10</td>
        <td>Блага Карина</td>
        <td>призер</td>
        <td>Заикина С.К,</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>10</td>
        <td>Глинкин Анатолий</td>
        <td>призер</td>
        <td>Заикин&nbsp;Ю.П.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>10</td>
        <td>Курбатов Сергей</td>
        <td>призер</td>
        <td>Заикина&nbsp;С.К.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">ОБЖ</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>10</td>
        <td>Глинкин Анатолий</td>
        <td>призер</td>
        <td>Заикин&nbsp;Ю.П.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>11</td>
        <td>Кобзев Александр</td>
        <td>призер</td>
        <td>Заикин&nbsp;Ю.П.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Физика</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Выгановский Егор</td>
        <td>победитель</td>
        <td>Дорохова Е.М.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>призер</td>
        <td>Дорохова&nbsp;Е.М.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>победитель</td>
        <td>Беляева Е.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>10</td>
        <td>Шлейхер Софья</td>
        <td>призер</td>
        <td>Беляева&nbsp;Е.А.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">Французский язык</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>10</td>
        <td>Мануйлова Наталья</td>
        <td>победитель</td>
        <td>Соловьева А.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>7</td>
        <td>Шеламова Варвара</td>
        <td>победитель</td>
        <td>Соловьева&nbsp;А.А.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colSpan="4">география</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>7</td>
        <td>Полянская Маргарита</td>
        <td>призер</td>
        <td>Слюсарева Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>7</td>
        <td>Степанов Алексей</td>
        <td>призер</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>победитель</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>призер</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>8</td>
        <td>Выгановский Егор</td>
        <td>призер</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>9</td>
        <td>Макаров Никита</td>
        <td>призер</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>9</td>
        <td>Фурсова Елена</td>
        <td>призер</td>
        <td>Слюсарева&nbsp;Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>11</td>
        <td>Усков Даниил</td>
        <td>призер</td>
        <td>Слюсарева Г.Ю.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">химия</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Волков Максим</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Зиновьева Екатерина</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>8</td>
        <td>Янкина Елизавета</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>9</td>
        <td>Тазин Степан</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>9</td>
        <td>Городная Дарья</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>10</td>
        <td>Иванников Артем</td>
        <td>победитель</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>7</td>
        <td>10</td>
        <td>Поминова Ольга</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>8</td>
        <td>10</td>
        <td>Меликсетова Инга</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
        <td>Мануйлова Наталья</td>
        <td>призер</td>
        <td>Гуринова&nbsp;Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>10</td>
        <td>11</td>
        <td>Панюшина Маргарита</td>
        <td>призер</td>
        <td>Гуринова Г.В.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td colSpan="4">обществознание</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>8</td>
        <td>Кондракова Таисия</td>
        <td>победитель</td>
        <td>Прусова С.И.</td>
        <td>1</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>8</td>
        <td>Шерман Елизавета</td>
        <td>призер</td>
        <td>Прусова&nbsp;С.И.</td>
        <td>&nbsp;</td>
        <td>1</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;ИТОГО:</td>
        <td>20</td>
        <td>83</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>ВСЕГО</td>
        <td>103</td>
      </tr>
    </tbody>
  </table>
)

export default Winners

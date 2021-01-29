import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { container } from '../../styles/conditions/resources.module.css'
import { table } from '../../styles/table.module.css'

const Rooms = () => (
  <Layout>
    <h1>Кабинеты</h1>
    <div className={container}>
      <div>
        <Image src="https://img-fotki.yandex.ru/get/2914/227958524.0/0_15d93b_4921cc4_L.jpg" width={300} height={224} />
        <p>Фасад МБОУ &quot;Лицей №2&quot; </p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/235925/227958524.1c/0_2549fb_e5887b99_L.jpg"
          width={300}
          height={169}
        />
        <p>Столовая</p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/235925/227958524.1c/0_2549f9_8d7a2d01_L.jpg"
          width={300}
          height={225}
        />
        <p>Спортивный зал</p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/470815/227958524.1c/0_2549f1_ac6c77f5_L.jpg"
          width={300}
          height={169}
        />
        <p>Актовый зал</p>
      </div>
    </div>
    <table className={table}>
      <tbody>
        <tr>
          <td>
            <p>№ кабинета</p>
          </td>
          <td width="34%">
            <p>Учебный кабинет</p>
          </td>
          <td width="55%">
            <p>Перечень основного оборудования</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>11</p>
          </td>
          <td width="34%">
            <p>Лаборатория</p>
            <p>
              <Image src="/images/Document/Kabinet/Kabinet_11.jpg" alt="Kabinet 11" width={300} height={400} />
            </p>
          </td>
          <td width="55%">
            <p>&nbsp;</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>24</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет физики</p>
            <p>
              <Image
                src="https://img-fotki.yandex.ru/get/227342/227958524.1c/0_2549f6_98365b92_L.jpg"
                alt="Кабинет физики"
                width={300}
                height={170}
              />
            </p>
          </td>
          <td width="55%">
            <p>АРМ учителя</p>
            <p>Щит электроснабжения</p>
            <p>Лотки для хранения оборудования</p>
            <p>Источники постоянного и переменного тока</p>
            <p>Батарейный источник питания</p>
            <p>Весы учебные с гирями</p>
            <p>Секундомер</p>
            <p>Термометр</p>
            <p>Штатив</p>
            <p>Цилиндры измерительные</p>
            <p>Динамометры лабораторные</p>
            <p>Желоба дугообразные</p>
            <p>Желоба прямые</p>
            <p>Наборы грузов</p>
            <p>Набор тел равного объема</p>
            <p>Рычаг-линейка</p>
            <p>Трибометры лабораторные</p>
            <p>Подвижный блок</p>
            <p>Неподвижный блок</p>
            <p>Шарик</p>
            <p>Калориметр</p>
            <p>Нагреватели электрические</p>
            <p>Амперметры</p>
            <p>Вольтметры</p>
            <p>Катушка-моток</p>
            <p>Ключи замыкания</p>
            <p>Набор по электролизу</p>
            <p>Реостаты ползунковые</p>
            <p>Электроосветители с колпачками</p>
            <p>Электромагниты разборные с деталями</p>
            <p>Модель двигателя-генератора</p>
            <p>Электродвигатель</p>
            <p>Экран со щелью</p>
            <p>Плоское зеркало</p>
            <p>Набор дифракционных решеток</p>
            <p>Прибор для измерения длины световой волны</p>
            <p>Поляроид</p>
            <p>Весы технические</p>
            <p>Генератор низкой частоты</p>
            <p>Плитка электрическая</p>
            <p>Ареометры</p>
            <p>
              Демонстрационное оборудование по электродинамике статических и стационарных электромагнитных полей и
              электромагнитных колебаний и волн.
            </p>
            <p>Демонстрационное оборудование по оптике и квантовой оптике</p>
            <p>Мультимедийный проектор</p>
            <p>Специализированное программное обеспечение по физике (обучающие программы, контролирующие программы)</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>23</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет химии</p>
            <p>
              <img
                src="https://img-fotki.yandex.ru/get/233044/227958524.1c/0_2549f4_a5983bdd_L.jpg"
                alt="Кабинет химии"
                width={300}
              />
            </p>
          </td>
          <td width="55%">
            <p>АРМ учителя</p>
            <p>Спиртовки</p>
            <p>Прибор для демонстрации электропроводности</p>
            <p>Прибор для электролиза</p>
            <p>Штативы металлические</p>
            <p>Весы</p>
            <p>Разновесы</p>
            <p>Штативы пластмассовые</p>
            <p>Прибор для проведения химических реакций</p>
            <p>Нагреватель для колб</p>
            <p>Сушильный шкаф</p>
            <p>Вытяжной шкаф</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>5</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет биологии</p>
            <p>
              <img
                src="https://img-fotki.yandex.ru/get/233044/227958524.1c/0_2549f2_3fb36588_L.jpg"
                alt="Кабинет биологии"
                width={300}
              />
            </p>
          </td>
          <td width="55%" valign="top">
            <p>АРМ учителя</p>
            <p>Комплект муляжей из пластмассы (растения)</p>
            <p>Комплект муляжей из пластмассы (животные)</p>
            <p>Модели по анатомии</p>
            <p>Видеотека по биологии</p>
            <p>Микроскоп учебный</p>
            <p>Полевая биолаборатория</p>
            <p>Мультимедийный комплекс</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>25</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет информатики</p>
          </td>
          <td width="55%" valign="top">
            <p>АРМ учителя</p>
            <p>Кабинет информатики:</p>
            <p>Мультимедийный проектор с экраном</p>
            <p>Принтер лазерный</p>
            <p>Сканер</p>
            <p>Ученические компьютеры</p>
            <p>учительский компьютер</p>
            <p>ADSL модем</p>
            <p>HUB</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>10</p>
          </td>
          <td width="34%" valign="top">
            <p>Мастерская</p>
          </td>
          <td width="55%" valign="top">
            <p>Верстак слесарный</p>
            <p>Тиски слесарные</p>
            <p>Наковальня</p>
            <p>Винтовой пресс</p>
            <p>Муфельная печь</p>
            <p>Ножовка по металлу</p>
            <p>Ножовка по дереву</p>
            <p>Слесарные ножницы</p>
            <p>Зубило</p>
            <p>Молоток</p>
            <p>Рубанок</p>
            <p>Токарный станок по дереву</p>
            <p>Станок токарно-винторезный</p>
            <p>Станок горизонтально-фрезерный</p>
            <p>Станок строгальный</p>
            <p>Станок сверлильный</p>
            <p>Слесарный верстак и тиски</p>
            <p>Заточной станок</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>6</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет домоводства</p>
          </td>
          <td width="55%" valign="top">
            <p>АРМ учителя</p>
            <p>Машина швейная</p>
            <p>Оверлок</p>
            <p>Мясорубка мех.</p>
            <p>утюг</p>
            <p>доска гладильная</p>
            <p>холодильник</p>
            <p>микроволновая печь</p>
            <p>набор посуды</p>
            <p>сервиз чайный</p>
            <p>миксер</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>28</p>
          </td>
          <td width="34%" valign="top">
            <p>Мультимедийный кабинет</p>
          </td>
          <td width="55%" valign="top">
            <p>АРМ учителя</p>
            <p>Интерактивная доска</p>
            <p>Акустическая система</p>
            <p>Мультимедийный проектор</p>
            <p>Компьютер учителя</p>
            <p>Лазерный принтер</p>
            <p>Телевизор (ЖК)</p>
            <p>DVD проигрыватель</p>
            <p>Специализированное программное обеспечение по истории (обучающие программы, контролирующие программы)</p>
          </td>
        </tr>
        <tr>
          <td width="10%" valign="top">
            <p>17</p>
          </td>
          <td width="34%" valign="top">
            <p>Кабинет истории</p>
          </td>
          <td width="55%" valign="top">
            <p>АРМ учителя</p>
            <p>Мультимедийный проектор</p>
            <p>Демонстрационный экран</p>
            <p>ЖК телевизор</p>
            <p>Лазерный принтер</p>
            <p>DVD проигрыватель</p>
            <p>Специализированное программное обеспечение по истории (обучающие программы, контролирующие программы)</p>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default Rooms
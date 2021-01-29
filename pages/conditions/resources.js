import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { table } from '../../styles/table.module.css'
import { pics } from '../../styles/conditions/resources.module.css'

const Resources = () => {
  return (
    <Layout>
      <h1>Условия</h1>
      <div>
        <h2> Материально-техническое обеспечение образовательной деятельности</h2>
        <table className={table}>
          <tbody>
            <tr>
              <td>
                <p>
                  <span>Число зданий и сооружений</span>
                </p>
              </td>
              <td>
                <p>
                  <span>1</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Общая площадь всех помещений</span>
                </p>
              </td>
              <td>
                <p>
                  <span>6796</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Число классных комнат</span>
                </p>
              </td>
              <td>
                <p>
                  <span>33</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Площадь классных комнат</span>
                </p>
              </td>
              <td>
                <p>
                  <span>1946</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество мастерских</span>
                </p>
              </td>
              <td>
                <p>
                  <span>2</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество мест в мастерских</span>
                </p>
              </td>
              <td>
                <p>
                  <span>36</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение плавательный бассейн</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Нет</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение актовый или лекционный зал</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение музей</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеется ли столовая с горячим питанием</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество посадочных мест в столовых</span>
                </p>
              </td>
              <td>
                <p>
                  <span>180</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Численность обучающихся пользующихся горячим питанием</span>
                </p>
              </td>
              <td>
                <p>
                  <span>546</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Численность обучающихся имеющих льготное обеспечение горячим питанием</span>
                </p>
              </td>
              <td>
                <p>
                  <span>150</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество книг в библиотеке</span>
                </p>
              </td>
              <td>
                <p>
                  <span>39593</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество школьных учебников в библиотеке</span>
                </p>
              </td>
              <td>
                <p>
                  <span>12858</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение все виды благоустройства</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Есть ли в учреждении водопровод</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Есть ли в учреждении центральное отопление</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Есть ли в учреждении канализация</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество туалетных комнат для мальчиков</span>
                </p>
              </td>
              <td>
                <p>
                  <span>5</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество унитазов</span>
                </p>
              </td>
              <td>
                <p>
                  <span>15</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество туалетных комнат для девочек</span>
                </p>
              </td>
              <td>
                <p>
                  <span>5</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество унитазов</span>
                </p>
              </td>
              <td>
                <p>
                  <span>15</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество кабинетов ОИВТ</span>
                </p>
              </td>
              <td>
                <p>
                  <span>2</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество рабочих мест с ЭВМ в кабинетах ОИВТ</span>
                </p>
              </td>
              <td>
                <p>
                  <span>24</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ</span>
                </p>
              </td>
              <td>
                <p>
                  <span>126</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ приобретенных за последний год</span>
                </p>
              </td>
              <td>
                <p>
                  <span>18</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество ЭВМ используемых в учебных целей</span>
                </p>
              </td>
              <td>
                <p>
                  <span>112</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ в составе ЛВС</span>
                </p>
              </td>
              <td>
                <p>
                  <span>126</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ в составе ЛВС используемых в учебных целях</span>
                </p>
              </td>
              <td>
                <p>
                  <span>111</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество переносных компьютеров</span>
                </p>
              </td>
              <td>
                <p>
                  <span>59</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество переносных компьютеров используемых в учебных целях</span>
                </p>
              </td>
              <td>
                <p>
                  <span>52</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Подключено ли учреждение к сети Интернет</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ подключенных к Интернет</span>
                </p>
              </td>
              <td>
                <p>
                  <span>126</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество персональных ЭВМ подключенных к Интернет используемых в учебных целях</span>
                </p>
              </td>
              <td>
                <p>
                  <span>112</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение электронную библиотеку</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Нет</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    Реализуются ли в учреждении образовательные программы с использованием дистанционных технологий
                  </span>
                </p>
              </td>
              <td>
                <p>
                  <span>Нет</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждении пожарную сигнализацию</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение дымовые извещатели</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение пожарные краны и рукава</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество огнетушителей</span>
                </p>
              </td>
              <td>
                <p>
                  <span>39</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Количество сотрудников охраны</span>
                </p>
              </td>
              <td>
                <p>
                  <span>2</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение системы видеонаблюдения</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Имеет ли учреждение Тревожную кнопку</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Да</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Организация питания</h2>
        <p>
          Вы можете получить всю необходимую информацию по организации школьного питания по телефону горячей линии
          «Родительский контроль школьного питания»: +7-915-416-04-44 Ответственный за питание в МБОУ «Лицей № 2»:
          Хоменко Оксана Викторовна
        </p>
        <div>
          <div className={pics}>
            <Image src="http://liceym2.ru/images/FOTO_2020_2021/pitanie.png" width={283} height={395} />
            <Image
              src="http://liceym2.ru/images/Document/Pitanie/2020-2021/20210129_094743.jpg"
              width={400}
              height={300}
            />
          </div>

          <h3>Положения и приказы 2020 - 2021 уч.год </h3>

          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Pologenie_po_organizacii_piteniya.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Положение по организации горячего питания в столовой МБОУ "Лицей №2" (смотреть .pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2020-2021/12.05.2020_291.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Постановление "Об утверждении положения о порядке предоставления частичной компенсации на питание
              отдельных категорий обучающихся в муниципальных общеобразовательных учреждениях города Протвино" от
              12.05.2020 г. №291 (смотреть. pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2020-2021/GorPitanie_zavtrak.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Рацион горячего питания (завтрак) для обеспечения питаниемдетей с1-11 классов, обучающихся в муниципальных
              бюджетных общеобразовательных учреждениях города Протвино по усредненным нормам на 2-е полугодие 2020г.
              (период сентябрь - декабрь). (смотреть .pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2020-2021/GorPitanie_obed.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Рацион горячего питания (обед) для обеспечения питаниемдетей 7-10лет, обучающихся в муниципальных
              бюджетных общеобразовательных учреждениях города Протвино по усредненным нормам на 2-е полугодие 2020г.
              (период сентябрь - декабрь). (смотреть .pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_114_01.09.2020.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>Приказ "О создании бракеражной комиссии" от 01 сентября 2020г. №114 (смотреть .pdf)</span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_115_01.09.2020.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Приказ "Об утверждении плана работы комиссии по питанию на 2020-2020 учебный год" от 01 сентября 2020г.
                №115 (смотреть.pdf)
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz__116_01.09.2020.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Приказ "О назначении ответственного за питьевой режим" от 01 сентября 2020г. №116 (смотреть .pdf)
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_117_01.09.2020.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Приказ о назначении назначении диспетчера по питанию от 01 сентября 2020г. №117 (смотреть .pdf)
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_118_01.09.2020.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  <span>
                    <span>
                      Приказ "О создании комиссии по организации питания"&nbsp; от 01 сентября 2020г. №118 (смотреть
                      .pdf)
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </p>
          <h3>Положения и приказы 2019 - 2020 уч.год</h3>

          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Grafik_2019-2020.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>График работы столовой МБОУ "Лицей №2" на 2019-2020 учебный год (смотреть.pdf)</span>
              </a>
            </span>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/161_03.09.19.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>Приказ "О создании бракеражной комиссии" от 03 сентября 2019г. №161 (смотреть .pdf)</span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/162_03.09.2019.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Приказ "Об утверждении плана работы комиссии по питанию на 2019-2020 учебный год" от 03 сентября 2019г.
              №162 (смотреть.pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/163_03.03.19.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Приказ "О назначении ответственного за питьевой режим" от 03 сентября 2019г. №163 (смотреть .pdf)
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/164_03.09.19.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  Приказ "О назначении назначении диспетчера по питанию" от 03 сентября 2019г. №164 (смотреть .pdf)
                </span>
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/165_03.09.19.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  <span>
                    <span>
                      Приказ "О создании комиссии по организации питания"&nbsp; от 03 сентября 2019г. №165 (смотреть
                      .pdf)
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Assortimentniu_perechen_2019.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Ассортиментный перечень пищевых продуктов для организации дополнительного питвния обучающихся
                  (буфетная продукция) (смотреть.pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/7-11_2019.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-11 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 2019 года (период сентябрь - декабрь) (десятидневное меню)
                  (смотреть .pdf)
                </span>
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/7-11_2019.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 2019 года(период сентябрь - декабрь) (десятидневное меню)
                  (смотреть .pdf)
                </span>
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_7-10.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  <span>
                    Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ
                    "Лицей №2" по усредненным нормам на 2020 года (период январь - май) (десятидневное меню) (смотреть
                    .pdf)
                  </span>
                </span>
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_11-starshe.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 2020 года(период январь - май) (десятидневное меню) (смотреть
                  .pdf)
                </span>
              </span>
            </a>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_11-starshe.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <br />
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Kontrakt_2_polygodie_2019.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  <span>
                    Контракт на оказание услуг по организации горячего питания детей на 2 полугодие 2019 года (смотреть
                    .pdf)
                  </span>
                </span>
              </span>
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Kontrakt_1_polygodie_2020_removed_removed.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span>
                  <span>
                    <span>
                      Контракт на оказание услуг по организации горячего питания детей на 1 полугодие 2020 года
                      (смотреть .pdf)
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </p>
          <p>
            <span>
              <span>
                <span>
                  <span>
                    <a
                      href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Byfet.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ассортиментный перечень пищевых продуктов для организации дополнительного питания обучающихся
                      (буфетная продукция) (смотреть .pdf)
                    </a>
                  </span>
                </span>
              </span>
            </span>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Chek_list_po_pitaniu_1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Чек-лист проведение мониторинга качества организации питания (родительский контроль) (смотреть .doc)
            </a>
            &nbsp;
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_38_29.03.2020.PDF"
              target="_blank"
              rel="noreferrer"
            >
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              29.03.2020 г. №38/1 (смотреть. pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_42_13.04.2020.PDF"
              target="_blank"
              rel="noreferrer"
            >
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              13.04.2020 г. №42/1 (смотреть. pdf)
            </a>
          </p>
          <p>
            <a
              href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_48_19.05.2020.PDF"
              target="_blank"
              rel="noreferrer"
            >
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              19.05.2020 г. №48 (смотреть. pdf)
            </a>
          </p>
          <h3>Положения и приказы 2018 - 2019 уч.год</h3>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Polozheniya2016/polojenie_po_organizacii_goryachego_pitaniya_v_stolovou.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Положение по органи</span>
              </a>
              <a
                href="http://liceym2.ru/images/Document/Polozheniya2016/polojenie_po_organizacii_goryachego_pitaniya_v_stolovou.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  зации горячего питания в столовой МБОУ "Лицей №2"&nbsp;(утверждено 03.09.2018)(смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/Komissiyapopitaniyu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Положение о комиссии по питанию обучающихся (смотреть .pdf)</span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/Brakerazhnayakomissiya.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Положение о бракеражной комиссии и методике оценивания блюд (смотреть .pdf)</span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a href="http://liceym2.ru/images/Document/Pitanie/pitan.pdf" target="_blank" rel="noreferrer">
                <span>
                  <span>
                    Приказ о создании комиссии по организации питания&nbsp; от 04 сентября 2018г. №134 (смотреть .pdf)
                  </span>
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/ob_ytverjdenii_plana_raboti_komissii_po_piteniu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Приказ об утверждении плана работы комиссии по питанию на 2018-2019 учебный год от 04 сентября 2018г.
                  №137 с приложением (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Polozheniya2016/BRAKERAJNAYA_KOMISSIYA.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Приказ о создании бракеражной комиссии от 04 сентября 2018г. №138 (смотреть .pdf)</span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/otvetstvenniupo_pitaniu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Приказ о назначении ответственного за питьевой режим от 04 сентября 2018г. №136 (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/dispetcher_po_piteniu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Приказ о назначении назначении диспетчера по питанию от 04 сентября 2018г. №135 (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a href="http://liceym2.ru/images/Document/Pitanie/7-10_let.pdf" target="_blank" rel="noreferrer">
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 2-е полугодие (период сентябрь - декабрь) (десятидневное меню)
                  (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a href="http://liceym2.ru/images/Document/Pitanie/ot_11_let.pdf" target="_blank" rel="noreferrer">
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 2-е полугодие (период сентябрь - декабрь) (десятидневное меню)
                  (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/Kontrakt_pitaniya_2019_1_polygodie.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Контракт на оказание услуг по организации горячего питания детей на 1 полугодие 2019 года
                  (смотреть.pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a href="http://liceym2.ru/images/Document/Pitanie/7-10_let.pdf" target="_blank" rel="noreferrer">
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 1-е полугодие 2019 года (период сентябрь - декаб
                </span>
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="http://liceym2.ru/images/Document/Pitanie/Kontrakt_pitaniya_2019_2_polygodie.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
                  "Лицей №2" по усредненным нормам на 1-е полугодие 2019 года(период сентябрь - декабрь) (десятидневное
                  меню) (смотреть .pdf)
                </span>
              </a>
            </span>
          </p>
          <p>
            <strong>
              <span>&nbsp;</span>
            </strong>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Resources

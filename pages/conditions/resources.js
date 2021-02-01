import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { table } from '../../styles/table.module.css'
import { pics } from '../../styles/conditions/resources.module.css'
import ExternalLink from '../../components/ExternalLink'

const Resources = () => {
  return (
    <Layout>
      <h1 id="supplying">Обеспечение</h1>
      <div>
        <h2> Материально-техническое обеспечение образовательной деятельности</h2>
        <table className={table}>
          <tbody>
            <tr>
              <td>Число зданий и сооружений</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Общая площадь всех помещений</td>
              <td>6796</td>
            </tr>
            <tr>
              <td>Число классных комнат</td>
              <td>33</td>
            </tr>
            <tr>
              <td>Площадь классных комнат</td>
              <td>1946</td>
            </tr>
            <tr>
              <td>Количество мастерских</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Количество мест в мастерских</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение плавательный бассейн</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение актовый или лекционный зал</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение музей</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Имеется ли столовая с горячим питанием</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Количество посадочных мест в столовых</td>
              <td>180</td>
            </tr>
            <tr>
              <td>Численность обучающихся пользующихся горячим питанием</td>
              <td>546</td>
            </tr>
            <tr>
              <td>Численность обучающихся имеющих льготное обеспечение горячим питанием</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Количество книг в библиотеке</td>
              <td>39593</td>
            </tr>
            <tr>
              <td>Количество школьных учебников в библиотеке</td>
              <td>12858</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение все виды благоустройства</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Есть ли в учреждении водопровод</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Есть ли в учреждении центральное отопление</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Есть ли в учреждении канализация</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Количество туалетных комнат для мальчиков</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Количество унитазов</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Количество туалетных комнат для девочек</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Количество унитазов</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Количество кабинетов ОИВТ</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Количество рабочих мест с ЭВМ в кабинетах ОИВТ</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ</td>
              <td>126</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ приобретенных за последний год</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Количество ЭВМ используемых в учебных целей</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ в составе ЛВС</td>
              <td>126</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ в составе ЛВС используемых в учебных целях</td>
              <td>111</td>
            </tr>
            <tr>
              <td>Количество переносных компьютеров</td>
              <td>59</td>
            </tr>
            <tr>
              <td>Количество переносных компьютеров используемых в учебных целях</td>
              <td>52</td>
            </tr>
            <tr>
              <td>Подключено ли учреждение к сети Интернет</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ подключенных к Интернет</td>
              <td>126</td>
            </tr>
            <tr>
              <td>Количество персональных ЭВМ подключенных к Интернет используемых в учебных целях</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение электронную библиотеку</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td>Реализуются ли в учреждении образовательные программы с использованием дистанционных технологий</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td>Имеет ли учреждении пожарную сигнализацию</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение дымовые извещатели</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение пожарные краны и рукава</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Количество огнетушителей</td>
              <td>39</td>
            </tr>
            <tr>
              <td>Количество сотрудников охраны</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение системы видеонаблюдения</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Имеет ли учреждение Тревожную кнопку</td>
              <td>Да</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 id="food">Организация питания</h2>
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
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Pologenie_po_organizacii_piteniya.pdf">
              Положение по организации горячего питания в столовой МБОУ "Лицей №2" (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2020-2021/12.05.2020_291.pdf">
              Постановление "Об утверждении положения о порядке предоставления частичной компенсации на питание
              отдельных категорий обучающихся в муниципальных общеобразовательных учреждениях города Протвино" от
              12.05.2020 г. №291 (смотреть. pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2020-2021/GorPitanie_zavtrak.pdf">
              Рацион горячего питания (завтрак) для обеспечения питаниемдетей с1-11 классов, обучающихся в муниципальных
              бюджетных общеобразовательных учреждениях города Протвино по усредненным нормам на 2-е полугодие 2020г.
              (период сентябрь - декабрь). (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2020-2021/GorPitanie_obed.pdf">
              Рацион горячего питания (обед) для обеспечения питаниемдетей 7-10лет, обучающихся в муниципальных
              бюджетных общеобразовательных учреждениях города Протвино по усредненным нормам на 2-е полугодие 2020г.
              (период сентябрь - декабрь). (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_114_01.09.2020.pdf">
              Приказ "О создании бракеражной комиссии" от 01 сентября 2020г. №114 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_115_01.09.2020.pdf">
              Приказ "Об утверждении плана работы комиссии по питанию на 2020-2020 учебный год" от 01 сентября 2020г.
              №115 (смотреть.pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz__116_01.09.2020.pdf">
              Приказ "О назначении ответственного за питьевой режим" от 01 сентября 2020г. №116 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_117_01.09.2020.pdf">
              Приказ о назначении назначении диспетчера по питанию от 01 сентября 2020г. №117 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2020-2021/Prikaz_118_01.09.2020.pdf">
              Приказ "О создании комиссии по организации питания"&nbsp; от 01 сентября 2020г. №118 (смотреть .pdf)
            </ExternalLink>
          </p>
          <h3>Положения и приказы 2019 - 2020 уч.год</h3>

          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Grafik_2019-2020.pdf">
              График работы столовой МБОУ "Лицей №2" на 2019-2020 учебный год (смотреть.pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/161_03.09.19.pdf">
              Приказ "О создании бракеражной комиссии" от 03 сентября 2019г. №161 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/162_03.09.2019.pdf">
              Приказ "Об утверждении плана работы комиссии по питанию на 2019-2020 учебный год" от 03 сентября 2019г.
              №162 (смотреть.pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/163_03.03.19.pdf">
              Приказ "О назначении ответственного за питьевой режим" от 03 сентября 2019г. №163 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/164_03.09.19.pdf">
              Приказ "О назначении назначении диспетчера по питанию" от 03 сентября 2019г. №164 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/165_03.09.19.pdf">
              Приказ "О создании комиссии по организации питания"&nbsp; от 03 сентября 2019г. №165 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Assortimentniu_perechen_2019.pdf">
              Ассортиментный перечень пищевых продуктов для организации дополнительного питвния обучающихся (буфетная
              продукция) (смотреть.pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/7-11_2019.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-11 лет, обучающихся в МБОУ "Лицей
              №2" по усредненным нормам на 2019 года (период сентябрь - декабрь) (десятидневное меню) (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/7-11_2019.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
              "Лицей №2" по усредненным нормам на 2019 года(период сентябрь - декабрь) (десятидневное меню) (смотреть
              .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_7-10.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ "Лицей
              №2" по усредненным нормам на 2020 года (период январь - май) (десятидневное меню) (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_11-starshe.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
              "Лицей №2" по усредненным нормам на 2020 года(период январь - май) (десятидневное меню) (смотреть .pdf)
            </ExternalLink>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Racion_11-starshe.pdf">
              <br />
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Kontrakt_2_polygodie_2019.pdf">
              Контракт на оказание услуг по организации горячего питания детей на 2 полугодие 2019 года (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Kontrakt_1_polygodie_2020_removed_removed.pdf">
              Контракт на оказание услуг по организации горячего питания детей на 1 полугодие 2020 года (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Byfet.pdf">
              Ассортиментный перечень пищевых продуктов для организации дополнительного питания обучающихся (буфетная
              продукция) (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Chek_list_po_pitaniu_1.pdf">
              Чек-лист проведение мониторинга качества организации питания (родительский контроль) (смотреть .doc)
            </ExternalLink>
            &nbsp;
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_38_29.03.2020.PDF">
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              29.03.2020 г. №38/1 (смотреть. pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_42_13.04.2020.PDF">
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              13.04.2020 г. №42/1 (смотреть. pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/2019-2020/Prikaz_48_19.05.2020.PDF">
              Приказ "Об утверждении порядка выдачи продуктовых наборов для обучающихся в 1-11 классов, имеющих право на
              обеспечением бесплатным питанием в учебные дни, для которых временно приостановлено посещение лицея" от
              19.05.2020 г. №48 (смотреть. pdf)
            </ExternalLink>
          </p>
          <h3>Положения и приказы 2018 - 2019 уч.год</h3>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2016/polojenie_po_organizacii_goryachego_pitaniya_v_stolovou.pdf">
              Положение по органи
            </ExternalLink>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2016/polojenie_po_organizacii_goryachego_pitaniya_v_stolovou.pdf">
              зации горячего питания в столовой МБОУ "Лицей №2"&nbsp;(утверждено 03.09.2018)(смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/Komissiyapopitaniyu.pdf">
              Положение о комиссии по питанию обучающихся (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/Brakerazhnayakomissiya.pdf">
              Положение о бракеражной комиссии и методике оценивания блюд (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/pitan.pdf">
              Приказ о создании комиссии по организации питания&nbsp; от 04 сентября 2018г. №134 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/ob_ytverjdenii_plana_raboti_komissii_po_piteniu.pdf">
              Приказ об утверждении плана работы комиссии по питанию на 2018-2019 учебный год от 04 сентября 2018г. №137
              с приложением (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Polozheniya2016/BRAKERAJNAYA_KOMISSIYA.pdf">
              Приказ о создании бракеражной комиссии от 04 сентября 2018г. №138 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/otvetstvenniupo_pitaniu.pdf">
              Приказ о назначении ответственного за питьевой режим от 04 сентября 2018г. №136 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/dispetcher_po_piteniu.pdf">
              Приказ о назначении назначении диспетчера по питанию от 04 сентября 2018г. №135 (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/7-10_let.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ "Лицей
              №2" по усредненным нормам на 2-е полугодие (период сентябрь - декабрь) (десятидневное меню) (смотреть
              .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/ot_11_let.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
              "Лицей №2" по усредненным нормам на 2-е полугодие (период сентябрь - декабрь) (десятидневное меню)
              (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/Kontrakt_pitaniya_2019_1_polygodie.pdf">
              Контракт на оказание услуг по организации горячего питания детей на 1 полугодие 2019 года (смотреть.pdf)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/7-10_let.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей 7-10 лет, обучающихся в МБОУ "Лицей
              №2" по усредненным нормам на 1-е полугодие 2019 года (период сентябрь - декаб
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="http://liceym2.ru/images/Document/Pitanie/Kontrakt_pitaniya_2019_2_polygodie.pdf">
              Рацион горячего питания (завтрак, обед) для обеспечения питанием детей от 11 лет, обучающихся в МБОУ
              "Лицей №2" по усредненным нормам на 1-е полугодие 2019 года(период сентябрь - декабрь) (десятидневное
              меню) (смотреть .pdf)
            </ExternalLink>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Resources

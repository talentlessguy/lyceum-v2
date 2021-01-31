import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Layout from '../../components/Layout'
import { floatImage } from '../../styles/layout.module.css'
import { table, shortTable } from '../../styles/table.module.css'

const Library = () => (
  <Layout>
    <h1>Библиотека</h1>
    <div>
      <h2>Мероприятия</h2>
      <div>
        <div className={floatImage}>
          <Image width={380} height={285} src="http://liceym2.ru/images/FOTO2018/DSCN6637.JPG" />
        </div>
        <p>
          27 марта в рамках Недели детской и юношеской книги восьмиклассники Лицея №2 приняли участие в
          антитеррористическом квесте «Операция «Спасенные шедевры». Во вступительном слове сотрудник Центральной
          городской библиотеки имени Дашковой Ирина Карпова отметила, что в настоящее время проблема терроризма в нашей
          стране является весьма актуальной. Она рассказала учащимся об истории терроризма и его проявлениях, о
          необходимости постоянного соблюдения мер предосторожности, уменьшающих вероятность стать жертвой террористов.
          Совместно с библиотекарем ребята вспомнили основы безопасности жизнедеятельности и правила поведения при
          угрозе и во время террористического акта. Особое внимание в разговоре было уделено кибербезопасности.
          Большинство террористических организаций ведут свою деятельность, используя Интернет. Так проще захватить умы
          молодых людей, учитывая доступность и популярность социальных сетей в молодежной среде. Ирина Борисовна
          представила учащимся информационный буклет «Как не оказаться завербованными в запрещенную в России
          организацию?», в котором описываются приемы манипулирования подростками в веб-пространстве. А затем от теории
          перешли к практике, чтобы закрепить знания в игровом процессе. По условиям квеста, школьники стали участниками
          международной организации по борьбе с терроризмом. Командам давались различные задания, выполнив которые они
          должны были определить культурный памятник - цель террористической атаки, и предотвратить его уничтожение.
          Учащиеся выступили в роли специалистов-криптологов, разгадывающих зашифрованные тексты в газете, в номере
          телефона, в ребусе, в пазлах, в тайнописи, и даже в отрывке из кинофильма. Для выполнения заданий участникам
          пришлось проявить не только глубину знаний литературных произведений, но и высокий уровень смекалки,
          остроумия, умение решать сложные и нестандартные задачи. Со всеми заданиями подростки справились успешно,
          попутно узнав много дополнительной информации. Коварные планы злоумышленников были сорваны, и победители игры
          получили заслуженные награды. Все участники игры получили сладкие призы и информационные антитеррористические
          буклеты. Интерес к литературным памятникам очень увлек учеников. Каждый из них заранее подготовил небольшой
          информационный доклад о наиболее интересных памятниках литературным персонажам, и после игры эти доклады были
          заслушаны. От всей души благодарим учителя Бабельскую Людмилу Васильевну и библиотекаря Богданову Татьяну
          Вениаминовну за активную помощь в подготовке и проведении мероприятия!
        </p>
        <p>
          <a href="http://www.protvino.ru/about/info/news/13978/">http://www.protvino.ru/about/info/news/13978/</a>
        </p>
        <p>
          <a href="http://liceym2.ru/images/Biblioteka/Meropriyatie_biblioteka.pdf">
            Международный месячник школьных библиотек (октябрь)
          </a>
        </p>
        <p>
          <Image src="http://liceym2.ru/images/Biblioteka/DSCN6186%20%20%20%20%20_.JPG" width={400} height={300} />
        </p>
        <p>Экскурсия в городскую Детскую библиотеку</p>
        <Image src="http://liceym2.ru/images/Biblioteka/DSCN6112.JPG" width={400} height={300} />
        <span style={{ marginLeft: '1rem' }}></span>
        <Image src="http://liceym2.ru/images/Biblioteka/DSCN6114.JPG" width={400} height={300} />
      </div>
    </div>
    <div>
      <h2>Работа библиотеки</h2>
      <p>
        <a href="/images/Biblioteka/prikaz_ychebniki.pdf" target="_blank">
          Приказ об утверждении Положения о школьной библиотеке&nbsp;(смотреть.pdf)
        </a>
      </p>
      <p>
        <a href="/images/Biblioteka/ychebniki.pdf" target="_blank">
          Приказ об утверждении перечня учебников, используемых в образовательном процессе&nbsp;(смотреть.pdf)
        </a>
      </p>
      <p>
        <a href="/images/Biblioteka/polojenie.pdf" target="_blank">
          Положение о школьной библиотеке (смотреть.pdf)
        </a>
      </p>
      <p>
        <a href="/images/Biblioteka/polojenir_o_biblioteke.pdf" target="_blank">
          Положение о библиотечном фонде учебников МБОУ &quot;Лицей №2&quot; порядке его формирования, учета,
          использования и обеспечения сохранности&nbsp;(смотреть.pdf)
        </a>
      </p>
      <p>
        <strong>График обслуживания читателей</strong>
      </p>
      <table className={clsx(table, shortTable)}>
        <tbody>
          <tr>
            <td>пон</td>
            <td>9:00-15:00</td>
          </tr>
          <tr>
            <td>вт&nbsp;</td>
            <td>9:00-15:00</td>
          </tr>
          <tr>
            <td>ср&nbsp;</td>
            <td>9:00-15:00</td>
          </tr>
          <tr>
            <td>чет&nbsp;</td>
            <td>9:00-15:00</td>
          </tr>
          <tr>
            <td>пят</td>
            <td>9:00-15:00</td>
          </tr>
        </tbody>
      </table>
      <p>Последняя пятница месяца - санитарный день.</p>
      <p>
        <a href="/images/Biblioteka/Plan_raboti_biblioteki_2019_2020.pdf" target="_blank">
          План работы библиотеки МБОУ &quot;Лицей №2&quot; на 2019-2020 учебный год (смотреть.pdf)
        </a>
      </p>
    </div>
    <div>
      <h2>Перечень учебников, используемых в образовательном процессе МБОУ «Лицей №2»</h2>
      <p>
        <span>
          <a href="/images/Biblioteka/izmeneniya_perechnya_ychebnikov_2019.pdf" target="_blank">
            Приказ&nbsp;МИНИСТЕРСТВА ОБРАЗОВАНИЯ И НАУКИ РФ от 22 марта 2019 года №652
          </a>
          <a href="/images/Biblioteka/biblioteka_perechen_ychebnikov_2018-2019.pdf" target="_blank"></a>&nbsp;"О
          внесенииизменений в федеральный перечнь учебников, рекомендуемых к использованию при реализации имеющих
          государственную аккредитацию образовательных программ начального общего, основного общего, среднего общего
          образования, сформированный приказом Министерства просвещения Российской Федерации от 28 декабря 2018 г."
          <a href="/images/Biblioteka/izmeneniya_perechnya_ychebnikov_2019.pdf" target="_blank">
            (смотреть.pdf)
          </a>
        </span>
      </p>
      <p>
        <span>
          <span>
            <span>
              <a href="/images/Biblioteka/biblioteka_perechen_ychebnikov_2018-2019.pdf" target="_blank">
                Приказ &quot;Об утверждении перечня учебников, используемых в образовательном процессе МБОУ «Лицей
                №2»&nbsp;в 2018-2019 учебном году&quot; от 20.08.2018г. №119/1 (смотреть.pdf)
              </a>
            </span>
            <strong>
              <span>
                <strong>
                  <a href="/images/Biblioteka/ychebniki.pdf" target="_blank">
                    <br />
                  </a>
                </strong>
              </span>
            </strong>
          </span>
        </span>
      </p>
      <p>
        <a href="/images/Biblioteka/Prikaz__253__31.03.2014_.pdf" target="_blank">
          Приказ&nbsp;МИНИСТЕРСТВА ОБРАЗОВАНИЯ И НАУКИ РФ от 31 марта 2014 года №253
        </a>{' '}
        "Об утверждении{' '}
        <span>
          федерального перечня учебников, рекомендуемых к использованию при реализации имеющих государственную
          аккредитацию образовательных программ начального общего, основного общего, среднего общего образования"&nbsp;
        </span>
        (с изменениями на 5 июля 2017 года){' '}
        <a href="/images/Biblioteka/Prikaz__253__31.03.2014_.pdf" target="_blank" rel="noreferrer">
          (смотреть.pdf)
        </a>
      </p>
      <p>
        <a href="/images/Biblioteka/Prilojenie_k_pikazy__253_.pdf" target="_blank" rel="noreferrer">
          Приложение к приказу&nbsp;МИНИСТЕРСТВА ОБРАЗОВАНИЯ И НАУКИ РФ от 31 марта 2014 года №253&nbsp;(смотреть.pdf)
        </a>
      </p>
      <p>____________________________________________________________________</p>
      <p>Документ с изменениями,внесенными:</p>
      <p>
        <span>
          <a href="http://docs.cntd.ru/document/499087774" target="_blank" rel="noreferrer">
            <span>приказом Минобрнауки Россииот 8 июня 2015 года N576</span>
          </a>
          ;
        </span>
      </p>
      <p>
        <span>
          <a href="http://docs.cntd.ru/document/499087774" target="_blank" rel="noreferrer">
            <span>приказом Минобрнауки Россииот 28 декабря 2015 года N1529</span>
          </a>
          ;
        </span>
      </p>
      <p>
        <span>
          <a href="http://docs.cntd.ru/document/499087774" target="_blank" rel="noreferrer">
            <span>приказом Минобрнауки Россииот 26 января 2016 года N38</span>
          </a>
          ;
        </span>
      </p>
      <p>
        <span>
          <a href="http://docs.cntd.ru/document/499087774" target="_blank" rel="noreferrer">
            <span>приказом Минобрнауки Россииот 21 апреля 2016 года N459</span>
          </a>
          ;
        </span>
      </p>
      <p>
        <span>приказом Минобрнауки Россииот 29 декабря 2016 года N1677;</span>
      </p>
      <p>
        <span>приказом Минобрнауки Россииот 8 июня 2017 года N535;</span>
      </p>
      <p>
        <span>приказом Минобрнауки Россииот 20 июня 2017 года N581;</span>
      </p>
      <p>
        <span>приказом Минобрнауки Россииот 5 июля 2017 года N629;</span>
      </p>
      <p>
        <a href="/images/Biblioteka/izmeneniya_perechnya_ychebnikov_2019.pdf" target="_blank">
          приказ Министерства Просвещения РФ 22 ноября 2019 года N632.
        </a>
      </p>
      <p>____________________________________________________________________</p>
      <p>
        Всоответствии с{' '}
        <a href="http://docs.cntd.ru/document/420328223" target="_blank" rel="noreferrer">
          <span>
            пунктом 24 Порядка формирования федерального перечня учебников, рекомендуемых к использованию при реализации
            имеющих государственную аккредитацию образовательных программ начального
            общего,основногообщего,среднегообщегообразования, утвержденного приказом Министерства образования и науки
            Российской Федерации от 5 сентября 2013 года N 1047
          </span>
        </a>{' '}
        (зарегистрирован Министерством юстиции Российской Федерации 18 октября 2013 года, регистрационный N30213),
      </p>
      <p>приказываю:</p>
      <p>
        1. Утвердить прилагаемый{' '}
        <span>
          федеральный перечень учебников, рекомендуемых к использованию при реализацииимеющих государственную
          аккредитацию образовательных программначального общего, основногообщего, среднего общегообразования
        </span>
        .<br />
        2. Рекомендовать органам исполнительной власти субъектов Российской Федерации, осуществляющим государственное
        управление в сфере образования, довести указанный в <span>пункте 1 настоящего приказа</span> федеральный
        перечень до сведения организаций, осуществляющих образовательную деятельность по имеющим государственную
        аккредитацию образовательным программам начального общего,основногообщего, среднего общего образования.
      </p>
      <p>
        <a href="/images/Biblioteka/Prilojenie_k_pikazy__253_.pdf" target="_blank" rel="noreferrer">
          Федеральная перечень учебников, ремомендуемых к использованию при реализации имеющих государственную
          аккредетацию образовательных программ начального общего образования (Приложение к приказу Минобнауки РФ от
          31.03.2014 г.№253
        </a>
      </p>
    </div>
    <div>
      <h2>Электронные образовательные ресурсы - мультимедийные учебные пособия - приложения к учебнику</h2>

      <table className={table}>
        <tbody>
          <tr>
            <td width="274">
              <p>
                <span>
                  <strong>
                    <span>Название</span>
                  </strong>
                </span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>
                  <strong>
                    <span>Автор</span>
                  </strong>
                </span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>
                  <strong>
                    <span>Издательство</span>
                  </strong>
                </span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>
                  <strong>
                    <span>Год</span>
                  </strong>
                </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>
                  <strong>
                    <span>Класс</span>
                  </strong>
                </span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>
                  <strong>
                    <span>Кол-во экз.</span>
                  </strong>
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Азбука. В 2 ч. Ч. 1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Горецкий В.Г., Кирюшкин В.А., Виноградская Л.А. и др</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>1 </span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Мнемозина</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>68</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Мнемозина</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>8</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>68</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /ФГОС</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Мнемозина</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>9</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>68</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др. /Под ред. Теляковского С.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>30</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др. /Под ред. Теляковского С.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>8</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>30</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Алгебра</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Макарычев Ю.Н., Миндюк Н.Г., Нешков К.И. и др. /Под ред. Теляковского С.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>9</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>30</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>2</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>67/67</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>3</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>67/67</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>4</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>67/67</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В, Баранова К.М.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2013 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>5</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>60/60</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В, Баранова К.М.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>6</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>64/64</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык Ч.1,2 (Rainbow English)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В, Баранова К.М.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>63/63</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Английский язык (профильный уровень)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Афанасьева О.В., Михеева И.В</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2012</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>10</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>30</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Геометрия. ФГОС</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Атанасян Л.С., Бутузов В.Ф., Кадомцев С.Б. и др</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7-9</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>65</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Литературное чтение. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Климанова Л.Ф., Горецкий В.Г., Голованова М.В. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>1</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Литературное чтение</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Климанова Л.Ф., Горецкий В.Г., Голованова М.В. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>2</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Литературное чтение</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Климанова Л.Ф., Горецкий В.Г., Голованова М.В. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>3</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Математика</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Виленкин Н.Я., Жохов В.И., Чесноков А.С. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Мнемозина</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>5</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>68</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Математика</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Виленкин Н.Я., Жохов В.И., Чесноков А.С. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Мнемозина</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>6</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>68</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Математика. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Моро М.И., Волкова С.И. Степанова С.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>1</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Математика. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Моро М.И., Бантова М.А., Бельтюкова Г.В. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2013 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>2</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Математика. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Моро М.И., Бантова М.А., Бельтюкова Г.В. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>3</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Искусство. Музыка</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Науменко Т.И., Алеев В.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2016</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>5</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>15</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Искусство. Музыка</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Науменко Т.И., Алеев В.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2016</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>6</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>15</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Искусство. Музыка</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Науменко Т.И., Алеев В.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Дрофа</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>15</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Обществознание</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>
                  Боголюбов Л.Н., Виноградова Н.Ф., Городецкая Н.И. и др. / Под ред. Боголюбова Л.Н., Ивановой Л.Ф.
                </span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>5</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Обществознание</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Боголюбов Л.Н., Городецкая Н.И., Иванова Л.Ф. и др. / Под ред. Боголюбова Л.Н. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>8</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Обществознание ФГОС</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Боголюбов Л.Н., Матвеев А.И., Жильцова Е.И. и др. / Под ред. Боголюбова Л.Н. и др.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>9</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Обществознание</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>
                  Виноградова Н.Ф., Городецкая Н.И., Иванова Л.Ф. и др. / Под ред. Боголюбова Л.Н., Ивановой Л.Ф.
                </span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>6</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Окружающий мир. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Плешаков А.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>1</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Окружающий мир. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Плешаков А.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2013 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>2</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Окружающий мир. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Плешаков А.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>3</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>
                  Основы духовно-нравственной культуры народов России. Основы религиозных культур и светской этики.
                  Основы православной культуры
                </span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Кураев А.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2015</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>4-5</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>35</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Русский язык</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Канакина В.П., Горецкий В.Г</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>1</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Русский язык. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Канакина В.П., Горецкий В.Г</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2013 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>2</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62 </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Русский язык. Ч.1,2</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Канакина В.П., Горецкий В.Г</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2013 </span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>3</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>62/62</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Физика (базовый уровень) ФГОС</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Мякишев Г.Я., Буховцев Б.Б., Сотский Н.Н / под ред. Парфентьевой Н.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>10</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>65</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Физика (базовый уровень) ФГОС</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Мякишев Г.Я., Буховцев Б.Б., Чарушин В.М. / под ред. Парфентьевой Н.А.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>11</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>65</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Французский язык (Твой друг фр. яз)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Кулигина А.С., Щепилова А.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>6</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>17</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Французский язык Ч.1, Ч.2 (Твой друг фр. яз)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Кулигина А.С., Щепилова А.В.</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2014</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>7</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>25/25</span>
              </p>
            </td>
          </tr>
          <tr>
            <td width="274">
              <p>
                <span>Химия (базовый уровень)</span>
              </p>
            </td>
            <td width="340">
              <p>
                <span>Рудзитис Г.Е., Фельдман Ф.Г</span>
              </p>
            </td>
            <td width="142">
              <p>
                <span>Просвещение</span>
              </p>
            </td>
            <td width="66">
              <p>
                <span>2011</span>
              </p>
            </td>
            <td width="51">
              <p>
                <span>11</span>
              </p>
            </td>
            <td width="62">
              <p>
                <span>60</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Library

import React from 'react'
import ExternalLink from '../../components/ExternalLink'
import { Info } from '../../components/Info'
import Layout from '../../components/Layout'
import dynamic from 'next/dynamic'

const Winners = dynamic(() => import('../../components/for-pages/Winners'))
const SchoolStage = dynamic(() => import('../../components/for-pages/SchoolStage'))

const Schedule = dynamic(() => import('../../components/for-pages/Schedule'))

const Olymp = () => (
  <Layout>
    <h1> Всероссийская олимпиада школьников</h1>
    <p>
      С 16.10.2020 г. стартует муниципальный этап всероссийской олимпиады школьников. Все олимпиады для обучающихся
      нашего лицея проводятся на базе МБОУ «Лицей №2» с соблюдением всех санитарно-эпидемиологических правил. Участники
      муниципального этапа освобождаются от учебных занятий в день проведения олимпиады. Желаем всем участникам удачи и
      отличных результатов!
    </p>
    <p>
      <ExternalLink href="http://liceym2.ruhttp://liceym2.ru/images/Olimpiada/2020_2021/grafik_olimp.docx">
        График проведения муниципального этапа всероссийской олимпиады школьников (смотреть .doc)
      </ExternalLink>
    </p>
    <h2>Протоколы школьного этапа всероссийской олимпиады школьников в 2019-2020 уч.году</h2>
    <ExternalLink href="http://liceym2.ruhttp://liceym2.ru/images/Olimpiada/2019-2020/Protokol_fr_yaz.pdf">
      Протокол всероссийской олимпиады школьников по французскому языку (смотреть.pdf)
    </ExternalLink>
    <ExternalLink href="http://liceym2.ruhttp://liceym2.ru/images/Olimpiada/2019-2020/Protokol_rycckiu_yaz.pdf">
      Протокол всероссийской олимпиады школьников по русскому языку (смотреть.pdf)
    </ExternalLink>
    <ExternalLink href="http://liceym2.ruhttp://liceym2.ru/images/Olimpiada/2019-2020/Protokol_istiriya.pdf">
      Протокол всероссийской олимпиады школьников по истории (смотреть.pdf){' '}
    </ExternalLink>
    <p>
      <strong>
        Победители и призеры муниципального этапа Всероссийской олимпиады школьников по общеобразовательным предметам
        2017-2018 уч. год Основание: протоколы муниципальных предметных комиссий.
      </strong>
      <Info summary="Подробнее">
        <Winners />
      </Info>
    </p>
    <p>
      <h2>Протоколы школьного этапа всероссийской олимпиады школьников в 2018-2019 уч.году</h2>
      <Info summary="Подробнее">
        <SchoolStage />
      </Info>
    </p>
    <p>
      <h2>Школьный этап всероссийской олимпиады школьников</h2>
      <strong>
        График проведения школьного этапа всероссийской олимпиады школьников по общеобразовательным предметам в МБОУ
        «Лицей № 2» в 2018-2019 учебном году.
      </strong>
      <Info summary="Подробнее">
        <Schedule />
      </Info>
    </p>
    <p>
      <ExternalLink href="http://liceym2.ru/images/Olimpiada/prikaz_1252_18112013.pdf">
        Приказ Минобрнауки России &quot;Об утверждении порядка проведения Всероссийской олимпиады школьников&quot; от 18
        ноября 2013 г. №1252 (смотреть .pdf)
      </ExternalLink>
    </p>
    <p>
      <ExternalLink href="http://liceym2.ru/images/Olimpiada/Prikaz_2456_02.09.2019.pdf">
        Приказ &quot;О проведении муниципального этапа всероссийской олимпиады школьников по общеобразовательным
        предметам в Московской Области в 2019/2020 учебном году №2456 (смотреть.pdf)
      </ExternalLink>
    </p>
    <p>
      <ExternalLink href="http://liceym2.ru/images/Olimpiada/Postanovlenie_613_10.09.2019.pdf">
        Постановление &quot;О проведении школьного этапа всероссийской олимпиады школьников по общеобразовательным
        предметам в 2019/2020 учебном году на территориигородского округа Протвино от 10.09.2019 №613 (смотреть.pdf)
      </ExternalLink>
    </p>
    <p>
      <ExternalLink href="http://liceym2.ru/images/Olimpiada/Prilogeniya_k_postanovleniu_613_10.09.2019.doc">
        Приложение к постановлению &quot;О проведении школьного этапа всероссийской олимпиады школьников по
        общеобразовательным предметам в 2019-2020 учебном году на территории городского округа Протвино&quot; от
        10.09.2019 №613 (смотреть .doc)
      </ExternalLink>
    </p>
    <p>
      <ExternalLink href="http://liceym2.ru/images/Olimpiada/rikaz_o_provedenii_olimpiad.pdf">&nbsp;</ExternalLink>
    </p>
  </Layout>
)

export default Olymp

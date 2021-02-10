import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'

const Director = () => (
  <Layout>
    <style jsx>
      {`
        .bio {
          display: inline-flex;
          flex-flow: row wrap;
          padding-top: 2rem;
        }
        .bio .text {
          padding: 3rem;
          padding-top: 0;
          max-width: 750px;
        }
        .bio .text p:first-of-type {
          margin-top: 0;
        }
        @media (max-width: 1450px) {
          .director {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        }
      `}
    </style>
    <div className="bio">
      <div className="director">
        <Image
          layout="fixed"
          width={200}
          height={300}
          objectFit="contain"
          src="https://img-fotki.yandex.ru/get/41717/227958524.f/0_1e1a93_d396e4b0_L.jpg"
        />
      </div>
      <div className="text">
        <p>
          <span></span>&nbsp;<strong>Директор МБОУ &quot;Лицей №2&quot; Иващенко Людмила Ивановна</strong>
        </p>
        <p>
          &nbsp;<strong>Образование</strong> - высшее, специальность - учитель математики
        </p>
        <p>
          &nbsp;<strong>Профессиональная переподготовка</strong> &quot;Менеджемент вобразовании&quot; ГБОУ ВПО Мо
          &quot;Академия&nbsp;&nbsp; социального управления&quot;
        </p>
        <p>
          <strong>&nbsp;Высшая квалификационная категория</strong>
        </p>
        <p>
          <strong>&nbsp;Награды: </strong>
        </p>
        <p>&nbsp;&quot;Отличник народного просвещения &quot;РСФСР&quot;</p>
        <p>&nbsp;&quot;Заслуженный работник образования Московской области&quot;</p>
        <p>&nbsp;Знак Губернатора Московской области &quot;БЛАГОДАРЮ&quot;</p>
        <p>&nbsp;Именная премия Губернатора Московской области работникам образовательных учреждений</p>
        <p>&nbsp;Почетная грамота Министерства образования Московской области</p>
        <p>
          <strong>&nbsp;Контактный телефон 8(4967)744701&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
        </p>
        <p>
          <span>&nbsp; Дорогие друзья!</span>
        </p>
        <p>
          <span>
            &nbsp; Рада видеть Вас на сайте Лицея №2. На нашем сайте вы можете ознакомиться с общей информацией о
            деятельности лицея, с интересной жизнью наших лицеистов и педагогов.{' '}
          </span>
        </p>
        <p>
          <span>&nbsp; Надеюсь, что вы найдёте полезную для себя информацию. </span>
        </p>

        <p>
          <strong>С уважением директор МБОУ «Лицей №2» Л.И. Иващенко </strong>
        </p>
      </div>
    </div>
  </Layout>
)

export default Director

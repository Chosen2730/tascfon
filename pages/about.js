import { useState } from "react";
import Layout from "../Layout/layout";
import style from "../styles/hero.module.css";
import Button from "../components/button";

const About = () => {
  const [more, setMore] = useState(false);
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-800'>
        <div
          className={`${style.aboutHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            ABOUT US
          </h1>
        </div>
        {/* <Testimonial /> */}
        <div className='w-[90%] max-w-4xl -mt-20 sm:-mt-32 bg-white mx-auto p-6 rounded-md shadow-xl text-[#03AF09]'>
          <h1 className='text-center capitalize text-xl tracking-[9px]'>
            We are <span className='font-bold'>excep</span>tional
          </h1>
          <hr className='my-7' />
          {!more && (
            <div>
              <div className='grid md:grid-cols-2 gap-8 justify-center items-start'>
                <div>
                  <div className='bg-white text-red-500'>
                    <p className='text-sm my-2'>
                      We Are A Multi-Generational Church Committed To Raising
                      People Of Impact. We Exist To Help You And Your Family
                      Grow Closer To God And Help You Fulfil Your God-Given
                      Purpose.
                    </p>
                  </div>
                </div>
                <div>
                  <p className='text-sm my-2'>
                    In The Beginning - The Executives Of The Apostolics Church
                    Students' Fellowshhip Of Nigria (TACSFON) Of The Federal
                    University Of Agriculture, Abeokuta (FUNAAB) Then Known As
                    UNAAB Was Inaugurated By The Then (The Apostolic Church,
                    Isale - Igbein District Under Abeokuta Area) Apostle Pastor
                    J.A. Akintola Who Is Now The Superintendent Of Sango Area
                    Headquarters, Ibadan In The Sundat School Hall Of The Church
                    On Sunday, May 24, 1992 With About 7 - 10 Students...
                  </p>
                  <div className='text-sm'>
                    <Button
                      text={!more ? "Read more]]" : "Read Less]]"}
                      textColor='#fff'
                      bgColor='#0F6212'
                      action={() => setMore(true)}
                    />
                  </div>
                </div>
              </div>
              <div className='my-8'>
                <h2 className='font-bold text-2xl text-red-500'>Our Vision</h2>
                <p className='text-sm my-2'>
                  To Raise Seekers Of Christ. (Jer 39:13, 2Chr 7:14)
                </p>
              </div>
              <div>
                <h2 className='font-bold text-2xl text-red-500'>Our Mission</h2>
                <ul className='text-sm my-2 ml-5'>
                  <li className='list-decimal my-2'>
                    To Make The Brethren Engage God More In Their Academics.
                  </li>
                  <li className='list-decimal my-2'>
                    To Raise Men Who Will Understand And Know God
                    Experientially.
                  </li>
                  <li className='list-decimal my-2'>
                    To Build Men Who Will Stand For Christ And Boldly Preach The
                    Gospel.
                  </li>
                  <li className='list-decimal my-2'>
                    To Foster Love Amidst The Brethren.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {more && (
            <div className='my-4'>
              <p>
                In The Beginning- The Executives The Apostolic Church Students'
                Fellowship of Nigeria(TACSFON) of The Federal University of
                Agriculture Abeokuta(FUNAAB) then known as UNAAB was inaugurated
                by the then (The Apostolic Church Isale- Igbein District Under
                Abeokuta Area) Apostle, Pastor J.A Akintola(now the
                Superintendent of Sango Area Headquarters, Ibadan) in the Sunday
                School Hall of the church on Sunday, May 24, 1992 with about
                7-10 students.
                <br />
                <br />
                With the assent of the then Vice Chancellor, Professor Nimbe
                Adedipe, the Fellowship started to hold meetings once in a week
                (Wednesdays 6-7pm) on the school campus which was situated then
                at Isale-Igbein. It was in one of the meetings that the
                agreement was reached to have a Coordinator and to be assisted
                by other brethren(not Executives). <br />
                <br />
                This was done via nomination and availability and we're known as
                the Pro-executives . Brother B.J.O Ayorinde was chosen as the
                Coordinator. Brother Sunday Emmanuel was the General Secretary
                and Brother John Abel was the Prayer Secretary. Afore the
                expiration of their stay in school, there was a need to handover
                the baton of Leadership. The transition process was conducted
                and Bro Adekanbi was chosen as the first President while Sister
                Sola Ogunade(nee Ojo) geld the posts of the General Secretary
                and Sisters' Coordinator.
                <br />
                <br />
                Till date, TACSFON FUNAAB has produced 21 Presidents, 25 General
                Secretaries, 18 Sisters' Coordinators and other numerous
                executive members whose names are written in the annuals of the
                Fellowship's history. <br />
                <br />
                <span className='font-bold my-2 block'>
                  FELLOWSHIP MEETINGS AND PERMANENT SITE BUILDING
                </span>
                As reported earlier, the Fellowship started at the Children's
                Sunday school hall of TAC Isale-Igbein Assembly. After 2 yrs,
                she transited to the School campus and had her meetings in
                Classroom 08 close to the cafeteria on Wednesdays. On moving to
                permanent site at Alabata in 1998, a place of worship became
                necessary. Albeit, members temporarily met at Isale-Igbein and
                sometimes at TAC Obantoko Assembly. THE PRE-DEGREE, FSP and SLT
                students met at Isale-Igbein for fellowship while the bonafide
                Undergraduates met at Obantoko Assembly.
                <br />
                <br />
                Later, the Fellowship moved her meeting point to TAC Camp
                Assembly which was seen as a more central location. Grievances
                of movement by brethren during the Mid-week services and the
                tiresome nature of school work led to the creation of three
                centres:Obantoko, Camp and Permanent site. Sunday program held
                at 2-5pm at TAC Camp Assembly while Prayer meeting and Bible
                Study held on Tuesdays and Wednesdays respectively in all three
                centres at 6pm.
                <br />
                <br />
                In the 2003/2004 Spiritual year, as a result of the increase in
                the number of brethren and the TAC Camp Assembly auditorium not
                large enough for the members, it was resolved that a piece of
                land be secured. In March 2007, at a total cost of N250000, a
                2-plot piece of land was purchased at Isolu, Alabata where the
                Fellowship's edifice currently stands. The First Sunday service
                conducted in the morning commenced in 2008(Sunday programmes had
                always been in the afternoon) under a makeshift tent. <br />
                <br />
                Also, according to Elder Kuforiji who has been with the
                fellowship since inception amidst company of other Elders. One
                of them of blessed memory now, Overseer Engineer Wale Bajomo who
                fought to establish this TACSFON as most of our baba don't
                really have full support for the student body establishment. In
                his words, 'They were thinking the other way round that he want
                to give the young people chance and that is Elder Toyin Ayinde
                who was the former commissioner of Urban and Regional planning
                in Lagos state during Fashola regime but I doubt iif he is in
                The Apostolic church till now.
                <br />
                <br />
                The start was .. you know when you want to build a house, where
                the problem is, is the foundation so your predecessors they
                really tried and we joined hands together, like when they
                started as young people.. Yoruba say “Ti omo ba sipa obi e ale
                gbe” so they really started very strong, when it now got to the
                stage of buying that land, I as an estate surveyor and a land
                expert I had to come in and contribute my own quota as a
                professional and a little finance that I had to do. They came to
                me every now and then asking what next sir, how do we go and
                after it all, we thank God the approval of the land we have it.{" "}
                <br />
                <br />
                <span className='font-bold my-2 block'>MINI CAMPUS</span>
                The mini-campus Fellowship meant for Pre-degree, SLT and FSP
                students, was established at Isale-Igbein( the then mini-campus)
                but now at Mawuko. She had her fellowship meetings on Wednesdays
                between the hours of 1-3pm but now hold Sunday programmes with
                her own set of executives (supervised by the mini-campus'
                executives headed by the Vice President 2 and assisted by other
                Executives assigned to the mini-campus). Bible study/Prayer
                meeting holds on Wednesdays among others.
                <br />
                <br />
                <span className='font-bold my-2 block'> BELIEVERS' SCHOOL</span>
                In the 2004/2005 Spiritual year, the BELIEVERS' SCHOOL was
                established. Members are expected to undergo classes, write an
                Examination and attend an interview before they can be
                recognized as Workers in the household. Certificates are then
                awarded there-after. The first set of participants' graduation
                ceremony was held on March 30,2005. The first Principal of the
                school was Brother Daniel Ogunsola . Presently, the Vice
                President 1 is also the Principal of the Believers' school.
                <br />
                <br />
                In 2007/2008 the school was divided into two arms: Membership
                class (a 7-week course meant for new members) and Workers'
                class( to prepare and equip members so as to render effective
                service in the household) who would go on to be Executives.
                <br />
                <br />
                <span className='font-bold my-2 block'>
                  Alumni BODY AND REUNION PROGRAMME
                </span>
                The reunion programme is a special annual event where former and
                incumbent students of this great institution come together in
                fellowship with God.
                <br />
                <br />
                May 8th,1999 marks the inauguration of the alumni body which
                gave birth to the first reunion programme on March 4th, 2000. On
                that day, seven(7) members of the Alumni body were in
                attendance. With the exception of the years 2003 and 2014, 2019,
                fifteen (15) reunion programmes have been held. <br />
                <br />
                <span className='font-bold my-2 block'>MISCELLANEOUS</span>
                In her twenty-six (26) years of existence, TACSFON FUNAAB has
                engaged in many activities am programmes that have been
                beneficial to her members, students of FUNAAB and surrounding
                communities. Few among them are : Village Outreach
                (2001,2005,2009,2013,2016) , TACSFON Week (2005/2006, 2013/2014,
                2015/2016, 2019, 2021), Prayord Conference (2017/2017), Magazine
                Launch (2006, 2021), Welcome/Send-forth(2001- date), Induction
                (1993-date), Anniversary (10th; 2002, 20th; 2012 and 25th; 2017)
                and other programmes too numerous to be mentioned.
                <br />
                <br />
                Through so many rigours, issues and seemingly insurmountable
                challenges within and without, TACSFON FUNAAB has scaled through
                it all rooting all of her teachings and doctrines on the
                SCRIPTURE as we raise the fluttering flag chanting our mantra
                saying LET NO MAN DESPISE THY YOUTH (1TIM 4:12).
              </p>
              <div className='my-4'>
                <Button
                  text={!more ? "Read more]]" : "Read Less]]"}
                  textColor='#fff'
                  bgColor='#0F6212'
                  action={() => setMore(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;

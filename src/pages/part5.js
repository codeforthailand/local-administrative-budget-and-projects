import React from "react"

import img from "../images/broken-road.png"
import Page from "../components/page"

const Part5 = () => {
    return <Page header="คอนกรีต - ลูกรัง ซ่อมสร้างไม่รู้จบ">
        <div style={{textAlign: "center"}}>
            <img src={img} style={{width: "50%"}} alt="ปัญหายืดยื้อของการสร้างถนน และงานโยธา"/>
        </div>
        <div>
            <p>อดีตผู้ว่า สตง.สะท้อนประสบการณ์การตรวจสอบและชี้ประเด็นสำคัญคือ การใช้งบก่อสร้าง ซ่อมถนน ที่สังคมให้ความสนใจให้มาก</p>
            <blockquote>
            " คอนกรีตกับลูกรังเป็นสองกรณีที่พบปัญหาบ่อยมาก งานก่อสร้างมักจะสะท้อนปัญหาสร้างแล้วก็พัง สร้างแล้วไม่ได้ใช้ประโยชน์ แล้วก็ถนนลูกรังชอบมากที่สุด ปัญหาถนนลูกรังก็คือตรวจสอบยาก เช่น เทดินลูกรังลงไปหมดกี่คันรถ พอเกลี่ยลงไปแล้วเราก็ตรวจสอบไม่ได้ บางทีก็โกยจากข้างๆ ขึ้นมา แล้วก็บอกว่าเทแล้ว ความจริงมันก็คือสไลด์ลงไป พวกนี้มีจุดรั่วไหล  ส่วนพวกคอนกรีตก็คือส่วนผสมไม่ได้มาตรฐาน ถนนเสียหายเร็ว เหล็กไม่ได้ขนาด ความหนาไม่ได้ วางเหล็กไม่ได้ตามระดับเป็นไปตามที่ออกแบบ พวกนี้มีปัญหา ถนนหนา 15 เซนติเมตร เหล็กต้อง 7.5 เซนติเมตร แต่บางทีกองไว้ข้างล่าง วีธิสร้างชุ่ยๆ ไม่มีลูกถ้วยรองรับ มีจุดรั่วไหลอย่างนี้ "
            </blockquote>
        </div>
    </Page>
} 

export default Part5
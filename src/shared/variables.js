import DataGlobalStats from "../data/global_stats"
import utils from "../utils"

const dairyCompanyFilter = new RegExp("โคนม|มิลค์|แดรี่|สหกรณ์การเกษตร")

const totalLocalAuthorOrgBudget = 720822 * 1e6

const header = "ขุมทรัพย์ 6 แสนล้าน และรอยรั่วงบประมาณท้องถิ่น!?"

const teamMembers = [
    `ชนิกานต์ กาญจนสาลี`,
    `กิตตินันท์ นาคทอง`,
    `กนิษฐา ไชยแสง`,
    `อักษราภัค พุทธวงษ์`,
    `ไวยณ์วุฒิ เอื้อจงประสิทธิ์`,
    `ภัทรวัต ช่อไม้`
]

const date = '22/09/2562'

const content = {
    section1: `
ในปี 2563 ประเทศไทยกำลังจะจัดให้มีการเลือกตั้งท้องถิ่น หลังจากว่างเว้นไปนานกว่า 5 ปี 
ถึงกระนั้น การทำงานหรือการบริหารโครงการขององค์การปกครองส่วนท้องถิ่น (อปท.) ทั้งหลายนั้น ยังไม่ค่อยเป็นที่พูดถึงในวงกว้างมากนัก เราจึงได้นำข้อมูลการจัดซื้อจัดจ้างของ อปท.ทั่วประเทศมาวิเคราะห์ เพื่อให้ประชาชนทั่วไปเข้าใจและตระหนักถึง
การบริหารงาน และรูปแบบใช้งบประมาณขององค์กรส่วนท้องถิ่นเหล่านี้
`,
    section2: `
    ปี 2561 อปท. มีรายได้รวม 636,573 ล้านบาท จากจำนวน อปท. ทั่วประเทศทั้งหมด 7,852 แห่ง เราได้พบว่ามีอปท.ทั้งหมด 6,737 แห่ง ที่มีข้อมูลการจัดซื้อจัดจ้างของปี 2561 บนเว็บไซต์ภาษีไปไหน และเมื่อวิเคราะห์ข้อมูลดังกล่าว พบว่า
    มีความเกี่ยวข้องกับโครงการจัดซื้อจัดจ้างด้านโยธา เช่น การสร้างถนน, การซ่อมถนน, การขุดถนน, การถมลูกรัง, และการราดคอนกรีต  จำนวน
    ${utils.moneyFormat(DataGlobalStats.sumCivilProjectValue/ 1e6)} จาก ${utils.moneyFormat(DataGlobalStats.sumProjectValue/1e6)}
    ซึ่งคิดเป็น ${Math.floor(DataGlobalStats.sumCivilProjectValue/DataGlobalStats.sumProjectValue*100)}%
    ของมูลค่าโครงการ อปท. ทั้งหมด และที่น่าสนใจคือ 
    ถ้าดูตามจำนวนโครงการ โครงการเกี่ยวกับโยธามีเพียง ${utils.numFormatInt(DataGlobalStats.totalCivilProjects)} โครงการ
    จากโครงการของ อปท.ทั้งหมด ${utils.numFormatInt(DataGlobalStats.totalProjects)} โครงการ
    คิดเป็นแค่ ${Math.round(DataGlobalStats.totalCivilProjects / DataGlobalStats.totalProjects* 100)}% เท่านั้น
`,
    section3: `
    เมื่อประมวลข้อมูลเชิงลึก สืบหาโครงการขนาดใหญ่มูลค่างบประมาณเกิน 100 ล้านบาทขึ้นไป ทำให้พบรูปแบบการจัดซื้อจัดจ้าง 6 รูปแบบที่นิยมมากที่สุด ดังรูป 
`,
    section5: `
“พิศิษฐ์ ลีลาวชิโรภาส” อดีตผู้ว่าการตรวจเงินแผ่นดิน (สตง.) ให้สัมภาษณ์เกี่ยวกับช่องโหว่กฎหมาย พระราชบัญญัต (พ.ร.บ) การจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ว่า การใช้วิจารณญาณของท้องถิ่นในการตัดสินใจว่า โครงการจะใช้รูปแบบการจัดซื้อจัดจ้างแบบใด โดยเฉพาะรูปแบบเฉพาะเจาะจง (ที่ไม่มีผู้ประมูลแข่งขัน) ยังพบปัญหา หรือรูปแบบอื่นอย่างระบบ E-biddig ก็อาจจะมีปัญหาอื่น ๆ ซ่อนไว้ เช่น สเปก ราคาสูง แต่เมื่อส่งมอบงานอาจจะได้ของอีกเกรด ซึ่งงานก่อสร้างมักจะสะท้อนปัญหาสร้างแล้วพัง โดยเฉพาะคอนกรีตกับลูกรัง เช่น ส่วนผสมคอนกรีตไม่ได้มาตรฐาน เหล็กไม่ได้ขนาด หรือวางเหล็กไม่ได้ตามที่ออกแบบ มีจุดรั่วไหลและตรวจสอบยาก
`,
    section6: `
เมื่อดูสัดส่วนของโครงการจัดซื้อจัดจ้างแบบเฉพาะเจาะจง เทียบกับจำนวนโครงการทั้งหมด เราพบว่ามีหลาย อปท. ที่มีสัดส่วนนี้ค่อนข้างสูง
`,
    section7: `
ในขณะเดียวกัน ถ้าดูจากมุมมองของบริษัทหรือนิติบุคคลที่มีมูลค่าโครงการของ อปท.ทั้งหมดในปี 2561 มากกว่า 100 ล้านบาทนั้น เราพบว่า อันดับแรกๆ เป็นกลุ่มนิติบุคคลที่เกี่ยวกับผลิตภัณฑ์นม โดย นายพิศิษฐ์ให้ความเห็นว่า "เนื่องจาก อปท.มีภารกิจในการจัดหานมโรงเรียน สำหรับเด็กนักเรียนที่อยู่ในเขตพื้นที่ของ อปท.นั้นๆ ประกอบกับเอกชนที่ผลิตและจำหน่ายนมโรงเรียนมีจำกัด"
`,
    section8: `
    นายพิศิษฐ์ ให้มุมมองต่อเรื่องการกระจายตัวของบริษัทแต่ละภูมิภาคดังภาพ(ด้านล่าง) ภาพรวมโดยทั่วไปเมื่อวิเคราะห์ข้อมูลในส่วนภูมิภาค 
    จากประสบการณ์การทำงาน รูปแบบการกระจายตัวของบริษัทในแต่ละภูมิภาค ขึ้นอยู่กับการกำหนดเงื่อนไขหรือคุณลักษณะเฉพาะของผู้เข้าเสนอราคา เช่น ผลงานที่เกี่ยวข้องต้องมีผลงานชนิดเดียวกัน ต้องขึ้นอยู่กับการดูว่ามีเงื่อนไขที่เปิดกว้างเพียงใดด้วย
`,
    section82: `
    ขณะเดียวกันก็ขึ้นอยู่กับศักยภาพ และอิทธิพลของบริษัทที่จะเข้าแข่งขัน เช่น บางท้องที่มีบริษัทรับเหมาเจ้าประจำอยู่ เมื่อเปิดประมูล ก็จะมีส่วนทำให้บริษัทเอกชนอื่นที่เกรงอิทธิพลไม่เข้าร่วมการแข่งขัน ซึ่งท้องถิ่นมักจะมีปัญหาในลักษณะนี้  เพื่อให้เป็นไปตามเงื่อนไขการแข่งขันราคา ก็มักจะกระทำในลักษณะสมยอมกันในการเสนอราคา ที่เรียกว่า “จัดให้มีพระอันดับ” ในการแข่งขัน เพื่อพรางหรือหลอกว่ามีการแข่งขันจริง ทั้งที่ไม่มีการแข่งขันอย่างแท้จริง พบว่าเป็นเรื่องของการทุจริตเชิงแฝงเร้นได้ โดยระเบียบแล้วจึงต้องมีการตรวจสอบว่าผู้เสนอราคาต้องมิใช่เครือข่ายเดียวกัน เช่น ตรวจสอบจากการถือหุ้น หรือ ผู้บริหารของแต่ละบริษัท ซึ่งผู้ตรวจสอบคือเจ้าหน้าที่ท้องถิ่นที่ได้รับมอบหมายให้มีหน้าที่คัดเลือกผู้ขายหรือผู้รับจ้างในโครงการ โดยการกระจุกตัวของผู้ขายหรือผู้รับจ้าง มักตามมาด้วยปัญหาการส่งมอบงานที่ไม่มีคุณภาพ ล่าช้า การขายงาน จนนำไปสู่การทิ้งงาน ซึงมักพบบ่อย⏤อดีตผู้ว่า สตง.ขยายความข้อมูล 
`,
    sectonCompanyProfile: `
    ภาพด้านล่างสามารถตรวจสอบบริษัทอื่น ๆ ที่มีรายได้มากกว่า 100 ล้านบาท จากการจัดซื้อจัดจ้างโครงการ อปท. เพิ่มเติม โดยประชาชนควรเข้ามาดูและตรวจสอบข้อมูลเบื้องต้นด้วยตัวเองได้ ด้วยการดูความสัมพันธ์เชิงผู้บริหาร เชิงทุน และลักษณะงาน เพื่อดูการกระจุกของโครงการและงบประมาณ ที่เสี่ยงต่อการล่าช้าและขายงาน จนนำไปสู่การทิ้งงานได้หรือไม่ ?  ซึ่งหากพบข้อมูลที่ผิดปกติหรือส่อไปในทางไม่สุจริตอาจจะส่งให้ ป.ป.ช.,สตง. หรือ ป.ป.ท. เพื่อขยายผลเป็นการป้องปราม หรือปราบปรามการทุจริตต่อไป
`,
    sectionConclusion: `
    อย่างไรก็ตาม จากการกระบวนการทำงาน เรื่อง “ขุมทรัพย์ 6 แสนล้าน และรอยรั่วงบประมาณท้องถิ่น!?” ทำให้เห็นถึงปัญหาการใช้จ่ายงบประมาณของ อปท. 
    โดยบทความนี้แสดงให้เห็นว่า โครงการส่วนใหญ่มีรูปแบบการจัดซื้อจัดจ้างแบบเฉพาะเจาะจง ซึ่งอาจจะมีการเอื้อผลประโยชน์แอบแผงอยู่ แต่ทางทีมงานไม่สามารถวิเคราะห์เจาะลึกและฟันธงเรื่องการทุจริตได้ เนื่องจากข้อมูลเปิดภาครัฐที่เกี่ยวกับรายรับ - รายจ่ายของ อปท. ส่วนใหญ่ขาดรายละเอียดที่สำคัญบางประการ รวมถึงมีความยุ่งยากซับซ้อน และการจัดแสดงผลข้อมูลตัวเลขทำอย่างไม่เป็นระบบ ไม่ครบถ้วน ไม่ทันสมัย และไม่เอื้อต่อการนำมาใช้วิเคราะห์ประมวลผลด้วยโปรแกรมคอมพิวเตอร์ ซึ่งเป็นเรื่องสำคัญที่ต้องได้รับการแก้ไขปรับปรุงอย่างเร่งด่วน เพื่อให้ประชาชนสามารถเข้าไปมีส่วนร่วมในการนำข้อมูลไปใช้ เพื่อประโยชน์สาธารณะอย่างแท้จริง
`,
    remark: `
ข้อมูลที่ใช้ในการวิเคราะห์ถูกดึงจากเว็บไซต์ "ภาษีไปไหน" อาจมีปัญหาทางด้านเทคนิคเกิดขึ้นและทำให้ข้อมูลไม่ครบถ้วน หากพบข้อผิดพลาดหรือข้อเสนอแนะ เรายินดีรับฟังเพื่อปรับปรุงและแก้ไข
`
}

export {
    header,
    teamMembers,
    date,
    content,
    dairyCompanyFilter,
}
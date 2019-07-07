const labelConstant = {
    one: [""],
    budget: [
        "฿200M ขึ้นไป",
        "฿100M-200M",
        "฿50M-100M",
        "฿20M-50M",
    ],
    region: [
        "เหนือ",
        "ตะวันตก",
        "ตะวันออกเฉียงเหนือ",
        "ตะวันออก",
        "กลาง",
        "ใต้"
    ],
    totalProjects: [
        "มากกว่า 20",
        "10-20",
        "5-10",
        "1-5 โครงการ",
    ],
    moral: [
        "มากกว่า 30%",
        "",
    ]
}

const db = {
    url: "/data.json"
}

const globalConfig = {
    mainVizPageNo: 5,
    vizAtPage: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "circleBlob",
        "circleBlob",
        "circleBlob",
        "none",
    ],
    pageTitles: [
        "ภาพรวมงบประมาณท้องถิ่นปี 2561",
        "ประเภทการจัดซืื้อจัดจ้าง",
        "ประเภทการจัดซืื้อจัดจ้าง",
        "สัดส่วนการใช้งบของอปท.",
        "สัดส่วนการใช้งบของอปท.",
        "นิติบุคคลกับโครงการของอปท.",
        "นิติบุคคลกับโครงการของอปท.",
        "นิติบุคคลกับโครงการของอปท.",
        "สรุป",
    ]
}

export {labelConstant, db, globalConfig}
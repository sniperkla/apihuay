const express = require("express");
const app = express();
const puppeteer = require("puppeteer");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.get("/", async (req, res) => {
  const password = req.body;

  //หวยรัฐบาล
  const thวันที่ =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-th.ml-2 > span.huay-card-period";
  const thรางวัลที่1 =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div:nth-child(1) > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const th2ตัวล่าง =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div:nth-child(1) > div:nth-child(2) > div.p-0.text-award-choke";
  const th3ตัวหน้า =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div.d-flex.flex-row.huay-card-border-separate > div.text-center.w-50.huay-card-border-right.mt-1 > div.p-0.text-award-choke";
  const th4ตัวล่าง =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div.d-flex.flex-row.huay-card-border-separate > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยมาเลย์
  const myวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-my.ml-2 > span.huay-card-period";
  const my3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const my2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาว3วัน
  const laoวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-la.ml-2 > span.huay-card-period";
  const lao3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const lao2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเช้า
  const laomorningวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lam.ml-2 > span.huay-card-period";
  const laomorning3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laomorning2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเที่ยง
  const laomiddayวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lamid.ml-2 > span.huay-card-period";
  const laomidday3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laomidday2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวร่วมใจ
  const laotogetherวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-larj.ml-2 > span.huay-card-period";
  const laotogether3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laotogether2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาววิลล่า
  const laovillaวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lavl.ml-2 > span.huay-card-period";
  const laovilla3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laovilla2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวนคร
  const laocityวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lank.ml-2 > span.huay-card-period";
  const laocity3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laocity2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวทูไนท์
  const laotonightวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-latn.ml-2 > span.huay-card-period";
  const laotonight3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laotonight2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเศรษฐกิจ
  const laoeconomicวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-laeco.ml-2 > span.huay-card-period";
  const laoeconomic3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laoeconomic2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวดีเดย์
  const laoddayวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-ladd.ml-2 > span.huay-card-period";
  const laodday3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laodday2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวรุ่งเรือง
  const laogrowวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-larr.ml-2 > span.huay-card-period";
  const laogrow3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laogrow2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวพลัส
  const laoplusวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lapls.ml-2 > span.huay-card-period";
  const laoplus3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laoplus2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอย
  const hanoiวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-vn.ml-2 > span.huay-card-period";
  const hanoi3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoi2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยvip
  const hanoivipวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hc2.ml-2 > span.huay-card-period";
  const hanoivip3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoivip2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยพิเศษ
  const hanoispวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hc.ml-2 > span.huay-card-period";
  const hanoisp3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoisp2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยรอบดึก
  const hanoimidnightวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-n22.ml-2 > span.huay-card-period";
  const hanoimidnight3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoimidnight2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยเช้า
  const hanoimorningวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hnm.ml-2 > span.huay-card-period";
  const hanoimorning3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoimorning2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยเดย์
  const hanoidayวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hcd.ml-2 > span.huay-card-period";
  const hanoiday3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoiday2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยไชโย
  const hanoichaiyoวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hncy.ml-2 > span.huay-card-period";
  const hanoichaiyo3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoichaiyo2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยท้องถิ่น
  const hanoilocalวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hnlocal.ml-2 > span.huay-card-period";
  const hanoilocal3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoilocal2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยออมสิน
  const aomsinวันที่ =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-aom.ml-2 > span.huay-card-period";
  const aomsin3ตัวบน =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const aomsin2ตัวล่าง =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยธกส
  const baacวันที่ =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-baac.ml-2 > span.huay-card-period";
  const baac3ตัวบน =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const baac2ตัวล่าง =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยแคนาดา
  const canadaวันที่ =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-ca.ml-2 > span.huay-card-period";
  const canada3ตัวบน =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const canada2ตัวล่าง =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  /////////////////////// หวยหุ้น /////////////////////

  // หุ้นเกาหลี
  const koreastockวันที่ =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const koreastock3ตัวบน =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const koreastock2ตัวล่าง =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นนิเคอิเช้า
  const nikeimorningวันที่ =
    "#foreignStock-section div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const nikeimorning3ตัวบน =
    "#foreignStock-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const nikeimorning2ตัวล่าง =
    "div#foreignStock-section div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นนิเคอิบ่าย
  const nikeimiddayวันที่ =
    "div#foreignStock-section div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const nikeimidday3ตัวบน =
    "div#foreignStock-section div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const nikeimidday2ตัวล่าง =
    "div#foreignStock-section div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นฮั่งเส็งเช้า
  const hungsengmorningวันที่ =
    "div#foreignStock-section div:nth-child(4) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const hungsengmorning3ตัวบน =
    "div#foreignStock-section div:nth-child(4) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hungsengmorning2ตัวล่าง =
    "div#foreignStock-section div:nth-child(4) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นฮั่งเส็งบ่าย
  const hungsengmiddayวันที่ =
    "div#foreignStock-section div:nth-child(5) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const hungsengmidday3ตัวบน =
    "div#foreignStock-section div:nth-child(5) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hungsengmidday2ตัวล่าง =
    "div#foreignStock-section div:nth-child(5) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นจีนเช้า
  const chinamorningวันที่ =
    "div#foreignStock-section div:nth-child(6) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const chinamorning3ตัวบน =
    "div#foreignStock-section div:nth-child(6) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const chinamorning2ตัวล่าง =
    "div#foreignStock-section div:nth-child(6) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นจีนบ่าย
  const chinamiddayวันที่ =
    "div#foreignStock-section div:nth-child(7) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const chinamidday3ตัวบน =
    "div#foreignStock-section div:nth-child(7) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const chinamidday2ตัวล่าง =
    "div#foreignStock-section div:nth-child(7) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นไต้หวัน
  const taiwanstockวันที่ =
    "div#foreignStock-section div:nth-child(8) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const taiwanstock3ตัวบน =
    "div#foreignStock-section div:nth-child(8) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const taiwanstock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(8) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นสิงคโปร์
  const singaporestockวันที่ =
    "div#foreignStock-section div:nth-child(9) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const singaporestock3ตัวบน =
    "div#foreignStock-section div:nth-child(9) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const singaporestock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(9) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นไต้อินเดีย
  const indiastockวันที่ =
    "div#foreignStock-section div:nth-child(10) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const indiastock3ตัวบน =
    "div#foreignStock-section div:nth-child(10) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const indiastock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(10) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นรัสเซีย
  const russiastockวันที่ =
    "div#foreignStock-section div:nth-child(11) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const russiastock3ตัวบน =
    "div#foreignStock-section div:nth-child(11) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const russiastock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(11) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นอียิปต์
  const egyptstockวันที่ =
    "div#foreignStock-section div:nth-child(12) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const egyptstock3ตัวบน =
    "div#foreignStock-section div:nth-child(12) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const egyptstock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(12) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นเยอรมัน
  const germanstockวันที่ =
    "div#foreignStock-section div:nth-child(13) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const germanstock3ตัวบน =
    "div#foreignStock-section div:nth-child(13) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const germanstock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(13) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นอังกฤษ
  const englandstockวันที่ =
    "div#foreignStock-section div:nth-child(14) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const englandstock3ตัวบน =
    "div#foreignStock-section div:nth-child(14) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const englandstock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(14) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นดาวน์โจนส์
  const dowjonestockวันที่ =
    "div#foreignStock-section div:nth-child(15) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const dowjonestock3ตัวบน =
    "div#foreignStock-section div:nth-child(15) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const dowjonestock2ตัวล่าง =
    "div#foreignStock-section div:nth-child(15) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // Launch a new headless browser instance
  const browser = await puppeteer.launch();

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the website you want to scrape
  await page.goto("https://www.mhandee.com/");

  // หวยไทย
  const thdate = await page.$(thวันที่);
  const th1 = await page.$(thรางวัลที่1);
  const th2 = await page.$(th2ตัวล่าง);
  const th3 = await page.$(th3ตัวหน้า);
  const th4 = await page.$(th4ตัวล่าง);

  // หวยมาเลย์
  const mydate = await page.$(myวันที่);
  const my1 = await page.$(my3ตัวบน);
  const my2 = await page.$(my2ตัวล่าง);

  //หวยลาว จันทร์ พุธ ศุกร์
  const laodate = await page.$(laoวันที่);
  const lao1 = await page.$(lao3ตัวบน);
  const lao2 = await page.$(lao2ตัวล่าง);

  //หวยลาวเช้า
  const laomorningdate = await page.$(laomorningวันที่);
  const laomorning1 = await page.$(laomorning3ตัวบน);
  const laomorning2 = await page.$(laomorning2ตัวล่าง);

  //หวยลาวเที่ยง
  const laomiddaydate = await page.$(laomiddayวันที่);
  const laomidday1 = await page.$(laomidday3ตัวบน);
  const laomidday2 = await page.$(laomidday2ตัวล่าง);

  //หวยลาวร่วมใจ
  const laotogetherdate = await page.$(laotogetherวันที่);
  const laotogether1 = await page.$(laotogether3ตัวบน);
  const laotogether2 = await page.$(laotogether2ตัวล่าง);

  //หวยลาววิลล่า
  const laovilladate = await page.$(laovillaวันที่);
  const laovilla1 = await page.$(laovilla3ตัวบน);
  const laovilla2 = await page.$(laovilla2ตัวล่าง);

  //หวยลาวนคร
  const laocitydate = await page.$(laocityวันที่);
  const laocity1 = await page.$(laocity3ตัวบน);
  const laocity2 = await page.$(laocity2ตัวล่าง);

  //หวยลาวดีเดย์
  const laotonightdate = await page.$(laotonightวันที่);
  const laotonight1 = await page.$(laotonight3ตัวบน);
  const laotonight2 = await page.$(laotonight2ตัวล่าง);

  //หวยลาวเศรษฐกิจ
  const laoeconomicdate = await page.$(laoeconomicวันที่);
  const laoeconomic1 = await page.$(laoeconomic3ตัวบน);
  const laoeconomic2 = await page.$(laoeconomic2ตัวล่าง);

  //หวยลาวดีเดย์
  const laoddaydate = await page.$(laoddayวันที่);
  const laodday1 = await page.$(laodday3ตัวบน);
  const laodday2 = await page.$(laodday2ตัวล่าง);

  //หวยลาวรุ่งเรื่อง
  const laogrowdate = await page.$(laogrowวันที่);
  const laogrow1 = await page.$(laogrow3ตัวบน);
  const laogrow2 = await page.$(laogrow2ตัวล่าง);

  //หวยลาวพลัส
  const laoplusdate = await page.$(laoplusวันที่);
  const laoplus1 = await page.$(laoplus3ตัวบน);
  const laoplus2 = await page.$(laoplus2ตัวล่าง);

  //หวยฮานอย จันทร์ พุธ ศุกร์
  const hanoidate = await page.$(hanoiวันที่);
  const hanoi1 = await page.$(hanoi3ตัวบน);
  const hanoi2 = await page.$(hanoi2ตัวล่าง);

  //หวยฮานอย vip
  const hanoivipdate = await page.$(hanoivipวันที่);
  const hanoivip1 = await page.$(hanoivip3ตัวบน);
  const hanoivip2 = await page.$(hanoivip2ตัวล่าง);

  //หวยฮานอยพิเศษ
  const hanoispdate = await page.$(hanoispวันที่);
  const hanoisp1 = await page.$(hanoisp3ตัวบน);
  const hanoisp2 = await page.$(hanoisp2ตัวล่าง);

  //หวยฮานอยรอบดึก
  const hanoimidnightdate = await page.$(hanoimidnightวันที่);
  const hanoimidnight1 = await page.$(hanoimidnight3ตัวบน);
  const hanoimidnight2 = await page.$(hanoimidnight2ตัวล่าง);

  //หวยฮานอยเช้า
  const hanoimorningdate = await page.$(hanoimorningวันที่);
  const hanoimorning1 = await page.$(hanoimorning3ตัวบน);
  const hanoimorning2 = await page.$(hanoimorning2ตัวล่าง);

  //หวยฮานอยเดย์
  const hanoidaydate = await page.$(hanoidayวันที่);
  const hanoiday1 = await page.$(hanoiday3ตัวบน);
  const hanoiday2 = await page.$(hanoiday2ตัวล่าง);

  //หวยฮานอยไชโย
  const hanoichaiyodate = await page.$(hanoichaiyoวันที่);
  const hanoichaiyo1 = await page.$(hanoichaiyo3ตัวบน);
  const hanoichaiyo2 = await page.$(hanoichaiyo2ตัวล่าง);

  //หวยฮานอยท้องถิ่น
  const hanoilocaldate = await page.$(hanoilocalวันที่);
  const hanoilocal1 = await page.$(hanoilocal3ตัวบน);
  const hanoilocal2 = await page.$(hanoilocal2ตัวล่าง);

  //หวยออมสิน
  const aomsindate = await page.$(aomsinวันที่);
  const aomsin1 = await page.$(aomsin3ตัวบน);
  const aomsin2 = await page.$(aomsin2ตัวล่าง);

  //หวยธกส
  const baacdate = await page.$(baacวันที่);
  const baac1 = await page.$(baac3ตัวบน);
  const baac2 = await page.$(baac2ตัวล่าง);

  //หวยแคนาดา
  const canadadate = await page.$(canadaวันที่);
  const canada1 = await page.$(canada3ตัวบน);
  const canada2 = await page.$(canada2ตัวล่าง);

  //หวยหุ้น
  //หุ้นเกาหลี
  const koreastockdate = await page.$(koreastockวันที่);
  const koreastock1 = await page.$(koreastock3ตัวบน);
  const koreastock2 = await page.$(koreastock2ตัวล่าง);

  //หุ้นนิเคอิเช้า
  const nikeimorningdate = await page.$(nikeimorningวันที่);
  const nikeimorning1 = await page.$(nikeimorning3ตัวบน);
  const nikeimorning2 = await page.$(nikeimorning2ตัวล่าง);

  //หุ้นนิเคอิบ่าย
  const nikeimiddaydate = await page.$(nikeimiddayวันที่);
  const nikeimidday1 = await page.$(nikeimidday3ตัวบน);
  const nikeimidday2 = await page.$(nikeimidday2ตัวล่าง);

  //หุ้นฮั่งเส็งเช้า
  const hungsengmorningdate = await page.$(hungsengmorningวันที่);
  const hungsengmorning1 = await page.$(hungsengmorning3ตัวบน);
  const hungsengmorning2 = await page.$(hungsengmorning2ตัวล่าง);

  //หุ้นฮั่งเส็งบ่าย
  const hungsengmiddaydate = await page.$(hungsengmiddayวันที่);
  const hungsengmidday1 = await page.$(hungsengmidday3ตัวบน);
  const hungsengmidday2 = await page.$(hungsengmidday2ตัวล่าง);

  //หุ้นจีนเช้า
  const chinamorningdate = await page.$(chinamorningวันที่);
  const chinamorning1 = await page.$(chinamorning3ตัวบน);
  const chinamorning2 = await page.$(chinamorning2ตัวล่าง);

  //หุ้นจีนบ่าย
  const chinamiddaydate = await page.$(chinamiddayวันที่);
  const chinamidday1 = await page.$(chinamidday3ตัวบน);
  const chinamidday2 = await page.$(chinamidday2ตัวล่าง);

  //หุ้นเกาหลี
  const taiwanstockdate = await page.$(taiwanstockวันที่);
  const taiwanstock1 = await page.$(taiwanstock3ตัวบน);
  const taiwanstock2 = await page.$(taiwanstock2ตัวล่าง);

  //หุ้นสิงคโปร์
  const singaporestockdate = await page.$(singaporestockวันที่);
  const singaporestock1 = await page.$(singaporestock3ตัวบน);
  const singaporestock2 = await page.$(singaporestock2ตัวล่าง);

  //หุ้นอินเดีย
  const indiastockdate = await page.$(indiastockวันที่);
  const indiastock1 = await page.$(indiastock3ตัวบน);
  const indiastock2 = await page.$(indiastock2ตัวล่าง);

  //หุ้นรัสเซีย
  const russiastockdate = await page.$(russiastockวันที่);
  const russiastock1 = await page.$(russiastock3ตัวบน);
  const russiastock2 = await page.$(russiastock2ตัวล่าง);

  //หุ้นอียิปต์
  const egyptstockdate = await page.$(egyptstockวันที่);
  const egyptstock1 = await page.$(egyptstock3ตัวบน);
  const egyptstock2 = await page.$(egyptstock2ตัวล่าง);

  //หุ้นเยอรมัน
  const germanstockdate = await page.$(germanstockวันที่);
  const germanstock1 = await page.$(germanstock3ตัวบน);
  const germanstock2 = await page.$(germanstock2ตัวล่าง);

  //หุ้นอังกฤษ
  const englandstockdate = await page.$(englandstockวันที่);
  const englandstock1 = await page.$(englandstock3ตัวบน);
  const englandstock2 = await page.$(englandstock2ตัวล่าง);

  //หุ้นดาวโจนส์
  const dowjonestockdate = await page.$(dowjonestockวันที่);
  const dowjonestock1 = await page.$(dowjonestock3ตัวบน);
  const dowjonestock2 = await page.$(dowjonestock2ตัวล่าง);

  // Get the inner text of the element
  // หวยรัฐบาล
  const thdates = await page.evaluate((el) => el.innerText, thdate);
  const thtext1 = await page.evaluate((el) => el.innerText, th1);
  const thtext2 = await page.evaluate((el) => el.innerText, th2);
  const thtext3 = await page.evaluate((el) => el.innerText, th3);
  const thtext4 = await page.evaluate((el) => el.innerText, th4);
  // มาเลย์
  const mydates = await page.evaluate((el) => el.innerText, mydate);
  const mytext1 = await page.evaluate((el) => el.innerText, my1);
  const mytext2 = await page.evaluate((el) => el.innerText, my2);

  //หวยลาว 3 วัน
  const laodates = await page.evaluate((el) => el.innerText, laodate);
  const laotext1 = await page.evaluate((el) => el.innerText, lao1);
  const laotext2 = await page.evaluate((el) => el.innerText, lao2);

  //หวยลาวเช้า
  const laomorningdates = await page.evaluate(
    (el) => el.innerText,
    laomorningdate
  );
  const laomorningtext1 = await page.evaluate(
    (el) => el.innerText,
    laomorning1
  );
  const laomorningtext2 = await page.evaluate(
    (el) => el.innerText,
    laomorning2
  );

  //หวยลาวเที่ยง
  const laomiddaydates = await page.evaluate(
    (el) => el.innerText,
    laomiddaydate
  );
  const laomiddaytext1 = await page.evaluate((el) => el.innerText, laomidday1);
  const laomiddaytext2 = await page.evaluate((el) => el.innerText, laomidday2);

  //หวยลาวร่วมใจ
  const laotogetherdates = await page.evaluate(
    (el) => el.innerText,
    laotogetherdate
  );
  const laotogethertext1 = await page.evaluate(
    (el) => el.innerText,
    laotogether1
  );
  const laotogethertext2 = await page.evaluate(
    (el) => el.innerText,
    laotogether2
  );

  //หวยลาววิลล่า
  const laovilladates = await page.evaluate((el) => el.innerText, laovilladate);
  const laovillatext1 = await page.evaluate((el) => el.innerText, laovilla1);
  const laovillatext2 = await page.evaluate((el) => el.innerText, laovilla2);

  //หวยลาวนคร
  const laocitydates = await page.evaluate((el) => el.innerText, laocitydate);
  const laocitytext1 = await page.evaluate((el) => el.innerText, laocity1);
  const laocitytext2 = await page.evaluate((el) => el.innerText, laocity2);

  //หวยลาวทูไนท์
  const laotonightdates = await page.evaluate(
    (el) => el.innerText,
    laotonightdate
  );
  const laotonighttext1 = await page.evaluate(
    (el) => el.innerText,
    laotonight1
  );
  const laotonighttext2 = await page.evaluate(
    (el) => el.innerText,
    laotonight2
  );

  //หวยลาวเศรษฐกิจ
  const laoeconomicdates = await page.evaluate(
    (el) => el.innerText,
    laoeconomicdate
  );
  const laoeconomictext1 = await page.evaluate(
    (el) => el.innerText,
    laoeconomic1
  );
  const laoeconomictext2 = await page.evaluate(
    (el) => el.innerText,
    laoeconomic2
  );

  //หวยลาวดีเดย์
  const laoddaydates = await page.evaluate((el) => el.innerText, laoddaydate);
  const laoddaytext1 = await page.evaluate((el) => el.innerText, laodday1);
  const laoddaytext2 = await page.evaluate((el) => el.innerText, laodday2);

  //หวยลาวรุ่งเรือง
  const laogrowdates = await page.evaluate((el) => el.innerText, laogrowdate);
  const laogrowtext1 = await page.evaluate((el) => el.innerText, laogrow1);
  const laogrowtext2 = await page.evaluate((el) => el.innerText, laogrow2);

  //หวยลาวพลัส
  const laoplusdates = await page.evaluate((el) => el.innerText, laoplusdate);
  const laoplustext1 = await page.evaluate((el) => el.innerText, laoplus1);
  const laoplustext2 = await page.evaluate((el) => el.innerText, laoplus2);

  //หวยฮานอย
  const hanoidates = await page.evaluate((el) => el.innerText, hanoidate);
  const hanoitext1 = await page.evaluate((el) => el.innerText, hanoi1);
  const hanoitext2 = await page.evaluate((el) => el.innerText, hanoi2);

  //หวยฮานอยvip
  const hanoivipdates = await page.evaluate((el) => el.innerText, hanoivipdate);
  const hanoiviptext1 = await page.evaluate((el) => el.innerText, hanoivip1);
  const hanoiviptext2 = await page.evaluate((el) => el.innerText, hanoivip2);

  //หวยฮานอยsp
  const hanoispdates = await page.evaluate((el) => el.innerText, hanoispdate);
  const hanoisptext1 = await page.evaluate((el) => el.innerText, hanoisp1);
  const hanoisptext2 = await page.evaluate((el) => el.innerText, hanoisp2);

  //หวยฮานอยรอบดึก
  const hanoimidnightdates = await page.evaluate(
    (el) => el.innerText,
    hanoimidnightdate
  );
  const hanoimidnighttext1 = await page.evaluate(
    (el) => el.innerText,
    hanoimidnight1
  );
  const hanoimidnighttext2 = await page.evaluate(
    (el) => el.innerText,
    hanoimidnight2
  );

  //หวยฮานอยเช้า
  const hanoimorningdates = await page.evaluate(
    (el) => el.innerText,
    hanoimorningdate
  );
  const hanoimorningtext1 = await page.evaluate(
    (el) => el.innerText,
    hanoimorning1
  );
  const hanoimorningtext2 = await page.evaluate(
    (el) => el.innerText,
    hanoimorning2
  );

  //หวยฮานอยเดย์
  const hanoidaydates = await page.evaluate((el) => el.innerText, hanoidaydate);
  const hanoidaytext1 = await page.evaluate((el) => el.innerText, hanoiday1);
  const hanoidaytext2 = await page.evaluate((el) => el.innerText, hanoiday2);

  //หวยฮานอยท้องถิ่น
  const hanoilocaldates = await page.evaluate(
    (el) => el.innerText,
    hanoilocaldate
  );
  const hanoilocaltext1 = await page.evaluate(
    (el) => el.innerText,
    hanoilocal1
  );
  const hanoilocaltext2 = await page.evaluate(
    (el) => el.innerText,
    hanoilocal2
  );

  //หวยฮานอยไชโย
  const hanoichaiyodates = await page.evaluate(
    (el) => el.innerText,
    hanoichaiyodate
  );
  const hanoichaiyotext1 = await page.evaluate(
    (el) => el.innerText,
    hanoichaiyo1
  );
  const hanoichaiyotext2 = await page.evaluate(
    (el) => el.innerText,
    hanoichaiyo2
  );

  //หวยออมสิน
  const aomsindates = await page.evaluate((el) => el.innerText, aomsindate);
  const aomsintext1 = await page.evaluate((el) => el.innerText, aomsin1);
  const aomsintext2 = await page.evaluate((el) => el.innerText, aomsin2);

  //หวยธกส
  const baacdates = await page.evaluate((el) => el.innerText, baacdate);
  const baactext1 = await page.evaluate((el) => el.innerText, baac1);
  const baactext2 = await page.evaluate((el) => el.innerText, baac2);

  //หวยแคนาดา
  const canadadates = await page.evaluate((el) => el.innerText, canadadate);
  const canadatext1 = await page.evaluate((el) => el.innerText, canada1);
  const canadatext2 = await page.evaluate((el) => el.innerText, canada2);

  //หวยหุ้น
  //หุ้นเกาหลี
  const koreastockdates = await page.evaluate(
    (el) => el.innerText,
    koreastockdate
  );
  const koreastocktext1 = await page.evaluate(
    (el) => el.innerText,
    koreastock1
  );
  const koreastocktext2 = await page.evaluate(
    (el) => el.innerText,
    koreastock2
  );

  //หุ้นนิเคอิเช้า
  const nikeimorningdates = await page.evaluate(
    (el) => el.innerText,
    nikeimorningdate
  );
  const nikeimorningtext1 = await page.evaluate(
    (el) => el.innerText,
    nikeimorning1
  );
  const nikeimorningtext2 = await page.evaluate(
    (el) => el.innerText,
    nikeimorning2
  );

  //หุ้นนิเคอิบ่าย
  const nikeimiddaydates = await page.evaluate(
    (el) => el.innerText,
    nikeimiddaydate
  );
  const nikeimiddaytext1 = await page.evaluate(
    (el) => el.innerText,
    nikeimidday1
  );
  const nikeimiddaytext2 = await page.evaluate(
    (el) => el.innerText,
    nikeimidday2
  );

  //หุ้นฮั่งเส็งเช้า
  const hungsengmorningdates = await page.evaluate(
    (el) => el.innerText,
    hungsengmorningdate
  );
  const hungsengmorningtext1 = await page.evaluate(
    (el) => el.innerText,
    hungsengmorning1
  );
  const hungsengmorningtext2 = await page.evaluate(
    (el) => el.innerText,
    hungsengmorning2
  );

  //หุ้นนิฮั่งเส็งบ่าย
  const hungsengmiddaydates = await page.evaluate(
    (el) => el.innerText,
    hungsengmiddaydate
  );
  const hungsengmiddaytext1 = await page.evaluate(
    (el) => el.innerText,
    hungsengmidday1
  );
  const hungsengmiddaytext2 = await page.evaluate(
    (el) => el.innerText,
    hungsengmidday2
  );

  //หุ้นจีนเช้า
  const chinamorningdates = await page.evaluate(
    (el) => el.innerText,
    chinamorningdate
  );
  const chinamorningtext1 = await page.evaluate(
    (el) => el.innerText,
    chinamorning1
  );
  const chinamorningtext2 = await page.evaluate(
    (el) => el.innerText,
    chinamorning2
  );

  //หุ้นจีนบ่าย
  const chinamiddaydates = await page.evaluate(
    (el) => el.innerText,
    chinamiddaydate
  );
  const chinamiddaytext1 = await page.evaluate(
    (el) => el.innerText,
    chinamidday1
  );
  const chinamiddaytext2 = await page.evaluate(
    (el) => el.innerText,
    chinamidday2
  );

  //หุ้นไต้หวัน
  const taiwanstockdates = await page.evaluate(
    (el) => el.innerText,
    taiwanstockdate
  );
  const taiwanstocktext1 = await page.evaluate(
    (el) => el.innerText,
    taiwanstock1
  );
  const taiwanstocktext2 = await page.evaluate(
    (el) => el.innerText,
    taiwanstock2
  );

  //หุ้นสิงคโปร์
  const singaporestockdates = await page.evaluate(
    (el) => el.innerText,
    singaporestockdate
  );
  const singaporestocktext1 = await page.evaluate(
    (el) => el.innerText,
    singaporestock1
  );
  const singaporestocktext2 = await page.evaluate(
    (el) => el.innerText,
    singaporestock2
  );

  //หุ้นอินเดีย
  const indiastockdates = await page.evaluate(
    (el) => el.innerText,
    indiastockdate
  );
  const indiastocktext1 = await page.evaluate(
    (el) => el.innerText,
    indiastock1
  );
  const indiastocktext2 = await page.evaluate(
    (el) => el.innerText,
    indiastock2
  );

  //หุ้นรัสเซีย
  const russiastockdates = await page.evaluate(
    (el) => el.innerText,
    russiastockdate
  );
  const russiastocktext1 = await page.evaluate(
    (el) => el.innerText,
    russiastock1
  );
  const russiastocktext2 = await page.evaluate(
    (el) => el.innerText,
    russiastock2
  );

  //หุ้นอียิปต์
  const egyptstockdates = await page.evaluate(
    (el) => el.innerText,
    egyptstockdate
  );
  const egyptstocktext1 = await page.evaluate(
    (el) => el.innerText,
    egyptstock1
  );
  const egyptstocktext2 = await page.evaluate(
    (el) => el.innerText,
    egyptstock2
  );

  //หุ้นเยอรมัน
  const germanstockdates = await page.evaluate(
    (el) => el.innerText,
    germanstockdate
  );
  const germanstocktext1 = await page.evaluate(
    (el) => el.innerText,
    germanstock1
  );
  const germanstocktext2 = await page.evaluate(
    (el) => el.innerText,
    germanstock2
  );

  //หุ้นอังกฤษ
  const englandstockdates = await page.evaluate(
    (el) => el.innerText,
    englandstockdate
  );
  const englandstocktext1 = await page.evaluate(
    (el) => el.innerText,
    englandstock1
  );
  const englandstocktext2 = await page.evaluate(
    (el) => el.innerText,
    englandstock2
  );

  //หุ้นดาวโจนส์
  const dowjonestockdates = await page.evaluate(
    (el) => el.innerText,
    dowjonestockdate
  );
  const dowjonestocktext1 = await page.evaluate(
    (el) => el.innerText,
    dowjonestock1
  );
  const dowjonestocktext2 = await page.evaluate(
    (el) => el.innerText,
    dowjonestock2
  );

  const alldata = [
    {
      หวยรัฐบาล: {
        วันที่: thdates,
        รางวัลที่1: thtext1,
        "2ตัวล่าง": thtext2,
        "3ตัวหน้า": thtext3,
        "3ตัวล่าง": thtext4,
      },
    },
    { หวยมาเลย์: { วันที่: mydates, "3ตัวบน": mytext1, "2ตัวล่าง": mytext2 } },
    {
      หวยลาว3วัน: {
        วันที่: laodates,
        "3ตัวบน": laotext1,
        "2ตัวล่าง": laotext2,
      },
    },
    {
      หวยฮานอย: {
        วันที่: hanoidates,
        "3ตัวบน": hanoitext1,
        "2ตัวล่าง": hanoitext2,
      },
    },
    {
      หวยออมสิน: {
        วันที่: aomsindates,
        "3ตัวบน": aomsintext1,
        "2ตัวล่าง": aomsintext2,
      },
    },
    {
      หวยธกส: {
        วันที่: baacdates,
        "3ตัวบน": baactext1,
        "2ตัวล่าง": baactext2,
      },
    },
    {
      หวยฮานอยvip: {
        วันที่: hanoivipdates,
        "3ตัวบน": hanoiviptext1,
        "2ตัวล่าง": hanoiviptext2,
      },
    },
    {
      หวยฮานอยพิเศษ: {
        วันที่: hanoispdates,
        "3ตัวบน": hanoisptext1,
        "2ตัวล่าง": hanoisptext2,
      },
    },
    {
      หวยฮานอยรอบดึก: {
        วันที่: hanoimidnightdates,
        "3ตัวบน": hanoimidnighttext1,
        "2ตัวล่าง": hanoimidnighttext2,
      },
    },
    {
      หวยฮานอยเช้า: {
        วันที่: hanoimorningdates,
        "3ตัวบน": hanoimorningtext1,
        "2ตัวล่าง": hanoimorningtext2,
      },
    },
    {
      หวยลาวเช้า: {
        วันที่: laomorningdates,
        "3ตัวบน": laomorningtext1,
        "2ตัวล่าง": laomorningtext2,
      },
    },
    {
      หวยลาวเที่ยง: {
        วันที่: laomiddaydates,
        "3ตัวบน": laomiddaytext1,
        "2ตัวล่าง": laomiddaytext2,
      },
    },
    {
      หวยฮานอยเดย์: {
        วันที่: hanoidaydates,
        "3ตัวบน": hanoidaytext1,
        "2ตัวล่าง": hanoidaytext2,
      },
    },
    {
      หวยแคนาดา: {
        วันที่: canadadates,
        "3ตัวบน": canadatext1,
        "2ตัวล่าง": canadatext2,
      },
    },
    {
      หวยลาวร่วมใจ: {
        วันที่: laotogetherdates,
        "3ตัวบน": laotogethertext1,
        "2ตัวล่าง": laotogethertext2,
      },
    },
    {
      หวยลาววิลล่า: {
        วันที่: laovilladates,
        "3ตัวบน": laovillatext1,
        "2ตัวล่าง": laovillatext2,
      },
    },
    {
      หวยลาวนคร: {
        วันที่: laocitydates,
        "3ตัวบน": laocitytext1,
        "2ตัวล่าง": laocitytext2,
      },
    },
    {
      หวยลาวทูไนท์: {
        วันที่: laotonightdates,
        "3ตัวบน": laotonighttext1,
        "2ตัวล่าง": laotonighttext2,
      },
    },
    {
      หวยลาวเศรษฐกิจ: {
        วันที่: laoeconomicdates,
        "3ตัวบน": laoeconomictext1,
        "2ตัวล่าง": laoeconomictext2,
      },
    },
    {
      หวยลาวดีเดย์: {
        วันที่: laoddaydates,
        "3ตัวบน": laoddaytext1,
        "2ตัวล่าง": laoddaytext2,
      },
    },
    {
      หวยฮานอยไชโย: {
        วันที่: hanoichaiyodates,
        "3ตัวบน": hanoichaiyotext1,
        "2ตัวล่าง": hanoichaiyotext2,
      },
    },
    {
      หวยฮานอยท้องถิ่น: {
        วันที่: hanoilocaldates,
        "3ตัวบน": hanoilocaltext1,
        "2ตัวล่าง": hanoilocaltext2,
      },
    },
    {
      หวยลาวรุ่งเรือง: {
        วันที่: laogrowdates,
        "3ตัวบน": laogrowtext1,
        "2ตัวล่าง": laogrowtext2,
      },
    },
    {
      หวยลาวพลัส: {
        วันที่: laoplusdates,
        "3ตัวบน": laoplustext1,
        "2ตัวล่าง": laoplustext2,
      },
    },
    {
      หุ้นเกาหลี: {
        วันที่: koreastockdates,
        "3ตัวบน": koreastocktext1,
        "2ตัวล่าง": koreastocktext2,
      },
    },
    {
      หุ้นนิเคอิเช้า: {
        วันที่: nikeimorningdates,
        "3ตัวบน": nikeimorningtext1,
        "2ตัวล่าง": nikeimorningtext2,
      },
    },
    {
      หุ้นนิเคอิบ่าย: {
        วันที่: nikeimiddaydates,
        "3ตัวบน": nikeimiddaytext1,
        "2ตัวล่าง": nikeimiddaytext2,
      },
    },
    {
      หุ้นฮั่งเส็งเช้า: {
        วันที่: hungsengmorningdates,
        "3ตัวบน": hungsengmorningtext1,
        "2ตัวล่าง": hungsengmorningtext2,
      },
    },
    {
      หุ้นฮั่งเส็งบ่าย: {
        วันที่: hungsengmiddaydates,
        "3ตัวบน": hungsengmiddaytext1,
        "2ตัวล่าง": hungsengmiddaytext2,
      },
    },
    {
      หุ้นจีนเช้า: {
        วันที่: chinamorningdates,
        "3ตัวบน": chinamorningtext1,
        "2ตัวล่าง": chinamorningtext2,
      },
    },
    {
      หุ้นจีนบ่าย: {
        วันที่: chinamiddaydates,
        "3ตัวบน": chinamiddaytext1,
        "2ตัวล่าง": chinamiddaytext2,
      },
    },
    {
      หุ้นไต้หวัน: {
        วันที่: taiwanstockdates,
        "3ตัวบน": taiwanstocktext1,
        "2ตัวล่าง": taiwanstocktext2,
      },
    },
    {
      หุ้นสิงคโปร์: {
        วันที่: singaporestockdates,
        "3ตัวบน": singaporestocktext1,
        "2ตัวล่าง": singaporestocktext2,
      },
    },
    {
      หุ้นอินเดีย: {
        วันที่: indiastockdates,
        "3ตัวบน": indiastocktext1,
        "2ตัวล่าง": indiastocktext2,
      },
    },
    {
      หุ้นรัสเซีย: {
        วันที่: russiastockdates,
        "3ตัวบน": russiastocktext1,
        "2ตัวล่าง": russiastocktext2,
      },
    },
    {
      หุ้นอียิปต์: {
        วันที่: egyptstockdates,
        "3ตัวบน": egyptstocktext1,
        "2ตัวล่าง": egyptstocktext2,
      },
    },

    {
      หุ้นเยอรมัน: {
        วันที่: germanstockdates,
        "3ตัวบน": germanstocktext1,
        "2ตัวล่าง": germanstocktext2,
      },
    },

    {
      หุ้นอังกฤษ: {
        วันที่: englandstockdates,
        "3ตัวบน": englandstocktext1,
        "2ตัวล่าง": englandstocktext2,
      },
    },
    {
      หุ้นดาวโจนส์: {
        วันที่: dowjonestockdates,
        "3ตัวบน": dowjonestocktext1,
        "2ตัวล่าง": dowjonestocktext2,
      },
    },
  ];

  res.status(200).send(alldata);
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

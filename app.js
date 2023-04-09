const express = require("express");
const app = express();

// Importing Puppeteer core as default otherwise
// it won't function correctly with "launch()"
const puppeteer = require("puppeteer");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/huay", async (req, res) => {
  const password = req.body;

  //หวยรัฐบาล
  const thdatess =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-th.ml-2 > span.huay-card-period";
  const thnum1 =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div:nth-child(1) > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const th2under =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div:nth-child(1) > div:nth-child(2) > div.p-0.text-award-choke";
  const th3front =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div.d-flex.flex-row.huay-card-border-separate > div.text-center.w-50.huay-card-border-right.mt-1 > div.p-0.text-award-choke";
  const th4under =
    "#government-section > div.row.px-0.m-0 > div:nth-child(1) > div > div.p-0.huay-card-body > div.d-flex.flex-row.huay-card-border-separate > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยมาเลย์
  const mydatess =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-my.ml-2 > span.huay-card-period";
  const my3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const my2under =
    "#foreign-section > div.pc-view > div > div:nth-child(9) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาว3วัน
  const laodatess =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-la.ml-2 > span.huay-card-period";
  const lao3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const lao2under =
    "#foreign-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเช้า
  const laomorningdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lam.ml-2 > span.huay-card-period";
  const laomorning3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laomorning2under =
    "#foreign-section > div.pc-view > div > div:nth-child(7) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเที่ยง
  const laomiddaydatess =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lamid.ml-2 > span.huay-card-period";
  const laomidday3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laomidday2under =
    "#foreign-section > div.pc-view > div > div:nth-child(8) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวร่วมใจ
  const laotogetherdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-larj.ml-2 > span.huay-card-period";
  const laotogether3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laotogether2under =
    "#foreign-section > div.pc-view > div > div:nth-child(12) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาววิลล่า
  const laovilladatess =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lavl.ml-2 > span.huay-card-period";
  const laovilla3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laovilla2under =
    "#foreign-section > div.pc-view > div > div:nth-child(13) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวนคร
  const laocitydatess =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lank.ml-2 > span.huay-card-period";
  const laocity3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laocity2under =
    "#foreign-section > div.pc-view > div > div:nth-child(14) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวทูไนท์
  const laotonightdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-latn.ml-2 > span.huay-card-period";
  const laotonight3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laotonight2under =
    "#foreign-section > div.pc-view > div > div:nth-child(15) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวเศรษฐกิจ
  const laoeconomicdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-laeco.ml-2 > span.huay-card-period";
  const laoeconomic3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laoeconomic2under =
    "#foreign-section > div.pc-view > div > div:nth-child(16) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวดีเดย์
  const laoddaydatess =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-ladd.ml-2 > span.huay-card-period";
  const laodday3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laodday2under =
    "#foreign-section > div.pc-view > div > div:nth-child(17) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวรุ่งเรือง
  const laogrowdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-larr.ml-2 > span.huay-card-period";
  const laogrow3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laogrow2under =
    "#foreign-section > div.pc-view > div > div:nth-child(20) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยลาวพลัส
  const laoplusdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-lapls.ml-2 > span.huay-card-period";
  const laoplus3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const laoplus2under =
    "#foreign-section > div.pc-view > div > div:nth-child(21) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอย
  const hanoidatess =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-vn.ml-2 > span.huay-card-period";
  const hanoi3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoi2under =
    "#foreign-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยvip
  const hanoivipdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hc2.ml-2 > span.huay-card-period";
  const hanoivip3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoivip2under =
    "#foreign-section > div.pc-view > div > div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยพิเศษ
  const hanoispdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hc.ml-2 > span.huay-card-period";
  const hanoisp3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoisp2under =
    "#foreign-section > div.pc-view > div > div:nth-child(4) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยรอบดึก
  const hanoimidnightdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-n22.ml-2 > span.huay-card-period";
  const hanoimidnight3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoimidnight2under =
    "#foreign-section > div.pc-view > div > div:nth-child(5) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยเช้า
  const hanoimorningdatess =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hnm.ml-2 > span.huay-card-period";
  const hanoimorning3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoimorning2under =
    "#foreign-section > div.pc-view > div > div:nth-child(6) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยเดย์
  const hanoidaydatess =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hcd.ml-2 > span.huay-card-period";
  const hanoiday3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoiday2under =
    "#foreign-section > div.pc-view > div > div:nth-child(10) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยไชโย
  const hanoichaiyodatess =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hncy.ml-2 > span.huay-card-period";
  const hanoichaiyo3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoichaiyo2under =
    "#foreign-section > div.pc-view > div > div:nth-child(18) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยฮานอยท้องถิ่น
  const hanoilocaldatess =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-hnlocal.ml-2 > span.huay-card-period";
  const hanoilocal3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hanoilocal2under =
    "#foreign-section > div.pc-view > div > div:nth-child(19) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยออมสิน
  const aomsindatess =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-aom.ml-2 > span.huay-card-period";
  const aomsin3upper =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const aomsin2under =
    "#government-section > div.row.px-0.m-0 > div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยธกส
  const baacdatess =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-baac.ml-2 > span.huay-card-period";
  const baac3upper =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const baac2under =
    "#government-section > div.row.px-0.m-0 > div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  //หวยแคนาดา
  const canadadatess =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-ca.ml-2 > span.huay-card-period";
  const canada3upper =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const canada2under =
    "#foreign-section > div.pc-view > div > div:nth-child(11) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  /////////////////////// หวยหุ้น /////////////////////

  // หุ้นเกาหลี
  const koreastockdatess =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const koreastock3upper =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const koreastock2under =
    "#foreignStock-section > div.pc-view > div > div:nth-child(1) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นนิเคอิเช้า
  const nikeimorningdatess =
    "#foreignStock-section div:nth-child(2) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const nikeimorning3upper =
    "#foreignStock-section > div.pc-view > div > div:nth-child(2) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const nikeimorning2under =
    "div#foreignStock-section div:nth-child(2) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นนิเคอิบ่าย
  const nikeimiddaydatess =
    "div#foreignStock-section div:nth-child(3) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const nikeimidday3upper =
    "div#foreignStock-section div:nth-child(3) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const nikeimidday2under =
    "div#foreignStock-section div:nth-child(3) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นฮั่งเส็งเช้า
  const hungsengmorningdatess =
    "div#foreignStock-section div:nth-child(4) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const hungsengmorning3upper =
    "div#foreignStock-section div:nth-child(4) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hungsengmorning2under =
    "div#foreignStock-section div:nth-child(4) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นฮั่งเส็งบ่าย
  const hungsengmiddaydatess =
    "div#foreignStock-section div:nth-child(5) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const hungsengmidday3upper =
    "div#foreignStock-section div:nth-child(5) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const hungsengmidday2under =
    "div#foreignStock-section div:nth-child(5) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นจีนเช้า
  const chinamorningdatess =
    "div#foreignStock-section div:nth-child(6) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const chinamorning3upper =
    "div#foreignStock-section div:nth-child(6) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const chinamorning2under =
    "div#foreignStock-section div:nth-child(6) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นจีนบ่าย
  const chinamiddaydatess =
    "div#foreignStock-section div:nth-child(7) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const chinamidday3upper =
    "div#foreignStock-section div:nth-child(7) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const chinamidday2under =
    "div#foreignStock-section div:nth-child(7) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นไต้หวัน
  const taiwanstockdatess =
    "div#foreignStock-section div:nth-child(8) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const taiwanstock3upper =
    "div#foreignStock-section div:nth-child(8) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const taiwanstock2under =
    "div#foreignStock-section div:nth-child(8) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นสิงคโปร์
  const singaporestockdatess =
    "div#foreignStock-section div:nth-child(9) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const singaporestock3upper =
    "div#foreignStock-section div:nth-child(9) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const singaporestock2under =
    "div#foreignStock-section div:nth-child(9) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นไต้อินเดีย
  const indiastockdatess =
    "div#foreignStock-section div:nth-child(10) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const indiastock3upper =
    "div#foreignStock-section div:nth-child(10) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const indiastock2under =
    "div#foreignStock-section div:nth-child(10) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นรัสเซีย
  const russiastockdatess =
    "div#foreignStock-section div:nth-child(11) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const russiastock3upper =
    "div#foreignStock-section div:nth-child(11) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const russiastock2under =
    "div#foreignStock-section div:nth-child(11) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นอียิปต์
  const egyptstockdatess =
    "div#foreignStock-section div:nth-child(12) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const egyptstock3upper =
    "div#foreignStock-section div:nth-child(12) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const egyptstock2under =
    "div#foreignStock-section div:nth-child(12) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นเยอรมัน
  const germanstockdatess =
    "div#foreignStock-section div:nth-child(13) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const germanstock3upper =
    "div#foreignStock-section div:nth-child(13) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const germanstock2under =
    "div#foreignStock-section div:nth-child(13) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นอังกฤษ
  const englandstockdatess =
    "div#foreignStock-section div:nth-child(14) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const englandstock3upper =
    "div#foreignStock-section div:nth-child(14) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const englandstock2under =
    "div#foreignStock-section div:nth-child(14) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // หุ้นดาวน์โจนส์
  const dowjonestockdatess =
    "div#foreignStock-section div:nth-child(15) > div > div.p-1.mb-1.huay-card-header > span.huay-card-product.huay-card-product-stock.ml-2 > span.huay-card-period";
  const dowjonestock3upper =
    "div#foreignStock-section div:nth-child(15) > div > div.p-0.huay-card-body > div > div.text-center.w-50.huay-card-border-right.m-0 > div.p-0.text-award-choke";
  const dowjonestock2under =
    "div#foreignStock-section div:nth-child(15) > div > div.p-0.huay-card-body > div > div:nth-child(2) > div.p-0.text-award-choke";

  // Launch a new headless browser instance

  // Edge executable will return an empty string locally.
  const pathToExtension = "/usr/bin/chromium-browser";
  const browser = await puppeteer.launch({
    executablePath: pathToExtension,
    args: ["--disable-infobars", "--no-sandbox", "--disable-setuid-sandbox"],
    headless: false,
  });

  // Open a new page in the browser
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(0);

  // Navigate to the website you want to scrape
  await page.goto("https://www.mhandee.com/");

  // หวยไทย
  const thdate = await page.$(thdatess);
  const th1 = await page.$(thnum1);
  const th2 = await page.$(th2under);
  const th3 = await page.$(th3front);
  const th4 = await page.$(th4under);

  // หวยมาเลย์
  const mydate = await page.$(mydatess);
  const my1 = await page.$(my3upper);
  const my2 = await page.$(my2under);

  //หวยลาว จันทร์ พุธ ศุกร์
  const laodate = await page.$(laodatess);
  const lao1 = await page.$(lao3upper);
  const lao2 = await page.$(lao2under);

  //หวยลาวเช้า
  const laomorningdate = await page.$(laomorningdatess);
  const laomorning1 = await page.$(laomorning3upper);
  const laomorning2 = await page.$(laomorning2under);

  //หวยลาวเที่ยง
  const laomiddaydate = await page.$(laomiddaydatess);
  const laomidday1 = await page.$(laomidday3upper);
  const laomidday2 = await page.$(laomidday2under);

  //หวยลาวร่วมใจ
  const laotogetherdate = await page.$(laotogetherdatess);
  const laotogether1 = await page.$(laotogether3upper);
  const laotogether2 = await page.$(laotogether2under);

  //หวยลาววิลล่า
  const laovilladate = await page.$(laovilladatess);
  const laovilla1 = await page.$(laovilla3upper);
  const laovilla2 = await page.$(laovilla2under);

  //หวยลาวนคร
  const laocitydate = await page.$(laocitydatess);
  const laocity1 = await page.$(laocity3upper);
  const laocity2 = await page.$(laocity2under);

  //หวยลาวดีเดย์
  const laotonightdate = await page.$(laotonightdatess);
  const laotonight1 = await page.$(laotonight3upper);
  const laotonight2 = await page.$(laotonight2under);

  //หวยลาวเศรษฐกิจ
  const laoeconomicdate = await page.$(laoeconomicdatess);
  const laoeconomic1 = await page.$(laoeconomic3upper);
  const laoeconomic2 = await page.$(laoeconomic2under);

  //หวยลาวดีเดย์
  const laoddaydate = await page.$(laoddaydatess);
  const laodday1 = await page.$(laodday3upper);
  const laodday2 = await page.$(laodday2under);

  //หวยลาวรุ่งเรื่อง
  const laogrowdate = await page.$(laogrowdatess);
  const laogrow1 = await page.$(laogrow3upper);
  const laogrow2 = await page.$(laogrow2under);

  //หวยลาวพลัส
  const laoplusdate = await page.$(laoplusdatess);
  const laoplus1 = await page.$(laoplus3upper);
  const laoplus2 = await page.$(laoplus2under);

  //หวยฮานอย จันทร์ พุธ ศุกร์
  const hanoidate = await page.$(hanoidatess);
  const hanoi1 = await page.$(hanoi3upper);
  const hanoi2 = await page.$(hanoi2under);

  //หวยฮานอย vip
  const hanoivipdate = await page.$(hanoivipdatess);
  const hanoivip1 = await page.$(hanoivip3upper);
  const hanoivip2 = await page.$(hanoivip2under);

  //หวยฮานอยพิเศษ
  const hanoispdate = await page.$(hanoispdatess);
  const hanoisp1 = await page.$(hanoisp3upper);
  const hanoisp2 = await page.$(hanoisp2under);

  //หวยฮานอยรอบดึก
  const hanoimidnightdate = await page.$(hanoimidnightdatess);
  const hanoimidnight1 = await page.$(hanoimidnight3upper);
  const hanoimidnight2 = await page.$(hanoimidnight2under);

  //หวยฮานอยเช้า
  const hanoimorningdate = await page.$(hanoimorningdatess);
  const hanoimorning1 = await page.$(hanoimorning3upper);
  const hanoimorning2 = await page.$(hanoimorning2under);

  //หวยฮานอยเดย์
  const hanoidaydate = await page.$(hanoidaydatess);
  const hanoiday1 = await page.$(hanoiday3upper);
  const hanoiday2 = await page.$(hanoiday2under);

  //หวยฮานอยไชโย
  const hanoichaiyodate = await page.$(hanoichaiyodatess);
  const hanoichaiyo1 = await page.$(hanoichaiyo3upper);
  const hanoichaiyo2 = await page.$(hanoichaiyo2under);

  //หวยฮานอยท้องถิ่น
  const hanoilocaldate = await page.$(hanoilocaldatess);
  const hanoilocal1 = await page.$(hanoilocal3upper);
  const hanoilocal2 = await page.$(hanoilocal2under);

  //หวยออมสิน
  const aomsindate = await page.$(aomsindatess);
  const aomsin1 = await page.$(aomsin3upper);
  const aomsin2 = await page.$(aomsin2under);

  //หวยธกส
  const baacdate = await page.$(baacdatess);
  const baac1 = await page.$(baac3upper);
  const baac2 = await page.$(baac2under);

  //หวยแคนาดา
  const canadadate = await page.$(canadadatess);
  const canada1 = await page.$(canada3upper);
  const canada2 = await page.$(canada2under);

  //หวยหุ้น
  //หุ้นเกาหลี
  const koreastockdate = await page.$(koreastockdatess);
  const koreastock1 = await page.$(koreastock3upper);
  const koreastock2 = await page.$(koreastock2under);

  //หุ้นนิเคอิเช้า
  const nikeimorningdate = await page.$(nikeimorningdatess);
  const nikeimorning1 = await page.$(nikeimorning3upper);
  const nikeimorning2 = await page.$(nikeimorning2under);

  //หุ้นนิเคอิบ่าย
  const nikeimiddaydate = await page.$(nikeimiddaydatess);
  const nikeimidday1 = await page.$(nikeimidday3upper);
  const nikeimidday2 = await page.$(nikeimidday2under);

  //หุ้นฮั่งเส็งเช้า
  const hungsengmorningdate = await page.$(hungsengmorningdatess);
  const hungsengmorning1 = await page.$(hungsengmorning3upper);
  const hungsengmorning2 = await page.$(hungsengmorning2under);

  //หุ้นฮั่งเส็งบ่าย
  const hungsengmiddaydate = await page.$(hungsengmiddaydatess);
  const hungsengmidday1 = await page.$(hungsengmidday3upper);
  const hungsengmidday2 = await page.$(hungsengmidday2under);

  //หุ้นจีนเช้า
  const chinamorningdate = await page.$(chinamorningdatess);
  const chinamorning1 = await page.$(chinamorning3upper);
  const chinamorning2 = await page.$(chinamorning2under);

  //หุ้นจีนบ่าย
  const chinamiddaydate = await page.$(chinamiddaydatess);
  const chinamidday1 = await page.$(chinamidday3upper);
  const chinamidday2 = await page.$(chinamidday2under);

  //หุ้นเกาหลี
  const taiwanstockdate = await page.$(taiwanstockdatess);
  const taiwanstock1 = await page.$(taiwanstock3upper);
  const taiwanstock2 = await page.$(taiwanstock2under);

  //หุ้นสิงคโปร์
  const singaporestockdate = await page.$(singaporestockdatess);
  const singaporestock1 = await page.$(singaporestock3upper);
  const singaporestock2 = await page.$(singaporestock2under);

  //หุ้นอินเดีย
  const indiastockdate = await page.$(indiastockdatess);
  const indiastock1 = await page.$(indiastock3upper);
  const indiastock2 = await page.$(indiastock2under);

  //หุ้นรัสเซีย
  const russiastockdate = await page.$(russiastockdatess);
  const russiastock1 = await page.$(russiastock3upper);
  const russiastock2 = await page.$(russiastock2under);

  //หุ้นอียิปต์
  const egyptstockdate = await page.$(egyptstockdatess);
  const egyptstock1 = await page.$(egyptstock3upper);
  const egyptstock2 = await page.$(egyptstock2under);

  //หุ้นเยอรมัน
  const germanstockdate = await page.$(germanstockdatess);
  const germanstock1 = await page.$(germanstock3upper);
  const germanstock2 = await page.$(germanstock2under);

  //หุ้นอังกฤษ
  const englandstockdate = await page.$(englandstockdatess);
  const englandstock1 = await page.$(englandstock3upper);
  const englandstock2 = await page.$(englandstock2under);

  //หุ้นดาวโจนส์
  const dowjonestockdate = await page.$(dowjonestockdatess);
  const dowjonestock1 = await page.$(dowjonestock3upper);
  const dowjonestock2 = await page.$(dowjonestock2under);

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

  //หวยฮานอยพิเศษ
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
  await browser.close();
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

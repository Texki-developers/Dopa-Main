import foundation from "../../public/Assets/about/foundationCourse.png";
import admission from "../../public/Assets/about/dopaadmission.png";
import head from "../../public/Assets/about/headquaters.png";
import country from "../../public/Assets/about/countries.png";
import education from "../../public/Assets/home/video lecture.png";
import live from "../../public/Assets/home/live class.png";
import bank from "../../public/Assets/home/question bank.png";
import discussion from "../../public/Assets/home/discussion panel.png";
import doubt from "../../public/Assets/home/doubt clearance.png";
import quiz from "../../public/Assets/home/dopa quiz.png";
import test from "../../public/Assets/home/test series.png";
import mine from "../../public/Assets/about/dopa_mine.png";

let features = [
  {
    image: foundation,
    title: "Foundation courses for <br/> 8,9 and 10 th students",
  },
  {
    image: admission,
    title: "250+ Admissions in <br/> Top Colleges with in last year",
  },
  {
    image: country,
    title: "10,000+ students <br/> in 5+ countries",
  },
  {
    image: head,
    title: "Head Quarters <br/> in Calicut ,Kerala",
  },
];

let data = [
  {
    image: education,
    title: "Video <br/> Lectures",
  },
  {
    image: live,
    title: "Live <br/> Classes",
  },
  {
    image: bank,
    title: "Question <br/> Bank",
  },
  {
    image: doubt,
    title: "24x7 Doubt <br/> Clearance",
  },
  {
    image: quiz,
    title: "DOPA <br/> Quizzes",
  },
  {
    image: test,
    title: "Test <br/> Series",
  },
  {
    image: discussion,
    title: "Discussion <br/> Panel",
  },
  {
    image: mine,
    title: "DOPA_Mine",
  },
];
module.exports = {
  data,
  features,
};

export const projects = [
  {
    title: "Smart Reception",
    subtitle: "PHP/Laravel/VUE/Linux LAMP.",
    description:
      "During the pandemic, I created a WebApp solution that enables customers to request services directly through the company's reception system. The primary goal of this solution was to minimize direct contact with the receptionist, prioritizing safety and social distancing measures. I am proud to share that this solution successfully achieved 90% of its intended objectives, making a significant impact in ensuring a safer and more efficient customer experience.",
    image: "./smartreception2.gif",
    link: "https://github.com/edsonnaza/recep-v2",
  },
{
    title: "FaceTest",
    subtitle: "PHP/Laravel/VUE",
    description:
      "FaceTest is a web application I developed to enhance the security and integrity of online exams by detecting potential fraud. This application utilizes modules that can detect the user's face through the webcam while the exam is in progress. Once the test is completed, the system automatically generates incident reports, including photos and descriptions, to identify any suspicious activity. I had the opportunity to work on this project as a freelancer, ensuring its quality and effectiveness.",
    image: "./facetest.gif",
    link: "https://www.youtube.com/watch?v=tJLdJn77g5U",
  },
{
    title: "ShortURL",
    subtitle: "PHP/Laravel/API laravel Resource",
    description:
      "About shortURL, is a service to create awesome friendly URLs to make it easier for people to remember. Our team developed some mock views but they lack our awesome functionality. This project I've built this as a freeLancer.",
    image: "./shortURL.gif",
    link: "https://github.com/edsonnaza/shortURL",
  },
{
     title: "Contacts",
    subtitle: "PHP/Laravel/Linux LAMP.",
    description:
      "It is a simple but complete application to control customer contacts. Data that can be consumed by the sellers of the company, in addition to providing a process of orders indicating the status in three types, pending, accepted and rejected. The application was created in PHP, Laravel and Mysql. Linux LAMP server.",
    image: "./Contacts.gif",
    link: "https://github.com/edsonnaza/contacts",
  },
  {
    title: "Infomed - Integrated Medical Record",
    subtitle: "PHP/LARAVEL/LINUX LAMP",
    description:
      "The Infomed is a health records and medical practice management application, its features fully integrated electronic health records, practice management, scheduling, electronic billing, internationalization, patient scheduling, reports and more.",
    image: "./infomed.gif",
    link: "#",
  },
  {
    title: "OpenEMR",
    subtitle: "PHP/MySQL/Ubuntu Server 22 LTS",
    description:
      "OpenEMR is the most popular open source electronic health records and medical practice management solution. OpenEMR's goal is a superior alternative to its proprietary counterparts with passionate volunteers and contributors dedicated to guarding OpenEMR's status as a free.",
    image: "./openEMR.gif",
    link: "https://demo.openemr.io/openemr/interface/login/login.php?site=default",
  },
  {
    title: "Treelan",
    subtitle: "PHP/MySQL/Ubuntu Server 12.04 LTS.",
    description:
      "It is a management tool for ophthalmology clinics that brings together the latest technology in the development of highly complex Web-based applications.",
    image: "./treelan.gif",
    link: "https://treelan.net/",
  },
];

export const testimonials = [
  {
    quote:
      "It's so greatfull and amazing work with him. A men who can help you anytime when you need it, does'nt matter the time or the day.",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    name: "Joel Epping - Front End Developer at Rappi.",
    company: "Rappi Inc.",
  },
  {
    quote:
      "I just wanted to take a moment to thank you, Edson, for making our team so special. Everything was great, the pre-planning and selection with Nanci, Kevin and his team pulled it all together and were amazing!!!!  Our entire group had a wonderful time, for a great cause.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Shahriar Arif - Front End Developer at Microverse.",
    company: "Microverse.com",
  },
];

export const skills = [
  "PHP/Laravel",
  "JavaScript",
  "React",
  "Vue.js",
  "Node",
  "Tailwind",
  "Bootstrap",
 "AdminLTE",
"Docker",
"CI/CD: GitHub-Netlify",
"PHPUnit - TDD",
"Desing Pattern",
"SOLID Principles",

];


export const phpCode = `<?php
interface Printable {
    public function print();
}

abstract class Element implements Printable {
    protected $content;

    public function __construct($content) {
        $this->content = $content;
    }

    public function print() {
        echo $this->content;
    }

    abstract public function add();
}

class Paragraph extends Element {
    public function add() {
        return "<p>" . $this->content . "</p>";
    }
}

class Title extends Element {
    public function add() {
        return "<h1>" . $this->content . "</h1>";
    }
}

$paragrah = new Paragrah("This is an example of a paragrah.");
$paragrahHTML = $paragrah->add();
echo $paragrahHTML;

$title = new Title("Example of a Title");
$titleHTML = $title->add();
echo $titleHTML;
?>`;



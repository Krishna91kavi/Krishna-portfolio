import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  MessageCircle,
} from 'lucide-react';
import {
  ArrowUpRight,
  Award,
  Bug,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  TestTube2,
  Workflow,
  X,
} from 'lucide-react';
import './styles.css';


const P = {email:'Krishna91kavi@gmail.com',phone:'+91 9771568124',location:'Bangalore, India',photo:'/profile.jpg',resume:'/Krishna-Kumar-Resume.pdf'};
const exp = [['Jun 2026 — Present','Quality Analyst','Eastencher Software Private Limited','Bangalore',['Healthcare application testing using manual and automation approaches.','Designed and executed functional, regression, integration, UI/UX, E2E and exploratory test cases.','Identified and reported 1,500+ defects across frontend, backend, UI/UX and Figma implementation over 14 Agile sprints.','Validated field rules, business logic, responsive behavior, APIs, payloads, status codes and integrations.','Reviewed Figma designs against implementation and collaborated with developers, designers and stakeholders for retest and closure.'],['Healthcare QA','1,500+ Defects','14 Sprints','Manual + Automation']],['May 2025 — Dec 2025','QA Trainee','Kodnest Technologies Private Limited','Bangalore',['Built foundations in software testing, SDLC, STLC, Agile and QA processes.','Created and executed functional, UI, regression and validation test cases.','Practiced Selenium WebDriver fundamentals and basic automation.','Worked with Postman/REST API basics and SQL fundamentals for data validation.'],['Selenium','Postman','SQL','STLC']],['Oct 2024 — Feb 2025','QA Freelancer','IndiaMART InterMESH','Remote',['Prepared detailed test cases and performed functional and regression testing for web workflows.','Reported defects with clear reproduction steps, expected results and actual results.','Performed responsive and cross-browser testing across multiple devices and browsers.','Coordinated with production teams and retested fixes before closure.'],['Functional QA','Regression','Responsive','Defect Tracking']]];

const skills = {Testing:['Manual Testing','Functional Testing','Regression Testing','Integration Testing','End-to-End Testing','Exploratory Testing','Smoke / Sanity Testing','UI/UX Testing','Responsive Testing','Cross-Browser Testing','Boundary Value Analysis','Test Case Design & Execution'],'Automation & API':['Selenium WebDriver','Playwright — Hands-on Practice','Postman','REST API Testing','HTTP Methods / Status Codes','JSON Validation','CRUD API Validation'],'Tools & Process':['JIRA','Git / GitHub','Azure DevOps','Chrome DevTools','SQL for QA Data Validation','JMeter Fundamentals','SDLC','STLC','Agile / Scrum','Defect Lifecycle','Figma Review','Java Fundamentals','Python Fundamentals']};

const projects = [['ShopEase','E-Commerce Web Application','Tested product search, cart, checkout and payment gateway workflows. Reported 20+ UI/UX bugs and major checkout defects; performed cross-browser and E2E testing.'],['EduTrack','Online Admission Portal','Performed functional, UI, validation and boundary-value testing. Designed and executed 80+ test cases for login, forms and user flows.']];

function App() {const [d, setD] = useState(true);
  const [open, setOpen] = useState(false);useEffect(() => {
    document.documentElement.dataset.theme = d ? 'dark' : 'light';
  }, [d]);const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };return <>
      <header>
      <div className="nav">
      <button className="brand" onClick={()=>go('home')}>
      <b>KK</b>
      <span>KRISHNA KUMAR<small>SOFTWARE TESTER</small>
      </span>
      </button>
      <nav className={open?'open':''}>{['home','about','experience','skills','projects','contact'].map(x=>
      <button key={x} onClick={()=>go(x)}>{x}</button>)}</nav>
      <div className="actions">
      <button className="round" onClick={()=>setD(!d)}>{d?<Sun/>:<Moon/>}</button>
      <a className="resume" href={P.resume} download>
      <Download/> Resume</a>
      <button className="round mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      </div>
      </header>
      <main id="home">
      <section className="hero">
      <div className="glow g1"/>
      <div className="glow g2"/>
      <div className="wrap heroGrid">
      <div>
      <label>● AVAILABLE FOR QA OPPORTUNITIES</label>
      <h1>Breaking software<br/>
      <em>before users do.</em>
      </h1>
      <p className="lead">I'm <strong>Krishna Kumar</strong>, a Software Tester / Quality Analyst focused on finding meaningful defects, validating real user journeys and helping teams ship reliable software.</p>
      <div className="metrics">
      <span>
      <b>1,500+</b>Defects found</span>
      <span>
      <b>14</b>Agile sprints</span>
      <span>
      <b>Manual +</b>Automation QA</span>
      </div>
      <div className="buttons">
      <button className="primary" onClick={()=>go('experience')}>Explore my work <ArrowUpRight/>
      </button>
      <a className="secondary" href={'mailto:'+P.email}>Let's connect <Mail/>
      </a>
      </div>
      <div className="contactMini">
      <a href={'mailto:'+P.email}>
      <Mail/> {P.email}</a>
      <a href={'tel:'+P.phone.replace(/\s/g,'')}>
      <Phone/> {P.phone}</a>
      </div>
      </div>
      <div className="visual">
      <div className="orbit a"/>
      <div className="orbit b"/>
      <div className="card">
      <div className="photo">
      <img src={P.photo} alt="Krishna Kumar"/>
      <i>
      <CheckCircle2/>
      </i>
      </div>
      <small>QUALITY ENGINEER</small>
      <h3>Krishna Kumar</h3>
      <p>
      <MapPin/> Bangalore, India</p>
      <span className="chip c1">
      <Bug/> 1,500+ bugs</span>
      <span className="chip c2">
      <TestTube2/> QA + Automation</span>
      <span className="chip c3">
      <ShieldCheck/> Release ready</span>
      </div>
      </div>
      </div>
      <button className="scroll" onClick={()=>go('about')}>
      <ChevronDown/> Scroll to explore</button>
      </section>
      <section id="about" className="section dark">
      <div className="wrap">
      <div className="heading">
      <label>01 / ABOUT</label>
      <h2>Quality is not a final step.<br/>
      <em>It is a way of building.</em>
      </h2>
      </div>
      <div className="two">
      <div>
      <p className="big">I approach QA from the user's perspective and the system's perspective — validating functionality, data, APIs, visual implementation and edge cases before they become production problems.</p>
      <p>My recent work includes healthcare application testing across <b>14 Agile sprints</b>, where I identified and reported <b>1,500+ defects</b> across frontend, backend, UI/UX and Figma implementation.</p>
      <div className="pills">
      <span>Curious tester</span>
      <span>Detail oriented</span>
      <span>Risk focused</span>
      <span>Team player</span>
      </div>
      </div>
      <div className="panel">
      <div className="panelTitle">
      <Sparkles/> QA TOOLKIT</div>{[['Selenium / Playwright','Automation & regression workflows',Code2],['Postman / REST API','Requests, responses, JSON & CRUD validation',Workflow],['SQL / DevTools','Data validation & browser debugging',Database],['JIRA / Agile','Defects, sprint testing & collaboration',Bug]].map(([a,b,I])=>
      <div className="tool">
      <I/>
      <span>
      <b>{a}</b>
      <small>{b}</small>
      </span>
      </div>)}</div>
      </div>
      </div>
      </section>
      <section id="experience" className="section">
      <div className="wrap">
      <div className="heading">
      <label>02 / EXPERIENCE</label>
      <h2>Hands-on QA across<br/>
      <em>real product workflows.</em>
      </h2>
      </div>
      <div className="timeline">{exp.map((e,i)=>
      <article className="job" key={e[2]}>
      <div className="dot">{i===0?<ShieldCheck/>:<Code2/>}</div>
      <div className="jobcard">
      <div className="period">{e[0]} {i===0&&<span>● CURRENT</span>}</div>
      <h3>{e[1]}</h3>
      <h4>{e[2]} <small>• {e[3]}</small>
      </h4>
      <ul>{e[4].map(x=>
      <li key={x}>
      <CheckCircle2/>{x}</li>)}</ul>
      <div className="tags">{e[5].map(x=>
      <span key={x}>{x}</span>)}</div>
      </div>
      </article>)}</div>
      </div>
      </section>
      <section id="skills" className="section dark">
      <div className="wrap">
      <div className="heading">
      <label>03 / SKILLS</label>
      <h2>A practical stack for<br/>
      <em>finding what matters.</em>
      </h2>
      </div>
      <div className="skillGrid">{Object.entries(skills).map(([k,v],i)=>
      <div className="skill" key={k}>
      <small>0{i+1}</small>
      <h3>{k}</h3>
      <div>{v.map(x=>
      <span key={x}>{x}</span>)}</div>
      </div>)}</div>
      <div className="api">
      <div>
      <label>API TESTING</label>
      <h3>CRUD validation mindset</h3>
      </div>
      <div className="apiGrid">{[['POST','Create'],['GET','Fetch'],['PUT','Update'],['DELETE','Delete']].map(x=>
      <div key={x[0]}>
      <b className={'m '+x[0].toLowerCase()}>{x[0]}</b>
      <span>
      <strong>{x[1]}</strong>
      <small>Payloads • Auth • Status codes • JSON</small>
      </span>
      </div>)}</div>
      </div>
      </div>
      </section>
      <section id="projects" className="section">
      <div className="wrap">
      <div className="heading">
      <label>04 / PROJECTS</label>
      <h2>Testing that tells<br/>
      <em>a story.</em>
      </h2>
      </div>
      <div className="projectGrid">{projects.map((p,i)=>
      <article className="project" key={p[0]}>
      <small>0{i+1}</small>
      <ShieldCheck/>
      <label>{p[1]}</label>
      <h3>{p[0]}</h3>
      <p>{p[2]}</p>
      </article>)}</div>
      <div className="education">
      <GraduationCap/>
      <div>
      <label>EDUCATION</label>
      <h3>Master of Computer Application (MCA)</h3>
      <p>Graphic Era University, Dehradun • 2022–2024</p>
      </div>
      <div>
      <h3>Bachelor of Computer Application (BCA)</h3>
      <p>Magadh University, Gaya • 2018–2021</p>
      </div>
      </div>
      </div>
      </section>
      <section className="section stats">
      <div className="wrap">
      <div className="heading center">
      <label>05 / IMPACT</label>
      <h2>Numbers behind the<br/>
      <em>testing discipline.</em>
      </h2>
      </div>
      <div className="statGrid">{[['1,500+','Defects identified','Frontend, backend, UI/UX and Figma'],['14','Agile sprints','Healthcare application testing'],['80+','Test cases','Admission portal workflows'],['20+','UI/UX defects','ShopEase project']].map(x=>
      <div className="stat" key={x[1]}>
      <Award/>
      <b>{x[0]}</b>
      <strong>{x[1]}</strong>
      <small>{x[2]}</small>
      </div>)}</div>
      </div>
      </section>
      <section id="contact" className="section contact">
      <div className="wrap">
      <div className="contactBox">
      <div>
      <label>06 / CONTACT</label>
      <h2>Have a product that<br/>
      <em>needs breaking?</em>
      </h2>
      <p>Let's talk about QA, testing challenges, automation or your next software release.</p>
      </div>
     <div className="contactLinks">
  <div className="contactActions">
    <a className="primary contactBtn" href={`mailto:${P.email}`}>
      <Mail /> Email 
    </a>

    <a
      className="whatsapp contactBtn"
      href={`https://wa.me/919771568124?text=${encodeURIComponent(
        "Hi Krishna, I came across your portfolio and would like to discuss a QA opportunity."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
      WhatsApp 
    </a>
  </div>

  <a href={`tel:${P.phone.replace(/\s/g, '')}`}>
    <Phone /> {P.phone}
  </a>

  <a href={`mailto:${P.email}`}>
    <Mail /> {P.email}
  </a>

  <span>
    <MapPin /> {P.location}
  </span>
</div>
      </div>
      </div>
      </section>
      </main>
      <footer>
      <div className="wrap">
      <b>KRISHNA KUMAR</b>
      <span>Software Tester / Quality Analyst</span>
      <span>Built with curiosity • Tested with intent</span>
      <button onClick={()=>go('home')}>
      <ArrowUpRight/>
      </button>
      </div>
      </footer>
      </>};

createRoot(document.getElementById('root')).render(<App />);

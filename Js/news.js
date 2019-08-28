var LatestNews = 
[
    { 
        title: "Introductory to Information Technology",
        details: "An introductory course in computer science and information technology for university freshman students of all majors. The course aims to develop the computational thinking analytical skills, introduce the students to information technology fundamentals, and prepare the students for the digital job market.",
        image: "Res/img6.jpg"
        
    },
    { 
        title: "Short-Programs Capacity Building Scholarship",
        details: "The Intensive Training Programs aim to maximize awareness and knowledge outreach and to promote the ICT culture across Egypt and its remote suburbs. ITP target undergraduates, fresh university graduates",
        image: "Res/img7.jpg"
    }

]
var newIndex = -1;
setInterval(ShowNews, 2000);
function ShowNews()
{
    newIndex = (newIndex + 1 ) % LatestNews.length;
    document.getElementById("newsImage").src = LatestNews[newIndex].image;
    document.getElementById("newsTitle").innerHTML = LatestNews[newIndex].title;
    document.getElementById("newsDetails").innerHTML = LatestNews[newIndex].details;
}
//
//
//
var LatestEvents = 
[
    { 
        title: "ICT Talents for Tomorrow",
        details: "The workshop is under the auspices and will be attended by both of H.E. Dr. Amr Talaat the Minister of ICT and H.E. Prof. Dr. Khaled Abd-El-Ghaffar the Minister of Higher Education and Scientific Research on Tuesday 22nd January 2019 in ITI premises in Smart Village from 10:00 am to 5:00 pm.",
        image: "Res/new2.jpg"
    },
    { 
        title: "Introductory to Information Technology",
        details: "An introductory course in computer science and information technology for university freshman students of all majors. The course aims to develop the computational thinking analytical skills, introduce the students to information technology fundamentals, and prepare the students for the digital job market.",
        image: "Res/new3.jpg"
        
    },
    { 
        title: "Short-Programs Capacity Building Scholarship",
        details: "The Intensive Training Programs aim to maximize awareness and knowledge outreach and to promote the ICT culture across Egypt and its remote suburbs. ITP target undergraduates, fresh university graduates",
        image: "Res/new1.jpg"
    }

]
var eventsIndex = -1;
setInterval(ShowEvents, 3000);
function ShowEvents()
{
    eventsIndex = (eventsIndex + 1 ) % LatestEvents.length;
    document.getElementById("eventsImage").src = LatestEvents[eventsIndex].image;
    document.getElementById("eventsTitle").innerHTML = LatestEvents[eventsIndex].title;
    document.getElementById("eventsDetails").innerHTML = LatestEvents[eventsIndex].details;
}

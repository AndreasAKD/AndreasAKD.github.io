const navigationSlide = () => {

    const navigationLinks = document.querySelectorAll('.nav-links li');
    const hamburger = document.querySelector('.burger');
    const navigation = document.querySelector('.nav-links');

    hamburger.addEventListener("click", function() {
        // Toggle navigation
        navigation.classList.toggle('nav-active');

        // Animationlänkar
        navigationLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `LinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        hamburger.classList.toggle('toggle');
    });
};
navigationSlide();

    
//fetch the xml data when page lodes
document.addEventListener('DOMContentLoaded', ()=> {

         let fil = "projectData.xml";
         fetch(fil)
         .then(response=>response.text())
         .then(data=> {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
       
            portfolioTable(xml);
         });
       });


       //creating a table based on xml file
       function portfolioTable(xml)
       {
        var i;
        var table ="";
        var x = xml.getElementsByTagName("project");
        var img = document.createElement('img');

               for (i = 0; i < x.length; i++)
           {
             img = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            

               table += "<td><ul style= list-style-type:none><li><p>Manager</p>" +
               x[i].getElementsByTagName("manager")[0].childNodes[0].nodeValue +
               "</li><li><p>Title</p>" +
               x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
               "</li><li><p>Customer</p>"+
               x[i].getElementsByTagName("customer")[0].childNodes[0].nodeValue +
               "</li><li><p>Start</p>"+
               x[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue +
               "</li><li><p>End</p>" +
               x[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue +
               "</li> " +
               "<li ><img src='"+img+"'></li><li><p>Description</p>" +
               x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +

               "</li></ul></td>";

          }

          document.getElementById("xmlTable").innerHTML = table;
       }

       



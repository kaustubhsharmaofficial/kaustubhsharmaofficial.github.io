
    // start by getting all the questions and answers
    // these will be put into arrays
    
    var questions = document.getElementsByTagName('dt');
    var answers = document.getElementsByTagName('dd');
    
    // function for the link that turns them all off
    function toggleAllOff(){
        for (var i = 0; i < answers.length; i++) {
            answers[i].className = 'hide';
        };
    
        var modifier = "";
    
        for (var j = 0; j < questions.length; j++) {
    
            var modifier = questions[j].innerHTML.slice(0, 2);
    
            if (modifier == '- ') {
                questions[j].innerHTML = '+ ' + questions[j].innerHTML.slice(2, questions[j].innerHTML.length);
            }
            
        };
    
    }
    
    // function for the link that turns them all on
    function toggleAllOn(){
        for (var i = 0; i < answers.length; i++) {
            answers[i].className = 'show';
        };
    
        for (var j = 0; j < questions.length; j++) {
    
            var modifier = questions[j].innerHTML.slice(0, 2);
    
            if (modifier == '+ ') {
                questions[j].innerHTML = '- ' + questions[j].innerHTML.slice(2, questions[j].innerHTML.length);
            }
        };
    
    }
    
    
    function toggleNext(el) {
     var next=el.nextSibling;
    
     next.style.display=((next.style.display=="none") ? "block" : "none");
    }
    
    
    //makes the definition lists click-able
    function displayToggle(){
    
     toggleAllOff(); // calls the toggle all off function to turn all the answers off when the page is loaded
    
      for (i=0; i<questions.length; i++) { // loops through the questions a
          questions[i].onclick = function () { // shows the answers onclick
    
              var modifier = this.innerHTML.slice(0, 2);
    
              if (modifier == '+ ') {
                  this.innerHTML = '- ' + this.innerHTML.slice(2, this.innerHTML.length);
              }
              else
              {
                  this.innerHTML = '+ ' + this.innerHTML.slice(2, this.innerHTML.length);
              }
    
         var next = this.nextSibling;
        while(next.nodeType != 1) next=next.nextSibling; // if it gets to a non-element node, go to the next one
        next.className=((next.className=="hide") ? "show" : "hide");
      }
      }
    }
    
    //Hides mshelp links for Win10 OS
    function hideMsHelpLinksForWin10(){
                    var isWin7OrWin8 = (navigator.appVersion.indexOf("Windows NT 6.1") >= 0 || navigator.appVersion.indexOf("Windows NT 6.2") >= 0 || navigator.appVersion.indexOf("Windows NT 6.3") >= 0);
                    if (!isWin7OrWin8){
                                    var seeAlso = document.getElementById('divSeeAlso');
                                    if (seeAlso) {
                                                    seeAlso.style.display = "none";
                                    }
                    }
    }
    
    //Format the FAQs so that the style is consistent with expanders in HPSA
    function formatFAQs() {
    
        var modifier = "";
    
        for (var j = 0; j < questions.length; j++) {
    
            var modifier = questions[j].innerHTML.slice(1,3);
    
            if (modifier == '- ')  {
                questions[j].innerHTML = '+ ' + questions[j].innerHTML.slice(3, questions[j].innerHTML.length);;
            }
            else{
                if (modifier != '+ ') {
                    questions[j].innerHTML = '+ ' + questions[j].innerHTML;
                }
            }
    
            questions[j].style.fontWeight = "400";
            questions[j].style.color = "#0096d6";
            questions[j].style.textDecoration = "none";
    
    
        };
    
        var myElements = "";
        if (document.querySelectorAll)
        {
            myElements = document.querySelectorAll(".a_toggle");
        }
        else
        {
            myElements = getElementsByClassName("a_toggle");
        }
    
        for (var i = 0; i < myElements.length; i++) {
            myElements[i].style.display = "inline-block";
        }
        
    }
    
    function getElementsByClassName(cl) {
        var retnode = [];
        var elem = document.getElementsByTagName('*');
        for (var i = 0; i < elem.length; i++) {
            if ((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
        }
        return retnode;
    };
    
    // initiates the click-able dt's when the page loads
    window.onload=function() {
                    displayToggle();
                    hideMsHelpLinksForWin10();
                    formatFAQs();
                    }
    
    

    
 
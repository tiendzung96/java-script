const DOMstrings = {
    facebookCheck: '#facebook',
    engagementLvl: '#engagementLevel',
    inputBtn: '.inputBtn',
    engagementContainer: '.engagement-time-container'
};

const engagementURL = 'https://raw.githubusercontent.com/tiendzung96/java-script/master/engagement-time-object.json';

fetch(engagementURL)
.then((response) => response.json())
.then((engagementObject) => {
console.log(engagementObject);

    //DATA CONTROLLER
    const DataController =(function(){

        let currentTime, currentYear, currentHour, days, currentDayData;
        currentTime = new Date();
        currentHour = currentTime.getHours();

        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        currentDayData = currentTime.getDay();
        currentDay = days[currentTime.getDay()]
           
        return{
            getSocialMedia: function(){
                let value, form, name;
                // get list of radio buttons with specified name
                form = document.getElementById('form');
                name = 'social-media';
                var radios = form.elements[name];
                
                // loop through list of radio buttons
                for (var i=0, len=radios.length; i<len; i++) {
                    if ( radios[i].checked ) { // radio checked?
                        value = radios[i].value; // if so, hold its value in value
                        break; // and break out of for loop
                    }
                }
                return value; // return value of checked radio or undefined if none checked
            },
            getEngagementValue: function(){
                return document.querySelector(DOMstrings.engagementLvl).value;   
            },
            // getNextPostingTime: function(){
            //     for (i = 0; i < 3; i++){
            //         let postingTime = engagementObject;
            //         if (currentDayData > 3) {

            //         }
            //     }
            // }
        }

    })();
    
    //UI CONTROLLER
    const UIController = (function(){

        return{
        
            // displayData: function(obj){
            //     let html, newHtml, element;
            //     //Create HTML String with placeholder text
            //     element = DOMstring.engagementContainer;
            //     html = '<h2>The Next Time to Post</h2><div><section class = "engagement-time time-0"><p class = "day-of-week">%day-0%</p><p class = "time-of-day">%time-range-0%</p></section><section class = "engagement-time time-2"><p class = "day-of-week">%day-1%</p><p class = "time-of-day">%time-range-1%</p></section><section class = "engagement-time time-2"><p class = "day-of-week">%day-2%</p><p class = "time-of-day">%time-range-2%</p></section></div>'
            //     //Replace placeholder text with actual data
            //     newHtml = newHtml.replace('%day-0%', obj.day[0]);
            // }
            
        }

    })();


    //GLOBAL APP CONTROLLER
    const controller = (function(UICtrl, DataCtrl){

        const outputData = function(){
            let engagement, socialMedia;
            engagement = DataCtrl.getEngagementValue();
            socialMedia = DataCtrl.getSocialMedia();
            console.log(socialMedia);
            
        }

        const setupEventListeners = function(){

            document.querySelector(DOMstrings.inputBtn).addEventListener('click', outputData);
            // document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        };
        
        return{
            init: function(){
                console.log('Application started.');
                setupEventListeners();
                
            }
        }

    })(UIController, DataController);

    controller.init();



}); 


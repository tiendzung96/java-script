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
           
        return{
            getDay: function(){
                var opt, sel;
                sel = document.getElementById('weekDay');
                for ( var i = 0; i < sel.options.length; i++ ) {
                    opt = sel.options[i];
                    if (opt.selected) {
                        break;
                    }
                }
                return opt.value;
                        
                // display its value and text
                console.log( opt.value );
                console.log( opt.text );
            },
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

            getPostingTime: function(weekDay, socialMedia, engagement){
                // console.log(engagementObject);
                let socialMediaObject;
    
                socialMediaObject = engagementObject.find(element  => element.attributes["social-media"] === socialMedia);
                console.log(socialMediaObject);
            }
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
            let weekDay, socialMedia, engagement ;
            weekDay = DataCtrl.getDay();
            socialMedia = DataCtrl.getSocialMedia();
            engagement = DataCtrl.getEngagementValue();
            console.log(weekDay, socialMedia, engagement);
            DataCtrl.getPostingTime(weekDay, socialMedia, engagement);
            
            
        }

        const setupEventListeners = function(){

            document.querySelector(DOMstrings.inputBtn).addEventListener('click', outputData);

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


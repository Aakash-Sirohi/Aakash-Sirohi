document.addEventListener("DOMContentLoaded", function() {
    const text = ["Hi , I am Aakash Sirohi.",
                    "I was born in Ghaziabad, Uttar Pradesh, India.",
                        "on 13th November 1997."]; 
    const typingEffectElement = document.getElementById("typing-effect");
    // const map = document.getElementById("map");
    // map.style.display = "none";
    let currentCharIndex = 0;
    let currentTextIndex =0;
    async function typeNextCharacter() {
        
        if(currentTextIndex<text.length){
            const currenttext = text[currentTextIndex];
            if (currentCharIndex < currenttext.length) {
                const currentChar = currenttext.charAt(currentCharIndex);
                // Each character is inside of span now
                typingEffectElement.innerHTML += `<span>${currentChar}</span>`;
                currentCharIndex++;
                setTimeout(typeNextCharacter, 10); // Adjust typing speed (in milliseconds)
            } else{
                currentTextIndex++;
                currentCharIndex=0;
                typingEffectElement.innerHTML += "<br>";
                setTimeout(typeNextCharacter,1000);
            }
            
        }else{
            
            simplemaps_countrymap.load();
            await pauseForThreeSeconds();
            simplemaps_countrymap.state_zoom(33);
            
            typeNextCharacter2();
        }
        
    }

    function pauseForThreeSeconds() {
        return new Promise(resolve => setTimeout(resolve, 1000));
      }
   

    typeNextCharacter();
    
    let currentSchoolCharIndex = 0;
    let currentSchoolTextIndex =0;
    const school_text = ["Let me tell you about my schooling.", 
                            "I did all of it at Ryan International School",
                                "I pursed Science stream with subjects -",
                                "Physics, Chemistry and Mathematics.",
                                    "Percentage: 90.6"];
    const typingEffectElement2 = document.getElementById("school-typing-effect");
    
    async function typeNextCharacter2() {
        
        if(currentSchoolTextIndex<school_text.length){
            const currenttext = school_text[currentSchoolTextIndex];
            if (currentSchoolCharIndex < currenttext.length) {
                const currentChar = currenttext.charAt(currentSchoolCharIndex);
                // Each character is inside of span now
                typingEffectElement2.innerHTML += `<span>${currentChar}</span>`;
                currentSchoolCharIndex++;
                setTimeout(typeNextCharacter2, 10); // Adjust typing speed (in milliseconds)
            } else{
                currentSchoolTextIndex++;
                currentSchoolCharIndex=0;
                typingEffectElement2.innerHTML += "<br>";
                setTimeout(typeNextCharacter2,1000);
            }
            
        }else{
            
            //simplemaps_countrymap.load();
            await pauseForThreeSeconds();
            simplemaps_countrymap.state_zoom(34);
            
            typeNextCharacter3();
        }

        function pauseForTwoSeconds() {
            return new Promise(resolve => setTimeout(resolve, 1000));
          }

    }

    let currentCollegeCharIndex = 0;
    let currentCollegeTextIndex = 0;
    const college_text = ["I went to a beautiful college in Mountains", 
                            "University of Pertroleum and Energy Studies",
                                "I wanted to take AeroSpace Engineering",
                                    "But I eventually Landed up taking up Computer Science and Engineering",
                                        "Cumulative Grade Point Average: 6.6/10"];

                                    
    const typingEffectElement3 = document.getElementById("college-typing-effect");
    
    async function typeNextCharacter3() {
        
        if(currentCollegeTextIndex<college_text.length){
            const currenttext = college_text[currentCollegeTextIndex];
            if (currentCollegeCharIndex < currenttext.length) {
                const currentChar = currenttext.charAt(currentCollegeCharIndex);
                // Each character is inside of span now
                typingEffectElement3.innerHTML += `<span>${currentChar}</span>`;
                currentCollegeCharIndex++;
                setTimeout(typeNextCharacter3, 10); // Adjust typing speed (in milliseconds)
            } else{
                currentCollegeTextIndex++;
                currentCollegeCharIndex=0;
                typingEffectElement3.innerHTML += "<br>";
                setTimeout(typeNextCharacter3,1000);
            }
            
        }
        function pauseForTwoSeconds() {
            return new Promise(resolve => setTimeout(resolve, 1000));
          }

    }
    
    
});



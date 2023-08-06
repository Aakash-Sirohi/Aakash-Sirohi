document.addEventListener("DOMContentLoaded", function() {
    const text = ["Hi , I am Aakash Sirohi.", "I was born in Ghaziabad, Uttar Pradesh, India.","on 13th November 1997."]; // Replace "Your Name" with your actual name
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
        return new Promise(resolve => setTimeout(resolve, 2000));
      }
   

    typeNextCharacter();
    
    let currentSchoolCharIndex = 0;
    let currentSchoolTextIndex =0;
    const school_text = ["Let me tell you about my schooling.", "I studied at Ryan International School from Kindergarden uptil 12th Standard","I pursed science stream with subjects namely Physics, Chemistry and Mathematics."];
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
            
        }
        function pauseForTwoSeconds() {
            return new Promise(resolve => setTimeout(resolve, 2000));
          }

    }
    
    
});

document.addEventListener("DOMContentLoaded",function(){
    const text = ["Hi , I am Aakash Sirohi.", "I was born in Ghaziabad, Uttar Pradesh, India.","on 13th November 1997."]; // Replace "Your Name" with your actual name
})


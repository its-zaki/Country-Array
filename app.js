const div = document.querySelector("div")
const paragraph = document.querySelector("p")
const countries = ["1. China", "2. India", "3. America", "4. Indonesia", "5. Pakistan","6. Brazil", "7. Nigeria", "8. Bangladesh", "9. Russia","10. Mexico", "11. Japan", "12. Ethiopia","13. Philippines", "14. Egypt","15. Vietnam", "16. D.R.Congo", "17. Turkey", "18. Iran", "19. Germany", "20. Thailand" ]
for (i=0; i<countries.length; i++){
    div.innerHTML +=`<button class="btn" onclick="show_item(${i})">${countries[i]}</button>`
}
function show_item (i){
    paragraph.innerHTML += ` ${countries[i]},  ` 

}


        let counter = 0;

        function hello(){
            counter++;
            document.querySelector("h2").innerHTML = counter;

            if (counter % 10 === 0){

                alert(`Counter is now ${counter}`)
            }

        
        }
        document.addEventListener("DOMContentLoaded", function(){
            document.querySelector("button").onclick = hello;
            document.querySelector("form").onsubmit = function(){

                 
            };
            const name = document.querySelector("#name").value;
                 alert(name);



        })
        
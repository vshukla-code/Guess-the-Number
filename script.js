let number ;
const generate_number=()=>{
    let n1=Math.random();
    // console.log(n1)
    let n2=n1*10;
    // console.log(n2)
    n2=Math.trunc(n2)
    // console.log(n2)
    n2=(n2%10)+1;
    // n2=(n2%6)+1;
    // console.log(n2)

    number=n2;
    console.log(number)
}

// generate_number()

const generate_number_btn_click=()=>{
    document.querySelector("#section1").style.display="none"
    document.querySelector("#section2").style.display="none"
    document.querySelector("#section3").style.display="block"

    setTimeout(()=>{
        generate_number()
        document.querySelector("#field").value="";
        document.querySelector("#section1").style.display="none"
         document.querySelector("#section2").style.display="block"
         document.querySelector("#section3").style.display="none"

    },3000)
}


//check number

const check_number=()=>{
    let value = document.querySelector("#field").value;

    if(value==number)
    {
        alert("Congratulation , You won the game")
    }else{
        alert("OOPS !! , Your Guess is wrong....")
    }
    generate_number_btn_click()
}
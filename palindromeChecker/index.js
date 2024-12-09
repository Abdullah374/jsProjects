
function checkPalindrome(){
    const text = document.getElementById("text").value

    const reversedText = text.split("").reverse().join("")
    
    if(text === reversedText){
        alert("It is a palindrome")
    }else{
        alert("It is not a palindrome")
    }

    text.value = ""
}

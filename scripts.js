function generateNumber() {

    const  min = Math.ceil (document.querySelector(".input-min").value)
    const  max = Math.floor (document.querySelector(".input-max").value)
    
     if (min >= max) {
        alert("erro")
    } else {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    alert (result)

}
   
}
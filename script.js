var selectedRating = undefined;

function submit(){

    if (selectedRating === undefined) {
      console.log("please select a rating");
    } else {
      const thankyouCard = document.getElementById("thankyou");
      const ratingCard = document.getElementById("rating-card")

      document.getElementById("selected-rating-placeholder").innerText = selectedRating

      thankyouCard.style.display = "flex";
      ratingCard.style.display = "none"

    }


    
}

function ratingBtnClick(btn, rating) {
    // reset other buttons style

    const ratingBtns = document.getElementsByClassName("rating-btn-selected")
    //console.log(ratingBtns)
    for (let btn of ratingBtns) {
        console.log(btn);
        btn.classList.remove('rating-btn-selected')
        btn.classList.add('rating-btn')

    }

    selectedRating = rating
    btn.classList.add('rating-btn-selected')
    btn.classList.remove('rating-btn')

    //console.log(btn.classList)

}
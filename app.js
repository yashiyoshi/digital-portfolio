let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("passwordButtonMsg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    if(input.value == "1111"){
      window.location.replace("editTTD.html");
    }
    else{
      msg.innerHTML = "Wrong password!";
    }
  }
};





let data = [];

let acceptData = () => {
    data["text"] = input.value;
    data.push({
      text: input.value
    });
    data["text"] = input.value;

    console.log(data);



    createPost();
  };
// Display current day on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// Button clicks
  $(".saveBtn").on("click", function() {
let schedule = $(this).parent().parent().find(".form-control").val();
let hour = $(this).parent().parent().find(".hour").text();
localStorage.setItem(hour, schedule)

console.log(schedule)
  });

//Variables
var eventBox = $(".form-control");

//Functions
eventBox.each(function (myElement) {
    {
        if (this.moment === "ago") {
            this.style.color = ".past";
        }
        else if (this.moment === "from now") {
            this.style.color = ".future";
        }
        else {
            this.style.color = ".present";
        }

    };
});
$(".hour").each(function() {
    var timeBlock= $(this).text()
    localStorage.getItem(timeBlock)
})
//Text Box
var eventBox = $(".form-control");
for (let i = 0; i < eventBox.length; i++) {
    let val = getCookie("box" + i);
    eventBox[i].value = val != null ? val : "";
}

function test(box) {
    setCookie("box" + box, eventBox[box].value);
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;";

}

function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
}
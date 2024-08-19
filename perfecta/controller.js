var menuBar = document.querySelector(".menu-bar");
var sideBar = document.querySelector("aside");
var cancelBar = document.querySelector(".cancel-bar");
var refEarn = document.querySelector(".ref-earn");
var changeProf = document.querySelector(".prof-pics");
var rootVar = document.querySelector(":root");
var siteFill = document.querySelector(".site-fills");
var offersAct = document.querySelector(".offers-on");
var promoOffers = document.querySelector(".promo-offers");
var transIcon = document.querySelector(".trans");
var warmIntro = document.querySelector(".warm-intro");
var main = document.querySelector("main");
var menu = document.querySelector("menu");
var modeIcon = document.querySelector(".icon");
var siteQ = document.querySelector(".site-create");
var actNav = document.querySelector(".act-nav");
var noTrans = document.querySelector(".no-transact");
var actTable = document.querySelector(".act-table");
var actLog = document.querySelector(".activities-log");
var siteEntail = document.querySelector(".site-entails");
var siteContainer = document.querySelector(".site-container");
var delPop = document.querySelector(".del-pop");
var noDel = document.querySelector(".no-del");
var sideButtons = document.querySelectorAll(".rem");
var siteCreator = document.getElementsByClassName("site-container");
var infoTemps = document.getElementsByClassName("info-temp");
 var profLogo = document.querySelector("#prof-logo");
 var headerLogo = document.querySelector("#header-logo");
 
//   if (window.history.replaceState) {
//     window.history.replaceState(null, null, window.location.href);
//   }

menuBar.addEventListener("click", function () {
  sideBar.style.display = "block";
  // e.preventDefault;
});
cancelBar.addEventListener("click", function () {
  sideBar.style.display = "none";

  // e.preventDefault;
});
var sideType;
window.addEventListener('DOMContentLoaded',function () {
  const savedImage = localStorage.getItem("image");
    if (savedImage) {
      profLogo.src =savedImage;
      headerLogo.src =savedImage;
    }
      const savedMode1 = localStorage.getItem("type");
      //  const savedMode2 = localStorage.getItem("name");
       if (savedMode1 =="bxs-moon") {
         main.style.color = "rgba(241, 195, 109, 0.911)";
         menu.style.color = "rgba(241, 195, 109, 0.911)";
         modeIcon.style.backgroundColor = "black";
         // iconicMode.style.backgroundColor= 'black';
         // iconicMode.style.color= 'white';
         transIcon.style.backgroundColor = "black";
         transIcon.style.color = "white";
        modeIcon.style.color = "rgba(241, 195, 109, 0.911)";
        //  modeIcon.classList[1]= "bx-sun";
          modeIcon.classList.replace("bxs-moon","bx-sun");
         rootVar.style.setProperty(
           "--scroll-background",
           "rgba(241, 195, 109, 0.911)"
         );
         rootVar.style.setProperty("--scroll-color", "white");
         rootVar.style.setProperty("--primary-color", "black");
         rootVar.style.setProperty("--secondary-color", "black");
       }
       if (savedMode1 == "bx-sun") {
          main.style.color = "black";
          menu.style.color = "white";
          modeIcon.style.color = "black";
          transIcon.style.backgroundColor = "white";
          transIcon.style.color = "black";
          modeIcon.style.backgroundColor = "rgba(241, 195, 109, 0.911)";
          rootVar.style.setProperty("--scroll-background", "black");
          rootVar.style.setProperty("--scroll-color", "black");
          rootVar.style.setProperty("--primary-color", "white");
          rootVar.style.setProperty("--secondary-color", "rgba(241, 195, 109, 0.911)");
          modeIcon.classList[1]="bxs-moon";
       }
      //  checkMode(savedMode1,savedMode2);
  doxhr("xhr", "tab_creator.php");
});

function doxhr(y,x) {
   var y = new XMLHttpRequest();
   y.open("post", x, true);
   y.send();
   y.onload = () => {
     if (y.status === 200) {

       
        var clonedAct = actNav.cloneNode(true);
     
        if (y.responseText !== 'all') {
          var newDiv = document.importNode(actTable, true);
          document.body.appendChild(newDiv);
          actTable.innerHTML = clonedAct.innerHTML;
          
          // document.body.removeChild(newDiv);
          newDiv.innerHTML = y.responseText;
          actNav.innerHTML = newDiv.innerHTML;
          // actNav.style.backgroundColor = 'bisque';
          noTrans.style.display = "none";
        
        }
        else{
            var anewDiv = document.createElement("div");
            // newDate.classList = "no-o";
             var  newDate = document.createElement("div");
            newDate.classList = "no-transact";
            var new3 = document.createElement("h4");
            new3.innerText = "No transaction yet";
             var I3 = document.createElement("i");
             I3.classList="bx bx-folder-minus trans";
            newDate.appendChild(new3);
            newDate.appendChild(I3);
            anewDiv.appendChild(newDate);
            document.body.appendChild(anewDiv);
            // document.body.appendChild(actTable);
            noTrans.style.display = "block";
            actNav.innerHTML =anewDiv.innerHTML;
            
        }
     } else {
     }
   };
}
sideButtons.forEach((sideButton) => {
  sideButton.addEventListener("click", function () {
    warmIntro.style.opacity = "0";

    sideType = String(sideButton.classList[1]);
    // e.preventDefault;
    function changeMain(x) {
      if (x === "create") {
        removeEventListener("click", window);
        siteEntail.style.display = "flex";
        promoOffers.style.display = "none";
        main.innerHTML = siteContainer.innerHTML;

        var yesradParent;
        var noradParent;
        var checkedProof1;
        var checkedProof2;
        var checkedProof3;
        var checkedProof4;
        var checkedProof5;
        var checkedProof6;
        var checkedProof7;
        var authNeeded;
        authNeeded = 0;
        var picNeeded;
        picNeeded = 0;
        checkedProof1 = 0;
        checkedProof2 = 0;
        checkedProof3 = 0;
        checkedProof4 = 0;
        checkedProof5 = 0;
        checkedProof6 = 0;
        checkedProof7 = 0;
        // for (let e = 0; e < 7; e++) {
        //     const element = 'checkedProof'+[e];

        // }

        var divHtml1;
        var inpValue1;
        var inpValue2;
        var inpValue3;
        var inp2Value4;
        var inp3Value1;
        var inp7Value1;
        var inp4Value1;
        var noTemp5;
        var comment7;
        var site1Val;
        var site2Val;
        var loginNeed;
        var payNeed;
        noTemp5 = 0;

        loginNeed = 0;
        payNeed = 0;
        // var siteTitle = document.querySelector('.info-title');
        // var finalTemp = document.querySelector('.final-temp');
        var siteCat = document.querySelector(".inp4-val1");
        var comment9 = document.querySelector(".comment9");
        var siteType = document.querySelector("#inp10-val1");
        var siteTitle = document.querySelector(".inp9-val1");
        var inputTemp1 = document.querySelector("#mini-input-1");
        var inputTemp2 = document.querySelector("#mini-input-2");
        var inputTemp3 = document.querySelector("#mini-input-3");
        var inputTemp4 = document.querySelector("#mini-input-4");
        var inputTemp7 = document.querySelector("#mini-input-7");

        var comment1 = document.querySelector(".comment1");
        var comment2 = document.querySelector(".comment2");
        var comment3 = document.querySelector(".comment3");
        var comment4 = document.querySelector(".comment4");
        var comment5 = document.querySelector(".comment5");
        comment7 = document.querySelector(".comment7");
        var noRadios = document.querySelectorAll(".no");
        var yesRadios = document.querySelectorAll(".yes");
        var yesradNext = document.querySelector(".temp2");
        var yesrad6Next = document.querySelector(".temp7");

        var tempButton = document.querySelector(".info-extract");
        tempButton.style.pointerEvents = "none";
        yesradNext.style.display = "none";
        yesrad6Next.style.display = "none";
        // payWay.style.pointerEvents = 'none';

        var catTitles;
        var inp4Value1;

        site1Val = null;
        site2Val = null;
        inp4Value1 = null;
        // var yesFirstClass;
        // var noFirstClass;

        siteTitle.addEventListener("change", function () {
          site1Val = siteTitle.value;

          if (site1Val.length === 0) {
            site1Val = null;
            comment9.innerText =
              "Site title can't be empty. Use a title that matches it's purpose";
            tempButton.style.pointerEvents = "none";
          }
          if (site1Val.length > 0) {
            site1Val = siteTitle.value;
            comment9.innerText = "";

          }
        });
        siteType.addEventListener("change", function () {
          if (siteType.value === "") {
            // sideType.options[0].disabled = true;

            site2Val = sideType.options[1].value;
            tempButton.style.pointerEvents = "none";
          } else {
            site2Val = siteType.value;
          }

          siteType.disabled = true;
        });
        siteCat.addEventListener("change", function () {
          inputTitle = null;
          catTitles = siteCat.value;
          if (catTitles > 0) {
            catTitles = siteCat.value;

            siteCat.disabled = true;
          } else {
            catTitles = null;
            tempButton.style.pointerEvents = "none";
          }
        });
        yesRadios.forEach((yesRadio) => {
          yesRadio.addEventListener("change", function () {
            // label should change background color
            yesFirstClass = yesRadio.parentElement.classList[0];
            yesradParent =
              yesRadio.parentElement.classList[1]; /*yes parent classname*/

            if (yesradParent === "temp1" && yesRadio.checked) {
              loginNeed = 1;
              checkedProof1 = 1;
              yesradNext.style.display = "block";
              var inpTemplate1 = document.importNode(inputTemp1, true);
              var divContent1 = document.body.appendChild(inpTemplate1);
              divHtml1 = divContent1.innerHTML;
              comment1.innerHTML = divHtml1;
              var value1 = document.querySelector(".inp1-val1");
              var value2 = document.querySelector(".inp1-val2");
              var value3 = document.querySelector(".inp1-val3");
              var span1Button = document.querySelector(".inp1-span");

              span1Button.style.pointerEvents = "none";

              value1.addEventListener("change", function () {
                value1.checkValidity();
                inpValue1 = value1.value;
                if (inpValue1.length === 0) {
                  span1Button.style.pointerEvents = "none";
                }
                if (inpValue1.length > 0 && inpValue1.length < 14) {
                  span1Button.style.pointerEvents = "all";
                }
              });

              value2.addEventListener("change", function () {
                inpValue2 = value2.value;
                value2.checkValidity();
                inpValue2 = value2.value;
                if (inpValue1.length === 0) {
                  inpValue2 = null;
                }
              });
              value3.addEventListener("change", function () {
                inpValue3 = value3.value;
                value3.checkValidity();
                inpValue3 = value3.value;
                if (inpValue3.length === 0) {
                  inpValue3 = null;
                }
              });
              span1Button.addEventListener("click", function () {
                if (inpValue1 === 0) {
                  comment1.innerHTML = divHtml1;
                  span1Button.style.pointerEvents = "none";
                } else {
                  comment1.innerHTML = "";
                }
              });
              //
            }
            if (yesradParent === "temp2" && yesRadio.checked) {
              authNeeded = 1;
              checkedProof2 = 1;
              var inpTemplate2 = document.importNode(inputTemp2, true);
              var divContent2 = document.body.appendChild(inpTemplate2);
              comment2.innerHTML = divContent2.innerHTML;
              var value4 = document.querySelector(".inp2-val1");
              var span2Button = document.querySelector(".inp2-span");
              span2Button.style.pointerEvents = "none";
              value4.addEventListener("change", function () {
                value4.checkValidity();
                inp2Value4 = value4.value;

                function trueUrl(x) {
                  const endpointRegex = "/^https?://[^s]+$/";
                  if (endpointRegex.test(x)) {
                    return true;
                  } else {
                    return false;
                  }
                }
                if (trueUrl(inp2Value4) === true && inp2Value4.length > 0) {
                  value4.title = inp2Value4;
                  span2Button.style.pointerEvents = "all";
                } else {
                  span2Button.style.pointerEvents = "none";
                }

                span2Button.addEventListener("click", function () {
                  if (inpValue2 === 0) {
                    comment2.innerHTML = divContent2;
                    span1Button.style.pointerEvents = "none";
                  } else {
                    comment2.innerHTML = "";
                  }
                });
              });
            }
            if (yesradParent === "temp3" && yesRadio.checked) {
              picNeeded = 1;
              checkedProof3 = 1;
              var inpTemplate3 = document.importNode(inputTemp3, true);
              var divContent3 = document.body.appendChild(inpTemplate3);
              comment3.innerHTML = divContent3.innerHTML;
              var value5 = document.querySelector(".inp3-val1");
              var span3Button = document.querySelector(".inp3-span");
              var smallText = document.querySelector(".small-text");
              inp3Value1 = null;
              value5.addEventListener("change", function () {
                smallText.innerText = "";
                var avatType = value5.files[0].type;

                var avatName = value5.files[0].name;
                var avatSize = value5.files[0].size / 1024;

                if (avatType.slice(0, 5) == "image") {
                  inp3Value1 = value5.files[0];
                  smallText.innerText = "";
                  span3Button.style.pointerEvents = "all";
                  value5.setAttribute("title", avatName);
                } else {
                  if (avatType.slice(0, 5) !== "image") {
                    smallText.innerText = "* This type of file isn't accepted";
                    span3Button.style.pointerEvents = "none";
                    value5.setAttribute("title", "No logo chosen");
                  }
                  if (avatSize > 1024) {
                    smallText.innerText = "* This file size is bigger than 1mb";
                    span3Button.style.pointerEvents = "none";
                    value5.setAttribute("title", "No logo chosen");
                  }
                }
              });
              span3Button.addEventListener("click", function () {
                if (inp3Value1 == null) {
                  comment3.innerHTML = divContent3.innerHTML;
                  span3Button.style.pointerEvents = "none";
                } else {
                  comment3.innerHTML = "";
                  span3Button.style.pointerEvents = "all";
                }
              });
            }
            if (yesradParent === "temp4" && yesRadio.checked) {
              checkedProof4 = 1;
              var inpTemplate4 = document.importNode(inputTemp4, true);
              var divContent4 = document.body.appendChild(inpTemplate4);
              comment4.innerHTML = divContent4.innerHTML;
              var value6 = document.querySelector(".inp5-val1");
              var span4Button = document.querySelector(".inp4-span");
              span4Button.style.pointerEvents = "none";
              value6.addEventListener("change", function () {
                // value6.checkValidity();

                diffOption = "off";
                inp4Value1 = value6.value;

                if (inp4Value1 >= 2) {
                  inp4Value1 = value6.value;
                  span4Button.style.pointerEvents = "all";
                  value6.disabled = true;
                } else {
                  value6.disabled = false;
                  inp4Value1 = null;
                  span4Button.style.pointerEvents = "none";
                }
              });
              span4Button.addEventListener("click", function () {
                if (inp4Value1 === 0) {
                  comment2.innerHTML = divContent4;
                  span4Button.style.pointerEvents = "none";
                } else {
                  comment4.innerHTML = "";
                }
              });
            }
            if (yesradParent === "temp5" && yesRadio.checked) {
              payNeed = 1;
              checkedProof5 = 1;
              noTemp5 = 0;
              comment5.innerHTML =
                '<div style="color:red;"><p><u><b>N.B:</b></u>For any online payment your brand must have been registered to the government.<br> Head on to <a href="">CAC</a> to register. Create your paystack  account for online Payment.</p><div>';
            }
            if (yesradParent === "temp6" && yesRadio.checked) {
              checkedProof6 = 1;
              tempButton.style.pointerEvents = "all";
              yesrad6Next.style.display = "none";
            }
            if (yesradParent === "temp7" && yesRadio.checked) {
              checkedProof7 = 1;
              var inpTemplate7 = document.importNode(inputTemp7, true);
              var divContent7 = document.body.appendChild(inpTemplate7);
              comment7.innerHTML = divContent7.innerHTML;
              var value7 = document.querySelector(".inp7-val1");
              var span7Button = document.querySelector(".inp7-span");
              span7Button.style.pointerEvents = "none";
              value7.addEventListener("change", function () {
                value7.checkValidity();
                inp7Value1 = value7.value;
                if (inp7Value1.length === 0) {
                  span7Button.style.pointerEvents = "none";
                }
                if (inp7Value1.length > 0) {
                  span7Button.style.pointerEvents = "all";
                }

                tempButton.style.pointerEvents = "all";
              });
              span7Button.addEventListener("click", function () {
                if (inp7Value1 === 0) {
                  comment2.innerHTML = divContent7;
                  span7Button.style.pointerEvents = "none";
                } else {
                  comment7.innerHTML = "";
                }
              });
            }
          });
        });
        noRadios.forEach((noRadio) => {
          noRadio.addEventListener("change", function () {
            noFirstClass = noRadio.parentElement.classList[0];
            noradParent =
              noRadio.parentElement.classList[1]; /*no parent classname*/
            if (noradParent === "temp1" && noRadio.checked) {
              checkedProof1 = 1;
              inpValue1 = null;
              inpValue2 = null;
              inpValue3 = null;
              loginNeed = 0;
              yesradNext.style.display = "none";
              comment1.innerHTML = "";
            }
            if (noradParent === "temp2" && noRadio.checked) {
              checkedProof2 = 1;

              comment2.innerHTML = "";
            }
            if (noradParent === "temp3" && noRadio.checked) {
              checkedProof3 = 1;
              inp3Value1 = null;
              comment3.innerHTML = "";
            }
            if (noradParent === "temp4" && noRadio.checked) {
              checkedProof4 = 1;
              diffOption = "on";
              inp4Value1 = null;
              comment4.innerHTML = "";
            }
            if (noradParent === "temp5" && noRadio.checked) {
              checkedProof5 = 1;
              noTemp5 = 1;

              payNeed = 0;
              comment5.innerHTML = "";
              comment7.innerHTML = "";
            }
            if (noradParent === "temp6" && noRadio.checked) {
              checkedProof6 = 1;
              yesrad6Next.style.display = "block";
              tempButton.style.pointerEvents = "none";
            }
            if (noradParent === "temp7" && noRadio.checked) {
              checkedProof7 = 1;
              if (noTemp5 === 0) {
                comment7.innerHTML =
                  "<h5>This will be disclaimed to user to prevent fraud and misinformation.Thank you</h5>";
              }
              if (noTemp5 === 1) {
                comment7.innerHTML = "";
              }
              tempButton.style.pointerEvents = "all";
            }
          });
        });

        tempButton.addEventListener("click", function () {
          sideBar.style.display = "none";
          menuBar.style.pointerEvents = "none";
          // payWay.style.pointerEvents = 'none';

          if (
            checkedProof1 == 0 ||
            checkedProof3 == 0 ||
            checkedProof4 == 0 ||
            checkedProof5 == 0 ||
            checkedProof6 == 0 ||
            catTitles == null ||
            site1Val == null ||
            site2Val == ""
          ) {
            // main.innerHTML = siteContainer.innerHTML;
            alert(
              "you didn't feel up the necessary requirement finish. Refresh your page and start again."
            );
            tempButton.style.pointerEvents = "none";

          } else {
            var inputForm = document.createElement("input");
            inputForm.type = "text";
            inputForm.setAttribute("value", site2Val);
            inputForm.disabled = true;
            var h4 = document.createElement("h4");
            h4.innerText = "The type of voting system :";
            var firstCell = document.createElement("td");
            firstCell.appendChild(h4);
            var secondCell = document.createElement("td");
            secondCell.appendChild(inputForm);
            var firstRow = document.createElement("tr");
            firstRow.appendChild(firstCell);
            firstRow.appendChild(secondCell);
            var input2Form = document.createElement("input");
            input2Form.type = "text";
            input2Form.required = true;
            input2Form.placeholder = "Enter your api key";
            input2Form.classList = "paystack-api";
            var hSecond = document.createElement("h4");
            hSecond.innerText = "Your paystack Api :";
            var first2Cell = document.createElement("td");
            first2Cell.appendChild(hSecond);
            var second2Cell = document.createElement("td");
            second2Cell.appendChild(input2Form);
            var secondRow = document.createElement("tr");
            secondRow.appendChild(first2Cell);
            secondRow.appendChild(second2Cell);
            var input3Form = document.createElement("input");
            input3Form.type = "number";
            input3Form.required = true;
            input3Form.min = 1;
            input3Form.placeholder = "";
            input3Form.classList = "pay-amount";
            var hThird = document.createElement("h4");
            hThird.innerText = "How much to be paid in $:";
            var first3Cell = document.createElement("td");
            first3Cell.appendChild(hThird);
            var second3Cell = document.createElement("td");
            second3Cell.appendChild(input3Form);
            var thirdRow = document.createElement("tr");
            thirdRow.appendChild(first3Cell);
            thirdRow.appendChild(second3Cell);
            var formTable = document.createElement("table");
            formTable.classList = "form-table";
            formTable.style.color = "var(--scroll-background)";
            // formTable.appendChild(firstRow);
            if (payNeed === 1) {
              formTable.appendChild(firstRow);
              formTable.appendChild(secondRow);
              formTable.appendChild(thirdRow);
            }
            if (payNeed === 0) {
              formTable.appendChild(firstRow);
            }
            var formElement = document.createElement("form");
            formElement.classList = "last-form";
            formElement.appendChild(formTable);

            var finishSpan = document.createElement("span");
            finishSpan.innerText = "Create now";
            // finishSpan.style.pointerEvents = 'none';
            finishSpan.classList = "last-span";
            var divButton = document.createElement("div");
            divButton.classList = "button";
            divButton.appendChild(finishSpan);
            var formDiv = document.createElement("div");

            formDiv.appendChild(formElement);
            formDiv.appendChild(divButton);
            document.body.appendChild(formDiv);
            formDiv.classList = "last-div";

            function createTableFinish(x, y) {
              for (let i = 0; i < x; i++) {
                // Create the main row with two cells

                const mainRow = formTable.insertRow();
                mainRow.classList.add("main-row-" + (i + 1));

                for (let j = 0; j < 2; j++) {
                  let mainCell = mainRow.insertCell();
                  mainCell.classList.add("main-cell-" + (j + 1));

                  if (j === 0) {
                    let h5 = document.createElement("h5");
                    h5.innerText = "What is the " + (i + 1) + " category?";
                    h5.classList.add("main-cat-" + (i + 1));
                    mainCell.appendChild(h5);
                  } else {
                    let titleInput = document.createElement("input");
                    titleInput.type = "text";
                    titleInput.required = true;
                    titleInput.placeholder = "Enter category title ";
                    titleInput.classList.add("input-cat-" + (i + 1));
                    titleInput.classList.add("title-cat");
                    mainCell.appendChild(titleInput);
                  }
                }

                // Create the sub-rows with cells based on numSubRows
                if (y == null) {
                  subRow = formTable.insertRow();
                  subRow.classList = "opt-num-" + [i + 1];

                  let subCell = subRow.insertCell();
                  subCell.classList = "diff-opt-" + [i + 1];

                  let optInput = document.createElement("input");
                  optInput.type = "number";
                  optInput.min = 2;
                  optInput.required = true;
                  optInput.placeholder =
                    "Enter number of contestant in this category ";
                  optInput.classList.add("cat-cont-number-" + [i + 1]);
                  optInput.classList.add("cat-cont");
                  subCell.appendChild(optInput);
                } else {
                  let numCellsCreated = 0;
                  while (numCellsCreated < y) {
                    var subRow = formTable.insertRow();
                    subRow.classList.add("sub-row-" + (i + 1));

                    for (
                      let l = 0;
                      l < 3 && numCellsCreated < y;
                      l++, numCellsCreated++
                    ) {
                      var subCell = subRow.insertCell();
                      subCell.classList.add("sub-cell-" + (l + 1));

                      let optionInput = document.createElement("input");
                      optionInput.type = "text";
                      optionInput.required = true;
                      optionInput.placeholder =
                        "Enter " + (numCellsCreated + 1) + " contestant";
                      optionInput.classList.add(
                        "input" + [i + 1] + "-option-" + (numCellsCreated + 1)
                      );
                      optionInput.classList.add("input-opt");
                      subCell.appendChild(optionInput);
                    }
                  }
                }
              }
            }

            var input4Form = document.createElement("input");
            input4Form.type = "datetime-local";
            input4Form.required = true;
            input4Form.classList = "date-to-work";
            var hforth = document.createElement("h4");
            hforth.innerText = "Date to start working";
            var first4Cell = document.createElement("td");
            first4Cell.appendChild(hforth);
            var second4Cell = document.createElement("td");
            second4Cell.appendChild(input4Form);
            var forthRow = document.createElement("tr");
            forthRow.appendChild(first4Cell);
            forthRow.appendChild(second4Cell);

            var input6Form = document.createElement("input");
            input6Form.type = "number";
            input6Form.required = true;
            input6Form.min = 1;
            input6Form.classList = "voters-number";
            var peopleNum1 = document.createElement("option");
            peopleNum1.value = "";
            peopleNum1.innerText = "";
            var peopleNum2 = document.createElement("option");
            peopleNum2.value = "10 - 100";
            peopleNum2.innerText = "10 - 100";
            var peopleNum3 = document.createElement("option");
            peopleNum3.value = "100 -1000";
            peopleNum3.innerText = "100 -1000";
            var peopleNum3 = document.createElement("option");
            peopleNum3.value = "100 -1000";
            peopleNum3.innerText = "100 -1000";
            var peopleNum4 = document.createElement("option");
            peopleNum4.value = "1000 -10000";
            peopleNum4.innerText = "1000-10000";
            var peopleNum5 = document.createElement("option");
            peopleNum5.value = "unlimited";
            peopleNum5.innerText = "unlimited";
            var select3Form = document.createElement("select");
            select3Form.classList = "voters-range";
            select3Form.required = true;
            select3Form.appendChild(peopleNum1);
            select3Form.appendChild(peopleNum2);
            select3Form.appendChild(peopleNum3);
            select3Form.appendChild(peopleNum4);
            select3Form.appendChild(peopleNum5);
            var hSixth = document.createElement("h4");
            hSixth.innerHTML =
              "What the number of expected voters:<br><small> Input if definite or select option range</small>:";
            var first6Cell = document.createElement("td");
            first6Cell.appendChild(hSixth);
            var second6Cell = document.createElement("td");
            second6Cell.appendChild(input6Form);
            second6Cell.appendChild(select3Form);
            var sixthRow = document.createElement("tr");
            sixthRow.classList = "voter-track";
            sixthRow.appendChild(first6Cell);
            sixthRow.appendChild(second6Cell);

            var input5Form = document.createElement("input");
            input5Form.type = "number";
            input5Form.required = true;
            input5Form.min = 1;

            input5Form.classList = "duration-num";
            var dateOpt1 = document.createElement("option");
            dateOpt1.value = "";
            dateOpt1.innerText = "";

            var dateOpt2 = document.createElement("option");
            dateOpt2.value = "hrs";
            dateOpt2.innerText = "hrs";
            var dateOpt3 = document.createElement("option");
            dateOpt3.value = "days";
            dateOpt3.innerText = "days";

            var select2Form = document.createElement("select");
            select2Form.classList = "duration-zone";
            select2Form.required = true;
            select2Form.appendChild(dateOpt1);
            select2Form.appendChild(dateOpt2);
            select2Form.appendChild(dateOpt3);
            var hFifth = document.createElement("h4");
            hFifth.innerText = "What duration is this site holding ?:";
            var first5Cell = document.createElement("td");
            first5Cell.appendChild(hFifth);
            var second5Cell = document.createElement("td");
            second5Cell.appendChild(input5Form);
            second5Cell.appendChild(select2Form);
            var fifthRow = document.createElement("tr");
            fifthRow.classList = "dur-track";
            fifthRow.appendChild(first5Cell);
            fifthRow.appendChild(second5Cell);
            formTable.appendChild(forthRow);
            formTable.appendChild(sixthRow);
            formTable.appendChild(fifthRow);
            createTableFinish(catTitles, inp4Value1);

            siteQ.innerHTML = formDiv.innerHTML;
            // payWay.style.pointerEvents = 'none';
            main.innerHTML = siteContainer.innerHTML;
          }

          var diffOpts = document.querySelectorAll(".different-opt");
          var lastSpan = document.querySelector(".last-span");
          // var allInputs = document.querySelectorAll('input');
          let titleCats = document.querySelectorAll(".title-cat");
          let catConts = document.querySelectorAll(".cat-cont");
          let inputOpts = document.querySelectorAll(".input-opt");
          var durZone = document.querySelector(".duration-zone");
          var voteNum = document.querySelector(".voters-number");
          var voteRange = document.querySelector(".voters-range");
          lastSpan.style.pointerEvents = "none";
          var durNum = document.querySelector(".duration-num");
          var multOpt = Number(inp4Value1) * Number(catTitles);
          let allTitle = true;
          let dynamicVars = {};
          let allDiff = true;
          let changeVars = {};
          let allOption = true;
          let allVars = {};
          function allChangeInput(x, y, z) {
            const xChange = Object.keys(x).length;
            const yChange = Object.keys(y).length;
            const allXChange = Object.keys(x).every(
              (key) => x[key] !== "" || x[key] !== null || x[key] !== undefined
            );
            const allYChange = Object.keys(y).every(
              (key) => y[key] !== "" || y[key] !== null || y[key] !== undefined
            );
            if (payNeed == 1) {
              if (
                allXChange &&
                allYChange &&
                xChange === z &&
                yChange == catTitles &&
                workVal !== null &&
                workVal !== undefined &&
                numberVal !== undefined &&
                numberVal !== null &&
                zoneVal !== undefined &&
                zoneVal !== null &&
                payVal !== undefined &&
                payVal !== null &&
                paystackVal !== undefined &&
                paystackVal !== null &&
                votersVal !== undefined &&
                votersVal !== null
              ) {
                lastSpan.style.pointerEvents = "all";
                lastSpan.style.backgroundColor = "green";
                lastSpan.style.animationName = "bop";
                lastSpan.style.animationDuration = "2s";
              }
            } else {
              if (
                allXChange &&
                allYChange &&
                xChange === z &&
                yChange == catTitles &&
                workVal !== null &&
                workVal !== undefined &&
                numberVal !== undefined &&
                numberVal !== null &&
                zoneVal !== undefined &&
                zoneVal !== null &&
                votersVal !== undefined &&
                votersVal !== null
              ) {
                lastSpan.style.pointerEvents = "all";
                lastSpan.style.backgroundColor = "green";
              }
            }

          }
          titleCats.forEach((titleCat, index) => {
            titleCat.required = true;
            index = titleCat.classList[0].replace("-", "");
            titleCat.addEventListener("change", function () {
              var value = titleCat.value;
              if (value !== null) {
                allTitle == true;

                dynamicVars[`${index}`] = value;

                // Highlight empty inputs
              } else {
                // Reset border color
                // Create dynamic variable (store in an object)
                allTitle = false;
              }
              titleCat.disabled = true;
              // if (changeVars !== null) {
              //     allChangeInput(changeVars, dynamicVars, diffOpts.length);
              // }
              // if (allVars !== null) {
              //     allChangeInput(allVars, dynamicVars, multOpt);
              // }
            });
          });
          var diffAvg;
          catConts.forEach((catCont) => {
            catCont.required = true;
            catCont.addEventListener("change", function () {
              var contValue = catCont.value;
              var inpClass = String(catCont.classList[0]);
              var inpNumber = inpClass.slice(16, inpClass.length);
              if (contValue <= 1) {
                catCont.disabled = false;
                contValue = null;
              } else {
                contValue = catCont.value;
                catCont.disabled = true;
                var trackDel = document.querySelector(".opt-num-" + inpNumber);
                var rowDel = document.querySelector(".diff-opt-" + inpNumber);
                trackDel.removeChild(rowDel);

                let numCellsCreated = 0;
                while (numCellsCreated < catCont.value) {
                  var subRow = trackDel;
                  for (
                    let l = 0;
                    l < 3 && numCellsCreated < catCont.value;
                    l++, numCellsCreated++
                  ) {
                    var subCell = subRow.insertCell();
                    subCell.classList.add("sub-cell-" + (numCellsCreated + 1));

                    let optionInput = document.createElement("input");
                    optionInput.type = "text";
                    optionInput.required = true;
                    optionInput.placeholder =
                      "Enter " + (numCellsCreated + 1) + " contestant";
                    optionInput.classList.add(
                      "input" + inpNumber + "-option-" + (numCellsCreated + 1)
                    );
                    optionInput.classList.add("different-opt");
                    subCell.appendChild(optionInput);
                  }
                }
                var diffOpts = document.querySelectorAll(".different-opt");
                diffOpts.forEach((diffOpt) => {
                  diffOpt.addEventListener("change", function () {
                    diffOpt.disabled = true;
                    var diff = diffOpt.value;

                    if (diff !== null) {
                      // Create dynamic variable (store in an object)
                      var index = diffOpt.classList[0].replace("-", "");
                      allDiff = true;
                      diffAvg = diffOpts.length / catTitles;

                      changeVars[`${index}`] = diff;
                      
                      allChangeInput(changeVars, dynamicVars, diffOpts.length);
                    } else {
                      allDiff = false;
                      // Highlight empty inputs
                    }
                  });
                });
              }
            });
          });

          var paystackVal;
          var payVal;

          if (payNeed == 1) {
            var paystackApi = document.querySelector(".paystack-api");
            paystackApi.addEventListener("change", function () {
              paystackApi.disabled = true;
              paystackVal = paystackApi.value;
              if (changeVars !== null) {
                allChangeInput(changeVars, dynamicVars, diffOpts.length);
              }
              if (allVars !== null) {
                allChangeInput(allVars, dynamicVars, multOpt);
              }
            });
            var payAmount = document.querySelector(".pay-amount");
            payAmount.addEventListener("change", function () {
              payAmount.disabled = true;
              payVal = payAmount.value;
              if (changeVars !== null) {
                allChangeInput(changeVars, dynamicVars, diffOpts.length);
              }
              if (allVars !== null) {
                allChangeInput(allVars, dynamicVars, multOpt);
              }
            });
          } else {
            paystackApi = null;
            payVal = null;
          }

          var workVal;
          var numberVal;
          var zoneVal;
          var votersVal;

          voteNum.addEventListener("change", function () {
            voteNum.disabled = true;
            voteRange.disabled = true;
            votersVal = voteNum.value;
            if (changeVars !== null) {
              allChangeInput(changeVars, dynamicVars, diffOpts.length);
            }
            if (allVars !== null) {
              allChangeInput(allVars, dynamicVars, multOpt);
            }
          });
          voteRange.addEventListener("change", function () {
            voteRange.disabled = true;
            voteNum.disabled = true;
            votersVal = voteRange.value;
            if (changeVars !== null) {
              allChangeInput(changeVars, dynamicVars, diffOpts.length);
            }
            if (allVars !== null) {
              allChangeInput(allVars, dynamicVars, multOpt);
            }
          });
          durNum.addEventListener("change", function () {
            durNum.disabled = true;
            numberVal = durNum.value;
            if (changeVars !== null) {
              allChangeInput(changeVars, dynamicVars, diffOpts.length);
            }
            if (allVars !== null) {
              allChangeInput(allVars, dynamicVars, multOpt);
            }
          });

          durZone.addEventListener("change", function () {
            durZone.disabled = true;
            zoneVal = durZone.value;
            if (changeVars !== null) {
              allChangeInput(changeVars, dynamicVars, diffOpts.length);
            }
            if (allVars !== null) {
              allChangeInput(allVars, dynamicVars, multOpt);
            }
          });
          var workDate = document.querySelector(".date-to-work");
          workDate.addEventListener("change", function () {
            workDate.disabled = true;
            workVal = workDate.value;
            if (changeVars !== null) {
              allChangeInput(changeVars, dynamicVars, diffOpts.length);
            }
            if (allVars !== null) {
              allChangeInput(allVars, dynamicVars, multOpt);
            }
          });
          inputOpts.forEach((inputOpt) => {
            inputOpt.required = true;

            inputOpt.addEventListener("change", function () {
              inputOpt.disabled = true;
              const val = inputOpt.value;
              if (val !== null) {
                allOption = true;
                var index = inputOpt.classList[0].replace("-", "");
                allVars[`${index}`] = val;
                
              } else {
                allOption = false;
                // Highlight empty inputs
              }

              allChangeInput(allVars, dynamicVars, multOpt);
              // && zoneDuration !== null
            });
          });

          lastSpan.addEventListener("click", function () {
            var mergeVar = `${numberVal}` + `${zoneVal}`;
            diffAvg = diffOpts.length / catTitles;
            var toPay;

            var reqParam = {
              inpValue1,
              inpValue2,
              inpValue3,
            };

            var calcVar = {
              catTitles,
              mergeVar,
              diffAvg,
              inp4Value1,
              reqParam,
              votersVal,
            };
            var train = {
              reqParam,
              site1Val,
              site2Val,
              allParam,
              changeVars,
              dynamicVars
            }
            var allParam;
            var amountNumber = document.querySelector(".amount-number");
            var calcVar = JSON.stringify(calcVar);

            var xhr = new XMLHttpRequest();
            xhr.open("post", "price_deter.php", true);

            var newData = new FormData();
            newData.append("calc", calcVar);
            // xhr.setRequestHeader('Content-type','application/json')
            xhr.send(newData);
            
           
            xhr.onload = function () {
              toPay = xhr.responseText;
              if (xhr.status === 200) {
                amountNumber.innerText = toPay;
                allParam = {
                  site1Val,
                  mergeVar,
                  workVal,
                  toPay,
                };
              }
            };
              var train  = JSON.stringify(train);
               var ppt = new XMLHttpRequest();
               ppt.open("post", "amountCalc.php", true);

               var modulars = new FormData();
               modulars.append("things", train);
                modulars.append("inp3Val1", inp3Value1);
                  // ppt.setRequestHeader('Content-type','application/json')
                  ppt.send(modulars);

                ppt.onload = function () {
                //  toPay = ppt.responseText;
                 if (ppt.status === 200) {
                   console.log(ppt.responseText);
                   
                 }
               };
          //  allParam = {
          //    site1Val,
          //    site2Val,
          //    catTitles,
          //    reqParam,
          //    inp2Value4,
          //    inp4Value1,
          //    inp7Value1,
          //    inp3Value1,
          //    mergeVar,
          //    workVal,
          //    votersVal,
          //    dynamicVars,
          //    allVars,
          //    authNeeded,
          //    changeVars,
          //    toPay,
          //  };
            // Check if the user use the referral earning and get the new toPay.
            var formTable = document.querySelector(".form-table");
            var allPay = document.querySelector(".all-pay");
            var imgChanger = document.querySelector(".img-change");

            
            var rem = document.querySelector(".create");

            rem.addEventListener("click", function () {
              siteQ.innerHTML = siteFill.innerHTML;
              main.innerHTML = siteContainer.innerHTML;
              sideBar.style.display = "none";
              // e.preventDefault;
            });

            formTable.style.pointerEvents = "none";
            lastSpan.innerHTML =
              "Creating <i class = 'bx bx-loading-alt bx-spin'></i>";
            var payWay = document.querySelector(".payment-way");
            var payopt = document.querySelector(".payment-option");
            var imgChange = document.querySelector(".img-change");
            var divAmount = document.querySelector(".div-amount");
            setTimeout(() => {
              allPay.style.display = "block";
              imgChanger.style.display = "inline-block";
            }, 1000);
            setTimeout(() => {
              formTable.style.opacity = "0.8";
              lastSpan.style.display = "none";
              payWay.style.backgroundColor = "green";
              payWay.style.animationName = "bop";
              payWay.style.animationDuration = "2s";
              payWay.style.pointerEvents = "all";
            }, 3000);

            payWay.addEventListener("click", function () {
               
              menuBar.style.pointerEvents = "all";
              payWay.innerHTML =
                "Please wait <i class = 'bx bx-loading-alt bx- spin'></i>";
              imgChange.style.display = "none";
              divAmount.style.display = "none";

              var xhr = new XMLHttpRequest();
              xhr.open("post", "creator.php", true);

              var newData = new FormData();
              var allparam = JSON.stringify(allParam);
     
              newData.append("max", allparam);
              // xhr.setRequestHeader('Content-type','application/json')
              xhr.send(newData);
              xhr.onload = function () {
                if (xhr.status === 200) {
                 if (xhr.responseText =='1') {
                  doxhr('par','tab_creator.php');
                 }
                
                }
                else{
                   console.log('xhr.responseText');
                }
              };

              setTimeout(() => {
                payopt.style.display = "block";
                payWay.style.display = "none";
              }, 5000);
            });
          });
        });
      }

      if (x === "activities") {
        main.innerHTML = actLog.innerHTML;
        // var tabs =document.cloneNode
        if (actNav.innerHTML!== actTable.innerHTML) {
          console.log('no bad');
           var siteLinks = document.querySelector(".site-link");

          if (siteLinks.length == 1) {
            var text = siteLinks.innerText;
            console.log(text);
             navigator.clipboard.writeText(text);
          }
          if (siteLinks>1) {
             siteLinks.forEach((siteLink) => {
               siteLink.addEventListener("click", function () {
                 console.log(siteLink);

                 var text = siteLink.innerText;
                 console.log(text);

                 navigator.clipboard
                   .writeText(text)
                   .then(() => {
                     title = "copied";

                     setTimeout(() => {
                       title.style.display = "none";
                     }, 200);
                   })
                   .catch((error) => console.error("error please :", error));
               });
             });
          }
          
        }
        else{
          console.log('baddder');
          
         
         
        }
        
      }
      if (x === "refer") {
        main.innerHTML = refEarn.innerHTML;

        var refLink = document.querySelector("#ref-link");
        var copyLink = document.querySelector("#copy-link");
        var commentLink = document.querySelector("#comment-link");
        var text = refLink.innerText;

        refLink.addEventListener("click", function () {
          commentLink.style.display = "block";
          // commentLink.style.right = '20%';
          navigator.clipboard
            .writeText(text)
            .then(() => {
              commentLink.innerText = "Text copied!";

              setTimeout(() => {
                commentLink.style.display = "none";
              }, 200);
            })
            .catch((error) => console.error("error please :", error));
        });

        copyLink.addEventListener("click", function () {
          commentLink.style.display = "block";
          // commentLink.style.right='60%';

          navigator.clipboard
            .writeText(text)
            .then(() => {
              commentLink.innerText = "Text copied!";
              setTimeout(() => {
                commentLink.style.display = "none";
              }, 200);
            })
            .catch((error) => console.error("error please :", error));
        });
      }
      if (x === "offers") {
        changeProf.style.display = "none";
        siteEntail.style.display = "none";
        actLog.style.display = "none";
        offersAct.style.display = "block";
        promoOffers.style.display = "block";
        main.innerHTML = offersAct.innerHTML;
        // e.preventDefault;
      }
      if (x === "delete") {
        delPop.style.display = "block";
        e.preventDefault;
      }
      if (x === "change") {
        // siteEntail.style.display = 'none';
        // offersAct.style.display = 'none';
        // changeProf.style.display = 'block';
        // actLog.style.display = 'none';

        main.innerHTML = changeProf.innerHTML;
        var imgGrids = document.querySelectorAll(".img-avat");
        var avatPic = document.querySelector(".avatar-pic");
        var submitButton = document.querySelector(".submit-pic");
        submitButton.style.pointerEvents = "none";
        var smallText = document.querySelector("small");
        smallText.innerText = "";
        var pureSrc;
        var avatName;
        var avatFile;
        var avatType;
        var avatSize;
        var picTruth;
        var previousFile;
       
        // Prevent the user from navigating back to the login page after logging in

        // ^https?:\/\/[a-zA-Z0-9.-]+(\/[a-zA-Z0-9_-]+)*(\/[a-zA-Z0-9_-]+)?(\?[a-zA-Z0-9_=&%-]*)?(#[a-zA-Z0-9_-]*)?$
        previousElement = null;
        imgGrids.forEach((imgGrid) => {
          imgGrid.addEventListener("click", function () {
            if (previousElement) {
              previousElement.classList.remove("active");
            }

            imgGrid.classList.add("active");

            previousElement = imgGrid;
            
            var multiImg = String(imgGrid.src);

            var multiSrc = multiImg.slice(
              multiImg.lastIndexOf("/", multiImg.lastIndexOf("/") - 1),
              multiImg.length
            );
            var newString = "";
            pureSrc = newString.concat(".", multiSrc.replace("%20", " "));
            submitButton.style.pointerEvents = "all";
            picTruth = 1;
          });
        });

        avatPic.addEventListener("change", function () {
          smallText.innerText = "No image has been added";
          avatFile = avatPic.files[0].type;
          avatSize = avatPic.files[0].size / 1024;
          avatType = avatFile.slice(0, 5);
          avatName = avatPic.files[0].name;
          previousFile = null;
          if (previousElement !==null) {
            previousElement.classList.remove("active");
          }
          // previousFile= null;

          //  var avatLength = avatPic.files[0].length;
          if (avatType == "image") {
            previousFile = avatPic.files[0];
            smallText.innerText = "";
            submitButton.style.pointerEvents = "all";
            avatPic.setAttribute("title", avatName);
            // e.preventDefault;
          } else {
            if (avatType !== "image") {
              smallText.innerText = "* This type of file isn't accepted";
              submitButton.style.pointerEvents = "none";
              avatPic.setAttribute("title", "No logo chosen");
              // e.preventDefault;
            }
            if (avatSize > 1024) {
              smallText.innerText = "* This file size is bigger than 1mb";
              submitButton.style.pointerEvents = "none";
              avatPic.setAttribute("title", "No logo chosen");
              // e.preventDefault;
            }
          }
        });

        submitButton.addEventListener("click", function () {
          var pathFile = null;
          if (previousFile && avatType === "image" && avatSize < 1024) {
            pureSrc = null;
            main.innerHTML = actLog.innerHTML;
            avatSrc = avatPic.value;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "load.php", true);
            var formData = new FormData();
            formData.append("avat", avatPic.files[0]);

            xhr.onload = function () {
              if (xhr.status === 200) {
                try {
                  var response = JSON.parse(xhr.responseText);
                  if (response.status === "success") {
                    
                    setTimeout(() => {
                      pathFile = response.path;
                      profLogo.src = pathFile;
                      headerLogo.src = pathFile;
                       localStorage.setItem("image", response.path);
                    }, 1000);
                  } else {
                    // console.error(response.message);
                  }
                } catch (e) {
                  // console.error("Error parsing JSON response:", e);
                }
              } else {
                // console.error("XHR error:", xhr.status);
              }
            };

            xhr.send(formData);
          }
          if (pureSrc !== null && picTruth === 1) {

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "load.php", true);
            var formData = new FormData();
            formData.append("pure", pureSrc);

            xhr.onload = function () {
              if (xhr.status === 200) {
                try {
                  var response = JSON.parse(xhr.responseText);
                  if (response.status === "success") {
                    setTimeout(() => {
                      pathFile = response.path;
                      profLogo.src = pathFile;
                      headerLogo.src = pathFile;
                      localStorage.setItem("image", response.path);
                    }, 1000);
                  } else {
                    // console.error(response.message);
                  }
                } catch (e) {
                  // console.error("Error parsing JSON response:", e);
                }
              } else {
                // console.error("XHR error:", xhr.status);
              }
            };
            xhr.send(formData);
          }
          if (previousFile == null && picTruth !== 1) {
            smallText.innerText = "* No image was picked or uploaded";
            // submitButton.style.pointerEvents = 'none';
          }
          if (pathFile !== null) {
            sessionStorage.setItem("image", response.path);
           
          }

          // var imgName=  localStorage.getItem('image');

          main.innerHTML = actLog.innerHTML;

          // });
          // function picUpdater(pathFile) {

          // }
        });
      }
    }
    changeMain(sideType);
    sideBar.style.display = "none";
  });
});

modeIcon.addEventListener("click", function () {
  var iconName = modeIcon.classList[1];
  checkMode(iconName, modeIcon);

  // e.preventDefault;
});
  function checkMode(y, x) {
    if (y === "bxs-moon") {
      
      // main.style.backgroundColor = 'black';
      main.style.color = "rgba(241, 195, 109, 0.911)";
      menu.style.color = "rgba(241, 195, 109, 0.911)";
      x.style.backgroundColor = "black";
      // iconicMode.style.backgroundColor= 'black';
      // iconicMode.style.color= 'white';
      transIcon.style.backgroundColor = "black";
      transIcon.style.color = "white";
      x.style.color = "rgba(241, 195, 109, 0.911)";
      x.classList.replace("bxs-moon", "bx-sun");
      rootVar.style.setProperty(
        "--scroll-background",
        "rgba(241, 195, 109, 0.911)"
      );
      rootVar.style.setProperty("--scroll-color", "white");
      rootVar.style.setProperty("--primary-color", "black");
      rootVar.style.setProperty("--secondary-color", "black");
    }
    if (y === "bx-sun") {
      main.style.color = "black";
      menu.style.color = "white";
      x.style.color = "black";
      transIcon.style.backgroundColor = "white";
      transIcon.style.color = "black";
      x.style.backgroundColor = "rgba(241, 195, 109, 0.911)";
      rootVar.style.setProperty("--scroll-background", "black");
      rootVar.style.setProperty("--scroll-color", "black");
      rootVar.style.setProperty("--primary-color", "white");
      rootVar.style.setProperty(
        "--secondary-color",
        "rgba(241, 195, 109, 0.911)"
      );
      x.classList.replace("bx-sun", "bxs-moon");
    }
    localStorage.setItem("type", y);
    // localStorage.setItem("name", x);
  }
noDel.addEventListener("click", function () {
  sideBar.style.display = "none";
  delPop.style.display = "none";
});

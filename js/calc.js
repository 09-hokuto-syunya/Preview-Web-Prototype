let unfixedValues = ""; // 演算内容を文字列型で格納する
let getId = 0; //取得した
let fixResult = 0; //計算結果
let syw = ""; //Show Your Work = 途中式
let poolOpeland = ""; //最後の演算項目をプールする
let acText;
let calcLog = ""

// 1.ボタン情報をクラス名から取得
let buttons = document.querySelectorAll("button");
// 2.クリックイベントリスナーを作成
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        // 3.クリックされたボタンのidをgetIdに代入        
        getId = e.target.id;
        // 4.idを参照して数字か数字以外かを選別 
        // 5a.文字列を参照して処理
        if (getId.length > 1) { //数字以外のIDは2文字以上である
            if (getId === "AC") {
                resetValues();
                console.log(unfixedValues);
                resetDisp();
            }
            else if (getId === "BS") {
                unfixedValues = unfixedValues.slice(0, -1);
                displayIO(unfixedValues);
                console.log(unfixedValues);
            }
            else if (getId === "equal") {
                if (fixResult === Number(unfixedValues)) {
                    unfixedValues = unfixedValues + poolOpeland;
                }
                fixResult = math.evaluate(unfixedValues);
                if (fixResult === Infinity) {
                    unfixedValues = "数値を0で割ることは出来ません";
                    console.log("数値を0で割ることは出来ません");
                    displaySYW(unfixedValues);
                    resetValues();
                    return;
                }
                syw = String(unfixedValues + "=" + fixResult + " ");
                displaySYW(syw);
                // calcLog = syw; //計算ログの出力を実装予定
                unfixedValues = String(fixResult);
                console.log(syw);
                displayIO(fixResult);
                console.log(fixResult);
            }
            else if (getId === "add") {
                poolOpeland = "";
                unfixedValues += "+";
                poolOpeland += "+";
                displayIO(unfixedValues);
                console.log(unfixedValues);
            }
            else if (getId === "sub") {
                poolOpeland = "";
                unfixedValues += "-";
                poolOpeland += "-";
                displayIO(unfixedValues);
                console.log(unfixedValues);
            }
            else if (getId === "mul") {
                poolOpeland = "";
                unfixedValues += ("*");
                poolOpeland += ("*");
                displayIO(unfixedValues);
                console.log(unfixedValues);
            }
            else if (getId === "divi") {
                poolOpeland = "";
                unfixedValues += "/";
                poolOpeland += "/";
                displayIO(unfixedValues);
                console.log(unfixedValues);
            }
        }
        // 5b.入力された数字をunfixedValuesに加える
        else {
            unfixedValues += getId;
            poolOpeland += getId;
            displayIO(unfixedValues);
            console.log(unfixedValues);
        }
        // handleClick(getId); //デバッグ用
    });
});

// 関数

function displayIO(dsptxt) {
    document.getElementById("io-disp-text").textContent = dsptxt;
}

function displaySYW(sywtxt) {
    document.getElementById("syw-disp-text").textContent = sywtxt;
}

function resetDisp() {
    acText = document.querySelectorAll(".output-text");
    acText.forEach(el => el.textContent = ""); //forEachの慣習的にelementのelが多く用いられる
}

function resetValues() {
    unfixedValues = "";
    syw = "";
    fixResult = 0;
    poolOpeland = "";
}

function handleClick(id) { //デバッグ用
    console.log("クリックされたID:", id);
}

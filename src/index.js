/*
 ** const, let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1); // var変数を上書き

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1); // var変数を再宣言

// let
let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言負荷
let val2 = "let変数を再宣言";

// const
const val3 = "const変数";
console.log(val3);

// const変数は上書き負荷
val3 = "const変数を上書き"; // is read-only

// 再宣言不可
const val3 = "const変数を再宣言";

// // cocnstで定義した、オブジェクトはプロパティの変更が可能
const val4 = {
  name: "たけ",
  age: 28
};

val4.name = "take";
val4.address = "Chiba";
console.log(val4); // { name: "take", age: 28}

// cocnstで定義した、配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey"); // 配列の末尾に追加
console.log(val5);

/*
 * テンプレート文字列
 */
const name = "たけ";
const age = 28;

const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message);

/*
 ** アロー関数
 */
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

const func2 = (str) => {
  return str;
};
// // アロー関数内がreturnだけの場合1行で記述して1行で書くことができる
const func3 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/*
 * 分割代入
 */
const myProfile = {
  name: "たけ",
  age: 28
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);
// オブジェクトの分割代入
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile = ["たけ", 28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);
// 配列の分割代入
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

/*
 * デフォルト値、引数など
 */
const sayHello = (name = "ななし") => console.log(`こんにちは${name}さん!`);
sayHello();

/*
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // 3
sumFunc(...arr1); // 3

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]

// // 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// // // 配列をコピー
const arr6 = [...arr4];
console.log(arr6); // [10, 20]

const arr7 = [...arr4, ...arr5];
console.log(arr7); // [10, 20, 30, 40]

const arr8 = arr4;
arr8[0] = 100;
console.log(arr8); // [100, 20]
console.log(arr4); // [100, 20] 参照しているアドレスを渡しているため、もとの値も書き換わる

/*
 * mapやfilterを使った配列の処理
 */
const nameArr = ["高菜", "山田", "たけ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2); // ["高菜", "やまだ", "たけ"]

// 第２引数を指定すると、indexを取得できる
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

nameArr.map((name) => console.log(name));
// -> ["高菜", "やまだ", "たけ"]

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr); // [1, 3, 5]

const newNameArr = nameArr.map((name) => {
  if (name === "たけ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/*
 * 論理演算子の本当の意味
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります。");
}
if (flag1 && flag2) {
  console.log("1も2もtrueになります。");
}

// || は左側がfalseなら右側を返す
//    左側がtrueなら左側を返す
// const num = 100; // 数値はtrueと判定
const num = null; // nullはfalseと判定
const fee = num || "金額は未設定です。";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);

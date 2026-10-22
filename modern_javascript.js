// Destructuring & Modern JavaScript
// Destructuring se arrays ya objects ki values ko variables mein nikal sakte hain.

// 1. Array destructuring — Values position ke mutabiq milti hain
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // "red" "green"

// Kisi value ko skip karne ke liye uski jagah khaali chhor dein.
const [first, , third] = colors;
console.log(first, third); // "red" "blue"

// Default value tab use hoti hai jab array value undefined ho.
const [userName = "Guest", userRole = "visitor"] = ["Amina"];
console.log(userName, userRole); // "Amina" "visitor"

// 2. Object destructuring — Properties ko unke naam se nikalna
const user = { name: "Amina", age: 25, city: "Karachi" };
const { name, age } = user;
console.log(name, age); // "Amina" 25

// Property ka variable naam badalne ke liye alias (property: variable) use karein.
const { city: homeCity } = user;
console.log(homeCity); // "Karachi"

// Object destructuring mein bhi default value di ja sakti hai.
const { country = "Pakistan" } = user;
console.log(country); // "Pakistan"

// 3. Spread operator (...) — Iterable ya object ki values ko phailana
// Array ki shallow copy ya arrays ko combine karne ke liye:
const originalNumbers = [1, 2, 3];
const copiedNumbers = [...originalNumbers];
const moreNumbers = [...originalNumbers, 4, 5];
console.log(copiedNumbers); // [1, 2, 3]
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// Objects ko copy/merge kar sakte hain; baad wali property pehli ko overwrite karti hai.
const defaultSettings = { theme: "light", fontSize: 16 };
const customSettings = { ...defaultSettings, theme: "dark" };
console.log(customSettings); // { theme: "dark", fontSize: 16 }

// Spread se shallow copy banti hai: nested objects ke references share ho sakte hain.

// 4. Rest operator (...) — Baqi values ko array ya object mein jama karna
// Rest destructuring mein aata hai aur hamesha aakhri position par hota hai.
const [mainColor, ...otherColors] = colors;
console.log(mainColor); // "red"
console.log(otherColors); // ["green", "blue"]

const { name: userFullName, ...userDetails } = user;
console.log(userFullName); // "Amina"
console.log(userDetails); // { age: 25, city: "Karachi" }

// Function parameters mein rest arguments ko ek array mein jama karta hai.
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(2, 3, 4)); // 9

// 5. Optional chaining (?.) — Missing property par error se bachna
// Agar chain ka hissa null ya undefined ho, expression undefined deta hai.
const account = { profile: { email: "amina@example.com" } };
console.log(account.profile?.email); // "amina@example.com"
console.log(account.preferences?.theme); // undefined

const missingAccount = null;
console.log(missingAccount?.profile?.email); // undefined

// Optional chaining function/method call ke liye bhi use hoti hai.
const service = {};
service.onReady?.(); // Method na ho to call skip hoti hai

// `?.` sirf us chain ke liye safety deta hai jahan woh lagaya ho.
// Optional chaining assignment ke left side par use nahi hoti.

// 6. Nullish coalescing (??) — Sirf null/undefined par default dena
const savedName = null;
console.log(savedName ?? "Guest"); // "Guest"

// 0, false, aur empty string valid values hain; ?? unhein replace nahi karta.
console.log(0 ?? 10); // 0
console.log(false ?? true); // false
console.log("" ?? "Default"); // ""

// || har falsy value par default deta hai, jab ke ?? sirf null/undefined par.
console.log(0 || 10); // 10
console.log(0 ?? 10); // 0

// 22 October — Error Handling
// Errors ko handle karne ke liye try/catch use karein, taake app blindly crash na ho.

// 1. try/catch — Risky code try mein, aur recovery ya message catch mein.
try {
  const result = JSON.parse('{"name":"Amina"}');
  console.log(result.name); // "Amina"
} catch (error) {
  console.log("JSON read nahi ho saka.");
}

// 2. throw new Error() — Invalid situation mein apna error raise karein.
function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new Error("Amount zero se zyada hona chahiye.");
  }
  if (amount > balance) {
    throw new Error("Insufficient balance.");
  }
  return balance - amount;
}

try {
  console.log(withdraw(500, 200)); // 300
  console.log(withdraw(500, 700)); // Ye call error throw karegi
} catch (error) {
  // Error object ka message batata hai ke kya masla hua.
  console.log("Withdrawal failed:", error.message); // "Insufficient balance."
}

// 3. Error messages — Specific message se issue samajhna aur handle karna aasaan hota hai.
try {
  JSON.parse("not valid JSON");
} catch (error) {
  console.log(error.message); // Parser ka message
}

// 4. finally — Success ho ya error, cleanup code aakhir mein chalta hai.
try {
  console.log("Resource use ho raha hai.");
  throw new Error("Kaam ke dauran masla aaya.");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Cleanup hamesha chalega.");
}

// finally optional hai; iska use cleanup ke liye karein, error ko chupane ke liye nahi.

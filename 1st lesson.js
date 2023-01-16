let name = 'patience';
let nameLength = name.length;
name.length;
let temperature = [100, 130, 54, 45];
temperature.push(66);
console.log(temperature);
//function lesson
function getFirstName (firstName){
    return firstName;
   }
   
   function getLastName (lastName){
    return lastName;
   }
   
   let firstName = getFirstName("Fred");
   let lastName = getLastName("Odom");
   let fullName = firstName + " " + lastName;
   
   console.log(fullName);
   
   let aFirstName = getFirstName("Coke");
   let aLastName = getLastName("Alabi");
   let theFullName = `${aFirstName} ${aLastName}`;
   
   console.log(theFullName);
   let firstAge = getFirstName("54");
   console.log(firstAge);
   
   function calculator(a, b, action){
    function calculator(a, b, operation){
        //supported operations - Add, Subtract, Multiply, Divide
        //if operation is Add
        if(a == undefined){
          return "Please supply a";
        }
      
        if(b == undefined){
          return "Please supply b";
        }
      
        if(operation == undefined){
          return "Please supply operation";
        }
        
        if(operation.toLowerCase().trim() === "add"){
            return a + b;
        }
      
        
        if(operation.toLowerCase().trim() === "subtract"){
          //Check which is the larger number, then use it as a
          let c = a - b;
          if (c > 0){
              return c;
          } else {
            return b - a;
          }   
        }
        
      if (operation.toLowerCase().trim() === "multiply"){
        return a * b;
      }
      if (operation.toLowerCase().trim() === "divide"){
        return (a / b).toFixed(3);
      }
        return operation + " is not a recognized operation.";
      }
      
      console.log(calculator(34.6, 66.8, "ADD ")); //100
      console.log(calculator(210, 66, " subTRact")); //45
      console.log(calculator(34, 66, "Multiply"));
      console.log(calculator(34, 18, "diVIde"));
      console.log(calculator(34, 18, "SEYICHAMBER"));
      console.log(calculator(23, 66, "Add"));
      
      // my question is what is the difference between 
      //logmyname("ijeoma"); console.log(logmyname); and console.log(logmyname("ijeoma"));
      
      //Dont be confused  i only tried to assign the value before printing
      //Write a function that returns the solution to a quadratic equation
      //Parameter a,b,c 
      //gives 2 output
      //Use Almighty Formular
      function almightyFormular (a, b, c){
       let x = (-b + Math.sqrt( (b*b) - 4*a*c )) / (2 * a);
        console.log( (b*b) - 4*a*c );  //-23
        console.log( Math.sqrt(-23) ) // NaN
        //minus b plus => -b + 
        //minus b minus => -b -
        //Square root Math.sqrt( )
        //b square minus => b*b - 
        // 4*a*c
        // /2a
        
        var y = ((-b - Math.sqrt(b*b-(4*a*c))) / (2 * a));
      //Im loggin the result as an object here
        console.log( { x: x.toFixed(2), y: y.toFixed(2) });
        return [x.toFixed(2),y.toFixed(2)];
      }
      console.log( almightyFormular(1,1,-1) );
      function getDeploymentString (arr){
        let deployments = "";
        for (let i = 0; i < arr.length; i++){
          if(i == arr.length - 1){
            deployments += "and "
          }
          
          deployments += arr[i];
          
          if (i < arr.length - 1){
            deployments += ", ";
          }
        }
        deployments += ".";
        return deployments;
      }
      //================================E N D  O F  S E C T I O N=============================
      
      
      
      //there are 2 other ways to create an object 
      //Using a constructor function AND
      //Using the Object.create method
      const soldier = {
        hasUniform: true,
        hasGun: true,
        rank: 'Sergeant',
        deployed: true,
        deployments: ["Somalia", "Nigeria", "South Africa","Cameroon", "Sao Tome & Principe"],
        getDeployments: function () {
          return `${this.name} has been deployed to ${getDeploymentString(this.deployments)} `;
        },
        getRank: function(){
          return this.rank;
        },
        setName: function(name){
          return this.name = name;
        }
      };
      
      let soldier1 = Object.create(soldier);//Q1-what if the bracket is empty like it is here const myCar = new Object();
      soldier1.setName("Akin Olotu");
      soldier1.rank = "Major General"
      let deployments = soldier1.getDeployments();
      let rank = soldier1.getRank();
      
      
      //console.log(deployments);
      //console.log(soldier1);
      function SumOfArrays (integerArray){
        //declare your result as integer 0;
          let result = 0;
        //Loop through the array with For Loop
        for( let i = 0; i < integerArray.length; i++ ){
          //add each element in the array to result
          //integerArray[i] will give you each element in the array
            result = result + integerArray[i];
        }
        //then return the result.
         return result;
        }
        
        console.log(SumOfArrays([10,20,30,40,50,60,70,80,90]));
        console.log(SumOfArrays([10,20,30,40,50]));
        function SumOfArrays (integerArray){
          //declare your result as integer 0;
            let result = 0;
          //Loop through the array with For Loop
          for( let i = 0; i < integerArray.length; i++ ){
            //add each element in the array to result
            //integerArray[i] will give you each element in the array
              result = result + integerArray[i];
          }
          //then return the result.
           return result;
          }
          
          function SumOfArraysReduce (integerArray){
            let zero = 0;
            let result = integerArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue, zero);
            return result;
          }
          
          
          //==========Good Job with this one=========================
          function kiloMeter (a) {
            let kilo = a * 1000;
            return kilo ;
          }
          
          
          function compareValues (a , b){
          if (a == b){
            return true;
          }
            if (a !== b){
              return false;
            }  
          }
          
          console.log (compareValues(3,6));
          console.log (compareValues("go","go"));
          
          
          
          // multiplication of an array
          function multiplyArray(numbers){
            let result = 1;
            let resultArray = [];
            let overTwo = false;
            
            for (let j = 0; j < numbers.length;  j++){    
              result *= numbers[j];
                
              if (result > 200 && overTwo == false){
                resultArray.push(result);
                overTwo = true;
              }
                
             if(overTwo == true){
               resultArray.push(numbers[j]);
             }
              
              if( j == numbers.length - 1 ){
                resultArray.push(result);
              }
            }
            return resultArray;
          }
          
          
          let param = [2,5,3,4,9,8,5,7,11,6];
          console.log(multiplyArray( param ));
          
          function aFunction(a, n){
            //return nth character of a
            //convert string to Array
            const stringArray = a.split(""); 
            //console.log( stringArray ); //["a","b","c","d","e","f"]
          //I have Index == 2 and character == 3  =>
            //Get nth character
            console.log( stringArray[n-1] ); 
            //if( stringArray[n-1] == " "){
                
            //}
          }
          
          //n - 1 = 8
          
          //[ 'c', 'o', 'n', 't', 'a', 'i', 'n', ' ', 'n', 'o', 't', 'h', 'i', 'n', 'g' ]
          
          //Return 8th character of string "automatically"
          //aFunction("contain nothing", 8); //Should return i
          
          aFunction("nothing", 6); // n
          aFunction("Javascript", 9); //p
          aFunction("programmingfundamentals", 16); //a

          // extract first half letters
          function check(string) {
            const x = string.length % 2 == 0
              ? (string.length / 2)
              : (string.length / 2) - 1;
          
            return string.substring(0, x);
          }
          
          const half = check("JavaScript");
          
          console.log(half);

          // percentage of a num
function numPercent(a , b){
  let percent = b / 100;
  let multiPercent = percent * a; 
  console.log(`${multiPercent} is ${b}% of ${a}`);
  }
  numPercent(150,75);
  numPercent(100,10);
  //Foo.Bar
//Print 1 to 100
//print Foo when number is divisible by 3
//print Bar when number is divisible by 5
//print FooBar when number is divisible by 3 & 5

function foobar2(){
  //Print 1 to 100
    let result = 
    { 
      fooCounter: 0, 
      barCounter: 0, 
      fooBarCounter: 0 
    };
    
    for(let i = 1; i <= 100; i++){
      if ( i%3 == 0  && i%5 == 0 )
      {  
        console.log("FooBar");
        result.fooBarCounter++;
      }
      else if ( i%5 == 0 )
      {
        console.log("Bar");
        result.barCounter++;
      }
      else if ( i%3 == 0 )
      {
        console.log("Foo");
        result.fooCounter++;
      }
      else 
      {
        console.log(i);
      }
    }
    
    console.log(result ); 
  }
  
  //foobar2();
  
  function fooBar(integerNumbers){
   // let divisorNum = integerNumbers / 3 && integerNumbers / 5; 
   if ( integerNumbers % 3 == 0 && integerNumbers % 5 == 0){
      return "FooBar";
    }
    if ( integerNumbers % 3 == 0 ){  
      return "Foo";
    }
    if ( integerNumbers % 5 == 0){
      return "Bar";
    }
    
    if (integerNumbers = "undefined"){
      return "NA";
    }
  }
  
  //console.log (fooBar(45)); 
  function getFactors (num){
    //
  }
  
  
  function isPrime (integer){
    //check if getFactors is empty which means number is a prime number
    let numberOfFactors = getFactors(integer);
    
    if( numberOfFactors == 0 ){
      return true;
    }
    
    return false;
  }
  
  
  function getFactors(num){
  //write out what youre trying to do first so you dont get confused
  //i want to find all the numbers that can go in num
  //we can start from 1 and increment by 1
  //from that pattern we know that we can check till num/2
  //so that should help us construct our For Loop
    //result = 0 // this line is invalid, result is undefined no let or const
    //we will be returning multiple numbers so an array would be best as the result
  let factors = [];
  for (let i = 2; i < num ; i++){
    //Do something in the loop
    //why 100?? what if someone passes in 2000 READ line 145
    //what we want to do in this loop is check if those numbers divide num with no remainders so that we can know if they are factors or not
    if(num%i == 0){ //if this is true then its a factor
      factors.push(i);//then save it in the factors array
    }
  }
    return factors.length;
  }
  
  //console.log(getFactors(19));
  //console.log(isPrime(201)); //should return [2,4,5,10];
  //clear your console and run it trying to understand how line 155 works again/// .push is an array method, used to add elements into an array
  //20 is a factor of 20
  //so on our journey to check if a number is a prime number, we now have factors. next thing will be to check those factors if its 1 and the number
  //so this could go a couple ways
  //we will check if the length of the returned array is 2
  //then check if it contains 1 and the number
  //we could also start checking from 2 and end at <num so that 1 and num are automatically excluded, in this case we will expect the factors array to contain nothing <= lets try this, ill change the range of the loop.
  //task
  
  // Write a function that takes a string (a) and a number (n) as argument
  // Return the nth character of 'a'
  function aFunction(a, n){
    //return nth character of a
    //convert string to Array
    const stringArray = a.split("");
    console.log( stringArray ); //["a","b","c","d","e","f"];
    
  //I have Index == 2 and character == 3  =>
    //Get nth character
  
    if( stringArray[n-1] == " "){
      //if 8th element n - 1 = 7 is empty
      //Get next element
      //9th element n = 8
      console.log(stringArray[n]);
    } else {
        console.log( stringArray[n-1] );
    }
  }
  
  //[ 'c', 'o', 'n', 't', 'a', 'i', 'n', ' ', 'n', 'o', 't', 'h', 'i', 'n', 'g' ]
  
  //Return 8th character of string "automatically"
  //aFunction("contain nothing", 8); //Should return n
  
  //aFunction("nothing", 6); // n
  //aFunction("Javascript", 10); //p
  //aFunction("programmingfundamentals", 16); //a
  
  function myFunction(a){
  let paramLength = a.length;
  let halfLength = paramLength/2;
    //so now we have half the length 
    //.slice takes in the starting index and the end which is not included, Agreed ???yes
    //so if we want to use slice zero will be the start
    //for the ending index => COnsider the example 
    //[P,A,S,S,I,N,G,S]
    //[0,1,2,3,4,5,6,7] and we need PASS, the 2nd S will be index 3, right ?? so length is 8, half is 4 but we need index 4 so, our ending index for .slice will be (halfLength -1)
    //MAKES SENSE ??? why -1
  //in the above example our param has length of 8, the last index will be 7, So we need indexes 0,1,2,3, right ??So the last index we need in this case is 3, right ??? which is halfLength (4) minus 1 ???? right yes?? 
    //OK, lets do another example 
    //[W,A,S,H] 
    //[0,1,2,3]
    //length is 4, half is 2, last index we need is 1 which is halfLength - 1
    //Got it ???
    //so we see the pattern here
    //if you need half of the string start from 0 end at halfLength minus 1
    //do you agree ??yes  what if the length is 5, good question
    //lets assume for now that length will be an even number
    //OKAY ??yea
    //So based on lines 211 and 212, can you complete line 232i should
    console.log(a.substring(0,halfLength)); 
    // seems like theres a problem, So wee need 1 more index, lets remove the minus 1 yes
    //console.log(a.substring(3));
    //wyd
  }
  //console.log(myFunction("abcdefg"));
  
  // percentage of a num
  function mathOperator(a,b,c,d,e,f){
    let result = ((((a + b-c)* d) / e) ** f) ;//this too is correct
   /*let sum = a + b;
     let minus = sum - c ;
    let multi = minus * d ;
    let divide = multi / e ;
    let answer = divide ** f ;*/
   // console.log(result.toFixed(2));
  }
  //mathOperator (4,5,1,2,6,3);// it wasnt accepting my bracket to show precedence
  //4+5=9 -1 = 8 x 2 = 16 / 6 = 2.67 pow 3 = 18.9
  //4 +5 =9 -1 =8
  
  
  // No of times a occurs in b
  function countLetters(letter,str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(letter == str.charAt(i) ){    
       count++ ;
      } 
    }
   return count;
  }
  //console.log(countLetters('s', 'mattersofbusiness'));
  
  
  //Goal is to create a function that takes in a string and returns an object with the number of time each letter occurs in the string. THE OBJECT CANNOT HAVE DUPLICATE PROPERTIES
  //EXAMPLE, if you pass in "actual" you get back 
  //{ a: 2, c: 1, t: 1, u: 1, l: 1 }
  //where the property a is the letter and the value 2 is the number of times a occurs in the string "actual"
  //STEPS
  //we will initialize a variable as an empty obj that will be returned
  //we will loop through the string, grab each letter and insert as property in our object and increase the value by 1
  //so the initial count of each letter has to be zero
  //if we encounter a letter thats already a property in the object, WE WILL ONLY increase the count of the letter.
  //we will return the object with all the counts after we exit the loop
  //i think this is good enough for a start RIGHT ??yes
  
  function getCharacterCounts(stringParam){
    let countObject = {};
    for(let i = 0; i < stringParam.length; i++){
      //HERE we will get each char, insert iin the obj and increase count
      //this will give us the char at each index stringParam.charAt(i);
      let charAtIndex = stringParam.charAt(i);
      //what we essentially want to do is to check if that letter is already in the obj then increment else insert it and set as 0 then increment
      if( countObject[charAtIndex] === undefined ){ //if the letter doesnt  exists in the object initialize it as zero ,but we are the one providing the letters YEs we are
        countObject[charAtIndex] = 0;
      }
        //initialize value as zero, it should always come in here the first time it encounters a new letter
         
    countObject[charAtIndex] ++ ; //then increment
        //side note lines 290 and 294 is the same, we will fix that after testing 
      //im not sure if the above line will work because on the first time that property wouldnt exist in the object so it wont be equal to zero and if not equal to zero, does it make sense to increment it ??
      //should we try ???
      // in order for us to know if this will work we should console log the object right after line 288 so we can know if it works
    }
   // console.log(countObject);
    return countObject;
  }
  
  getCharacterCounts("akama");
  
  //now it seems to be giving us the correct count
  //lets add more letters to the param and console log outside the loop
  //seems to be working fine, lets add more
  //any thoughts ??? explain what happened at line 289 manually
  //Im checking if the object contains a property of the letter in view 
  //example in AKAMA, it picks up A first that line is like saying is 
  //countObject.a valid or is it defined i can also change it to
  // the way i had it before will return a Boolean so its like saying if
  // we can refactor the code we we're not repeating lines 
  //so itll go to line 290, for the first time for eveery letter in the string after that itll just increment the value
  //Shall we run it now??? did u see the question i asked
  //give me another task that has to do with loop so when i do it we go through it together
  //
  //write a function that takes in an array of numbers and an integer, return how many of those numbers are greater than the integer
  //for example 40 and [34,67,76,87,9,4,45,77,80]
  //should return 6 because 6 of the numbers in the array are greater than 40 ok
  var numbersArray = [34,45,66,77];
  function greaterIntegers(number,numbersArray){
    let count = 0 // initialize the count loaction
    let integerArray = []; // initialize the location for the results greater than the integer
    for(i= 0; i < numbersArray.length; i++){ // create a loop to run through each number in the array 
  if (number <= numbersArray[i]){ // check if the numbers in the array is greater than the interger
    //putting the results into the array, if the numberArray is greater than number(integer) return the array result into the integerArray
    integerArray.push(numbersArray[i]);
  count ++;  //increase count
    
  }
      
    }
  //return count;
    return integerArray;
  }
  //console.log(greaterIntegers(12,numbersArray));
  //console.log(greaterIntegers(12,[12,13,14,15,11,10]));
  //console.log(integerArray);
  function SumOfArrays (integerArray){
    //declare your result as integer 0;
      let result = 0;
    //Loop through the array with For Loop
    for( let i = 0; i < integerArray.length; i++ ){
      //add each element in the array to result
      //integerArray[i] will give you each element in the array
        result = result + integerArray[i];
    }
    //then return the result.
     return result;
    }
    
    function SumOfArraysReduce (integerArray){
      let zero = 0;
      let result = integerArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue, zero);
      return result;
    }
    
    
    //==========Good Job with this one=========================
    function kiloMeter (a) {
      let kilo = a * 1000;
      return kilo ;
    }
    //console.log(kiloMeter(78));
    
    function compareValues (a , b){
    if (a == b){
      return true;
    }
      if (a !== b){
        return false;
      }  
    }
    
    //console.log (compareValues(3,6));
    //console.log (compareValues("go","go"));
    
    
    
    // multiplication of an array
    function multiplyArray(numbers){
      let result = 1;
      let resultArray = [];
      let overTwo = false;
      
      for (let j = 0; j < numbers.length;  j++){    
        result *= numbers[j];
          
        if (result > 200 && overTwo == false){
          resultArray.push(result);
          overTwo = true;
        }
          
       if(overTwo == true){
         resultArray.push(numbers[j]);
       }
        
        if( j == numbers.length - 1 ){
          resultArray.push(result);
        }
      }
      return resultArray;
    }
    
    
    let param = [2,5,3,4,9,8,5,7,11,6];
    //console.log(multiplyArray( param ));
    //function to return consonants in a string
    function findVowel(a){
      let resultVowels = [];
      for( let i = 0; i< a.length; i++){
      if ( 
          a.charAt(i).toUpperCase() != "A" && 
          a.charAt(i).toUpperCase() != "E" &&
          a.charAt(i).toUpperCase() != "I" &&
          a.charAt(i).toUpperCase() != "O" &&
          a.charAt(i).toUpperCase() != "U" 
         )
        {
          resultVowels.push(a[i]);
        }
      }
    return resultVowels;
    }
    
    console.log(findVowel("you dey show yourself sha , OGA LECTURER"));
    //reverse a string
    function stringReverse(c){
      let reverseResult = [];
        for(let i = c.length -1; i >= 0; i--){
          reverseResult.push(c[i]);
        }
        
        return reverseResult;
      }
      console.log(stringReverse("Taiwo"));
      // or this
      function stringReverse(c){ 
        console.log(c.split("").reverse().join(""));
        return Array.from(c.split("").reverse().join(""));
      }
      console.log(stringReverse("Taiwo"));
      //So i can return as string or array, what are u doing?
      //I do a split() => ["T", "a", "i", "w", "o"]
      //I do a reverse => ["o", "w", "i", "a", "T"]
      //I join it back => owiaT
      //Reversed this is line 388 shay? what of 389 Array was not declared,.....Yes Array.from() is a method that takes a string and turns it into an Array for you 
      //the $ thing is called template literals
      //its a way to console log without concatenation
      //COncatenation is when you join things together in code like this 
      var age = 23;
      console.log("Taiwo is " + age + " years old");
      //This is concatenation
      //I can also do it this way
      console.log(`Taiwo is ${age} years old`);
      //notice it starts and ends with back ticks ``
      //if you want to insert a variable you use ${}
      function mostOccurred(str){
        let characterCountObject = {};
        for (let i = 0; i < str.length; i++){
          //Get next character
          let characterAtIndex = str[i].toLowerCase();
          
          //check if char exists in object
          if( characterCountObject[characterAtIndex] ){
              characterCountObject[characterAtIndex]++;
          }
          
          //If char doesnt exist in obj
          if( !characterCountObject[characterAtIndex] ){
            characterCountObject[characterAtIndex] = 1;
          }
        }
      
        //LOOP thru OBJECT AND FIND highest value
        //initialize the location of the vlaues we want to get from the characyerObjectCount using for in
      
      let max = 0; //initialize and set max to 0
      for (let key in characterCountObject ){ //loop through the object go get values
        if (characterCountObject[key] > max){ //if the  value  is greater than the max  0  
          max = characterCountObject[key];// put the value in max
        // we have 1341, the first value to go into max will be 1, then it test for 3  which is greater so the new value become 3, it test for 4 which is greater and becomes the new value, and 1 which isnt , hence the last number in max is 4.
        }  
      }
       return max;
       
      }
      
      console.log (mostOccurred("ayamatan"));
    }
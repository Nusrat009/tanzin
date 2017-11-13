//1

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };

    console.log("name: "+student.name+" sclass: "+student.sclass+" rollon: "+student.rollno);


//2

    var student = { 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12 };
    
        console.log(student); 

        delete student.rollno;

        console.log(student); 

//3

        var student = { 
            name : "David Rayy", 
            sclass : "VI", 
            rollno : 12 };

            var studentcount=Object.keys(student).length;

            console.log(studentcount);


//4

            var library = [ 
                {
                    author: 'Bill Gates',
                    title: 'The Road Ahead',
                    readingStatus: true
                },
                {
                    author: 'Steve Jobs',
                    title: 'Walter Isaacson',
                    readingStatus: true
                },
                {
                    author: 'Suzanne Collins',
                    title:  'Mockingjay: The Final Book of The Hunger Games', 
                    readingStatus: false
                }];

                for (i = 0; i < library.length; i++) {
                    
                     var book="book name: "+library[i].title+"\n author: "+library[i].author;
                      if (library[i].readingStatus==true){
                        console.log("already read \n"+book);
                      }
                      else{
                        console.log("still not read \n"+book);
                      }
                    
                    }

//5

var cylinder={
    radius:2.3,
    height:67.87,
    pi:3.14,
    volumn:function(){
      return cylinder.pi* cylinder.radius* cylinder. radius* cylinder. height; 
    }
  }
  
  console.log(cylinder.volumn());

//6

var number={a:3,b:-4,c:0,d:9,e:1};
var snumber= Object.keys(number).sort(function(a,b){return number[a]-number[b]});
console.log(snumber);

//7


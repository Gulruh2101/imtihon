function getAgeContent(name , data){
    if(data < 16 ){
        console.log( name + 'siz voyaga yetmagansiz -  Ushbu saxifadan foydalana olmaysiz');
    }

    else if(data >= 18 && data <= 30){
        console.log(name + ' Siz saxifadan foydalanishngiz mumkin !');
    }
    else{
        console.log('Assalom alaykum ' + name  );
    }
    
}
getAgeContent('Shoxsanam' , 22);
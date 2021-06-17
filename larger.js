var r=require('readline-sync')

num1=r.question('enter 2 numbers')
num2=r.question('')

if(num1>num2){
    console.log('Larger is :  '+num1)
}else if (num1===num2){
    console.log('same')
}else{
    console.log('Largerr :  '+num2)

}
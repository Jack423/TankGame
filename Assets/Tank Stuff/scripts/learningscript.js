//var gameOver = true;
//var rounds = 37;

//var cash = 50;
//var mustang = 500;
//var silverLicense = false;



function Update () 
{
/* example variables
var gunMagazineInt: 				int =					 10;
var gunMagazineFloat : 			float = 				5.567;
var gunMagazineString: 			String = 			"the gun magazine is in the shelf";
var gunMagazineBoolean: 			boolean =		 true;	

var gunMagazine = 23.3; 	//gunMagazine


print(gunMagazineInt);
print(gunMagazineFloat);
print(gunMagazineString);
print(gunMagazineBoolean);
print(gunMagazine);

var box;
box = "small box";

boxNumber = 23;

print (boxNumber);

print (box + boxNumber);

var gameover = false;

print ("Game Over " + gameover);

*/
/* example array
var inventory = Array( "spellBook", 23, 10.56, "ammo");

print(inventory); 

var inventoryBooks = inventory[3][2];

print(inventoryBooks);

var boxName = "boxName";
print(boxName[2]);

var xbox = "xbox";

print(xbox[2]);
*/



/* example arithmetic

var health: float = 100;
var healthPickup: float = 30;
var healthTotal;

healthTotal = healthPickup + health;
print(healthTotal);

healthTotal = health / healthPickup;
print (healthTotal);

var healthName = "UberPowerup ";
print (healthName * 3);
*/

/* example arithmetic shorthand
var weapon = 1;

weapon = weapon + 1;  //added 1 so now 2 weapons

weapon +=1;			//added 1 so now 2 weapons

weapon ++;			//added 1 so now 2 weapons

weapon = weapon/2;  //half of a weapon
weapon *=2
*/


 /*if  (gameOver ==true)
{
print ("Game Over is true. The game is finished");

}

if (!gameOver )
{
print("gameOver is true, but shorter");
}
/* ways to write if statement
int open;
if(day==weekend)
open = 12;
else
open = 9;

int open = (day == weekend) = 12 : 9;
variable = condition ?  value if true  value if false
*/

/* player selected
var playerSelected = false;

if(playerSelected == false){

playerSelected = true;
print ("player is now selected");
print (playerSelected);
}
*/

/* rounds
if(rounds == 100){
print("rounds are full ");}
if(rounds == 50){
print ("rounds are at half capacity");}
if (rounds < 25){
print ("rounds are getting low ");}
if(rounds == 0){
print ("round are empty ");}
else{
print("rounds are at " + rounds);}
*/
/* neiborhood placement

var population = 3000;
var cityOwner = true;
var createNeiborhood = true;

if (createNeiborhood==true && population >=3000 && cityOwner == true){

print("draw out grid");}
else{
print("you dont have the reguirements to place neiborhoods");
}
*/






/* mustang

if (cash >=mustang && silverLicense == true){
print("you have bought a mustang for: " + mustang);
cash = cash - mustang;
}

if (cash >=mustang && silverLicense == false){
print("you dont have the reguired license");
}
if(cash < mustang && silverLicense == true){
print("you dont have enough money");  
}
if(cash < mustang && silverLicense == false){
print("you need money and the proper license for this car");
}
*/
/* if statement in array
var car = Array("motor", "seats", "tires", "break");

if ( "motor" in car){
print ("we have found the " + car[0] + " and can inspect it");
}
var rubber = car[2];
print(rubber);
*/



  








/* switch case enumeration

var item = "ship";

switch (item)
{

case "watch":
print ("watch is the case");
break;

case "epic":
print ("epic is the case");
break;

case "ship":
print ("ship is the case");
break;

default: print ("nothings the case!");
break;
}
*/






 /* four loop statement
 for (x = 0; x < 10; x++){
 
		print("X" + x);
		for( y = 0; y < 10; y++)
		{
				print("Y" + y);
		}
		
 }
 
 for (i = 2; i <= 10; i +=2)
 {
		print(i);
 }
 
 for(i = 10; i > 0; i--)
 {
 
	print(i);
 
 }
 */
 /*indexing array four loop statement
 
var myArray= Array(1,3,5,7,9,11);

for (i =0; i <myArray.length; i++)
{
print(myArray[i]);
}


var yessir = Array (6,2,6,7,8);

for (x=0; x<yessir.length; x++){          // the 0 or x=0 stands for 6. because 
print(yessir[x]);						   //its the first one, if it was 1 it would be 2 
}
*/




/* while loop
var ammo = 40;
var playerShooting = true;

while(playerShooting){
ammo--;
print(ammo);

if(ammo<=0){
playerShooting=false;
}

}
print("ammo has run out");
*/







 /* function overload
function Detail (name:String){
print("this is a string");
}

function Detail (name:int){
print("this is a integer");
}

function Detail (name:GameObject){
print("this is a gameobject");
}
*/

/* classes
nvWater=water();
nvWater.name = 	"nvWater";
nvWater.type  = 		"h2o";
nvWater.toxic =		false;
print(nvWater.name + " is a " + nvWater.type + " type, and its toxic stats is " + nvWater.toxic);


}

//out of function
class water{

var name;
var type;
var toxic: boolean;
}
*/
/*class constructor
var ronto = monster("ronto");
print(ronto.name);


}

 class monster
{
var name;
function monster (n : String) {
name = n;
}
*/
/* classes and functions
rancor = creatures("rancor");
print (rancor.name);


}


class creatures{

var name;
var type;
var health;
function creatures (n : String ){
name = n;

}
*/













 

 
 
 




  




/* extends

var i7 = i7("i7", true);
i7.SLI(); 

}

class computer{
var CompN: String;
var superPowered : boolean;
function computer(n : String, s : boolean){
CompN = n;
superPowered = s;
}
function SLI(){		// simple text function
Debug.Log(CompN + " Has been SLI'ed ");
}
}

class i7 extends computer{
function i7 (n : String, s : boolean){
super.computer(n , s );
}

function SLI(){
super.SLI();
if(superPowered == true){
Debug.Log(CompN + "is superpowered");

}else
Debug.Log(CompN + " is not superpowered");

}
*/

		

}


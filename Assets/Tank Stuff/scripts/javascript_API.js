     //var boxSpeed = 0;
//private var timeDelay = 0;
//var delayAmount = 10;

//var target : Transform;

//var target : accessingGameObjects;


function Update () 
{
/* finding a gameobject position variable
var x = gameObject.transform.position.x;
var posX = this.transform.position.x;
var positionX = transform.position.x;

var z = transform.position.z;

print(x);
print(posX);
print(positionX);
print(z);


//umoving(translating) a box along the x axis
//transform.Translate(boxSpeed*Time.deltaTime,0,0);
*/
/* assign material
var colorRed: Color = Color.red;

renderer.material.color = colorRed;
//--------------------------------------------
var color: Color = Color(0.7,0.3,0.9);

renderer.material.color = color;
*/
/* Common Operations
transform.Translate(0.2,0,0,Space.World);
transform.Rotate(2,0,0);

print(Time.time);
*/









/*time.time (d key)

private var timeDelay = 0;
var delayAmount = 10;

if (Input.GetKey ("d")&& Time.time> timeDelay)
{
timeDelay = Time.time + delayAmount;
print("Delay complete, printing again");

}
*/



/*//timeScale

if(Input.GetKeyDown ("s") )
{

if ( Time.timeScale == 1.0)
{
			Time.timeScale = 0.2;
}
else
{
Time.timeScale = 1.0;
}

}
*/










/* GUI
transform.Translate(boxSpeed*Time.deltaTime,0,0);

if(Input.GetKeyDown ("g")) 
{

if (Time.timeScale == 1.0){

Time.timeScale = 0.2;
}
else
{
Time.timeScale = 1.0;
}
}

}

function OnGUI ()
{

GUI.Box (Rect ( 10,10,150,100), "Real Time is: " + Time.realtimeSinceStartup.ToString ("f0" ) );
// ( position on screen horizonal, position on screen verticle, dimensions horizonal,dimensions verticle)
*/















 /*//assessing components (GetComponent)

//GetComponent(boss).theboss();

var boss = GetComponent(boss);

boss.theboss();  //prints welcome to the bosses lair

print(boss.boxSpeed);

*/



/* accessing gameobjects through inspector
//target.Translate (.01,0,0);  //access through transform component
//target.printOther("this is T");
*/















/* //accessing gameobjects through Hierarchy

//--accessing through hierarchy the child object

//transform.Find("child_1").Translate(0,0.01,0);

//-- accessing through hierarchy the child objects variables on
//-- variable access in hierarchy

//transform.Find("child_1").GetComponent(accessingGameObjects).otherGameObject = 25;
//print(transform.Find("child_1").GetComponent(accessingGameObjects).otherGameObject);

//--function access hierarchy
//transform.Find("child_1").GetComponent(accessingGameObjects).printOther("this is printOther");

//--apply a rigidbody to child_2
//transform.Find("child_2").GetComponent(Rigidbody).AddForce(0,1,0);

//--looping over all child objects(add addition childs in hierarchy

for (var children : Transform in transform)
{

	children.Translate(0,.01,0);

}
*/







/* accessing gameobjects through name or tag

// 3 - By Name or Tag   
// - find single (first in hierarchy) object "named" -> Sphere

//var sphere = GameObject.Find("Sphere");
//sphere.transform.Translate(0,.01,0);

// - find single (first in hierarchy) object tagged "Player"
//var sphereTag = GameObject.FindWithTag("Player");
//sphereTag.transform.Translate(.01,0,0);

//-- find multiple objects tagged with "player", then Loop through it
var spheres = GameObject.FindGameObjectsWithTag("Player");
for(var i = 0; i < spheres.length; i++)
{
	print (spheres[i].name);
	print (spheres.length);
	spheres[i].transform.Translate(0,.01,0);
}

//-- access function through object "name" -> Sphere
//var getSphere = GameObject.Find("Sphere");
//getSphere.GetComponent(accessingGameObjects).printOther("this is the sphere using name");

//--access function through objects tag -> 'Player'
//var getSphere2 = GameObject.FindWithTag("Player");
//getSphere2.GetComponent(accessingGameObjects).printOther("this is using the player tag");

//--access 'special' type - camera

//Camera.main.orthographic = true;
*/





/*//4 - accessing gameobjects  passed as a parameter (functions)
//-- on a trigger event you can send messages to colliding objects


}



function OnTriggerStay(otherObject : Collider) {

if (otherObject.rigidbody)
{

print("you have collided with me");
otherObject.rigidbody.AddForce(0,60,0);

}

}

function OnTriggerStay(otherObject : Collider)
{

	if (otherObject.GetComponent(accessingGameObjects))
	{
	otherObject.GetComponent(accessingGameObjects).stopRendering();
	}


*/



























/* accessing gameObjects through type(script)
var scriptFinder:accessingGameObjects = FindObjectOfType(accessingGameObjects)
scriptFinder.printOther("I found the script accessingGameObjects");
*/
/* //Vector3
//transform.position =
//transform.position = Vector3.Lerp(start.position, end.position, mover);
//transform.position = Vector3.Lerp(transform.position, start position, Time.deltaTime);

//--Slerp Spherically interpolate (curve)
var center = (start.position + end.position) = 0.5
center -= Vector3(0,height,0);

var riseRelCenter = start.position - center;
var setRelCenter = end.position - center;

transform.position = Vector3.Slerp(riseRelCenter, setRelCenter, Time.time);
transform.position += center;
*/
/*coroutine yield
waitFor();
print ( "i'm the second one after start");
if (printToggle == true)
{
	print ( "yield statement 5 second wait is completed")
}
}

function OnCollisionEnter()
{ /*Instantiate
	Destroy(gameObject);
	
	var clonedExplosion : Transform;
	clonedExplosion = Instantiate(explosion, transform.position, transform.rotation);
*/
}


function waitFor ()
{ /*//Yeild 2
	print ("We are starting to wait");
	yield WaitForSeconds ( 5,0);
	print ( "It's been 5 seconds")
	printToggle = true;
	}

*/
}